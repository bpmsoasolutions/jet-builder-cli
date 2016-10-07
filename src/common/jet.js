import shell from 'shelljs'

import run, {recreateDir, copy} from '../index'

const platforms = [
    { in: 'alta-android', out: 'android'},
    { in: 'alta-ios', out: 'ios'},
    { in: 'alta-windows', out: 'windows'},
    { in: 'alta', out: 'browser'}
]

const jetPath = './src/bower_modules/oraclejet/dist'

// $ jetAssets [cordova]

async function jetAssets(args) {
    args = (args) ? args.split(' ') : process.argv.slice(3, process.argv.length)

    let cordova = (args.indexOf('--cordova') > -1)

    let destination = (cordova) ? 'app/www' : 'dist'

    if (cordova) {
        platforms.forEach((platform) => {
            run(recreateDir, `app/merges/${platform.out} app/merges/${platform.out}/images app/merges/${platform.out}/fonts`)
            run(copy, `-f ${jetPath}/css/${platform.in}/oj-alta.css app/merges/${platform.out}`)
            run(copy, `-rf ${jetPath}/css/${platform.in}/images app/merges/${platform.out}`)
            run(copy, `-rf ${jetPath}/css/${platform.in}/fonts app/merges/${platform.out}`)
        })
    } else {
        await run(copy, `-rf ${jetPath}/css/alta/fonts ${destination}`)
        await run(copy, `-f ${jetPath}/css/alta/oj-alta.css ${destination}`)
        await run(copy, `-rf ${jetPath}/css/alta/images ${destination}`)
    }

    await run(copy, `-rf ${jetPath}/css/common ${destination}`)
    await run(copy, `-rf ${jetPath}/js/libs/oj/resources ${destination}`)
    await run(recreateDir, `${destination}/ojtranslations`)
    await run(copy, `-rf ${jetPath}/js/libs/oj/resources/nls ${destination}/ojtranslations`)
}

export default jetAssets;




