'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestLogger = undefined;

let requestLogger = exports.requestLogger = (() => {
  var _ref = _asyncToGenerator(function* ({ request, response }, next) {
    const started = new Date();
    log.info(`[REQ] ${request.method} ${request.url}`);
    yield next();
    const ms = new Date() - started;
    log.info(`[RES] ${request.method} ${request.url} (${response.status}) took ${ms}ms`);
  });

  return function requestLogger(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

var _bunyan = require('bunyan');

var _bunyan2 = _interopRequireDefault(_bunyan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Setup logger instance
let log = _bunyan2.default.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  name: process.env.NAME || 'blog-api'
});

exports.default = log;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvY29uZmlnL2xvZ2dlci5qcyJdLCJuYW1lcyI6WyJyZXF1ZXN0IiwicmVzcG9uc2UiLCJuZXh0Iiwic3RhcnRlZCIsIkRhdGUiLCJsb2ciLCJpbmZvIiwibWV0aG9kIiwidXJsIiwibXMiLCJzdGF0dXMiLCJyZXF1ZXN0TG9nZ2VyIiwiY3JlYXRlTG9nZ2VyIiwibGV2ZWwiLCJwcm9jZXNzIiwiZW52IiwiTE9HX0xFVkVMIiwibmFtZSIsIk5BTUUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OytCQVFPLFdBQThCLEVBQUVBLE9BQUYsRUFBV0MsUUFBWCxFQUE5QixFQUFxREMsSUFBckQsRUFBMkQ7QUFDaEUsVUFBTUMsVUFBVSxJQUFJQyxJQUFKLEVBQWhCO0FBQ0FDLFFBQUlDLElBQUosQ0FBVSxTQUFRTixRQUFRTyxNQUFPLElBQUdQLFFBQVFRLEdBQUksRUFBaEQ7QUFDQSxVQUFNTixNQUFOO0FBQ0EsVUFBTU8sS0FBSyxJQUFJTCxJQUFKLEtBQWFELE9BQXhCO0FBQ0FFLFFBQUlDLElBQUosQ0FBVSxTQUFRTixRQUFRTyxNQUFPLElBQUdQLFFBQVFRLEdBQUksS0FBSVAsU0FBU1MsTUFBTyxVQUFTRCxFQUFHLElBQWhGO0FBQ0QsRzs7a0JBTnFCRSxhOzs7OztBQVJ0Qjs7Ozs7Ozs7QUFFQTtBQUNBLElBQUlOLE1BQU0saUJBQU9PLFlBQVAsQ0FBb0I7QUFDNUJDLFNBQU9DLFFBQVFDLEdBQVIsQ0FBWUMsU0FBWixJQUF5QixNQURKO0FBRTVCQyxRQUFNSCxRQUFRQyxHQUFSLENBQVlHLElBQVosSUFBb0I7QUFGRSxDQUFwQixDQUFWOztrQkFhZWIsRyIsImZpbGUiOiJsb2dnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVueWFuIGZyb20gJ2J1bnlhbidcblxuLy8gU2V0dXAgbG9nZ2VyIGluc3RhbmNlXG5sZXQgbG9nID0gYnVueWFuLmNyZWF0ZUxvZ2dlcih7XG4gIGxldmVsOiBwcm9jZXNzLmVudi5MT0dfTEVWRUwgfHwgJ2luZm8nLFxuICBuYW1lOiBwcm9jZXNzLmVudi5OQU1FIHx8ICdibG9nLWFwaSdcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1ZXN0TG9nZ2VyICh7IHJlcXVlc3QsIHJlc3BvbnNlIH0sIG5leHQpIHtcbiAgY29uc3Qgc3RhcnRlZCA9IG5ldyBEYXRlKClcbiAgbG9nLmluZm8oYFtSRVFdICR7cmVxdWVzdC5tZXRob2R9ICR7cmVxdWVzdC51cmx9YClcbiAgYXdhaXQgbmV4dCgpXG4gIGNvbnN0IG1zID0gbmV3IERhdGUoKSAtIHN0YXJ0ZWRcbiAgbG9nLmluZm8oYFtSRVNdICR7cmVxdWVzdC5tZXRob2R9ICR7cmVxdWVzdC51cmx9ICgke3Jlc3BvbnNlLnN0YXR1c30pIHRvb2sgJHttc31tc2ApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ1xuXG4iXX0=