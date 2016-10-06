import shell from 'shelljs'
import path from 'path'

import {pwd} from '../index'

async function ripple() {
    shell.cd('app')
    shell.exec(`${path.resolve(pwd, 'node_modules/.bin/ripple')} emulate`);
    shell.cd('..')
}

export default ripple;