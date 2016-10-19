import shell from 'shelljs'
import require from 'requirejs'
import path from 'path'
import fs from 'fs'
import vm from 'vm'

import {requireJsConfig} from '../config/rjs'

let optimize = function(cfg){
    return new Promise((resolve, reject)=>{
        cfg.output = resolve
        try {
            require.optimize(
                cfg,
                function (success) {
                    console.log(success)
                    resolve(success)
                },
                function (err) {
                    reject(err)
                })
        } catch (e) {
            reject(e)
        }

    })
}

async function rjsOptimizer(args) {

    const requirejsDev = fs.readFileSync(path.resolve('src/app/require.config.js'))
    const bowerCfg =  JSON.parse(fs.readFileSync(path.resolve('.bowerrc')))

    let requirejsDevCfg = vm.runInNewContext( `${requirejsDev}; require`)

    let mergedPaths = Object.assign(requireJsConfig.paths, requirejsDevCfg.paths)
    Object.keys(mergedPaths)
        .forEach(f=>{
            mergedPaths[f] = mergedPaths[f].replace('bower_modules', `../${bowerCfg.directory}`)
        })

    shell.ls('temp/**/*.js')
        .filter(e => e.indexOf('bower_modules')<0 )
        .filter(e => e.indexOf('require.config.js')<0 )
        .forEach(f=>{
            requireJsConfig.include.push(f.replace("temp/","").replace(".js",""))
        })

    await optimize({
        out: './temp/scripts.js',
        baseUrl: './temp',
        name: 'app/startup',
        paths: mergedPaths,
        include: requireJsConfig.include,
        insertRequire: ['app/startup'],
        shim: requirejsDevCfg.shim,
        bundles: {}
    })
}



export default rjsOptimizer