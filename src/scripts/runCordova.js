import run, {cordova} from '../index'
import devCordova from './devCordova'
import prodCordova from './prodCordova'

// $ devCordova

async function runCordova(args) {
    args = (args) ? args.split(' ') : process.argv.slice(3, process.argv.length)

    if (args.indexOf('production')){
        await run(prodCordova)
    } else {
        await run(devCordova)
    }

    if (args.indexOf('android') > -1){
        await run(cordova.build, 'android --debug')
        await run(cordova.run, 'android')
    }
    if (args.indexOf('ios') > -1){
        await run(cordova.build, 'ios --debug')
        await run(cordova.run, 'ios')
    }
    if (args.indexOf('windows') > -1){
        await run(cordova.build, 'windows --debug')
        await run(cordova.run, 'windows')
    }
}

export default runCordova


