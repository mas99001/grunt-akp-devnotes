/*
* grunt-akp-devnotes
* https://github.com/mas99001/grunt-akp-devnotes
*
* Copyright (c) 2017 Aditya Kumar
* Licensed under the MIT license.
*/

'use strict';
module.exports = function(grunt) {
    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks
    grunt.registerMultiTask('akp_devnotes', 'picks js, html, readme and put them together to create devnotes', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var pkg = grunt.file.readJSON('package.json');
        var foundModules = {};

        var options = this.options({
            args: [],
            dest: 'dist',
            allowedComponents: [],
            libraryName: '',
            concatDest: '',
            concatTaskName: '',
            nameofpartialfile:''
        });
        function _contains(array, searchString) {
            return (array.indexOf(searchString) > -1);
        }
        function findModule(name) {
            if (foundModules[name]) { 
              return;
            }
            foundModules[name] = true;
            function breakup(text, separator) {
                return text.replace(/[A-Z]/g, function (match) {
                  return separator + match;
                });
            }
            function ucwords(text) {
                return text.replace(/^([a-z])|\s+([a-z])/g, function ($1) {
                  return $1.toUpperCase();
                });
            }
            function enquote(str) {
              return '"' + str + '"';
            }
            var module = {
                name: name,
                moduleName: enquote('ddh.att.' + name),
                //displayName: ucwords(breakup(name, ' ')),
                displayName: name,
                srcFiles: grunt.file.expand("src/" + name + "/*.js"),
                ctrlFiles: grunt.file.expand("src/" + name + "/docs/demo.js"),
                dependencies: dependenciesForModule(name),
                docs: {
                    js: grunt.file.expand("src/" + name + "/docs/demo.js")
                    .map(grunt.file.read).join("\n"),
                    html: grunt.file.expand("src/" + name + "/docs/demo.html")
                    .map(grunt.file.read).join("\n"),
                    devn: grunt.file.expand("src/" + name + "/docs/readme.md")
                    .map(grunt.file.read).join("\n"),
                    history: grunt.file.expand("src/" + name + "/docs/history.md")
                    .map(grunt.file.read).join("\n")							
                } 
            };
            module.dependencies.forEach(findModule);
            grunt.config('modules', grunt.config('modules').concat(module));
            var exclusion = ['devNotes', 'message', 'position', 'transition', 'utilities'];

            if (exclusion.indexOf(name) == -1) {
                var templateData = {
                    'name': name,
                    'html': module.docs.html,
                    'devn': module.docs.devn,
                    'history':module.docs.history,
                    'js': module.docs.js
                };
                name = name.replace(/([A-Z])/g, '-$1').toLowerCase();
                var destsrc = options.dest + '/' + 'patterns-' + name + '.html';
                var templateFiles = {};

                if(options.nameofpartialfile === undefined || options.nameofpartialfile === "" || options.nameofpartialfile === null){
                    templateFiles[destsrc] = 'app/partials.html';
                }
                else{
                    templateFiles[destsrc] = options.nameofpartialfile;
                }
                grunt.config('template.' + name + '.options', {
                    'data': templateData
                });
                grunt.config('template.' + name + '.files', templateFiles);
            }
        }
        function dependenciesForModule(name) {
            var deps = [];
            grunt.file.expand('src/' + name + '/*.js')
                .map(grunt.file.read)
                .forEach(function (contents) {
                    //Strategy: find where module is declared,
                    //and from there get everything inside the [] and split them by comma
                    var moduleDeclIndex = contents.indexOf('angular.module(');
                    var depArrayStart = contents.indexOf('[', moduleDeclIndex);
                    var depArrayEnd = contents.indexOf(']', depArrayStart);
                    var dependencies = contents.substring(depArrayStart + 1, depArrayEnd);
                    dependencies.split(',').forEach(function (dep) {
                        if (dep.indexOf('ddh.att.') > -1) {
                            var depName = dep.trim().replace('ddh.att.', '').replace(/['"]/g, '');
                            if (deps.indexOf(depName) < 0) {
                                deps.push(depName);
                                //Get dependencies for this new dependency
                                deps = deps.concat(dependenciesForModule(depName));
                            }
                        }
                    });
                });
            return deps;
        }

        function createPartials() {
            var _ = grunt.util._;
            grunt.config('modules', []);
            grunt.config('template', {});
            foundModules = {};

            //If arguments define what modules to build, build those. Else, everything
            if ((options.args) && (options.args.length)) {
                options.args.forEach(findModule);
            } 
            else {
                grunt.file.expand({
                    filter: 'isDirectory',
                    cwd: '.'
                },
                'src/*').forEach(function (dir) {
                    if (_contains(options.allowedComponents, dir.split('/')[1])) {
                        findModule(dir.split('/')[1]);
                    }
                });
            }
            var modules = grunt.config('modules');
            var srcFiles = _.pluck(modules, 'srcFiles');
            var controllers = _.pluck(modules, 'ctrlFiles');

            var concatTaskName = options.concatTaskName;
            var concatDest = options.concatDest;
            if (options.libraryName) {
                grunt.config('concat.dist.src', grunt.config('concat.dist.src').concat(srcFiles));
                grunt.config('concat.dist.dest', options.libraryName);

                if (concatTaskName && concatDest) {
                grunt.config('concat.' + concatTaskName + '.src', grunt.config('concat.' + concatTaskName + '.src').concat(controllers));
                grunt.config('concat.' + concatTaskName + '.dest', concatDest);
                }
                grunt.task.run(['template']);
            } 
            else {
                if (concatTaskName && concatDest) {
                    grunt.config('concat.' + concatTaskName + '.src', grunt.config('concat.' + concatTaskName + '.src').concat(srcFiles));
                    grunt.config('concat.' + concatTaskName + '.dest', concatDest);
                }
            }
        }
        createPartials();
    });
};