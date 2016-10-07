import shell from 'shelljs'
import path from 'path'

import {pwd} from '../index'

async function prepare() {
    shell.cd('app')
    shell.exec(`cordova prepare`)
    shell.cd('..')
}

export default prepare;