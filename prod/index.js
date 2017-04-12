'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = undefined;

// Database
let start = exports.start = (() => {
  var _ref2 = _asyncToGenerator(function* (dev) {
    try {
      setupApp(dev);
      _config.log.info('Starting server');
      yield _mongoose2.default.connect(process.env.DB_URL);
      _config.log.info(`Connected to the database ${process.env.DB_URL}`);

      const PORT = process.env.PORT || 8080;
      return app.listen(PORT, function () {
        _config.log.info(`Server started and listening for connections on port ${PORT}`);
      });
    } catch (err) {
      _config.log.info(err);
      _config.log.fatal(`Server failed to start -- Reason: ${err.message}`);
    }
  });

  return function start(_x3) {
    return _ref2.apply(this, arguments);
  };
})();

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_mongoose2.default.Promise = global.Promise;

// Setup app instance
const app = new _koa2.default();

function setupApp(devMiddleware) {
  if (devMiddleware) app.use(devMiddleware);

  (0, _config.middleware)(app);
  app.use(_api2.default.routes());

  // Catch all sends index.html
  _api2.default.get('/*', (() => {
    var _ref = _asyncToGenerator(function* (ctx, next) {
      console.log(ctx);
      ctx.status = 200;
      yield ctx.render('index.html');
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })());

  // error handling
  app.on('error', (err, ctx) => {
    err.message = `[ERR] ${err.message}`;
    _config.log.error(err);

    if (err.status === 401) {
      console.log('yay we can handle unauthorized stuffs');
      ctx.status = 301;
      ctx.redirect('/');
    }
    ctx.status = err.status || 500;
    ctx.body = err;
  });
}exports.default = app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIvaW5kZXguanMiXSwibmFtZXMiOlsiZGV2Iiwic2V0dXBBcHAiLCJpbmZvIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJEQl9VUkwiLCJQT1JUIiwiYXBwIiwibGlzdGVuIiwiZXJyIiwiZmF0YWwiLCJtZXNzYWdlIiwic3RhcnQiLCJQcm9taXNlIiwiZ2xvYmFsIiwiZGV2TWlkZGxld2FyZSIsInVzZSIsInJvdXRlcyIsImdldCIsImN0eCIsIm5leHQiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwicmVuZGVyIiwib24iLCJlcnJvciIsInJlZGlyZWN0IiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQXNDQTs7Z0NBQ08sV0FBc0JBLEdBQXRCLEVBQTJCO0FBQ2hDLFFBQUk7QUFDRkMsZUFBU0QsR0FBVDtBQUNBLGtCQUFJRSxJQUFKLENBQVMsaUJBQVQ7QUFDQSxZQUFNLG1CQUFTQyxPQUFULENBQWlCQyxRQUFRQyxHQUFSLENBQVlDLE1BQTdCLENBQU47QUFDQSxrQkFBSUosSUFBSixDQUFVLDZCQUE0QkUsUUFBUUMsR0FBUixDQUFZQyxNQUFPLEVBQXpEOztBQUVBLFlBQU1DLE9BQU9ILFFBQVFDLEdBQVIsQ0FBWUUsSUFBWixJQUFvQixJQUFqQztBQUNBLGFBQU9DLElBQUlDLE1BQUosQ0FBV0YsSUFBWCxFQUFpQixZQUFNO0FBQzVCLG9CQUFJTCxJQUFKLENBQVUsd0RBQXVESyxJQUFLLEVBQXRFO0FBQ0QsT0FGTSxDQUFQO0FBR0QsS0FWRCxDQVVFLE9BQU9HLEdBQVAsRUFBWTtBQUNaLGtCQUFJUixJQUFKLENBQVNRLEdBQVQ7QUFDQSxrQkFBSUMsS0FBSixDQUFXLHFDQUFvQ0QsSUFBSUUsT0FBUSxFQUEzRDtBQUNEO0FBQ0YsRzs7a0JBZnFCQyxLOzs7OztBQXZDdEI7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7OztBQUhBLG1CQUFTQyxPQUFULEdBQW1CQyxPQUFPRCxPQUExQjs7QUFLQTtBQUNBLE1BQU1OLE1BQU0sbUJBQVo7O0FBRUEsU0FBU1AsUUFBVCxDQUFtQmUsYUFBbkIsRUFBa0M7QUFDaEMsTUFBSUEsYUFBSixFQUFtQlIsSUFBSVMsR0FBSixDQUFRRCxhQUFSOztBQUVuQiwwQkFBV1IsR0FBWDtBQUNBQSxNQUFJUyxHQUFKLENBQVEsY0FBSUMsTUFBSixFQUFSOztBQUVBO0FBQ0EsZ0JBQUlDLEdBQUosQ0FBUSxJQUFSO0FBQUEsaUNBQWMsV0FBT0MsR0FBUCxFQUFZQyxJQUFaLEVBQXFCO0FBQ2pDQyxjQUFRQyxHQUFSLENBQVlILEdBQVo7QUFDQUEsVUFBSUksTUFBSixHQUFhLEdBQWI7QUFDQSxZQUFNSixJQUFJSyxNQUFKLENBQVcsWUFBWCxDQUFOO0FBQ0QsS0FKRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNQTtBQUNBakIsTUFBSWtCLEVBQUosQ0FBTyxPQUFQLEVBQWdCLENBQUNoQixHQUFELEVBQU1VLEdBQU4sS0FBYztBQUM1QlYsUUFBSUUsT0FBSixHQUFlLFNBQVFGLElBQUlFLE9BQVEsRUFBbkM7QUFDQSxnQkFBSWUsS0FBSixDQUFVakIsR0FBVjs7QUFFQSxRQUFJQSxJQUFJYyxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDdEJGLGNBQVFDLEdBQVIsQ0FBWSx1Q0FBWjtBQUNBSCxVQUFJSSxNQUFKLEdBQWEsR0FBYjtBQUNBSixVQUFJUSxRQUFKLENBQWEsR0FBYjtBQUNEO0FBQ0RSLFFBQUlJLE1BQUosR0FBYWQsSUFBSWMsTUFBSixJQUFjLEdBQTNCO0FBQ0FKLFFBQUlTLElBQUosR0FBV25CLEdBQVg7QUFDRCxHQVhEO0FBWUQsQyxrQkFvQmNGLEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS29hIGZyb20gJ2tvYSdcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcbm1vbmdvb3NlLlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZVxuXG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJ1xuaW1wb3J0IHsgbG9nLCBtaWRkbGV3YXJlIH0gZnJvbSAnLi9jb25maWcnXG5cbi8vIFNldHVwIGFwcCBpbnN0YW5jZVxuY29uc3QgYXBwID0gbmV3IEtvYSgpXG5cbmZ1bmN0aW9uIHNldHVwQXBwIChkZXZNaWRkbGV3YXJlKSB7XG4gIGlmIChkZXZNaWRkbGV3YXJlKSBhcHAudXNlKGRldk1pZGRsZXdhcmUpXG5cbiAgbWlkZGxld2FyZShhcHApXG4gIGFwcC51c2UoYXBpLnJvdXRlcygpKVxuXG4gIC8vIENhdGNoIGFsbCBzZW5kcyBpbmRleC5odG1sXG4gIGFwaS5nZXQoJy8qJywgYXN5bmMgKGN0eCwgbmV4dCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN0eClcbiAgICBjdHguc3RhdHVzID0gMjAwXG4gICAgYXdhaXQgY3R4LnJlbmRlcignaW5kZXguaHRtbCcpXG4gIH0pXG5cbiAgLy8gZXJyb3IgaGFuZGxpbmdcbiAgYXBwLm9uKCdlcnJvcicsIChlcnIsIGN0eCkgPT4ge1xuICAgIGVyci5tZXNzYWdlID0gYFtFUlJdICR7ZXJyLm1lc3NhZ2V9YFxuICAgIGxvZy5lcnJvcihlcnIpXG5cbiAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICBjb25zb2xlLmxvZygneWF5IHdlIGNhbiBoYW5kbGUgdW5hdXRob3JpemVkIHN0dWZmcycpXG4gICAgICBjdHguc3RhdHVzID0gMzAxXG4gICAgICBjdHgucmVkaXJlY3QoJy8nKVxuICAgIH1cbiAgICBjdHguc3RhdHVzID0gZXJyLnN0YXR1cyB8fCA1MDBcbiAgICBjdHguYm9keSA9IGVyclxuICB9KVxufVxuXG4vLyBEYXRhYmFzZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0IChkZXYpIHtcbiAgdHJ5IHtcbiAgICBzZXR1cEFwcChkZXYpXG4gICAgbG9nLmluZm8oJ1N0YXJ0aW5nIHNlcnZlcicpXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5EQl9VUkwpXG4gICAgbG9nLmluZm8oYENvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UgJHtwcm9jZXNzLmVudi5EQl9VUkx9YClcblxuICAgIGNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODBcbiAgICByZXR1cm4gYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gICAgICBsb2cuaW5mbyhgU2VydmVyIHN0YXJ0ZWQgYW5kIGxpc3RlbmluZyBmb3IgY29ubmVjdGlvbnMgb24gcG9ydCAke1BPUlR9YClcbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBsb2cuaW5mbyhlcnIpXG4gICAgbG9nLmZhdGFsKGBTZXJ2ZXIgZmFpbGVkIHRvIHN0YXJ0IC0tIFJlYXNvbjogJHtlcnIubWVzc2FnZX1gKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcFxuIl19