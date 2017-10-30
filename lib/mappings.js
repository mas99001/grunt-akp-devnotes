'use strict';

exports.many2one = function(grunt, options){
    /*SOCIAL*/
    var name = "social";
    var module1 = {
        docs: {
            js: grunt.file.expand(options.src + "socialFollowUs/docs/demo.js")
            .map(grunt.file.read).join("\n"),
            html: grunt.file.expand(options.src + "socialFollowUs/docs/demo.html")
            .map(grunt.file.read).join("\n"),
            devn: grunt.file.expand(options.src + "socialFollowUs/docs/readme.md")
            .map(grunt.file.read).join("\n"),
            history: grunt.file.expand(options.src + "socialFollowUs/docs/history.md")
            .map(grunt.file.read).join("\n")							
        } 
    };
    var module2 = {
        docs: {
            js: grunt.file.expand(options.src + "socialShareThis/docs/demo.js")
            .map(grunt.file.read).join("\n"),
            html: grunt.file.expand(options.src + "socialShareThis/docs/demo.html")
            .map(grunt.file.read).join("\n"),
            devn: grunt.file.expand(options.src + "socialShareThis/docs/readme.md")
            .map(grunt.file.read).join("\n"),
            history: grunt.file.expand(options.src + "socialShareThis/docs/history.md")
            .map(grunt.file.read).join("\n")							
        } 
    };
    var templateData = {
        'name': name,
        'html': module1.docs.html + module2.docs.html,
        'devn': module1.docs.devn + module2.docs.devn,
        'history':module1.docs.history,
        'js': module1.docs.js + module2.docs.js
    };
    var destsrc = options.dest + 'patterns-many2one-' + name + '.html';
    var templateFiles = {};
    templateFiles[destsrc] = options.partialsTemplate;
    grunt.config('template.' + name + '.options', {
        'data': templateData
    });
    grunt.config('template.' + name + '.files', templateFiles);
    /*TEXT-INPUTS*/
    name = "text-inputs";
    module1 = {
        docs: {
            js: grunt.file.expand(options.src + "textArea/docs/demo.js")
            .map(grunt.file.read).join("\n"),
            html: grunt.file.expand(options.src + "textArea/docs/demo.html")
            .map(grunt.file.read).join("\n"),
            devn: grunt.file.expand(options.src + "textArea/docs/readme.md")
            .map(grunt.file.read).join("\n"),
            history: grunt.file.expand(options.src + "textArea/docs/history.md")
            .map(grunt.file.read).join("\n")							
        } 
    };
    module2 = {
        docs: {
            js: grunt.file.expand(options.src + "textFields/docs/demo.js")
            .map(grunt.file.read).join("\n"),
            html: grunt.file.expand(options.src + "textFields/docs/demo.html")
            .map(grunt.file.read).join("\n"),
            devn: grunt.file.expand(options.src + "textFields/docs/readme.md")
            .map(grunt.file.read).join("\n"),
            history: grunt.file.expand(options.src + "textFields/docs/history.md")
            .map(grunt.file.read).join("\n")							
        } 
    };
    templateData = {
        'name': name,
        'html': module1.docs.html + module2.docs.html,
        'devn': module1.docs.devn + module2.docs.devn,
        'history':module1.docs.history,
        'js': module1.docs.js + module2.docs.js
    };
    destsrc = options.dest + 'patterns-many2one-' + name + '.html';
    templateFiles = {};
    templateFiles[destsrc] = options.partialsTemplate;
    grunt.config('template.' + name + '.options', {
        'data': templateData
    });
    grunt.config('template.' + name + '.files', templateFiles);    
    /*FILTERS*/
    name = "s-filters";
    module1 = {
        docs: {
            js: grunt.file.expand(options.src + "filters/docs/demo.js")
            .map(grunt.file.read).join("\n"),
            html: grunt.file.expand(options.src + "filters/docs/demo.html")
            .map(grunt.file.read).join("\n"),
            devn: grunt.file.expand(options.src + "filters/docs/readme.md")
            .map(grunt.file.read).join("\n"),
            history: grunt.file.expand(options.src + "filters/docs/history.md")
            .map(grunt.file.read).join("\n")							
        } 
    };
    module2 = {
        docs: {
            js: grunt.file.expand(options.src + "filtersComplex/docs/demo.js")
            .map(grunt.file.read).join("\n"),
            html: grunt.file.expand(options.src + "filtersComplex/docs/demo.html")
            .map(grunt.file.read).join("\n"),
            devn: grunt.file.expand(options.src + "filtersComplex/docs/readme.md")
            .map(grunt.file.read).join("\n"),
            history: grunt.file.expand(options.src + "filtersComplex/docs/history.md")
            .map(grunt.file.read).join("\n")							
        } 
    };
    templateData = {
        'name': name,
        'html': module1.docs.html + module2.docs.html,
        'devn': module1.docs.devn + module2.docs.devn,
        'history':module1.docs.history,
        'js': module1.docs.js + module2.docs.js
    };
    destsrc = options.dest + 'patterns-many2one-' + name + '.html';
    templateFiles = {};
    templateFiles[destsrc] = options.partialsTemplate;
    grunt.config('template.' + name + '.options', {
        'data': templateData
    });
    grunt.config('template.' + name + '.files', templateFiles);    
    /*HEADINGS-AND-COPY*/
    name = "headings-and-copy";
    module1 = {
        docs: {
            js: grunt.file.expand(options.src + "headings/docs/demo.js")
            .map(grunt.file.read).join("\n"),
            html: grunt.file.expand(options.src + "headings/docs/demo.html")
            .map(grunt.file.read).join("\n"),
            devn: grunt.file.expand(options.src + "headings/docs/readme.md")
            .map(grunt.file.read).join("\n"),
            history: grunt.file.expand(options.src + "headings/docs/history.md")
            .map(grunt.file.read).join("\n")							
        } 
    };
    module2 = {
        docs: {
            js: grunt.file.expand(options.src + "bodyCopy/docs/demo.js")
            .map(grunt.file.read).join("\n"),
            html: grunt.file.expand(options.src + "bodyCopy/docs/demo.html")
            .map(grunt.file.read).join("\n"),
            devn: grunt.file.expand(options.src + "bodyCopy/docs/readme.md")
            .map(grunt.file.read).join("\n"),
            history: grunt.file.expand(options.src + "bodyCopy/docs/history.md")
            .map(grunt.file.read).join("\n")							
        } 
    };
    var module3 = {
        docs: {
            js: grunt.file.expand(options.src + "legalCopy/docs/demo.js")
            .map(grunt.file.read).join("\n"),
            html: grunt.file.expand(options.src + "legalCopy/docs/demo.html")
            .map(grunt.file.read).join("\n"),
            devn: grunt.file.expand(options.src + "legalCopy/docs/readme.md")
            .map(grunt.file.read).join("\n"),
            history: grunt.file.expand(options.src + "legalCopy/docs/history.md")
            .map(grunt.file.read).join("\n")							
        } 
    };
    var module4 = {
        docs: {
            js: grunt.file.expand(options.src + "pricing/docs/demo.js")
            .map(grunt.file.read).join("\n"),
            html: grunt.file.expand(options.src + "pricing/docs/demo.html")
            .map(grunt.file.read).join("\n"),
            devn: grunt.file.expand(options.src + "pricing/docs/readme.md")
            .map(grunt.file.read).join("\n"),
            history: grunt.file.expand(options.src + "pricing/docs/history.md")
            .map(grunt.file.read).join("\n")							
        } 
    };
    templateData = {
        'name': name,
        'html': module1.docs.html + module2.docs.html + module3.docs.html + module4.docs.html,
        'devn': module1.docs.devn + module2.docs.devn + module3.docs.devn + module4.docs.devn,
        'history':module1.docs.history,
        'js': module1.docs.js + module2.docs.js + module3.docs.js + module4.docs.js
    };
    destsrc = options.dest + 'patterns-many2one-' + name + '.html';
    templateFiles = {};
    templateFiles[destsrc] = options.partialsTemplate;
    grunt.config('template.' + name + '.options', {
        'data': templateData
    });
    grunt.config('template.' + name + '.files', templateFiles);    
};
/*
 * ONE 2 MANY
 */
