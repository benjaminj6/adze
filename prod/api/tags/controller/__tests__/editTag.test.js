'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

require('sinon-mongoose');

require('sinon-as-promised');

var _ = require('..');

var _models = require('../../../../models');

var _testUtils = require('../../../../utils/test-utils');

var _utils = require('../../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_ava2.default.beforeEach(t => {
  t.context = {
    query: _sinon2.default.mock(_models.Tag).expects('findByIdAndUpdate'),
    next: _sinon2.default.spy(),
    ctx: {
      app: { emit: () => {} }
    }
  };

  t.context.emitter = _sinon2.default.spy(t.context.ctx.app, 'emit');
});

_ava2.default.afterEach(t => {
  _models.Tag.findByIdAndUpdate.restore();
  t.context.next.reset();
  t.context.emitter.reset();
  t.context.ctx.app.emit.restore();
});

_ava2.default.serial('should return the edited tag', (() => {
  var _ref = _asyncToGenerator(function* (t) {
    const { ctx, query, next, emitter } = t.context;
    ctx.params = { id: 2 };
    ctx.request = { body: { name: 'edited', color: '#f00' } };
    query.withArgs(2, {
      name: 'edited',
      color: '#f00'
    }).chain('exec').resolves((0, _testUtils.createTags)(1));

    yield (0, _.editTag)(ctx, next);
    t.false(next.calledOnce);
    t.false(emitter.calledOnce);
    t.is(ctx.status, 200);
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

_ava2.default.serial('should propagate err with default status (400)', (() => {
  var _ref2 = _asyncToGenerator(function* (t) {
    const { ctx, query, next, emitter } = t.context;
    ctx.params = { id: 'foo' };
    ctx.request = { body: { name: 'test' } };
    query.withArgs('foo', {
      name: 'test'
    }).chain('exec').rejects(new Error('test'));

    yield (0, _.editTag)(ctx, next);
    const err = emitter.args[0][1];

    t.true(emitter.calledOnce);
    t.false(next.calledOnce);
    t.is(err.status, 400);
  });

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
})());

_ava2.default.serial('should propagate err with custom status', (() => {
  var _ref3 = _asyncToGenerator(function* (t) {
    const { ctx, query, next, emitter } = t.context;
    ctx.params = { id: 'foo' };
    ctx.request = { body: { color: 'test' } };
    query.withArgs('foo', {
      color: 'test'
    }).chain('exec').rejects((0, _utils.createError)(401, 'test'));

    yield (0, _.editTag)(ctx, next);
    const err = emitter.args[0][1];

    t.true(emitter.calledOnce);
    t.false(next.calledOnce);
    t.is(err.status, 401);
  });

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
})());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3RhZ3MvY29udHJvbGxlci9fX3Rlc3RzX18vZWRpdFRhZy50ZXN0LmpzIl0sIm5hbWVzIjpbImJlZm9yZUVhY2giLCJ0IiwiY29udGV4dCIsInF1ZXJ5IiwibW9jayIsImV4cGVjdHMiLCJuZXh0Iiwic3B5IiwiY3R4IiwiYXBwIiwiZW1pdCIsImVtaXR0ZXIiLCJhZnRlckVhY2giLCJmaW5kQnlJZEFuZFVwZGF0ZSIsInJlc3RvcmUiLCJyZXNldCIsInNlcmlhbCIsInBhcmFtcyIsImlkIiwicmVxdWVzdCIsImJvZHkiLCJuYW1lIiwiY29sb3IiLCJ3aXRoQXJncyIsImNoYWluIiwicmVzb2x2ZXMiLCJmYWxzZSIsImNhbGxlZE9uY2UiLCJpcyIsInN0YXR1cyIsInJlamVjdHMiLCJFcnJvciIsImVyciIsImFyZ3MiLCJ0cnVlIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsY0FBS0EsVUFBTCxDQUFnQkMsS0FBSztBQUNuQkEsSUFBRUMsT0FBRixHQUFZO0FBQ1ZDLFdBQU8sZ0JBQU1DLElBQU4sY0FBZ0JDLE9BQWhCLENBQXdCLG1CQUF4QixDQURHO0FBRVZDLFVBQU0sZ0JBQU1DLEdBQU4sRUFGSTtBQUdWQyxTQUFLO0FBQ0hDLFdBQUssRUFBRUMsTUFBTSxNQUFNLENBQUUsQ0FBaEI7QUFERjtBQUhLLEdBQVo7O0FBUUFULElBQUVDLE9BQUYsQ0FBVVMsT0FBVixHQUFvQixnQkFBTUosR0FBTixDQUFVTixFQUFFQyxPQUFGLENBQVVNLEdBQVYsQ0FBY0MsR0FBeEIsRUFBNkIsTUFBN0IsQ0FBcEI7QUFDRCxDQVZEOztBQVlBLGNBQUtHLFNBQUwsQ0FBZVgsS0FBSztBQUNsQixjQUFJWSxpQkFBSixDQUFzQkMsT0FBdEI7QUFDQWIsSUFBRUMsT0FBRixDQUFVSSxJQUFWLENBQWVTLEtBQWY7QUFDQWQsSUFB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Q0FBUXBCLEtBQUtxQixVQUFiO0FBQ0ExQixNQUFFMkIsRUFBRixDQUFLSSxJQUFJSCxNQUFULEVBQWlCLEdBQWpCO0FBQ0QsR0FqQkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiZWRpdFRhZy50ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRlc3QgZnJvbSAnYXZhJ1xuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJ1xuaW1wb3J0ICdzaW5vbi1tb25nb29zZSdcbmltcG9ydCAnc2lub24tYXMtcHJvbWlzZWQnXG5cbmltcG9ydCB7IGVkaXRUYWcgfSBmcm9tICcuLidcbmltcG9ydCB7IFRhZyB9IGZyb20gJ34vc2VydmVyL21vZGVscydcbmltcG9ydCB7IGNyZWF0ZVRhZ3MgfSBmcm9tICd+L3NlcnZlci91dGlscy90ZXN0LXV0aWxzJ1xuaW1wb3J0IHsgY3JlYXRlRXJyb3IgfSBmcm9tICd+L3NlcnZlci91dGlscydcblxudGVzdC5iZWZvcmVFYWNoKHQgPT4ge1xuICB0LmNvbnRleHQgPSB7XG4gICAgcXVlcnk6IHNpbm9uLm1vY2soVGFnKS5leHBlY3RzKCdmaW5kQnlJZEFuZFVwZGF0ZScpLFxuICAgIG5leHQ6IHNpbm9uLnNweSgpLFxuICAgIGN0eDoge1xuICAgICAgYXBwOiB7IGVtaXQ6ICgpID0+IHt9IH1cbiAgICB9XG4gIH1cblxuICB0LmNvbnRleHQuZW1pdHRlciA9IHNpbm9uLnNweSh0LmNvbnRleHQuY3R4LmFwcCwgJ2VtaXQnKVxufSlcblxudGVzdC5hZnRlckVhY2godCA9PiB7XG4gIFRhZy5maW5kQnlJZEFuZFVwZGF0ZS5yZXN0b3JlKClcbiAgdC5jb250ZXh0Lm5leHQucmVzZXQoKVxuICB0LmNvbnRleHQuZW1pdHRlci5yZXNldCgpXG4gIHQuY29udGV4dC5jdHguYXBwLmVtaXQucmVzdG9yZSgpXG59KVxuXG50ZXN0LnNlcmlhbCgnc2hvdWxkIHJldHVybiB0aGUgZWRpdGVkIHRhZycsIGFzeW5jIHQgPT4ge1xuICBjb25zdCB7IGN0eCwgcXVlcnksIG5leHQsIGVtaXR0ZXIgfSA9IHQuY29udGV4dFxuICBjdHgucGFyYW1zID0geyBpZDogMiB9XG4gIGN0eC5yZXF1ZXN0ID0geyBib2R5OiB7IG5hbWU6ICdlZGl0ZWQnLCBjb2xvcjogJyNmMDAnIH0gfVxuICBxdWVyeVxuICAgIC53aXRoQXJncygyLCB7XG4gICAgICBuYW1lOiAnZWRpdGVkJyxcbiAgICAgIGNvbG9yOiAnI2YwMCdcbiAgICB9KVxuICAgIC5jaGFpbignZXhlYycpXG4gICAgLnJlc29sdmVzKGNyZWF0ZVRhZ3MoMSkpXG5cbiAgYXdhaXQgZWRpdFRhZyhjdHgsIG5leHQpXG4gIHQuZmFsc2UobmV4dC5jYWxsZWRPbmNlKVxuICB0LmZhbHNlKGVtaXR0ZXIuY2FsbGVkT25jZSlcbiAgdC5pcyhjdHguc3RhdHVzLCAyMDApXG59KVxuXG50ZXN0LnNlcmlhbCgnc2hvdWxkIHByb3BhZ2F0ZSBlcnIgd2l0aCBkZWZhdWx0IHN0YXR1cyAoNDAwKScsIGFzeW5jIHQgPT4ge1xuICBjb25zdCB7IGN0eCwgcXVlcnksIG5leHQsIGVtaXR0ZXIgfSA9IHQuY29udGV4dFxuICBjdHgucGFyYW1zID0geyBpZDogJ2ZvbycgfVxuICBjdHgucmVxdWVzdCA9IHsgYm9keTogeyBuYW1lOiAndGVzdCcgfSB9XG4gIHF1ZXJ5XG4gICAgLndpdGhBcmdzKCdmb28nLCB7XG4gICAgICBuYW1lOiAndGVzdCdcbiAgICB9KVxuICAgIC5jaGFpbignZXhlYycpXG4gICAgLnJlamVjdHMobmV3IEVycm9yKCd0ZXN0JykpXG5cbiAgYXdhaXQgZWRpdFRhZyhjdHgsIG5leHQpXG4gIGNvbnN0IGVyciA9IGVtaXR0ZXIuYXJnc1swXVsxXVxuXG4gIHQudHJ1ZShlbWl0dGVyLmNhbGxlZE9uY2UpXG4gIHQuZmFsc2UobmV4dC5jYWxsZWRPbmNlKVxuICB0LmlzKGVyci5zdGF0dXMsIDQwMClcbn0pXG5cbnRlc3Quc2VyaWFsKCdzaG91bGQgcHJvcGFnYXRlIGVyciB3aXRoIGN1c3RvbSBzdGF0dXMnLCBhc3luYyB0ID0+IHtcbiAgY29uc3QgeyBjdHgsIHF1ZXJ5LCBuZXh0LCBlbWl0dGVyIH0gPSB0LmNvbnRleHRcbiAgY3R4LnBhcmFtcyA9IHsgaWQ6ICdmb28nIH1cbiAgY3R4LnJlcXVlc3QgPSB7IGJvZHk6IHsgY29sb3I6ICd0ZXN0JyB9IH1cbiAgcXVlcnlcbiAgICAud2l0aEFyZ3MoJ2ZvbycsIHtcbiAgICAgIGNvbG9yOiAndGVzdCdcbiAgICB9KVxuICAgIC5jaGFpbignZXhlYycpXG4gICAgLnJlamVjdHMoY3JlYXRlRXJyb3IoNDAxLCAndGVzdCcpKVxuXG4gIGF3YWl0IGVkaXRUYWcoY3R4LCBuZXh0KVxuICBjb25zdCBlcnIgPSBlbWl0dGVyLmFyZ3NbMF1bMV1cblxuICB0LnRydWUoZW1pdHRlci5jYWxsZWRPbmNlKVxuICB0LmZhbHNlKG5leHQuY2FsbGVkT25jZSlcbiAgdC5pcyhlcnIuc3RhdHVzLCA0MDEpXG59KVxuIl19