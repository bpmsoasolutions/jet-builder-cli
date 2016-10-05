import path from 'path'

const base = path.resolve(__dirname, '../../node_modules')

export const plugins = [
    path.resolve(base, "babel-plugin-transform-decorators-legacy"),
    path.resolve(base, "babel-plugin-add-module-exports"),
    path.resolve(base, "babel-plugin-transform-es2015-modules-amd")
    ]
export const presets = [
    path.resolve(base, "babel-preset-es2015"),
    path.resolve(base, "babel-preset-stage-0")
]
export const ignores = ["bower_modules", "require.config.js"]
export const onlys = []