exports.one2many = function(grunt, options){
    /*COMPLEX-TABLE*/
    var name = "complex-table";
    var module1 = {
        docs: {
            js: grunt.file.expand(options.src + "tables/docs/demo.js")
            .map(grunt.file.read).join("\n"),
            html: grunt.file.expand(options.one2manysrc + "tables/1_complex-table.html")
            .map(grunt.file.read).join("\n"),
            devn: grunt.file.expand(options.src + "tables/docs/readme.md")
            .map(grunt.file.read).join("\n"),
            history: grunt.file.expand(options.src + "tables/docs/history.md")
            .map(grunt.file.read).join("\n")							
        } 
    };
    var templateData = {
        'name': name,
        'html': module1.docs.html,
        'devn': module1.docs.devn,
        'history':module1.docs.history,
        'js': module1.docs.js
    };
    var destsrc = options.dest + 'patterns-one2many-' + name + '.html';
    var templateFiles = {};
    templateFiles[destsrc] = options.partialsTemplate;
    grunt.config('template.' + name + '.options', {
        'data': templateData
    });
    grunt.config('template.' + name + '.files', templateFiles); 
    /*SIMPLE-TABLE*/
    var name = "simple-table";
    var module1 = {
        docs: {
            js: grunt.file.expand(options.src + "tables/docs/demo.js")
            .map(grunt.file.read).join("\n"),
            html: grunt.file.expand(options.one2manysrc + "tables/2_default-table.html")
            .map(grunt.file.read).join("\n"),
            devn: grunt.file.expand(options.src + "tables/docs/readme.md")
            .map(grunt.file.read).join("\n"),
            history: grunt.file.expand(options.src + "tables/docs/history.md")
            .map(grunt.file.read).join("\n")							
        } 
    };
    var templateData = {
        'name': name,
        'html': module1.docs.html,
        'devn': module1.docs.devn,
        'history':module1.docs.history,
        'js': module1.docs.js
    };
    var destsrc = options.dest + 'patterns-one2many-' + name + '.html';
    var templateFiles = {};
    templateFiles[destsrc] = options.partialsTemplate;
    grunt.config('template.' + name + '.options', {
        'data': templateData
    });
    grunt.config('template.' + name + '.files', templateFiles); 
    /*SUMMARY-TABLE*/
    var name = "summary-table";
    var module1 = {
        docs: {
            js: grunt.file.expand(options.src + "tables/docs/demo.js")
            .map(grunt.file.read).join("\n"),
            html: grunt.file.expand(options.one2manysrc + "tables/4_summary-table-default.html")
            .map(grunt.file.read).join("\n"),
            devn: grunt.file.expand(options.src + "tables/docs/readme.md")
            .map(grunt.file.read).join("\n"),
            history: grunt.file.expand(options.src + "tables/docs/history.md")
            .map(grunt.file.read).join("\n")							
        } 
    };
    var templateData = {
        'name': name,
        'html': module1.docs.html,
        'devn': module1.docs.devn,
        'history':module1.docs.history,
        'js': module1.docs.js
    };
    var destsrc = options.dest + 'patterns-one2many-' + name + '.html';
    var templateFiles = {};
    templateFiles[destsrc] = options.partialsTemplate;
    grunt.config('template.' + name + '.options', {
        'data': templateData
    });
    grunt.config('template.' + name + '.files', templateFiles);
    /*TABS*/
    var name = "s-tabs";
    var module1 = {
        docs: {
            js: grunt.file.expand(options.src + "expandCollapse/docs/demo.js")
            .map(grunt.file.read).join("\n"),
            html1: grunt.file.expand(options.one2manysrc + "expand-collapse/2_accordion-to-tabs-min.html")
            .map(grunt.file.read).join("\n"),
            html2: grunt.file.expand(options.one2manysrc + "expand-collapse/3_accordion-to-tabs-max.html")
            .map(grunt.file.read).join("\n"),            
            devn: grunt.file.expand(options.src + "expandCollapse/docs/readme.md")
            .map(grunt.file.read).join("\n"),
            history: grunt.file.expand(options.src + "expandCollapse/docs/history.md")
            .map(grunt.file.read).join("\n")							
        } 
    };
    var templateData = {
        'name': name,
        'html': module1.docs.html1 + module1.docs.html2,
        'devn': module1.docs.devn,
        'history':module1.docs.history,
        'js': module1.docs.js
    };
    var destsrc = options.dest + 'patterns-one2many-' + name + '.html';
    var templateFiles = {};
    templateFiles[destsrc] = options.partialsTemplate;
    grunt.config('template.' + name + '.options', {
        'data': templateData
    });
    grunt.config('template.' + name + '.files', templateFiles);
    /*EXPAND-COLLAPSE*/
    var name = "s-expand-collapse";
    var module1 = {
        docs: {
            js: grunt.file.expand(options.src + "expandCollapse/docs/demo.js")
            .map(grunt.file.read).join("\n"),
            html1: grunt.file.expand(options.one2manysrc + "expand-collapse/7_tiny-accordion-expand-all.html")
            .map(grunt.file.read).join("\n"),
            html2: grunt.file.expand(options.one2manysrc + "expand-collapse/10_tiny-accordion-dark-background.html")
            .map(grunt.file.read).join("\n"),            
            html3: grunt.file.expand(options.one2manysrc + "expand-collapse/11_tiny-accordion-gray-background.html")
            .map(grunt.file.read).join("\n"),            
            devn: grunt.file.expand(options.src + "expandCollapse/docs/readme.md")
            .map(grunt.file.read).join("\n"),
            history: grunt.file.expand(options.src + "expandCollapse/docs/history.md")
            .map(grunt.file.read).join("\n")							
        } 
    };
    var templateData = {
        'name': name,
        'html': module1.docs.html1 + module1.docs.html2 + module1.docs.html3,
        'devn': module1.docs.devn,
        'history':module1.docs.history,
        'js': module1.docs.js
    };
    var destsrc = options.dest + 'patterns-one2many-' + name + '.html';
    var templateFiles = {};
    templateFiles[destsrc] = options.partialsTemplate;
    grunt.config('template.' + name + '.options', {
        'data': templateData
    });
    grunt.config('template.' + name + '.files', templateFiles);
}