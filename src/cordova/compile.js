import shell from 'shelljs'
import path from 'path'

// $ compile --build-config='' --release --target=''

async function compile(args) {
    args = (args) ? args.split(' ') : process.argv.slice(3, process.argv.length)

    if (args.indexOf('release') < 0) {
        args.push('--debug')
    }

    shell.cd('app')
    shell.exec(`${path.resolve('node_modules/.bin/cordova')} compile ${args.join(' ')}`);
    shell.cd('..')
}

export default compile;


