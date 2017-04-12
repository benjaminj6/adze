'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../../../models');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    try {
      const tags = yield _models.Tag.find().exec();
      ctx.status = 200;
      ctx.body = tags;
    } catch (err) {
      err.status = err.status || 404;
      ctx.app.emit('error', err, ctx);
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3RhZ3MvY29udHJvbGxlci9nZXRUYWdzLmpzIl0sIm5hbWVzIjpbImN0eCIsIm5leHQiLCJ0YWdzIiwiZmluZCIsImV4ZWMiLCJzdGF0dXMiLCJib2R5IiwiZXJyIiwiYXBwIiwiZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OytCQUVlLFdBQU9BLEdBQVAsRUFBWUMsSUFBWixFQUFxQjtBQUNsQyxRQUFJO0FBQ0YsWUFBTUMsT0FBTyxNQUFNLFlBQUlDLElBQUosR0FBV0MsSUFBWCxFQUFuQjtBQUNBSixVQUFJSyxNQUFKLEdBQWEsR0FBYjtBQUNBTCxVQUFJTSxJQUFKLEdBQVdKLElBQVg7QUFDRCxLQUpELENBSUUsT0FBT0ssR0FBUCxFQUFZO0FBQ1pBLFVBQUlGLE1BQUosR0FBYUUsSUFBSUYsTUFBSixJQUFjLEdBQTNCO0FBQ0FMLFVBQUlRLEdBQUosQ0FBUUMsSUFBUixDQUFhLE9BQWIsRUFBc0JGLEdBQXRCLEVBQTJCUCxHQUEzQjtBQUNEO0FBQ0YsRyIsImZpbGUiOiJnZXRUYWdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFnIH0gZnJvbSAnfi9zZXJ2ZXIvbW9kZWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoY3R4LCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGFncyA9IGF3YWl0IFRhZy5maW5kKCkuZXhlYygpXG4gICAgY3R4LnN0YXR1cyA9IDIwMFxuICAgIGN0eC5ib2R5ID0gdGFnc1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBlcnIuc3RhdHVzID0gZXJyLnN0YXR1cyB8fCA0MDRcbiAgICBjdHguYXBwLmVtaXQoJ2Vycm9yJywgZXJyLCBjdHgpXG4gIH1cbn1cbiJdfQ==