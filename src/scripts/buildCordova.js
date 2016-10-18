import run, {cordova} from '../index'
import prodCordova from './prodCordova'
import devCordova from './devCordova'
// $ buildCordova

async function buildCordova(args) {
    args = (args) ? args.split(' ') : process.argv.slice(3, process.argv.length)

    if (args.indexOf('production')){
        await run(prodCordova)
    } else {
        await run(devCordova)
    }

    if (args.indexOf('android') > -1){
        await run(cordova.build, `android release -- --buildConfig=${path.resolve('app/buildAndroidRelease.json')}`)
    }
    if (args.indexOf('ios') > -1){
        await run(cordova.build, `ios release -- --buildConfig=${path.resolve('app/buildIOSRelease.json')}`)
    }
    if (args.indexOf('windows') > -1){
        await run(cordova.build, `windows release -- --buildConfig=${path.resolve('app/buildWindowsRelease.json')}`)
    }
}

export default buildCordova