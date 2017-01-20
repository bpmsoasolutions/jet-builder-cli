import fs from 'fs'
import path from 'path'
import shell from 'shelljs'
import sass from 'node-sass'



import run, {pwd, uglifyPwd, sassPwd, copyFolders} from '../index'

async function fontAwesome(css, output){
    await run(copyFolders, `src/bower_modules/font-awesome/fonts ${output}/assets/fonts`)
    return new Promise((resolve, reject)=>{
        let faCss = fs.readFileSync('src/bower_modules/font-awesome/css/font-awesome.css', 'utf-8')
        faCss = faCss.replace(/url\((')?\.\.\/fonts\//g, 'url($1assets/fonts/')

        css += faCss
        resolve(css)
    })
}

async function renderSass(file){
    return new Promise((resolve, reject)=>{
        sass.render({
            file: file
        }, function(err, result) {
            if (err){
                reject(err)
            }
            resolve(result)
        });
    })
}

async function assets(args) {
    args = (args) ? args.split(' ') : process.argv.slice(4, process.argv.length)

    let output = (args[0]) ? args[0] : 'temp'
    let minize = (args.indexOf('-m') > -1)
    let bowerModules = (args.indexOf('--bower-modules') > -1)

    //Parse scss
    //let css = shell.exec(`${sassPwd} ${path.resolve('src/scss/styles.scss')}`)
    let css = await renderSass(path.resolve('src/scss/styles.scss'))
    css = css.css.toString()

    //Join css and other assets bower_module tasks
    if (bowerModules){
        css = await fontAwesome(css, output)
    }

    if (minize){
        shell.ShellString(css)
            .exec(uglifyPwd)
            .to(`${output}/styles.css`)
    } else {
        shell.ShellString(css)
            .to(`${output}/styles.css`)
    }
}

export default assets