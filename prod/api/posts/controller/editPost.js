'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _models = require('../../../models');

var _utils = require('../../../utils');

var _utils2 = require('./utils');

var _config = require('../../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    try {
      const id = ctx.params.id;
      const opts = { runValidators: true, new: true };

      const updates = {};
      const { post, title, tags } = ctx.request.body;

      if (title) {
        updates.title = title;
      }

      let html;
      if (post) {
        html = yield (0, _marked2.default)(post);

        updates.md = post;
        updates.html = html;
      }

      if ((0, _utils.validateTagArray)(tags)) {
        _config.log.debug(tags);

        updates.tags = yield (0, _utils2.createNewTags)(tags);

        _config.log.debug('updates tags', updates.tags);
      }

      const updatedPost = yield _models.Post.findByIdAndUpdate(id, updates, opts).populate('tags').exec();

      ctx.status = 200;
      ctx.body = updatedPost;
    } catch (err) {
      err.status = err.status || 400;
      ctx.app.emit('error', err, ctx);
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3Bvc3RzL2NvbnRyb2xsZXIvZWRpdFBvc3QuanMiXSwibmFtZXMiOlsiY3R4IiwibmV4dCIsImlkIiwicGFyYW1zIiwib3B0cyIsInJ1blZhbGlkYXRvcnMiLCJuZXciLCJ1cGRhdGVzIiwicG9zdCIsInRpdGxlIiwidGFncyIsInJlcXVlc3QiLCJib2R5IiwiaHRtbCIsIm1kIiwiZGVidWciLCJ1cGRhdGVkUG9zdCIsImZpbmRCeUlkQW5kVXBkYXRlIiwicG9wdWxhdGUiLCJleGVjIiwic3RhdHVzIiwiZXJyIiwiYXBwIiwiZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7OzsrQkFFZSxXQUFPQSxHQUFQLEVBQVlDLElBQVosRUFBcUI7QUFDbEMsUUFBSTtBQUNGLFlBQU1DLEtBQUtGLElBQUlHLE1BQUosQ0FBV0QsRUFBdEI7QUFDQSxZQUFNRSxPQUFPLEVBQUVDLGVBQWUsSUFBakIsRUFBdUJDLEtBQUssSUFBNUIsRUFBYjs7QUFFQSxZQUFNQyxVQUFVLEVBQWhCO0FBQ0EsWUFBTSxFQUFFQyxJQUFGLEVBQVFDLEtBQVIsRUFBZUMsSUFBZixLQUF3QlYsSUFBSVcsT0FBSixDQUFZQyxJQUExQzs7QUFFQSxVQUFJSCxLQUFKLEVBQVc7QUFDVEYsZ0JBQVFFLEtBQVIsR0FBZ0JBLEtBQWhCO0FBQ0Q7O0FBRUQsVUFBSUksSUFBSjtBQUNBLFVBQUlMLElBQUosRUFBVTtBQUNSSyxlQUFPLE1BQU0sc0JBQU9MLElBQVAsQ0FBYjs7QUFFQUQsZ0JBQVFPLEVBQVIsR0FBYU4sSUFBYjtBQUNBRCxnQkFBUU0sSUFBUixHQUFlQSxJQUFmO0FBQ0Q7O0FBRUQsVUFBSSw2QkFBaUJILElBQWpCLENBQUosRUFBNEI7QUFDMUIsb0JBQUlLLEtBQUosQ0FBVUwsSUFBVjs7QUFFQUgsZ0JBQVFHLElBQVIsR0FBZSxNQUFNLDJCQUFjQSxJQUFkLENBQXJCOztBQUVBLG9CQUFJSyxLQUFKLENBQVUsY0FBVixFQUEwQlIsUUFBUUcsSUFBbEM7QUFDRDs7QUFFRCxZQUFNTSxjQUFjLE1BQU0sYUFBS0MsaUJBQUwsQ0FBdUJmLEVBQXZCLEVBQTJCSyxPQUEzQixFQUFvQ0gsSUFBcEMsRUFDdkJjLFFBRHVCLENBQ2QsTUFEYyxFQUV2QkMsSUFGdUIsRUFBMUI7O0FBSUFuQixVQUFJb0IsTUFBSixHQUFhLEdBQWI7QUFDQXBCLFVBQUlZLElBQUosR0FBV0ksV0FBWDtBQUNELEtBakNELENBaUNFLE9BQU9LLEdBQVAsRUFBWTtBQUNaQSxVQUFJRCxNQUFKLEdBQWFDLElBQUlELE1BQUosSUFBYyxHQUEzQjtBQUNBcEIsVUFBSXNCLEdBQUosQ0FBUUMsSUFBUixDQUFhLE9BQWIsRUFBc0JGLEdBQXRCLEVBQTJCckIsR0FBM0I7QUFDRDtBQUNGLEciLCJmaWxlIjoiZWRpdFBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCdcbmltcG9ydCB7IFBvc3QgfSBmcm9tICd+L3NlcnZlci9tb2RlbHMnXG5pbXBvcnQgeyB2YWxpZGF0ZVRhZ0FycmF5IH0gZnJvbSAnfi9zZXJ2ZXIvdXRpbHMnXG5pbXBvcnQgeyBjcmVhdGVOZXdUYWdzIH0gZnJvbSAnLi91dGlscydcblxuaW1wb3J0IHsgbG9nIH0gZnJvbSAnfi9zZXJ2ZXIvY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoY3R4LCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaWQgPSBjdHgucGFyYW1zLmlkXG4gICAgY29uc3Qgb3B0cyA9IHsgcnVuVmFsaWRhdG9yczogdHJ1ZSwgbmV3OiB0cnVlIH1cblxuICAgIGNvbnN0IHVwZGF0ZXMgPSB7fVxuICAgIGNvbnN0IHsgcG9zdCwgdGl0bGUsIHRhZ3MgfSA9IGN0eC5yZXF1ZXN0LmJvZHlcblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgdXBkYXRlcy50aXRsZSA9IHRpdGxlXG4gICAgfVxuXG4gICAgbGV0IGh0bWxcbiAgICBpZiAocG9zdCkge1xuICAgICAgaHRtbCA9IGF3YWl0IG1hcmtlZChwb3N0KVxuXG4gICAgICB1cGRhdGVzLm1kID0gcG9zdFxuICAgICAgdXBkYXRlcy5odG1sID0gaHRtbFxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZVRhZ0FycmF5KHRhZ3MpKSB7XG4gICAgICBsb2cuZGVidWcodGFncylcblxuICAgICAgdXBkYXRlcy50YWdzID0gYXdhaXQgY3JlYXRlTmV3VGFncyh0YWdzKVxuXG4gICAgICBsb2cuZGVidWcoJ3VwZGF0ZXMgdGFncycsIHVwZGF0ZXMudGFncylcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkUG9zdCA9IGF3YWl0IFBvc3QuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHVwZGF0ZXMsIG9wdHMpXG4gICAgICAucG9wdWxhdGUoJ3RhZ3MnKVxuICAgICAgLmV4ZWMoKVxuXG4gICAgY3R4LnN0YXR1cyA9IDIwMFxuICAgIGN0eC5ib2R5ID0gdXBkYXRlZFBvc3RcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZXJyLnN0YXR1cyA9IGVyci5zdGF0dXMgfHwgNDAwXG4gICAgY3R4LmFwcC5lbWl0KCdlcnJvcicsIGVyciwgY3R4KVxuICB9XG59XG4iXX0=