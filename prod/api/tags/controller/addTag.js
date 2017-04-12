'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../../../models');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    try {
      const { name, color } = ctx.request.body;

      const newTag = { name };

      if (color) {
        newTag.color = color;
      }

      const created = yield _models.Tag.create(newTag);

      ctx.status = 201;
      ctx.body = created;
    } catch (err) {
      err.status = err.status || 400;
      ctx.app.emit('error', err, ctx);
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3RhZ3MvY29udHJvbGxlci9hZGRUYWcuanMiXSwibmFtZXMiOlsiY3R4IiwibmV4dCIsIm5hbWUiLCJjb2xvciIsInJlcXVlc3QiLCJib2R5IiwibmV3VGFnIiwiY3JlYXRlZCIsImNyZWF0ZSIsInN0YXR1cyIsImVyciIsImFwcCIsImVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7OzsrQkFFZSxXQUFPQSxHQUFQLEVBQVlDLElBQVosRUFBcUI7QUFDbEMsUUFBSTtBQUNGLFlBQU0sRUFBRUMsSUFBRixFQUFRQyxLQUFSLEtBQWtCSCxJQUFJSSxPQUFKLENBQVlDLElBQXBDOztBQUVBLFlBQU1DLFNBQVMsRUFBRUosSUFBRixFQUFmOztBQUVBLFVBQUlDLEtBQUosRUFBVztBQUNURyxlQUFPSCxLQUFQLEdBQWVBLEtBQWY7QUFDRDs7QUFFRCxZQUFNSSxVQUFVLE1BQU0sWUFBSUMsTUFBSixDQUFXRixNQUFYLENBQXRCOztBQUVBTixVQUFJUyxNQUFKLEdBQWEsR0FBYjtBQUNBVCxVQUFJSyxJQUFKLEdBQVdFLE9BQVg7QUFDRCxLQWJELENBYUUsT0FBT0csR0FBUCxFQUFZO0FBQ1pBLFVBQUlELE1BQUosR0FBYUMsSUFBSUQsTUFBSixJQUFjLEdBQTNCO0FBQ0FULFVBQUlXLEdBQUosQ0FBUUMsSUFBUixDQUFhLE9BQWIsRUFBc0JGLEdBQXRCLEVBQTJCVixHQUEzQjtBQUNEO0FBQ0YsRyIsImZpbGUiOiJhZGRUYWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWcgfSBmcm9tICd+L3NlcnZlci9tb2RlbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChjdHgsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IG5hbWUsIGNvbG9yIH0gPSBjdHgucmVxdWVzdC5ib2R5XG5cbiAgICBjb25zdCBuZXdUYWcgPSB7IG5hbWUgfVxuXG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBuZXdUYWcuY29sb3IgPSBjb2xvclxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZWQgPSBhd2FpdCBUYWcuY3JlYXRlKG5ld1RhZylcblxuICAgIGN0eC5zdGF0dXMgPSAyMDFcbiAgICBjdHguYm9keSA9IGNyZWF0ZWRcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZXJyLnN0YXR1cyA9IGVyci5zdGF0dXMgfHwgNDAwXG4gICAgY3R4LmFwcC5lbWl0KCdlcnJvcicsIGVyciwgY3R4KVxuICB9XG59XG4iXX0=