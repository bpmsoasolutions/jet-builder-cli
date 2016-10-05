import shell from 'shelljs'
import run, {cordova, jet} from '../index'
// $ startCordova

async function startCordova(args) {
    await run(cordova.clean)
    await run(jet, '--cordova')
    await run(cordova.add, 'android browser')
    await run(cordova.plugins)
    await run(cordova.prepare)
}

export default startCordova;