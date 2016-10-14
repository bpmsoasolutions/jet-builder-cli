import run, {cordova} from '../index'
import devCordova from './devCordova'

// $ devCordova

async function runCordova(args) {
    await run(devCordova)
    await run(cordova.build, 'android --debug')
    await run(cordova.run, 'android')
}

export default runCordova


