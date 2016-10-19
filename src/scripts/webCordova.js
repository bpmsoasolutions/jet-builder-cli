import run, {cordova} from '../index'
import devCordova from './devCordova'
import prodCordova from './prodCordova'

// $ devCordova

async function webCordova(args) {
    args = (args) ? args.split(' ') : process.argv.slice(3, process.argv.length)

    if (args.indexOf('production')){
        await run(prodCordova)
    } else {
        await run(devCordova)
    }

    await run(cordova.build, 'browser')
    await run(cordova.run, 'browser')
}

export default webCordova


