export const requireJsConfig = {
    out: 'scripts.js',
    baseUrl: './temp',
    name: 'app/startup',
    paths: {
        'requireLib': 'bower_modules/requirejs/require'
    },
    include: [
        'requireLib'
    ],
    insertRequire: ['app/startup'],
    bundles: {}
}