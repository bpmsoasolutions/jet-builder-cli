import run, {recreateDir,copyFolders,clean,jet,rjsOptimizer,components,htmlReplace, assets} from '../index'

// $ devCordova

async function prodCordova(args) {
    await run(recreateDir, 'temp app/www')
    await run(jet, '--cordova')
    await run(assets, 'temp -m --bower-modules')
    await run(components, 'temp')
    await run(htmlReplace, 'temp --cordova --production')
    await run(rjsOptimizer)
    await run(copyFolders, 'src/assets app/www/assets')
    await run(copy, '-rf temp/index.html app/www')
    await run(copy, '-rf temp/scripts.js app/www')
    await run(copy, '-rf temp/styles.css app/www')
    await run(clean, 'temp')
}

export default prodCordova


