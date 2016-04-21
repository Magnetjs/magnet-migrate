'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('magnet-core/dist/base');

var _base2 = _interopRequireDefault(_base);

var _dbMigrate = require('db-migrate');

var _dbMigrate2 = _interopRequireDefault(_dbMigrate);

var _migration = require('./config/migration');

var _migration2 = _interopRequireDefault(_migration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Migrate = function (_Base) {
  _inherits(Migrate, _Base);

  function Migrate() {
    _classCallCheck(this, Migrate);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Migrate).apply(this, arguments));
  }

  _createClass(Migrate, [{
    key: 'setup',
    value: function () {
      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var config;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                config = Object.assign(_migration2.default, this.config.migration);

                this.app.dbmigrate = _dbMigrate2.default.getInstance(true, config);

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setup() {
        return ref.apply(this, arguments);
      }

      return setup;
    }()
  }, {
    key: 'start',
    value: function () {
      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.app.dbmigrate.up(Number.MAX_VALUE, null);

              case 3:
                _context2.next = 9;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2['catch'](0);

                this.log.error(_context2.t0);
                throw _context2.t0;

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 5]]);
      }));

      function start() {
        return ref.apply(this, arguments);
      }

      return start;
    }()
  }]);

  return Migrate;
}(_base2.default);

exports.default = Migrate;