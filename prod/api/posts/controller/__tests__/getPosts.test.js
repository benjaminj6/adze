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

let query;
let next;
let ctx = {
  app: { emit: () => {} }
};

_ava2.default.beforeEach(() => {
  query = _sinon2.default.mock(_models.Post).expects('find').chain('sort').withArgs('-date').chain('populate').withArgs('tags');
  next = _sinon2.default.spy();
});

_ava2.default.afterEach(() => {
  _models.Post.find.restore();
  next.reset();
  query.reset();
});

_ava2.default.serial('getPosts() -- should return posts from db by most recent (200)', (() => {
  var _ref = _asyncToGenerator(function* (t) {
    query.resolves((0, _testUtils.createPosts)(5));
    yield (0, _.getPosts)(ctx, next);

    t.is(ctx.status, 200);
    t.true(ctx.body.length === 5);
    t.false(next.calledOnce);
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

_ava2.default.serial('getPosts() -- should propagate error (404)', (() => {
  var _ref2 = _asyncToGenerator(function* (t) {
    query.rejects(new Error('test'));
    const emitter = _sinon2.default.spy(ctx.app, 'emit');

    yield (0, _.getPosts)(ctx, next);
    const err = emitter.args[0][1];

    t.is(err.status, 404);
    t.is(err.message, 'test');
    t.true(emitter.calledOnce);
  });

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
})());

_ava2.default.todo('should propagate error if tags are not an array');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3Bvc3RzL2NvbnRyb2xsZXIvX190ZXN0c19fL2dldFBvc3RzLnRlc3QuanMiXSwibmFtZXMiOlsicXVlcnkiLCJuZXh0IiwiY3R4IiwiYXBwIiwiZW1pdCIsImJlZm9yZUVhY2giLCJtb2NrIiwiZXhwZWN0cyIsImNoYWluIiwid2l0aEFyZ3MiLCJzcHkiLCJhZnRlckVhY2giLCJmaW5kIiwicmVzdG9yZSIsInJlc2V0Iiwic2VyaWFsIiwidCIsInJlc29sdmVzIiwiaXMiLCJzdGF0dXMiLCJ0cnVlIiwiYm9keSIsImxlbmd0aCIsImZhbHNlIiwiY2FsbGVkT25jZSIsInJlamVjdHMiLCJFcnJvciIsImVtaXR0ZXIiLCJlcnIiLCJhcmdzIiwibWVzc2FnZSIsInRvZG8iXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxLQUFKO0FBQ0EsSUFBSUMsSUFBSjtBQUNBLElBQUlDLE1BQU07QUFDUkMsT0FBSyxFQUFFQyxNQUFNLE1BQU0sQ0FBRSxDQUFoQjtBQURHLENBQVY7O0FBSUEsY0FBS0MsVUFBTCxDQUFnQixNQUFNO0FBQ3BCTCxVQUFRLGdCQUFNTSxJQUFOLGVBQ0xDLE9BREssQ0FDRyxNQURILEVBRUxDLEtBRkssQ0FFQyxNQUZELEVBRVNDLFFBRlQsQ0FFa0IsT0FGbEIsRUFHTEQsS0FISyxDQUdDLFVBSEQsRUFHYUMsUUFIYixDQUdzQixNQUh0QixDQUFSO0FBSUFSLFNBQU8sZ0JBQU1TLEdBQU4sRUFBUDtBQUNELENBTkQ7O0FBUUEsY0FBS0MsU0FBTCxDQUFlLE1BQU07QUFDbkIsZUFBS0MsSUFBTCxDQUFVQyxPQUFWO0FBQ0FaLE9BQUthLEtBQUw7QUFDQWQsUUFBTWMsS0FBTjtBQUNELENBSkQ7O0FBTUEsY0FBS0MsTUFBTCxDQUFZLGdFQUFaO0FBQUEsK0JBQThFLFdBQU1DLENBQU4sRUFBVztBQUN2RmhCLFVBQU1pQixRQUFOLENBQWUsNEJBQVksQ0FBWixDQUFmO0FBQ0EsVUFBTSxnQkFBU2YsR0FBVCxFQUFjRCxJQUFkLENBQU47O0FBRUFlLE1BQUVFLEVBQUYsQ0FBS2hCLElBQUlpQixNQUFULEVBQWlCLEdBQWpCO0FBQ0FILE1BQUVJLElBQUYsQ0FBT2xCLElBQUltQixJQUFKLENBQVNDLE1BQVQsS0FBb0IsQ0FBM0I7QUFDQU4sTUFBRU8sS0FBRixDQUFRdEIsS0FBS3VCLFVBQWI7QUFDRCxHQVBEOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBLGNBQUtULE1BQUwsQ0FBWSw0Q0FBWjtBQUFBLGdDQUEwRCxXQUFNQyxDQUFOLEVBQVc7QUFDbkVoQixVQUFNeUIsT0FBTixDQUFjLElBQUlDLEtBQUosQ0FBVSxNQUFWLENBQWQ7QUFDQSxVQUFNQyxVQUFVLGdCQUFNakIsR0FBTixDQUFVUixJQUFJQyxHQUFkLEVBQW1CLE1BQW5CLENBQWhCOztBQUVBLFVBQU0sZ0JBQVNELEdBQVQsRUFBY0QsSUFBZCxDQUFOO0FBQ0EsVUFBTTJCLE1BQU1ELFFBQVFFLElBQVIsQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQVo7O0FBRUFiLE1BQUVFLEVBQUYsQ0FBS1UsSUFBSVQsTUFBVCxFQUFpQixHQUFqQjtBQUNBSCxNQUFFRSxFQUFGLENBQUtVLElBQUlFLE9BQVQsRUFBa0IsTUFBbEI7QUFDQWQsTUFBRUksSUFBRixDQUFPTyxRQUFRSCxVQUFmO0FBQ0QsR0FWRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFZQSxjQUFLTyxJQUFMLENBQVUsaURBQVYiLCJmaWxlIjoiZ2V0UG9zdHMudGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZXN0IGZyb20gJ2F2YSdcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbidcbmltcG9ydCAnc2lub24tbW9uZ29vc2UnXG5pbXBvcnQgJ3Npbm9uLWFzLXByb21pc2VkJ1xuXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnfi9zZXJ2ZXIvbW9kZWxzJ1xuaW1wb3J0IHsgY3JlYXRlUG9zdHMgfSBmcm9tICd+L3NlcnZlci91dGlscy90ZXN0LXV0aWxzJ1xuaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tICcuLidcblxubGV0IHF1ZXJ5XG5sZXQgbmV4dFxubGV0IGN0eCA9IHtcbiAgYXBwOiB7IGVtaXQ6ICgpID0+IHt9IH1cbn1cblxudGVzdC5iZWZvcmVFYWNoKCgpID0+IHtcbiAgcXVlcnkgPSBzaW5vbi5tb2NrKFBvc3QpXG4gICAgLmV4cGVjdHMoJ2ZpbmQnKVxuICAgIC5jaGFpbignc29ydCcpLndpdGhBcmdzKCctZGF0ZScpXG4gICAgLmNoYWluKCdwb3B1bGF0ZScpLndpdGhBcmdzKCd0YWdzJylcbiAgbmV4dCA9IHNpbm9uLnNweSgpXG59KVxuXG50ZXN0LmFmdGVyRWFjaCgoKSA9PiB7XG4gIFBvc3QuZmluZC5yZXN0b3JlKClcbiAgbmV4dC5yZXNldCgpXG4gIHF1ZXJ5LnJlc2V0KClcbn0pXG5cbnRlc3Quc2VyaWFsKCdnZXRQb3N0cygpIC0tIHNob3VsZCByZXR1cm4gcG9zdHMgZnJvbSBkYiBieSBtb3N0IHJlY2VudCAoMjAwKScsIGFzeW5jIHQgPT4ge1xuICBxdWVyeS5yZXNvbHZlcyhjcmVhdGVQb3N0cyg1KSlcbiAgYXdhaXQgZ2V0UG9zdHMoY3R4LCBuZXh0KVxuXG4gIHQuaXMoY3R4LnN0YXR1cywgMjAwKVxuICB0LnRydWUoY3R4LmJvZHkubGVuZ3RoID09PSA1KVxuICB0LmZhbHNlKG5leHQuY2FsbGVkT25jZSlcbn0pXG5cbnRlc3Quc2VyaWFsKCdnZXRQb3N0cygpIC0tIHNob3VsZCBwcm9wYWdhdGUgZXJyb3IgKDQwNCknLCBhc3luYyB0ID0+IHtcbiAgcXVlcnkucmVqZWN0cyhuZXcgRXJyb3IoJ3Rlc3QnKSlcbiAgY29uc3QgZW1pdHRlciA9IHNpbm9uLnNweShjdHguYXBwLCAnZW1pdCcpXG5cbiAgYXdhaXQgZ2V0UG9zdHMoY3R4LCBuZXh0KVxuICBjb25zdCBlcnIgPSBlbWl0dGVyLmFyZ3NbMF1bMV1cblxuICB0LmlzKGVyci5zdGF0dXMsIDQwNClcbiAgdC5pcyhlcnIubWVzc2FnZSwgJ3Rlc3QnKVxuICB0LnRydWUoZW1pdHRlci5jYWxsZWRPbmNlKVxufSlcblxudGVzdC50b2RvKCdzaG91bGQgcHJvcGFnYXRlIGVycm9yIGlmIHRhZ3MgYXJlIG5vdCBhbiBhcnJheScpXG4iXX0=