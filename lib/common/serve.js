'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

// $ serve [src]

var serve = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args) {
        var es6, scss, server;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        args = args ? args.split(' ') : process.argv.slice(3, process.argv.length);

                        es6 = args.indexOf('--es6') > -1;
                        scss = args.indexOf('--scss') > -1;
                        server = _http2.default.createServer(function (request, response) {
                            console.log('request ', request.url);

                            //cors
                            response.setHeader('Access-Control-Allow-Origin', '*');
                            response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                            response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                            response.setHeader('Access-Control-Allow-Credentials', true);

                            var filePath = request.url;

                            var qPos = filePath.indexOf('?');
                            if (qPos > -1) {
                                filePath = filePath.slice(0, qPos);
                            }

                            filePath = filePath === '/' ? args[0] + '/index.html' : '' + args[0] + request.url;
                            filePath = _path2.default.resolve(filePath);

                            var extname = String(_path2.default.extname(filePath)).toLowerCase();
                            var contentType = 'text/html';
                            var mimeTypes = {
                                '.html': 'text/html',
                                '.js': 'text/javascript',
                                '.css': 'text/css',
                                '.json': 'application/json',
                                '.png': 'image/png',
                                '.jpg': 'image/jpg',
                                '.gif': 'image/gif',
                                '.wav': 'audio/wav',
                                '.mp4': 'video/mp4',
                                '.woff': 'application/font-woff',
                                '.woff2': 'application/font-woff2',
                                '.ttf': 'applilcation/font-ttf',
                                '.eot': 'application/vnd.ms-fontobject',
                                '.otf': 'application/font-otf',
                                '.svg': 'application/image/svg+xml'
                            };

                            contentType = mimeTypes[extname] || 'application/octect-stream';

                            if (scss && filePath.indexOf('styles.css') > -1) {
                                var _sass$renderSync = _nodeSass2.default.renderSync({
                                    file: 'src/scss/styles.scss'
                                });

                                var css = _sass$renderSync.css;

                                response.writeHead(200, { 'Content-Type': 'text/css' });
                                response.end(css.toString(), 'utf-8');
                                return;
                            }

                            _fs2.default.readFile(filePath, function (error, content) {
                                if (error) {
                                    if (error.code == 'ENOENT') {
                                        response.writeHead(404);
                                        response.end('Not found', 'utf-8');
                                        return;
                                    }
                                    response.writeHead(500);
                                    response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
                                    response.end();
                                    return;
                                }

                                if (es6 && contentType === 'text/javascript') {
                                    var ignore = false;
                                    for (var i = 0; i < _babel.ignores.length; i++) {
                                        if (filePath.indexOf(_babel.ignores[i]) > -1) {
                                            ignore = true;
                                            break;
                                        }
                                    }

                                    for (var i = 0; i < _babel.onlys.length; i++) {
                                        if (filePath.indexOf(_babel.onlys[i]) > -1) {
                                            ignore = false;
                                            break;
                                        }
                                    }

                                    if (!ignore) {
                                        var _babel$transform = babel.transform(content, {
                                            presets: _babel.presets,
                                            plugins: _babel.plugins,
                                            sourceRoot: pwd
                                        });

                                        var code = _babel$transform.code;

                                        content = code;
                                    }
                                }

                                response.writeHead(200, { 'Content-Type': contentType });
                                response.end(content, 'utf-8');
                                return;
                            });
                        }).on('error', function (e) {
                            // Handle your error here
                            console.log(e);
                        });


                        server.listen(3000);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function serve(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _babelCore = require('babel-core');

var babel = _interopRequireWildcard(_babelCore);

var _nodeSass = require('node-sass');

var _nodeSass2 = _interopRequireDefault(_nodeSass);

var _babel = require('../config/babel');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var pwd = __dirname;exports.default = serve;
//# sourceMappingURL=serve.js.map