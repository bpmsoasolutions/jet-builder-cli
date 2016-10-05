import shell from 'shelljs'
import run, {recreateDir,copyFolders,clean,jet,rjsOptimizer,components,htmlReplace, assets, cordova} from '../index'

// $ devCordova

async function devCordova(args) {
    await run(recreateDir, 'temp app/www')
    await run(jet, '--cordova')
    await run(assets, 'temp')
    await run(components, 'temp')
    await run(htmlReplace, 'temp --cordova')
    await run(copyFolders, 'src/bower_modules temp/bower_modules')
    await run(copyFolders, 'temp app/www')
    await run(clean, 'temp')
    await run(cordova.prepare)
    await run(cordova.compile, '--target=android')
    await run(cordova.serve, '--platform=android --destination=device')
}

export default devCordova;


