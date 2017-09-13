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
        var options = this.options({
            src: 'src/',
            dest: 'dist/',
            excludeComponents: ['devNotes', 'message', 'position', 'transition', 'utilities'],
            partialsTemplate:'devnotes-template.html'
        });

        console.log('\x1b[45m%s\x1b[0m', 'src:= ' + options.src);   
        console.log('\x1b[45m%s\x1b[0m', 'dest:= ' + options.dest);
        console.log('\x1b[45m%s\x1b[0m', 'excludeComponents:= ' + options.excludeComponents);   
        console.log('\x1b[45m%s\x1b[0m', 'partialsTemplate:= ' + options.partialsTemplate);   
        var lastChar = options.dest.substr(-1);
        if (lastChar != '/') {
            options.dest = options.dest + '/';
        }
        lastChar = options.src.substr(-1);
        if (lastChar != '/') {
            options.src  = options.src + '/';
        }
        console.log('\x1b[45m%s\x1b[0m', 'src:= ' + options.src);
        console.log('\x1b[45m%s\x1b[0m', 'dest:= ' + options.dest);
                
        var isModuleProcessed = {};
        
        function _contains(array, searchString) {
            return (array.indexOf(searchString) > -1);
        }

        function processModule(name) {
            if (isModuleProcessed[name]) { 
              return;
            }
            isModuleProcessed[name] = true;

            var module = {
                name: name,
                displayName: name,
                docs: {
                    js: grunt.file.expand(options.src + name + "/docs/demo.js")
                    .map(grunt.file.read).join("\n"),
                    html: grunt.file.expand(options.src + name + "/docs/demo.html")
                    .map(grunt.file.read).join("\n"),
                    devn: grunt.file.expand(options.src + name + "/docs/readme.md")
                    .map(grunt.file.read).join("\n"),
                    history: grunt.file.expand(options.src + name + "/docs/history.md")
                    .map(grunt.file.read).join("\n")							
                } 
            };
            grunt.config('modules', grunt.config('modules').concat(module));
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

            templateFiles[destsrc] = options.partialsTemplate;
            grunt.config('template.' + name + '.options', {
                'data': templateData
            });
            grunt.config('template.' + name + '.files', templateFiles);
        }

        function createPartials() {
            console.log('\x1b[34m%s\x1b[0m', "Begining createPartials()");
            var _ = grunt.util._;
            grunt.config('modules', []);
            grunt.config('template', {});
            grunt.file.expand({
                filter: 'isDirectory',
                cwd: '.'
            },
            options.src + '*').forEach(function (dir) { //AK0192
                if (!_contains(options.excludeComponents, dir.split('/')[1])) {
                    processModule(dir.split('/')[1]);
                }
            });
            grunt.task.run(['template']);
            console.log('\x1b[34m%s\x1b[0m', "Ending createPartials()");
        }

        createPartials();
    });
};
