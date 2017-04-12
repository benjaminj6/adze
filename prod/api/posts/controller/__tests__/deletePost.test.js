'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

require('sinon-mongoose');

require('sinon-as-promised');

var _models = require('../../../../models');

var _testUtils = require('../../../../utils/test-utils');

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_ava2.default.beforeEach(t => {
  t.context.query = _sinon2.default.mock(_models.Post).expects('findByIdAndRemove').withArgs(2);
  t.context.next = _sinon2.default.spy();
  t.context.ctx = {
    app: { emit: () => {} }
  };
  t.context.emitter = _sinon2.default.spy(t.context.ctx.app, 'emit');
});

_ava2.default.afterEach(t => {
  _models.Post.findByIdAndRemove.restore();
  t.context.ctx.app.emit.restore();
  t.context.emitter.reset();
  t.context.next.reset();
});

_ava2.default.serial('deletePost() -- should return the deleted item', (() => {
  var _ref = _asyncToGenerator(function* (t) {
    const { query, ctx, next } = t.context;
    ctx.params = { id: 2 };
    query.resolves((0, _testUtils.createPosts)(1));

    yield (0, _.deletePost)(ctx, next);
    t.is(ctx.status, 200);
    t.false(next.calledOnce);
    t.is(ctx.body, 'Post removed successfully');
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

_ava2.default.serial('deletePost() -- should propagate err if query returns nothing', (() => {
  var _ref2 = _asyncToGenerator(function* (t) {
    const { query, ctx, next, emitter } = t.context;
    ctx.params = { id: 2 };
    query.resolves(undefined);

    yield (0, _.deletePost)(ctx, next);
    const err = emitter.args[0][1];

    t.true(emitter.calledOnce);
    t.false(next.calledOnce);
    t.is(err.status, 404);
    t.regex(err.message, /No posts with this id were found/);
  });

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
})());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3Bvc3RzL2NvbnRyb2xsZXIvX190ZXN0c19fL2RlbGV0ZVBvc3QudGVzdC5qcyJdLCJuYW1lcyI6WyJiZWZvcmVFYWNoIiwidCIsImNvbnRleHQiLCJxdWVyeSIsIm1vY2siLCJleHBlY3RzIiwid2l0aEFyZ3MiLCJuZXh0Iiwic3B5IiwiY3R4IiwiYXBwIiwiZW1pdCIsImVtaXR0ZXIiLCJhZnRlckVhY2giLCJmaW5kQnlJZEFuZFJlbW92ZSIsInJlc3RvcmUiLCJyZXNldCIsInNlcmlhbCIsInBhcmFtcyIsImlkIiwicmVzb2x2ZXMiLCJpcyIsInN0YXR1cyIsImZhbHNlIiwiY2FsbGVkT25jZSIsImJvZHkiLCJ1bmRlZmluZWQiLCJlcnIiLCJhcmdzIiwidHJ1ZSIsInJlZ2V4IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLGNBQUtBLFVBQUwsQ0FBZ0JDLEtBQUs7QUFDbkJBLElBQUVDLE9BQUYsQ0FBVUMsS0FBVixHQUFrQixnQkFBTUMsSUFBTixlQUNiQyxPQURhLENBQ0wsbUJBREssRUFDZ0JDLFFBRGhCLENBQ3lCLENBRHpCLENBQWxCO0FBRUFMLElBQUVDLE9BQUYsQ0FBVUssSUFBVixHQUFpQixnQkFBTUMsR0FBTixFQUFqQjtBQUNBUCxJQUFFQyxPQUFGLENBQVVPLEdBQVYsR0FBZ0I7QUFDZEMsU0FBSyxFQUFFQyxNQUFNLE1BQU0sQ0FBRSxDQUFoQjtBQURTLEdBQWhCO0FBR0FWLElBQUVDLE9BQUYsQ0FBVVUsT0FBVixHQUFvQixnQkFBTUosR0FBTixDQUFVUCxFQUFFQyxPQUFGLENBQVVPLEdBQVYsQ0FBY0MsR0FBeEIsRUFBNkIsTUFBN0IsQ0FBcEI7QUFDRCxDQVJEOztBQVVBLGNBQUtHLFNBQUwsQ0FBZVosS0FBSztBQUNsQixlQUFLYSxpQkFBTCxDQUF1QkMsT0FBdkI7QUFDQWQsSUFBRUMsT0FBRixDQUFVTyxHQUFWLENBQWNDLEdBQWQsQ0FBa0JDLElBQWxCLENBQXVCSSxPQUF2QjtBQUNBZCxJQUFFQyxPQUFGLENBQVVVLE9BQVYsQ0FBa0JJLEtBQWxCO0FBQ0FmLElBQUVDLE9BQUYsQ0FBVUssSUFBVixDQUFlUyxLQUFmO0FBQ0QsQ0FMRDs7QUFPQSxjQUFLQyxNQUFMLENBQVksZ0RBQVo7QUFBQSwrQkFBOEQsV0FBTWhCLENBQU4sRUFBVztBQUN2RSxVQUFNLEVBQUVFLEtBQUYsRUFBU00sR0FBVCxFQUFjRixJQUFkLEtBQXVCTixFQUFFQyxPQUEvQjtBQUNBTyxRQUFJUyxNQUFKLEdBQWEsRUFBRUMsSUFBSSxDQUFOLEVBQWI7QUFDQWhCLFVBQU1pQixRQUFOLENBQWUsNEJBQVksQ0FBWixDQUFmOztBQUVBLFVBQU0sa0JBQVdYLEdBQVgsRUFBZ0JGLElBQWhCLENBQU47QUFDQU4sTUFBRW9CLEVBQUYsQ0FBS1osSUFBSWEsTUFBVCxFQUFpQixHQUFqQjtBQUNBckIsTUFBRXNCLEtBQUYsQ0FBUWhCLEtBQUtpQixVQUFiO0FBQ0F2QixNQUFFb0IsRUFBRixDQUFLWixJQUFJZ0IsSUFBVCxFQUFlLDJCQUFmO0FBQ0QsR0FURDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFXQSxjQUFLUixNQUFMLENBQVksK0RBQVo7QUFBQSxnQ0FBNkUsV0FBTWhCLENBQU4sRUFBVztBQUN0RixVQUFNLEVBQUVFLEtBQUYsRUFBU00sR0FBVCxFQUFjRixJQUFkLEVBQW9CSyxPQUFwQixLQUFnQ1gsRUFBRUMsT0FBeEM7QUFDQU8sUUFBSVMsTUFBSixHQUFhLEVBQUVDLElBQUksQ0FBTixFQUFiO0FBQ0FoQixVQUFNaUIsUUFBTixDQUFlTSxTQUFmOztBQUVBLFVBQU0sa0JBQVdqQixHQUFYLEVBQWdCRixJQUFoQixDQUFOO0FBQ0EsVUFBTW9CLE1BQU1mLFFBQVFnQixJQUFSLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFaOztBQUVBM0IsTUFBRTRCLElBQUYsQ0FBT2pCLFFBQVFZLFVBQWY7QUFDQXZCLE1BQUVzQixLQUFGLENBQVFoQixLQUFLaUIsVUFBYjtBQUNBdkIsTUFBRW9CLEVBQUYsQ0FBS00sSUFBSUwsTUFBVCxFQUFpQixHQUFqQjtBQUNBckIsTUFBRTZCLEtBQUYsQ0FBUUgsSUFBSUksT0FBWixFQUFxQixrQ0FBckI7QUFDRCxHQVpEOztBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImRlbGV0ZVBvc3QudGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZXN0IGZyb20gJ2F2YSdcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbidcbmltcG9ydCAnc2lub24tbW9uZ29vc2UnXG5pbXBvcnQgJ3Npbm9uLWFzLXByb21pc2VkJ1xuXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnfi9zZXJ2ZXIvbW9kZWxzJ1xuaW1wb3J0IHsgY3JlYXRlUG9zdHMgfSBmcm9tICd+L3NlcnZlci91dGlscy90ZXN0LXV0aWxzJ1xuaW1wb3J0IHsgZGVsZXRlUG9zdCB9IGZyb20gJy4uJ1xuXG50ZXN0LmJlZm9yZUVhY2godCA9PiB7XG4gIHQuY29udGV4dC5xdWVyeSA9IHNpbm9uLm1vY2soUG9zdClcbiAgICAgIC5leHBlY3RzKCdmaW5kQnlJZEFuZFJlbW92ZScpLndpdGhBcmdzKDIpXG4gIHQuY29udGV4dC5uZXh0ID0gc2lub24uc3B5KClcbiAgdC5jb250ZXh0LmN0eCA9IHtcbiAgICBhcHA6IHsgZW1pdDogKCkgPT4ge30gfVxuICB9XG4gIHQuY29udGV4dC5lbWl0dGVyID0gc2lub24uc3B5KHQuY29udGV4dC5jdHguYXBwLCAnZW1pdCcpXG59KVxuXG50ZXN0LmFmdGVyRWFjaCh0ID0+IHtcbiAgUG9zdC5maW5kQnlJZEFuZFJlbW92ZS5yZXN0b3JlKClcbiAgdC5jb250ZXh0LmN0eC5hcHAuZW1pdC5yZXN0b3JlKClcbiAgdC5jb250ZXh0LmVtaXR0ZXIucmVzZXQoKVxuICB0LmNvbnRleHQubmV4dC5yZXNldCgpXG59KVxuXG50ZXN0LnNlcmlhbCgnZGVsZXRlUG9zdCgpIC0tIHNob3VsZCByZXR1cm4gdGhlIGRlbGV0ZWQgaXRlbScsIGFzeW5jIHQgPT4ge1xuICBjb25zdCB7IHF1ZXJ5LCBjdHgsIG5leHQgfSA9IHQuY29udGV4dFxuICBjdHgucGFyYW1zID0geyBpZDogMiB9XG4gIHF1ZXJ5LnJlc29sdmVzKGNyZWF0ZVBvc3RzKDEpKVxuXG4gIGF3YWl0IGRlbGV0ZVBvc3QoY3R4LCBuZXh0KVxuICB0LmlzKGN0eC5zdGF0dXMsIDIwMClcbiAgdC5mYWxzZShuZXh0LmNhbGxlZE9uY2UpXG4gIHQuaXMoY3R4LmJvZHksICdQb3N0IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5Jylcbn0pXG5cbnRlc3Quc2VyaWFsKCdkZWxldGVQb3N0KCkgLS0gc2hvdWxkIHByb3BhZ2F0ZSBlcnIgaWYgcXVlcnkgcmV0dXJucyBub3RoaW5nJywgYXN5bmMgdCA9PiB7XG4gIGNvbnN0IHsgcXVlcnksIGN0eCwgbmV4dCwgZW1pdHRlciB9ID0gdC5jb250ZXh0XG4gIGN0eC5wYXJhbXMgPSB7IGlkOiAyIH1cbiAgcXVlcnkucmVzb2x2ZXModW5kZWZpbmVkKVxuXG4gIGF3YWl0IGRlbGV0ZVBvc3QoY3R4LCBuZXh0KVxuICBjb25zdCBlcnIgPSBlbWl0dGVyLmFyZ3NbMF1bMV1cblxuICB0LnRydWUoZW1pdHRlci5jYWxsZWRPbmNlKVxuICB0LmZhbHNlKG5leHQuY2FsbGVkT25jZSlcbiAgdC5pcyhlcnIuc3RhdHVzLCA0MDQpXG4gIHQucmVnZXgoZXJyLm1lc3NhZ2UsIC9ObyBwb3N0cyB3aXRoIHRoaXMgaWQgd2VyZSBmb3VuZC8pXG59KVxuIl19