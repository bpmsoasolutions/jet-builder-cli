# JB - jet-buildtool

CLI tool and helpers to build oracle jet apps with superpowers

## Getting Started

### Installation

```sh
npm install @bpmsoasolutions/jet-buildtool --save
```

**You’ll need to have Node >= 6 and npm >= 3.** You can use nvm to easily switch Node versions between different projects.

**This tool doesn’t assume a Node backend.** The Node installation is only required for the build tools that rely on it locally, such as RJS and Babel.

### Buildtool structure

```
jet-buildtool
├── README.md
├── package.json
├── bin
│   └── jb
├── lib (Transpiled version!)
└── src
    ├── cli.babel.js
    ├── cli.js
    ├── index.js
    ├── config
    │   ├── babel.js
    │   └── rjs.js
    ├── common
    │   ├── assets.js
    │   ├── components.js
    │   ├── htmlReplace.js
    │   ├── jet.js
    │   ├── rjsOptimizer.js
    │   ├── run.js
    │   └── serve.js
    ├── cordova
    │   ├── add.js
    │   ├── build.js
    │   ├── clean.js
    │   ├── compile.js
    │   ├── plugins.js
    │   ├── prepare.js
    │   ├── ripple.js
    │   ├── run.js
    │   └── serve.js
    ├── scripts
    │   ├── build.js
    │   ├── buildCordova.js
    │   ├── dev.js
    │   ├── devCordova.js
    │   ├── runCordova.js
    │   ├── scss.js
    │   └── startCordova.js
    └── utils
        ├── _utils.js
        ├── clean.js
        ├── copy.js
        ├── copyByFound.js
        ├── copyFolders.js
        └── recreateDir.js
```

If we look the src folder, we have the index that export all this scripts as async functions, the folder scripts contains all tasks that are composed by the simple tasks. Then we export default the run task that are the main, and the others are simple exports.

## Exported Scripts

#### Cordova

- run: Run cordova run with the args passed


- serve: Run cordova serve
- add: Run cordova remove and cordova add over  platforms you pass
- compile: Run cordova compile with the args passed
- plugins: Read the feth.json and install all plugins inside
- prepare: Run cordova prepare
- ripple: Run the web mobile emulator ripple
- build: Run cordova build with the args passed
- clean: cleans the app folder to have a cordova project to restart
- remove: remove completely the app folder, ***only if you don't need cordova***

#### Common

- assets: transpile scss to css and with the arg —bower-modules we provide an example if you have fontAwesome or any style bower module
- components: execute babel over the project and output to the folder you specify
- htmlReplace: find certains tags on the html and substitute with the generated scripts, in this case you can use only one index on all proyects
- jet: this task prepare and copy all jet files and folders, you can specify if you use the cordova (mobile)
- rjsoptimizer: runs tha native requires optimizer to make a build
- run: main task, run the task you want and pass arguments to that task
- serve: Plain nodejs server with es6 and scss suppor

#### Config

This folder contains the babel and requires optimizer config

#### Utils

- clean: delete folders you pass
- copy: copy single files to destination
- copyByFound: copy files by a regex, with the ability to ignore files and override paths
- copyFolders: copy folders asynchronously
- recreateDir: delete and create folder
- utils: right now only the text replace used in htmlReplace task

## Build Tasks

- build: build the web project minified
- `buildCordova [production?] [platforms...]`: build the project minified, in the platform and the environment you specify, must exists the build.json config with the platforms you want to compile
- dev: prepare all web project without mimification, you can pass port as parameter like `jb run dev --port=2001`
- devCordova: prepare all cordova build without minification
- `runCordova a [production?] [platforms...]`: ejecute devCordova, build cordova and run cordova, in the platfdorm you specify and for dev and prod envs
- startCordova: clean cordova project and recreate, coping jet files add platforms, plugins and prepare

## Contributing

We'd love to have your helping hand on `jet-buildtool`

## Acknowledgements

Thanks to the react community to give us the idea to build this.
