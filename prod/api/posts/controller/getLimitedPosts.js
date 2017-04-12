'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../../../models');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    try {
      const numberOfPosts = parseInt(ctx.params.number);

      if (!numberOfPosts || numberOfPosts <= 0) {
        const err = new Error();
        err.message = 'Posts must be a whole number above 0';
        err.status = 400;
        throw err;
      }

      const posts = yield _models.Post.find().sort('-date').limit(numberOfPosts).populate('tags');

      ctx.status = 200;
      ctx.body = posts;
    } catch (err) {
      ctx.app.emit('error', err, ctx);
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3Bvc3RzL2NvbnRyb2xsZXIvZ2V0TGltaXRlZFBvc3RzLmpzIl0sIm5hbWVzIjpbImN0eCIsIm5leHQiLCJudW1iZXJPZlBvc3RzIiwicGFyc2VJbnQiLCJwYXJhbXMiLCJudW1iZXIiLCJlcnIiLCJFcnJvciIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJwb3N0cyIsImZpbmQiLCJzb3J0IiwibGltaXQiLCJwb3B1bGF0ZSIsImJvZHkiLCJhcHAiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7K0JBRWUsV0FBT0EsR0FBUCxFQUFZQyxJQUFaLEVBQXFCO0FBQ2xDLFFBQUk7QUFDRixZQUFNQyxnQkFBZ0JDLFNBQVNILElBQUlJLE1BQUosQ0FBV0MsTUFBcEIsQ0FBdEI7O0FBRUEsVUFBSSxDQUFDSCxhQUFELElBQWtCQSxpQkFBaUIsQ0FBdkMsRUFBMEM7QUFDeEMsY0FBTUksTUFBTSxJQUFJQyxLQUFKLEVBQVo7QUFDQUQsWUFBSUUsT0FBSixHQUFjLHNDQUFkO0FBQ0FGLFlBQUlHLE1BQUosR0FBYSxHQUFiO0FBQ0EsY0FBTUgsR0FBTjtBQUNEOztBQUVELFlBQU1JLFFBQVEsTUFBTSxhQUFLQyxJQUFMLEdBQ2pCQyxJQURpQixDQUNaLE9BRFksRUFFakJDLEtBRmlCLENBRVhYLGFBRlcsRUFHakJZLFFBSGlCLENBR1IsTUFIUSxDQUFwQjs7QUFLQWQsVUFBSVMsTUFBSixHQUFhLEdBQWI7QUFDQVQsVUFBSWUsSUFBSixHQUFXTCxLQUFYO0FBQ0QsS0FqQkQsQ0FpQkUsT0FBT0osR0FBUCxFQUFZO0FBQ1pOLFVBQUlnQixHQUFKLENBQVFDLElBQVIsQ0FBYSxPQUFiLEVBQXNCWCxHQUF0QixFQUEyQk4sR0FBM0I7QUFDRDtBQUNGLEciLCJmaWxlIjoiZ2V0TGltaXRlZFBvc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9zdCB9IGZyb20gJ34vc2VydmVyL21vZGVscydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGN0eCwgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IG51bWJlck9mUG9zdHMgPSBwYXJzZUludChjdHgucGFyYW1zLm51bWJlcilcblxuICAgIGlmICghbnVtYmVyT2ZQb3N0cyB8fCBudW1iZXJPZlBvc3RzIDw9IDApIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcigpXG4gICAgICBlcnIubWVzc2FnZSA9ICdQb3N0cyBtdXN0IGJlIGEgd2hvbGUgbnVtYmVyIGFib3ZlIDAnXG4gICAgICBlcnIuc3RhdHVzID0gNDAwXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IFBvc3QuZmluZCgpXG4gICAgICAuc29ydCgnLWRhdGUnKVxuICAgICAgLmxpbWl0KG51bWJlck9mUG9zdHMpXG4gICAgICAucG9wdWxhdGUoJ3RhZ3MnKVxuXG4gICAgY3R4LnN0YXR1cyA9IDIwMFxuICAgIGN0eC5ib2R5ID0gcG9zdHNcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY3R4LmFwcC5lbWl0KCdlcnJvcicsIGVyciwgY3R4KVxuICB9XG59XG4iXX0=