import shell from 'shelljs';
import del from 'del';

async function recreateDir(args) {
    args = (args) ? args.split(' ') : process.argv.slice(3, process.argv.length)

    args.forEach(dir=>{
        shell.rm('-rf', dir);
        shell.mkdir(dir)
    })

}

export default recreateDir;