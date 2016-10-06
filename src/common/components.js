import shell from 'shelljs'
import path from 'path'

import run, {copy, copyByFound, pwd} from '../index'
import {ignores, presets, plugins} from '../config/babel'

// $ components [output]

async function components(args) {
    args = (args) ? args.split(' ') : process.argv.slice(3, process.argv.length)

    let output = (args[0]) ? args[0] : 'temp'

    shell.exec(`${path.join(pwd, 'node_modules/.bin/babel')} src --ignore=${ignores} --source-maps=inline --presets=${presets} --plugins=${plugins} --out-dir=${output}`)

    //Also copy the require.config and the html of the templates
    await run(copy,`-f src/app/require.config.js ${path.join(output, 'app')}`)
    await run(copyByFound, `src/**/*.html src ${output} bower_modules`)
}

export default components;