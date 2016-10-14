import shell from 'shelljs'
import fs from 'fs'
import path from 'path'

import {textReplace} from '../utils/_utils'

// $ htmlReplace [cordova or empty]

async function htmlReplace(args) {
    const index = fs.readFileSync(path.join('src', 'index.html'), 'utf-8')

    args = (args) ? args.split(' ') : process.argv.slice(3, process.argv.length)

    let text = index

    let output = (args[0]) ? args[0] : 'temp'
    let cordova = (args.indexOf('--cordova') > -1)
    let production = (args.indexOf('--production') > -1)

    if (cordova) {
        text = textReplace('<!-- cordovaJs -->', null, '<script type="text/javascript" charset="utf-8" src="cordova.js"></script>', text)
    } else {
        text = textReplace('<!-- cordovaJs -->', null, '', text)
    }

    if (production){
        text = textReplace('<!-- startCss -->', '<!-- endCss -->', '<link rel="stylesheet" href="styles.css" type="text/css" />', text)
        text = textReplace('<!-- startJs -->', '<!-- endJs -->', '<script type="text/javascript" charset="utf-8" src="scripts.js"></script>', text)
    }

    text = textReplace('<!-- altaCss -->', null, `<link rel="stylesheet" href="oj-alta.css" type="text/css" />`, text)

    fs.writeFileSync(path.join(output, 'index.html'), text, {encoding: 'utf-8'})
}
export default htmlReplace