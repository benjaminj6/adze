'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaBunyanLogger = require('koa-bunyan-logger');

var _koaBunyanLogger2 = _interopRequireDefault(_koaBunyanLogger);

var _koaPassport = require('koa-passport');

var _koaPassport2 = _interopRequireDefault(_koaPassport);

var _koaSessionMinimal = require('koa-session-minimal');

var _koaSessionMinimal2 = _interopRequireDefault(_koaSessionMinimal);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaViews = require('koa-views');

var _koaViews2 = _interopRequireDefault(_koaViews);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaMount = require('koa-mount');

var _koaMount2 = _interopRequireDefault(_koaMount);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
  app.use((0, _koaBunyanLogger2.default)(_logger2.default));
  app.use(_logger.requestLogger);

  let pathToDist = '../../../dist';

  if (process.env.NODE_ENV === 'production') {
    pathToDist = '../../dist';
  }

  // Serve static assets
  app.use((0, _koaMount2.default)('/statics', (0, _koaStatic2.default)(_path2.default.join(__dirname, `${pathToDist}/statics`))));

  app.use((0, _koaBodyparser2.default)({ enableTypes: ['json', 'form', 'text'] }));

  app.keys = ['secret'];
  app.use((0, _koaSessionMinimal2.default)());

  (0, _auth2.default)(_koaPassport2.default);
  app.use(_koaPassport2.default.initialize());
  app.use(_koaPassport2.default.session());

  // Rendering engine
  app.use((0, _koaViews2.default)(_path2.default.join(__dirname, pathToDist)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvY29uZmlnL21pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsiYXBwIiwidXNlIiwicGF0aFRvRGlzdCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImpvaW4iLCJfX2Rpcm5hbWUiLCJlbmFibGVUeXBlcyIsImtleXMiLCJpbml0aWFsaXplIiwic2Vzc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztrQkFFZUEsT0FBTztBQUNwQkEsTUFBSUMsR0FBSixDQUFRLGdEQUFSO0FBQ0FELE1BQUlDLEdBQUo7O0FBRUEsTUFBSUMsYUFBYSxlQUFqQjs7QUFFQSxNQUFJQyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDekNILGlCQUFhLFlBQWI7QUFDRDs7QUFFRDtBQUNBRixNQUFJQyxHQUFKLENBQVEsd0JBQ04sVUFETSxFQUVOLHlCQUFNLGVBQUtLLElBQUwsQ0FBVUMsU0FBVixFQUFzQixHQUFFTCxVQUFXLFVBQW5DLENBQU4sQ0FGTSxDQUFSOztBQUtBRixNQUFJQyxHQUFKLENBQVEsNkJBQUssRUFBRU8sYUFBYSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLENBQWYsRUFBTCxDQUFSOztBQUVBUixNQUFJUyxJQUFKLEdBQVcsQ0FBRSxRQUFGLENBQVg7QUFDQVQsTUFBSUMsR0FBSixDQUFRLGtDQUFSOztBQUVBO0FBQ0FELE1BQUlDLEdBQUosQ0FBUSxzQkFBU1MsVUFBVCxFQUFSO0FBQ0FWLE1BQUlDLEdBQUosQ0FBUSxzQkFBU1UsT0FBVCxFQUFSOztBQUVBO0FBQ0FYLE1BQUlDLEdBQUosQ0FBUSx3QkFBTSxlQUFLSyxJQUFMLENBQVVDLFNBQVYsRUFBcUJMLFVBQXJCLENBQU4sQ0FBUjtBQUNELEMiLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBib2R5IGZyb20gJ2tvYS1ib2R5cGFyc2VyJ1xuaW1wb3J0IGtvYUxvZ2dlciBmcm9tICdrb2EtYnVueWFuLWxvZ2dlcidcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdrb2EtcGFzc3BvcnQnXG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdrb2Etc2Vzc2lvbi1taW5pbWFsJ1xuXG5pbXBvcnQgc2VydmUgZnJvbSAna29hLXN0YXRpYydcbmltcG9ydCB2aWV3cyBmcm9tICdrb2Etdmlld3MnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IG1vdW50IGZyb20gJ2tvYS1tb3VudCdcblxuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoJ1xuaW1wb3J0IGxvZywgeyByZXF1ZXN0TG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInXG5cbmV4cG9ydCBkZWZhdWx0IGFwcCA9PiB7XG4gIGFwcC51c2Uoa29hTG9nZ2VyKGxvZykpXG4gIGFwcC51c2UocmVxdWVzdExvZ2dlcilcblxuICBsZXQgcGF0aFRvRGlzdCA9ICcuLi8uLi8uLi9kaXN0J1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcGF0aFRvRGlzdCA9ICcuLi8uLi9kaXN0J1xuICB9XG5cbiAgLy8gU2VydmUgc3RhdGljIGFzc2V0c1xuICBhcHAudXNlKG1vdW50KFxuICAgICcvc3RhdGljcycsXG4gICAgc2VydmUocGF0aC5qb2luKF9fZGlybmFtZSwgYCR7cGF0aFRvRGlzdH0vc3RhdGljc2ApKVxuICApKVxuXG4gIGFwcC51c2UoYm9keSh7IGVuYWJsZVR5cGVzOiBbJ2pzb24nLCAnZm9ybScsICd0ZXh0J10gfSkpXG5cbiAgYXBwLmtleXMgPSBbICdzZWNyZXQnIF1cbiAgYXBwLnVzZShzZXNzaW9uKCkpXG5cbiAgYXV0aChwYXNzcG9ydClcbiAgYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpXG4gIGFwcC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKVxuXG4gIC8vIFJlbmRlcmluZyBlbmdpbmVcbiAgYXBwLnVzZSh2aWV3cyhwYXRoLmpvaW4oX19kaXJuYW1lLCBwYXRoVG9EaXN0KSkpXG59XG4iXX0=