import shell from 'shelljs'
import path from 'path'

import {pwd} from '../index'

async function serve(args) {
    args = (args) ? args.split(' ') : process.argv.slice(3, process.argv.length)

    shell.cd('app')
    shell.exec(`cordova serve ${args.join(' ')}`);
    shell.cd('..')
}

export default serve;