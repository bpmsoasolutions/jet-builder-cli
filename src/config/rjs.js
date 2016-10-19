export const requireJsConfig = {
    out: 'scripts.js',
    baseUrl: './temp',
    name: 'app/startup',
    paths: {
        "requireLib":           "bower_modules/requirejs/require",
        "text":                 "bower_modules/requirejs-text/text"
    },
    include: [
        'requireLib',
        'text'
    ],
    insertRequire: ['app/startup'],
    bundles: {}
}