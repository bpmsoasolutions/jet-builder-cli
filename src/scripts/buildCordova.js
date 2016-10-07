import run, {recreateDir,copy,clean,jet,rjsOptimizer,components,htmlReplace, cordova} from '../index'
// $ buildCordova

async function buildCordova(args) {
    await run(recreateDir, 'temp app/www')
    await run(jet, '--cordova')
    await run(assets, 'temp -m --bower-modules')
    await run(components, 'temp')
    await run(htmlReplace, 'temp --cordova --production')
    await run(rjsOptimizer)
    await run(copy, '-rf src/assets app/www/assets')
    await run(copy, '-rf temp/index.html app/www')
    await run(copy, '-rf temp/scripts.js app/www')
    await run(copy, '-rf temp/styles.css app/www')
    await run(clean, 'temp')
    await run(cordova.prepare)
    await run(cordova.compile, '--target=android')
    await run(cordova.run, 'android')
}

export default buildCordova;


