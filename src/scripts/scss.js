import run, {recreateDir,copyFolders,clean,jet,rjsOptimizer,components,htmlReplace, assets, cordova} from '../index'

// $ devCordova

async function scss(args) {
    await run(assets, 'temp')
}
export default scss;


