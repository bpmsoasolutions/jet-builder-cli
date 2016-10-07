import run, {recreateDir,copy,clean,jet,rjsOptimizer,components,htmlReplace, assets, cordova} from '../index'

// $ devCordova

async function devCordova(args) {
    await run(recreateDir, 'temp app/www')
    await run(jet, '--cordova')
    await run(assets, 'temp')
    await run(components, 'temp')
    await run(htmlReplace, 'temp --cordova')
    await run(copy, '-rf src/bower_modules temp')
    await run(copy, '-rf src/assets temp')
    await run(copy, '-rf temp/* app/www')
    await run(clean, 'temp')
}

export default devCordova;


