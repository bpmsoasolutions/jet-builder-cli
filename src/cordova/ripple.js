import shell from 'shelljs'
import path from 'path'

async function ripple() {
    shell.cd('app')
    shell.exec(`${path.resolve('node_modules/.bin/ripple')} emulate`);
    shell.cd('..')
}

export default ripple;