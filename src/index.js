import path from 'path'
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
import runC from './cordova/run'
import serveC from './cordova/serve'

import run from './common/run'

const pwd = path.resolve(__dirname, '../')
const cordova = {
    add,
    clean,
    compile,
    plugins,
    prepare,
    ripple,
    run: runC,
    serve: serveC
}

export  {
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
    serve,
    cordova,
    pwd
}

export default run
