import run, {cordova} from '../index'
import prodCordova from './prodCordova'
import devCordova from './devCordova'
// $ releaseCordova

async function releaseCordova(args) {
    args = (args) ? args.split(' ') : process.argv.slice(3, process.argv.length)

    await run(prodCordova)

    let platform = null

    platform = (args.indexOf('android') > -1) ? 'android' : platform
    platform = (args.indexOf('ios') > -1) ? 'ios' : platform
    platform = (args.indexOf('windows') > -1) ? 'windows' : platform

    if(!platform){
        throw console.log('Platform not recognized')
    }

    await run(cordova.build, `${platform} --release`)

    if (args.indexOf('device') > -1){
        await run(cordova.run, `${platform} --release`)
    }
}

export default releaseCordova