import shell from 'shelljs'
import path from 'path'

import {pwd} from '../index'

async function prepare() {
    shell.cd('app')
    shell.exec(`${path.resolve(pwd, 'node_modules/.bin/cordova')} prepare`)
    shell.cd('..')
}

export default prepare;