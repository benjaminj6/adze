'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../../../models');

var _utils = require('../../../utils');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    try {
      const deletedPost = yield _models.Post.findByIdAndRemove(ctx.params.id);

      if (!deletedPost) {
        const err = (0, _utils.createError)(404, 'No posts with this id were found. Please use a valid id');
        throw err;
      }

      ctx.status = 200;
      ctx.body = 'Post removed successfully';
    } catch (err) {
      err.status = err.status;
      ctx.app.emit('error', err, ctx);
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3Bvc3RzL2NvbnRyb2xsZXIvZGVsZXRlUG9zdC5qcyJdLCJuYW1lcyI6WyJjdHgiLCJuZXh0IiwiZGVsZXRlZFBvc3QiLCJmaW5kQnlJZEFuZFJlbW92ZSIsInBhcmFtcyIsImlkIiwiZXJyIiwic3RhdHVzIiwiYm9keSIsImFwcCIsImVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7OzsrQkFFZSxXQUFPQSxHQUFQLEVBQVlDLElBQVosRUFBcUI7QUFDbEMsUUFBSTtBQUNGLFlBQU1DLGNBQWMsTUFBTSxhQUFLQyxpQkFBTCxDQUF1QkgsSUFBSUksTUFBSixDQUFXQyxFQUFsQyxDQUExQjs7QUFFQSxVQUFJLENBQUNILFdBQUwsRUFBa0I7QUFDaEIsY0FBTUksTUFBTSx3QkFBWSxHQUFaLEVBQWlCLHlEQUFqQixDQUFaO0FBQ0EsY0FBTUEsR0FBTjtBQUNEOztBQUVETixVQUFJTyxNQUFKLEdBQWEsR0FBYjtBQUNBUCxVQUFJUSxJQUFKLEdBQVcsMkJBQVg7QUFDRCxLQVZELENBVUUsT0FBT0YsR0FBUCxFQUFZO0FBQ1pBLFVBQUlDLE1BQUosR0FBYUQsSUFBSUMsTUFBakI7QUFDQVAsVUFBSVMsR0FBSixDQUFRQyxJQUFSLENBQWEsT0FBYixFQUFzQkosR0FBdEIsRUFBMkJOLEdBQTNCO0FBQ0Q7QUFDRixHIiwiZmlsZSI6ImRlbGV0ZVBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3N0IH0gZnJvbSAnfi9zZXJ2ZXIvbW9kZWxzJ1xuaW1wb3J0IHsgY3JlYXRlRXJyb3IgfSBmcm9tICd+L3NlcnZlci91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGN0eCwgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRlbGV0ZWRQb3N0ID0gYXdhaXQgUG9zdC5maW5kQnlJZEFuZFJlbW92ZShjdHgucGFyYW1zLmlkKVxuXG4gICAgaWYgKCFkZWxldGVkUG9zdCkge1xuICAgICAgY29uc3QgZXJyID0gY3JlYXRlRXJyb3IoNDA0LCAnTm8gcG9zdHMgd2l0aCB0aGlzIGlkIHdlcmUgZm91bmQuIFBsZWFzZSB1c2UgYSB2YWxpZCBpZCcpXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBjdHguc3RhdHVzID0gMjAwXG4gICAgY3R4LmJvZHkgPSAnUG9zdCByZW1vdmVkIHN1Y2Nlc3NmdWxseSdcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZXJyLnN0YXR1cyA9IGVyci5zdGF0dXNcbiAgICBjdHguYXBwLmVtaXQoJ2Vycm9yJywgZXJyLCBjdHgpXG4gIH1cbn1cbiJdfQ==