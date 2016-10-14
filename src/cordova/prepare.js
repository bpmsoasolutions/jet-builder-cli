import shell from 'shelljs'
import path from 'path'
import {cordovaPwd} from '../index'

async function prepare() {
    shell.cd('app')
    shell.exec(`${cordovaPwd} prepare`)
    shell.cd('..')
}

export default prepare