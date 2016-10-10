import shell from 'shelljs'
import path from 'path'
import {cordovaPwd} from '../index'

// $ compile [target]

async function build(args) {
    args = (args) ? args.split(' ') : process.argv.slice(3, process.argv.length)

    shell.cd('app')
    shell.exec(`${cordovaPwd} build ${args.join(' ')}`);
    shell.cd('..')
}

export default build;