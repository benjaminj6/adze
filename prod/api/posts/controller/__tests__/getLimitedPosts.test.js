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
  t.context.ctx = {
    app: { emit: () => {} }
  };
  t.context.emitter = _sinon2.default.spy(t.context.ctx.app, 'emit');
  t.context.next = _sinon2.default.spy();
});

(0, _ava2.default)('getLimitedPosts() -- should return number of posts requested', (() => {
  var _ref = _asyncToGenerator(function* (t) {
    const { next, ctx } = t.context;
    ctx.params = { number: 3 };

    _sinon2.default.mock(_models.Post).expects('find').chain('sort').withArgs('-date').chain('limit').withArgs(3).chain('populate').withArgs('tags').resolves((0, _testUtils.createPosts)(3));

    yield (0, _.getLimitedPosts)(ctx, next);
    t.is(ctx.status, 200);
    t.is(ctx.body.length, 3);
    t.false(next.calledOnce);
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

(0, _ava2.default)('getLimitedPosts() -- should propagate error if no ctx.params.number', (() => {
  var _ref2 = _asyncToGenerator(function* (t) {
    const { emitter, next, ctx } = t.context;
    ctx.params = {};

    yield (0, _.getLimitedPosts)(ctx, next);
    const err = emitter.args[0][1];

    t.true(emitter.calledOnce);
    t.false(next.calledOnce);
    t.is(err.status, 400);
    t.is(err.message, 'Posts must be a whole number above 0');
  });

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
})());

(0, _ava2.default)('getLimitedPosts() -- should propagate error if ctx.params.number === 0', (() => {
  var _ref3 = _asyncToGenerator(function* (t) {
    const { emitter, next, ctx } = t.context;
    ctx.params = { number: 0 };

    yield (0, _.getLimitedPosts)(ctx, next);
    const err = emitter.args[0][1];

    t.true(emitter.calledOnce);
    t.false(next.calledOnce);
    t.is(err.status, 400);
    t.is(err.message, 'Posts must be a whole number above 0');
  });

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
})());

_ava2.default.todo('should propagate error if tags are not an array');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3Bvc3RzL2NvbnRyb2xsZXIvX190ZXN0c19fL2dldExpbWl0ZWRQb3N0cy50ZXN0LmpzIl0sIm5hbWVzIjpbImJlZm9yZUVhY2giLCJ0IiwiY29udGV4dCIsImN0eCIsImFwcCIsImVtaXQiLCJlbWl0dGVyIiwic3B5IiwibmV4dCIsInBhcmFtcyIsIm51bWJlciIsIm1vY2siLCJleHBlY3RzIiwiY2hhaW4iLCJ3aXRoQXJncyIsInJlc29sdmVzIiwiaXMiLCJzdGF0dXMiLCJib2R5IiwibGVuZ3RoIiwiZmFsc2UiLCJjYWxsZWRPbmNlIiwiZXJyIiwiYXJncyIsInRydWUiLCJtZXNzYWdlIiwidG9kbyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLGNBQUtBLFVBQUwsQ0FBZ0JDLEtBQUs7QUFDbkJBLElBQUVDLE9BQUYsQ0FBVUMsR0FBVixHQUFnQjtBQUNkQyxTQUFLLEVBQUVDLE1BQU0sTUFBTSxDQUFFLENBQWhCO0FBRFMsR0FBaEI7QUFHQUosSUFBRUMsT0FBRixDQUFVSSxPQUFWLEdBQW9CLGdCQUFNQyxHQUFOLENBQVVOLEVBQUVDLE9BQUYsQ0FBVUMsR0FBVixDQUFjQyxHQUF4QixFQUE2QixNQUE3QixDQUFwQjtBQUNBSCxJQUFFQyxPQUFGLENBQVVNLElBQVYsR0FBaUIsZ0JBQU1ELEdBQU4sRUFBakI7QUFDRCxDQU5EOztBQVFBLG1CQUFLLDhEQUFMO0FBQUEsK0JBQXFFLFdBQU1OLENBQU4sRUFBVztBQUM5RSxVQUFNLEVBQUVPLElBQUYsRUFBUUwsR0FBUixLQUFnQkYsRUFBRUMsT0FBeEI7QUFDQUMsUUFBSU0sTUFBSixHQUFhLEVBQUVDLFFBQVEsQ0FBVixFQUFiOztBQUVBLG9CQUFNQyxJQUFOLGVBQ0dDLE9BREgsQ0FDVyxNQURYLEVBRUdDLEtBRkgsQ0FFUyxNQUZULEVBRWlCQyxRQUZqQixDQUUwQixPQUYxQixFQUdHRCxLQUhILENBR1MsT0FIVCxFQUdrQkMsUUFIbEIsQ0FHMkIsQ0FIM0IsRUFJR0QsS0FKSCxDQUlTLFVBSlQsRUFJcUJDLFFBSnJCLENBSThCLE1BSjlCLEVBS0dDLFFBTEgsQ0FLWSw0QkFBWSxDQUFaLENBTFo7O0FBT0EsVUFBTSx1QkFBZ0JaLEdBQWhCLEVBQXFCSyxJQUFyQixDQUFOO0FBQ0FQLE1BQUVlLEVBQUYsQ0FBS2IsSUFBSWMsTUFBVCxFQUFpQixHQUFqQjtBQUNBaEIsTUFBRWUsRUFBRixDQUFLYixJQUFJZSxJQUFKLENBQVNDLE1BQWQsRUFBc0IsQ0FBdEI7QUFDQWxCLE1BQUVtQixLQUFGLENBQVFaLEtBQUthLFVBQWI7QUFDRCxHQWZEOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWlCQSxtQkFBSyxxRUFBTDtBQUFBLGdDQUE0RSxXQUFNcEIsQ0FBTixFQUFXO0FBQ3JGLFVBQU0sRUFBRUssT0FBRixFQUFXRSxJQUFYLEVBQWlCTCxHQUFqQixLQUF5QkYsRUFBRUMsT0FBakM7QUFDQUMsUUFBSU0sTUFBSixHQUFhLEVBQWI7O0FBRUEsVUFBTSx1QkFBZ0JOLEdBQWhCLEVBQXFCSyxJQUFyQixDQUFOO0FBQ0EsVUFBTWMsTUFBTWhCLFFBQVFpQixJQUFSLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFaOztBQUVBdEIsTUFBRXVCLElBQUYsQ0FBT2xCLFFBQVFlLFVBQWY7QUFDQXBCLE1BQUVtQixLQUFGLENBQVFaLEtBQUthLFVBQWI7QUFDQXBCLE1BQUVlLEVBQUYsQ0FBS00sSUFBSUwsTUFBVCxFQUFpQixHQUFqQjtBQUNBaEIsTUFBRWUsRUFBRixDQUFLTSxJQUFJRyxPQUFULEVBQWtCLHNDQUFsQjtBQUNELEdBWEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYUEsbUJBQUssd0VBQUw7QUFBQSxnQ0FBK0UsV0FBTXhCLENBQU4sRUFBVztBQUN4RixVQUFNLEVBQUVLLE9BQUYsRUFBV0UsSUFBWCxFQUFpQkwsR0FBakIsS0FBeUJGLEVBQUVDLE9BQWpDO0FBQ0FDLFFBQUlNLE1BQUosR0FBYSxFQUFFQyxRQUFRLENBQVYsRUFBYjs7QUFFQSxVQUFNLHVCQUFnQlAsR0FBaEIsRUFBcUJLLElBQXJCLENBQU47QUFDQSxVQUFNYyxNQUFNaEIsUUFBUWlCLElBQVIsQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQVo7O0FBRUF0QixNQUFFdUIsSUFBRixDQUFPbEIsUUFBUWUsVUFBZjtBQUNBcEIsTUFBRW1CLEtBQUYsQ0FBUVosS0FBS2EsVUFBYjtBQUNBcEIsTUFBRWUsRUFBRixDQUFLTSxJQUFJTCxNQUFULEVBQWlCLEdBQWpCO0FBQ0FoQixNQUFFZSxFQUFGLENBQUtNLElBQUlHLE9BQVQsRUFBa0Isc0NBQWxCO0FBQ0QsR0FYRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhQSxjQUFLQyxJQUFMLENBQVUsaURBQVYiLCJmaWxlIjoiZ2V0TGltaXRlZFBvc3RzLnRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVzdCBmcm9tICdhdmEnXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nXG5pbXBvcnQgJ3Npbm9uLW1vbmdvb3NlJ1xuaW1wb3J0ICdzaW5vbi1hcy1wcm9taXNlZCdcblxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJ34vc2VydmVyL21vZGVscydcbmltcG9ydCB7IGNyZWF0ZVBvc3RzIH0gZnJvbSAnfi9zZXJ2ZXIvdXRpbHMvdGVzdC11dGlscydcbmltcG9ydCB7IGdldExpbWl0ZWRQb3N0cyB9IGZyb20gJy4uJ1xuXG50ZXN0LmJlZm9yZUVhY2godCA9PiB7XG4gIHQuY29udGV4dC5jdHggPSB7XG4gICAgYXBwOiB7IGVtaXQ6ICgpID0+IHt9IH1cbiAgfVxuICB0LmNvbnRleHQuZW1pdHRlciA9IHNpbm9uLnNweSh0LmNvbnRleHQuY3R4LmFwcCwgJ2VtaXQnKVxuICB0LmNvbnRleHQubmV4dCA9IHNpbm9uLnNweSgpXG59KVxuXG50ZXN0KCdnZXRMaW1pdGVkUG9zdHMoKSAtLSBzaG91bGQgcmV0dXJuIG51bWJlciBvZiBwb3N0cyByZXF1ZXN0ZWQnLCBhc3luYyB0ID0+IHtcbiAgY29uc3QgeyBuZXh0LCBjdHggfSA9IHQuY29udGV4dFxuICBjdHgucGFyYW1zID0geyBudW1iZXI6IDMgfVxuXG4gIHNpbm9uLm1vY2soUG9zdClcbiAgICAuZXhwZWN0cygnZmluZCcpXG4gICAgLmNoYWluKCdzb3J0Jykud2l0aEFyZ3MoJy1kYXRlJylcbiAgICAuY2hhaW4oJ2xpbWl0Jykud2l0aEFyZ3MoMylcbiAgICAuY2hhaW4oJ3BvcHVsYXRlJykud2l0aEFyZ3MoJ3RhZ3MnKVxuICAgIC5yZXNvbHZlcyhjcmVhdGVQb3N0cygzKSlcblxuICBhd2FpdCBnZXRMaW1pdGVkUG9zdHMoY3R4LCBuZXh0KVxuICB0LmlzKGN0eC5zdGF0dXMsIDIwMClcbiAgdC5pcyhjdHguYm9keS5sZW5ndGgsIDMpXG4gIHQuZmFsc2UobmV4dC5jYWxsZWRPbmNlKVxufSlcblxudGVzdCgnZ2V0TGltaXRlZFBvc3RzKCkgLS0gc2hvdWxkIHByb3BhZ2F0ZSBlcnJvciBpZiBubyBjdHgucGFyYW1zLm51bWJlcicsIGFzeW5jIHQgPT4ge1xuICBjb25zdCB7IGVtaXR0ZXIsIG5leHQsIGN0eCB9ID0gdC5jb250ZXh0XG4gIGN0eC5wYXJhbXMgPSB7fVxuXG4gIGF3YWl0IGdldExpbWl0ZWRQb3N0cyhjdHgsIG5leHQpXG4gIGNvbnN0IGVyciA9IGVtaXR0ZXIuYXJnc1swXVsxXVxuXG4gIHQudHJ1ZShlbWl0dGVyLmNhbGxlZE9uY2UpXG4gIHQuZmFsc2UobmV4dC5jYWxsZWRPbmNlKVxuICB0LmlzKGVyci5zdGF0dXMsIDQwMClcbiAgdC5pcyhlcnIubWVzc2FnZSwgJ1Bvc3RzIG11c3QgYmUgYSB3aG9sZSBudW1iZXIgYWJvdmUgMCcpXG59KVxuXG50ZXN0KCdnZXRMaW1pdGVkUG9zdHMoKSAtLSBzaG91bGQgcHJvcGFnYXRlIGVycm9yIGlmIGN0eC5wYXJhbXMubnVtYmVyID09PSAwJywgYXN5bmMgdCA9PiB7XG4gIGNvbnN0IHsgZW1pdHRlciwgbmV4dCwgY3R4IH0gPSB0LmNvbnRleHRcbiAgY3R4LnBhcmFtcyA9IHsgbnVtYmVyOiAwIH1cblxuICBhd2FpdCBnZXRMaW1pdGVkUG9zdHMoY3R4LCBuZXh0KVxuICBjb25zdCBlcnIgPSBlbWl0dGVyLmFyZ3NbMF1bMV1cblxuICB0LnRydWUoZW1pdHRlci5jYWxsZWRPbmNlKVxuICB0LmZhbHNlKG5leHQuY2FsbGVkT25jZSlcbiAgdC5pcyhlcnIuc3RhdHVzLCA0MDApXG4gIHQuaXMoZXJyLm1lc3NhZ2UsICdQb3N0cyBtdXN0IGJlIGEgd2hvbGUgbnVtYmVyIGFib3ZlIDAnKVxufSlcblxudGVzdC50b2RvKCdzaG91bGQgcHJvcGFnYXRlIGVycm9yIGlmIHRhZ3MgYXJlIG5vdCBhbiBhcnJheScpXG4iXX0=