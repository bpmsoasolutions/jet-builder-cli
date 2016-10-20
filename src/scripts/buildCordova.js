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

    let env = (args.indexOf('release') > -1) ? '--release' : '--debug'
    let platform = null

    platform = (args.indexOf('android') > -1) ? 'android' : platform
    platform = (args.indexOf('ios') > -1) ? 'ios' : platform
    platform = (args.indexOf('windows') > -1) ? 'windows' : platform

    if(!platform){
        throw console.log('Platform not recognized')
    }

    await run(cordova.build, `${platform} ${env}`)

    if (args.indexOf('device') > -1){
        await run(cordova.run, `${platform} ${env}`)
    }
}

export default buildCordova