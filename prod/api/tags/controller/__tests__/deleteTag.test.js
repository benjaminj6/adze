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
  t.context.query = _sinon2.default.mock(_models.Tag).expects('findByIdAndRemove');
  t.context.next = _sinon2.default.spy();
  t.context.ctx = {
    app: { emit: () => {} }
  };
  t.context.emitter = _sinon2.default.spy(t.context.ctx.app, 'emit');

  _sinon2.default.stub(_models.Tag, 'removePostsRelatedToId').resolves();
});

_ava2.default.afterEach.always(t => {
  _models.Tag.findByIdAndRemove.restore();
  _models.Tag.removePostsRelatedToId.restore();
  t.context.ctx.app.emit.restore();
  t.context.emitter.reset();
  t.context.next.reset();
});

_ava2.default.serial('should return the deleted item and status 200', (() => {
  var _ref = _asyncToGenerator(function* (t) {
    const { query, ctx, next, emitter } = t.context;
    ctx.params = { id: 2 };
    const tag = (0, _testUtils.createTags)(1);
    query.withArgs(2).resolves(tag);

    yield (0, _.deleteTag)(ctx, next);
    t.false(next.calledOnce);
    t.false(emitter.calledOnce);
    t.is(ctx.status, 200);
    t.is(ctx.body, tag);
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

_ava2.default.serial('should propagate err if query returns nothing', (() => {
  var _ref2 = _asyncToGenerator(function* (t) {
    const { query, ctx, next, emitter } = t.context;
    ctx.params = { id: 2 };
    query.resolves(undefined);

    yield (0, _.deleteTag)(ctx, next);
    const err = emitter.args[0][1];

    t.true(emitter.calledOnce);
    t.false(next.calledOnce);
    t.is(err.status, 404);
    t.regex(err.message, /No tags with the specified id were found/);
  });

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
})());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3RhZ3MvY29udHJvbGxlci9fX3Rlc3RzX18vZGVsZXRlVGFnLnRlc3QuanMiXSwibmFtZXMiOlsiYmVmb3JlRWFjaCIsInQiLCJjb250ZXh0IiwicXVlcnkiLCJtb2NrIiwiZXhwZWN0cyIsIm5leHQiLCJzcHkiLCJjdHgiLCJhcHAiLCJlbWl0IiwiZW1pdHRlciIsInN0dWIiLCJyZXNvbHZlcyIsImFmdGVyRWFjaCIsImFsd2F5cyIsImZpbmRCeUlkQW5kUmVtb3ZlIiwicmVzdG9yZSIsInJlbW92ZVBvc3RzUmVsYXRlZFRvSWQiLCJyZXNldCIsInNlcmlhbCIsInBhcmFtcyIsImlkIiwidGFnIiwid2l0aEFyZ3MiLCJmYWxzZSIsImNhbGxlZE9uY2UiLCJpcyIsInN0YXR1cyIsImJvZHkiLCJ1bmRlZmluZWQiLCJlcnIiLCJhcmdzIiwidHJ1ZSIsInJlZ2V4IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLGNBQUtBLFVBQUwsQ0FBZ0JDLEtBQUs7QUFDbkJBLElBQUVDLE9BQUYsQ0FBVUMsS0FBVixHQUFrQixnQkFBTUMsSUFBTixjQUNmQyxPQURlLENBQ1AsbUJBRE8sQ0FBbEI7QUFFQUosSUFBRUMsT0FBRixDQUFVSSxJQUFWLEdBQWlCLGdCQUFNQyxHQUFOLEVBQWpCO0FBQ0FOLElBQUVDLE9BQUYsQ0FBVU0sR0FBVixHQUFnQjtBQUNkQyxTQUFLLEVBQUVDLE1BQU0sTUFBTSxDQUFFLENBQWhCO0FBRFMsR0FBaEI7QUFHQVQsSUFBRUMsT0FBRixDQUFVUyxPQUFWLEdBQW9CLGdCQUFNSixHQUFOLENBQVVOLEVBQUVDLE9BQUYsQ0FBVU0sR0FBVixDQUFjQyxHQUF4QixFQUE2QixNQUE3QixDQUFwQjs7QUFFQSxrQkFBTUcsSUFBTixjQUFnQix3QkFBaEIsRUFBMENDLFFBQTFDO0FBQ0QsQ0FWRDs7QUFZQSxjQUFLQyxTQUFMLENBQWVDLE1BQWYsQ0FBc0JkLEtBQUs7QUFDekIsY0FBSWUsaUJBQUosQ0FBc0JDLE9BQXRCO0FBQ0EsY0FBSUMsc0JBQUosQ0FBMkJELE9BQTNCO0FBQ0FoQixJQUFFQyxPQUFGLENBQVVNLEdBQVYsQ0FBY0MsR0FBZCxDQUFrQkMsSUFBbEIsQ0FBdUJPLE9BQXZCO0FBQ0FoQixJQUFFQyxPQUFGLENBQVVTLE9BQVYsQ0FBa0JRLEtBQWxCO0FBQ0FsQixJQUFFQyxPQUFGLENBQVVJLElBQVYsQ0FBZWEsS0FBZjtBQUNELENBTkQ7O0FBUUEsY0FBS0MsTUFBTCxDQUFZLCtDQUFaO0FBQUEsK0JBQTZELFdBQU1uQixDQUFOLEVBQVc7QUFDdEUsVUFBTSxFQUFFRSxLQUFGLEVBQVNLLEdBQVQsRUFBY0YsSUFBZCxFQUFvQkssT0FBcEIsS0FBZ0NWLEVBQUVDLE9BQXhDO0FBQ0FNLFFBQUlhLE1BQUosR0FBYSxFQUFFQyxJQUFJLENBQU4sRUFBYjtBQUNBLFVBQU1DLE1BQU0sMkJBQVcsQ0FBWCxDQUFaO0FBQ0FwQixVQUNHcUIsUUFESCxDQUNZLENBRFosRUFFR1gsUUFGSCxDQUVZVSxHQUZaOztBQUlBLFVBQU0saUJBQVVmLEdBQVYsRUFBZUYsSUFBZixDQUFOO0FBQ0FMLE1BQUV3QixLQUFGLENBQVFuQixLQUFLb0IsVUFBYjtBQUNBekIsTUFBRXdCLEtBQUYsQ0FBUWQsUUFBUWUsVUFBaEI7QUFDQXpCLE1BQUUwQixFQUFGLENBQUtuQixJQUFJb0IsTUFBVCxFQUFpQixHQUFqQjtBQUNBM0IsTUFBRTBCLEVBQUYsQ0FBS25CLElBQUlxQixJQUFULEVBQWVOLEdBQWY7QUFDRCxHQWJEOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWVBLGNBQUtILE1BQUwsQ0FBWSwrQ0FBWjtBQUFBLGdDQUE2RCxXQUFNbkIsQ0FBTixFQUFXO0FBQ3RFLFVBQU0sRUFBRUUsS0FBRixFQUFTSyxHQUFULEVBQWNGLElBQWQsRUFBb0JLLE9BQXBCLEtBQWdDVixFQUFFQyxPQUF4QztBQUNBTSxRQUFJYSxNQUFKLEdBQWEsRUFBRUMsSUFBSSxDQUFOLEVBQWI7QUFDQW5CLFVBQU1VLFFBQU4sQ0FBZWlCLFNBQWY7O0FBRUEsVUFBTSxpQkFBVXRCLEdBQVYsRUFBZUYsSUFBZixDQUFOO0FBQ0EsVUFBTXlCLE1BQU1wQixRQUFRcUIsSUFBUixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBWjs7QUFFQS9CLE1BQUVnQyxJQUFGLENBQU90QixRQUFRZSxVQUFmO0FBQ0F6QixNQUFFd0IsS0FBRixDQUFRbkIsS0FBS29CLFVBQWI7QUFDQXpCLE1BQUUwQixFQUFGLENBQUtJLElBQUlILE1BQVQsRUFBaUIsR0FBakI7QUFDQTNCLE1BQUVpQyxLQUFGLENBQVFILElBQUlJLE9BQVosRUFBcUIsMENBQXJCO0FBQ0QsR0FaRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJkZWxldGVUYWcudGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZXN0IGZyb20gJ2F2YSdcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbidcbmltcG9ydCAnc2lub24tbW9uZ29vc2UnXG5pbXBvcnQgJ3Npbm9uLWFzLXByb21pc2VkJ1xuXG5pbXBvcnQgeyBUYWcgfSBmcm9tICd+L3NlcnZlci9tb2RlbHMnXG5pbXBvcnQgeyBjcmVhdGVUYWdzIH0gZnJvbSAnfi9zZXJ2ZXIvdXRpbHMvdGVzdC11dGlscydcbmltcG9ydCB7IGRlbGV0ZVRhZyB9IGZyb20gJy4uJ1xuXG50ZXN0LmJlZm9yZUVhY2godCA9PiB7XG4gIHQuY29udGV4dC5xdWVyeSA9IHNpbm9uLm1vY2soVGFnKVxuICAgIC5leHBlY3RzKCdmaW5kQnlJZEFuZFJlbW92ZScpXG4gIHQuY29udGV4dC5uZXh0ID0gc2lub24uc3B5KClcbiAgdC5jb250ZXh0LmN0eCA9IHtcbiAgICBhcHA6IHsgZW1pdDogKCkgPT4ge30gfVxuICB9XG4gIHQuY29udGV4dC5lbWl0dGVyID0gc2lub24uc3B5KHQuY29udGV4dC5jdHguYXBwLCAnZW1pdCcpXG5cbiAgc2lub24uc3R1YihUYWcsICdyZW1vdmVQb3N0c1JlbGF0ZWRUb0lkJykucmVzb2x2ZXMoKVxufSlcblxudGVzdC5hZnRlckVhY2guYWx3YXlzKHQgPT4ge1xuICBUYWcuZmluZEJ5SWRBbmRSZW1vdmUucmVzdG9yZSgpXG4gIFRhZy5yZW1vdmVQb3N0c1JlbGF0ZWRUb0lkLnJlc3RvcmUoKVxuICB0LmNvbnRleHQuY3R4LmFwcC5lbWl0LnJlc3RvcmUoKVxuICB0LmNvbnRleHQuZW1pdHRlci5yZXNldCgpXG4gIHQuY29udGV4dC5uZXh0LnJlc2V0KClcbn0pXG5cbnRlc3Quc2VyaWFsKCdzaG91bGQgcmV0dXJuIHRoZSBkZWxldGVkIGl0ZW0gYW5kIHN0YXR1cyAyMDAnLCBhc3luYyB0ID0+IHtcbiAgY29uc3QgeyBxdWVyeSwgY3R4LCBuZXh0LCBlbWl0dGVyIH0gPSB0LmNvbnRleHRcbiAgY3R4LnBhcmFtcyA9IHsgaWQ6IDIgfVxuICBjb25zdCB0YWcgPSBjcmVhdGVUYWdzKDEpXG4gIHF1ZXJ5XG4gICAgLndpdGhBcmdzKDIpXG4gICAgLnJlc29sdmVzKHRhZylcblxuICBhd2FpdCBkZWxldGVUYWcoY3R4LCBuZXh0KVxuICB0LmZhbHNlKG5leHQuY2FsbGVkT25jZSlcbiAgdC5mYWxzZShlbWl0dGVyLmNhbGxlZE9uY2UpXG4gIHQuaXMoY3R4LnN0YXR1cywgMjAwKVxuICB0LmlzKGN0eC5ib2R5LCB0YWcpXG59KVxuXG50ZXN0LnNlcmlhbCgnc2hvdWxkIHByb3BhZ2F0ZSBlcnIgaWYgcXVlcnkgcmV0dXJucyBub3RoaW5nJywgYXN5bmMgdCA9PiB7XG4gIGNvbnN0IHsgcXVlcnksIGN0eCwgbmV4dCwgZW1pdHRlciB9ID0gdC5jb250ZXh0XG4gIGN0eC5wYXJhbXMgPSB7IGlkOiAyIH1cbiAgcXVlcnkucmVzb2x2ZXModW5kZWZpbmVkKVxuXG4gIGF3YWl0IGRlbGV0ZVRhZyhjdHgsIG5leHQpXG4gIGNvbnN0IGVyciA9IGVtaXR0ZXIuYXJnc1swXVsxXVxuXG4gIHQudHJ1ZShlbWl0dGVyLmNhbGxlZE9uY2UpXG4gIHQuZmFsc2UobmV4dC5jYWxsZWRPbmNlKVxuICB0LmlzKGVyci5zdGF0dXMsIDQwNClcbiAgdC5yZWdleChlcnIubWVzc2FnZSwgL05vIHRhZ3Mgd2l0aCB0aGUgc3BlY2lmaWVkIGlkIHdlcmUgZm91bmQvKVxufSlcbiJdfQ==