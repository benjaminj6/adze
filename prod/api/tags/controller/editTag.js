'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../../../models');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    try {
      const id = ctx.params.id;
      const opts = { runValidators: true, new: true };

      const updates = {};
      const { name, color } = ctx.request.body;

      if (name) {
        updates.name = name;
      }

      if (color) {
        updates.color = color;
      }

      const updatedTag = yield _models.Tag.findByIdAndUpdate(id, updates, opts).exec();
      console.log(updatedTag);
      ctx.status = 200;
      ctx.body = updatedTag;
    } catch (err) {
      err.status = err.status || 400;
      ctx.app.emit('error', err, ctx);
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3RhZ3MvY29udHJvbGxlci9lZGl0VGFnLmpzIl0sIm5hbWVzIjpbImN0eCIsIm5leHQiLCJpZCIsInBhcmFtcyIsIm9wdHMiLCJydW5WYWxpZGF0b3JzIiwibmV3IiwidXBkYXRlcyIsIm5hbWUiLCJjb2xvciIsInJlcXVlc3QiLCJib2R5IiwidXBkYXRlZFRhZyIsImZpbmRCeUlkQW5kVXBkYXRlIiwiZXhlYyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJlcnIiLCJhcHAiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7K0JBRWUsV0FBT0EsR0FBUCxFQUFZQyxJQUFaLEVBQXFCO0FBQ2xDLFFBQUk7QUFDRixZQUFNQyxLQUFLRixJQUFJRyxNQUFKLENBQVdELEVBQXRCO0FBQ0EsWUFBTUUsT0FBTyxFQUFFQyxlQUFlLElBQWpCLEVBQXVCQyxLQUFLLElBQTVCLEVBQWI7O0FBRUEsWUFBTUMsVUFBVSxFQUFoQjtBQUNBLFlBQU0sRUFBRUMsSUFBRixFQUFRQyxLQUFSLEtBQWtCVCxJQUFJVSxPQUFKLENBQVlDLElBQXBDOztBQUVBLFVBQUlILElBQUosRUFBVTtBQUNSRCxnQkFBUUMsSUFBUixHQUFlQSxJQUFmO0FBQ0Q7O0FBRUQsVUFBSUMsS0FBSixFQUFXO0FBQ1RGLGdCQUFRRSxLQUFSLEdBQWdCQSxLQUFoQjtBQUNEOztBQUVELFlBQU1HLGFBQWEsTUFBTSxZQUFJQyxpQkFBSixDQUFzQlgsRUFBdEIsRUFBMEJLLE9BQTFCLEVBQW1DSCxJQUFuQyxFQUF5Q1UsSUFBekMsRUFBekI7QUFDQUMsY0FBUUMsR0FBUixDQUFZSixVQUFaO0FBQ0FaLFVBQUlpQixNQUFKLEdBQWEsR0FBYjtBQUNBakIsVUFBSVcsSUFBSixHQUFXQyxVQUFYO0FBQ0QsS0FuQkQsQ0FtQkUsT0FBT00sR0FBUCxFQUFZO0FBQ1pBLFVBQUlELE1BQUosR0FBYUMsSUFBSUQsTUFBSixJQUFjLEdBQTNCO0FBQ0FqQixVQUFJbUIsR0FBSixDQUFRQyxJQUFSLENBQWEsT0FBYixFQUFzQkYsR0FBdEIsRUFBMkJsQixHQUEzQjtBQUNEO0FBQ0YsRyIsImZpbGUiOiJlZGl0VGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFnIH0gZnJvbSAnfi9zZXJ2ZXIvbW9kZWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoY3R4LCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaWQgPSBjdHgucGFyYW1zLmlkXG4gICAgY29uc3Qgb3B0cyA9IHsgcnVuVmFsaWRhdG9yczogdHJ1ZSwgbmV3OiB0cnVlIH1cblxuICAgIGNvbnN0IHVwZGF0ZXMgPSB7fVxuICAgIGNvbnN0IHsgbmFtZSwgY29sb3IgfSA9IGN0eC5yZXF1ZXN0LmJvZHlcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICB1cGRhdGVzLm5hbWUgPSBuYW1lXG4gICAgfVxuXG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICB1cGRhdGVzLmNvbG9yID0gY29sb3JcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkVGFnID0gYXdhaXQgVGFnLmZpbmRCeUlkQW5kVXBkYXRlKGlkLCB1cGRhdGVzLCBvcHRzKS5leGVjKClcbiAgICBjb25zb2xlLmxvZyh1cGRhdGVkVGFnKVxuICAgIGN0eC5zdGF0dXMgPSAyMDBcbiAgICBjdHguYm9keSA9IHVwZGF0ZWRUYWdcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZXJyLnN0YXR1cyA9IGVyci5zdGF0dXMgfHwgNDAwXG4gICAgY3R4LmFwcC5lbWl0KCdlcnJvcicsIGVyciwgY3R4KVxuICB9XG59XG4iXX0=