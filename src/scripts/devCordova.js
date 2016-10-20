import run, {recreateDir,copyFolders,clean,jet,rjsOptimizer,components,htmlReplace, assets} from '../index'

// $ devCordova

async function devCordova(args) {
    await run(recreateDir, 'temp app/www')
    await run(copyFolders, 'src/bower_modules temp/bower_modules')
    await run(copyFolders, 'src/assets temp/assets')
    await run(jet, '--cordova')
    await run(assets, 'temp')
    await run(components, 'temp')
    await run(htmlReplace, 'temp --cordova')
    await run(copyFolders, 'temp app/www')
    await run(clean, 'temp')
}

export default devCordova


