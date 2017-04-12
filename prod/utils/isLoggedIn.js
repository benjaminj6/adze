'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errorGenerator = require('./errorGenerator');

var _errorGenerator2 = _interopRequireDefault(_errorGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line

exports.default = (ctx, next) => {
  if (ctx.passport.user) {
    return next();
  }

  throw (0, _errorGenerator2.default)(401, 'Unauthorized');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvdXRpbHMvaXNMb2dnZWRJbi5qcyJdLCJuYW1lcyI6WyJjdHgiLCJuZXh0IiwicGFzc3BvcnQiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQTJDOztrQkFFNUIsQ0FBQ0EsR0FBRCxFQUFNQyxJQUFOLEtBQWU7QUFDNUIsTUFBSUQsSUFBSUUsUUFBSixDQUFhQyxJQUFqQixFQUF1QjtBQUNyQixXQUFPRixNQUFQO0FBQ0Q7O0FBRUQsUUFBTSw4QkFBWSxHQUFaLEVBQWlCLGNBQWpCLENBQU47QUFDRCxDIiwiZmlsZSI6ImlzTG9nZ2VkSW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlRXJyb3IgZnJvbSAnLi9lcnJvckdlbmVyYXRvcicgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5leHBvcnQgZGVmYXVsdCAoY3R4LCBuZXh0KSA9PiB7XG4gIGlmIChjdHgucGFzc3BvcnQudXNlcikge1xuICAgIHJldHVybiBuZXh0KClcbiAgfVxuXG4gIHRocm93IGNyZWF0ZUVycm9yKDQwMSwgJ1VuYXV0aG9yaXplZCcpXG59XG4iXX0=