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
    _config.log.debug('runs this controller');
    try {
      const { post, title, tags } = ctx.request.body;
      const html = yield (0, _marked2.default)(post);

      const newPost = {
        title,
        html,
        md: post
      };

      if ((0, _utils.validateTagArray)(tags)) {
        newPost.tags = yield (0, _utils2.createNewTags)(tags);
      }

      const created = yield _models.Post.create(newPost).then(function (doc) {
        return _models.Post.populate(doc, { path: 'tags' });
      });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3Bvc3RzL2NvbnRyb2xsZXIvYWRkUG9zdC5qcyJdLCJuYW1lcyI6WyJjdHgiLCJuZXh0IiwiZGVidWciLCJwb3N0IiwidGl0bGUiLCJ0YWdzIiwicmVxdWVzdCIsImJvZHkiLCJodG1sIiwibmV3UG9zdCIsIm1kIiwiY3JlYXRlZCIsImNyZWF0ZSIsInRoZW4iLCJwb3B1bGF0ZSIsImRvYyIsInBhdGgiLCJzdGF0dXMiLCJlcnIiLCJhcHAiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7OytCQUVlLFdBQU9BLEdBQVAsRUFBWUMsSUFBWixFQUFxQjtBQUNsQyxnQkFBSUMsS0FBSixDQUFVLHNCQUFWO0FBQ0EsUUFBSTtBQUNGLFlBQU0sRUFBRUMsSUFBRixFQUFRQyxLQUFSLEVBQWVDLElBQWYsS0FBd0JMLElBQUlNLE9BQUosQ0FBWUMsSUFBMUM7QUFDQSxZQUFNQyxPQUFPLE1BQU0sc0JBQU9MLElBQVAsQ0FBbkI7O0FBRUEsWUFBTU0sVUFBVTtBQUNkTCxhQURjO0FBRWRJLFlBRmM7QUFHZEUsWUFBSVA7QUFIVSxPQUFoQjs7QUFNQSxVQUFJLDZCQUFpQkUsSUFBakIsQ0FBSixFQUE0QjtBQUMxQkksZ0JBQVFKLElBQVIsR0FBZSxNQUFNLDJCQUFjQSxJQUFkLENBQXJCO0FBQ0Q7O0FBRUQsWUFBTU0sVUFBVSxNQUFNLGFBQUtDLE1BQUwsQ0FBWUgsT0FBWixFQUNuQkksSUFEbUIsQ0FDZDtBQUFBLGVBQU8sYUFBS0MsUUFBTCxDQUFjQyxHQUFkLEVBQW1CLEVBQUVDLE1BQU0sTUFBUixFQUFuQixDQUFQO0FBQUEsT0FEYyxDQUF0Qjs7QUFHQWhCLFVBQUlpQixNQUFKLEdBQWEsR0FBYjtBQUNBakIsVUFBSU8sSUFBSixHQUFXSSxPQUFYO0FBQ0QsS0FuQkQsQ0FtQkUsT0FBT08sR0FBUCxFQUFZO0FBQ1pBLFVBQUlELE1BQUosR0FBYUMsSUFBSUQsTUFBSixJQUFjLEdBQTNCO0FBQ0FqQixVQUFJbUIsR0FBSixDQUFRQyxJQUFSLENBQWEsT0FBYixFQUFzQkYsR0FBdEIsRUFBMkJsQixHQUEzQjtBQUNEO0FBQ0YsRyIsImZpbGUiOiJhZGRQb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnfi9zZXJ2ZXIvbW9kZWxzJ1xuaW1wb3J0IHsgdmFsaWRhdGVUYWdBcnJheSB9IGZyb20gJ34vc2VydmVyL3V0aWxzJ1xuaW1wb3J0IHsgY3JlYXRlTmV3VGFncyB9IGZyb20gJy4vdXRpbHMnXG5cbmltcG9ydCB7IGxvZyB9IGZyb20gJ34vc2VydmVyL2NvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGN0eCwgbmV4dCkgPT4ge1xuICBsb2cuZGVidWcoJ3J1bnMgdGhpcyBjb250cm9sbGVyJylcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHBvc3QsIHRpdGxlLCB0YWdzIH0gPSBjdHgucmVxdWVzdC5ib2R5XG4gICAgY29uc3QgaHRtbCA9IGF3YWl0IG1hcmtlZChwb3N0KVxuXG4gICAgY29uc3QgbmV3UG9zdCA9IHtcbiAgICAgIHRpdGxlLFxuICAgICAgaHRtbCxcbiAgICAgIG1kOiBwb3N0XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlVGFnQXJyYXkodGFncykpIHtcbiAgICAgIG5ld1Bvc3QudGFncyA9IGF3YWl0IGNyZWF0ZU5ld1RhZ3ModGFncylcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVkID0gYXdhaXQgUG9zdC5jcmVhdGUobmV3UG9zdClcbiAgICAgIC50aGVuKGRvYyA9PiBQb3N0LnBvcHVsYXRlKGRvYywgeyBwYXRoOiAndGFncycgfSkpXG5cbiAgICBjdHguc3RhdHVzID0gMjAxXG4gICAgY3R4LmJvZHkgPSBjcmVhdGVkXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGVyci5zdGF0dXMgPSBlcnIuc3RhdHVzIHx8IDQwMFxuICAgIGN0eC5hcHAuZW1pdCgnZXJyb3InLCBlcnIsIGN0eClcbiAgfVxufVxuIl19