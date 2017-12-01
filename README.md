# grunt-akp-devnotes

> grunt plugin to 'Add Kode Partials' by picking js, html, readme and put them together to create devnotes

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-akp-devnotes --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-template');
grunt.loadNpmTasks('grunt-akp-devnotes');
```

## The "akp_devnotes" task

### Overview
In your project's Gruntfile, add a section named `akp_devnotes` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  akp_devnotes: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```
### Package.json

```js
{
  "name": "my-akp-devnotes",
  "version": "0.0.0",
  "dependencies": {},
  "devDependencies": {
    "grunt": "~0.4.2",
    "grunt-akp-devnotes": "^0.1.1",
    "grunt-template": "^0.2.3"
  },
  "engines": {
    "node": ">=0.8.0"
  }
}
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
    grunt.initConfig({
      akp_devnotes: {
          options: {
            src: 'src/',
            dest: 'dist/',
            excludeComponents: ['devNotes', 'message', 'position', 'transition', 'utilities'],
            partialsTemplate:'app/devnotes-template.html',
            catoStatusJson: 'app/catoStatus.json',
          },
          files: {
            'dest/default_options': ['src/srcfile', 'src/123'],
          }
        },
      });
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
    grunt.initConfig({
      akp_devnotes: {
          options: {
            dest: 'destination/paterns-par',
            excludeComponents: ['devNotes', 'message', 'position', 'transition', 'utilities'],
            partialsTemplate:'app/devnotes-template.html',
            catoStatusJson: 'app/catoStatus.json',
          },
          files: {
            'dest/default_options': ['src/srcfile', 'src/123'],
          }
        },
      });
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
