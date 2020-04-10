'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

// async function
var init = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _util.promisify)(_fs.readFile)((0, _path.resolve)(__dirname, '../package.json'));

                    case 2:
                        data = _context.sent;


                        data = JSON.parse(data);

                        console.log(data.name);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function init() {
        return _ref.apply(this, arguments);
    };
}();

var _util = require('util');

var _path = require('path');

var _fs = require('fs');

var _querystring = require('querystring');

var qs = _interopRequireWildcard(_querystring);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _util.promisify)(_fs.readFile)((0, _path.resolve)(__dirname, '../package.json')).then(function (data) {
    data = JSON.parse(data);

    console.log(data.name);

    (0, _fs.writeFileSync)((0, _path.resolve)(__dirname, './name_demo.js'), String(data.name), 'utf8');
}).catch(function (err) {
    console.log(err);
});
init();
//# sourceMappingURL=index.js.map