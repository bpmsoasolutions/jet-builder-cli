import fs from 'fs'
import path from 'path'
import resolve from 'resolve'

import recreateDir from './utils/recreateDir'
import copyByFound from './utils/copyByFound'
import copyFolders from './utils/copyFolders'
import copy from './utils/copy'
import clean from './utils/clean'

import assets from './common/assets'
import components from './common/components'
import htmlReplace from './common/htmlReplace'
import jet from './common/jet'
import rjsOptimizer from './common/rjsOptimizer'
import serve from './common/serve'

import add from './cordova/add'
import compile from './cordova/compile'
import plugins from './cordova/plugins'
import prepare from './cordova/prepare'
import ripple from './cordova/ripple'
import buildC from './cordova/build'
import remove from './cordova/remove'
import runC from './cordova/run'
import serveC from './cordova/serve'
import cleanC from './cordova/clean'

import build from './scripts/build'
import buildCordova from './scripts/buildCordova'
import dev from './scripts/dev'
import devCordova from './scripts/devCordova'
import prodCordova from './scripts/prodCordova'
import startCordova from './scripts/startCordova'
import webCordova from './scripts/webCordova'
import releaseCordova from './scripts/releaseCordova'

import {textReplace} from './utils/_utils'

import run from './common/run'

export default run

export const utils = {
    textReplace
}

export const scripts = {
    build,
    buildCordova,
    dev,
    devCordova,
    prodCordova,
    startCordova,
    webCordova
}

export const cordova = {
    add,
    compile,
    plugins,
    prepare,
    ripple,
    remove,
    run: runC,
    serve: serveC,
    clean: cleanC,
    build: buildC
}

export const pwd = path.resolve('node_modules', 'jet-buildtool')

let binPwd = null

if (fs.existsSync(path.resolve(pwd, 'node_modules/.bin', 'cordova'))) {
    binPwd = path.resolve(pwd, 'node_modules/.bin')
} else if(fs.existsSync(path.resolve(pwd, '../.bin', 'cordova'))) {
    binPwd = path.resolve(pwd, '../.bin')
} else {
    throw new Error('Any executable find, try "yarn" or "npm install"')
}

export const cordovaPwd = path.resolve(binPwd, 'cordova')
export const ripplePwd = path.resolve(binPwd, 'ripple')
export const ncpPwd = path.resolve(binPwd, 'ncp')
export const babelPwd = path.resolve(binPwd, 'babel')
export const uglifyPwd = path.resolve(binPwd, 'uglifycss')
export const sassPwd = path.resolve(binPwd, 'node-sass')

export {
    recreateDir,
    copyByFound,
    copyFolders,
    copy,
    clean,
    assets,
    components,
    htmlReplace,
    jet,
    rjsOptimizer,
    serve
}