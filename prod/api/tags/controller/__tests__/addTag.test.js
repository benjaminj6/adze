'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

require('sinon-mongoose');

require('sinon-as-promised');

var _models = require('../../../../models');

var _ = require('..');

var _testUtils = require('../../../../utils/test-utils');

var _utils = require('../../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_ava2.default.beforeEach(t => {
  t.context.create = _sinon2.default.mock(_models.Tag).expects('create'); // pass the withArgs and resolve/reject in individual tests
  t.context.next = _sinon2.default.spy();
  t.context.ctx = {
    app: {
      emit: () => {}
    }
  };
  t.context.emitter = _sinon2.default.spy(t.context.ctx.app, 'emit');
});

_ava2.default.afterEach.always(t => {
  _models.Tag.create.restore();
  t.context.ctx.app.emit.restore();
  t.context.next.reset();
  t.context = {};
});

_ava2.default.serial('should return the newly created tag', (() => {
  var _ref = _asyncToGenerator(function* (t) {
    const { ctx, create, next, emitter } = t.context;
    ctx.request = { body: { name: 'test', color: '#100' } };
    create.withArgs({
      name: 'test',
      color: '#100'
    }).resolves((0, _testUtils.createTags)(1));

    yield (0, _.addTag)(ctx, next);
    t.is(ctx.status, 201);
    t.is(ctx.body.name, 'test-0');
    t.is(ctx.body.color, '#000');
    t.false(next.calledOnce);
    t.false(emitter.calledOnce);
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

_ava2.default.serial('should return the newly created tag if no color given', (() => {
  var _ref2 = _asyncToGenerator(function* (t) {
    const { ctx, create, next, emitter } = t.context;
    ctx.request = { body: { name: 'test' } };
    create.withArgs({
      name: 'test'
    }).resolves((0, _testUtils.createTags)(1));

    yield (0, _.addTag)(ctx, next);
    t.is(ctx.status, 201);
    t.is(ctx.body.name, 'test-0'); // comes from the createTags util rather than actual input
    t.false(next.calledOnce);
    t.false(emitter.calledOnce);
  });

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
})());

_ava2.default.serial('should propagate error with status if given', (() => {
  var _ref3 = _asyncToGenerator(function* (t) {
    const { ctx, create, next, emitter } = t.context;
    ctx.request = { body: { name: 'test' } };

    create.withArgs({
      name: 'test'
    }).rejects((0, _utils.createError)(401, 'test error'));

    yield (0, _.addTag)(ctx, next);
    const err = emitter.args[0][1];

    t.true(emitter.calledOnce);
    t.false(next.calledOnce);
    t.is(err.status, 401);
  });

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
})());

_ava2.default.serial('should propagate error with default if no status given', (() => {
  var _ref4 = _asyncToGenerator(function* (t) {
    const { ctx, create, next, emitter } = t.context;
    ctx.request = { body: 'I am a string' };

    create.rejects(new Error('test'));

    yield (0, _.addTag)(ctx, next);
    const err = emitter.args[0][1];

    t.true(emitter.calledOnce);
    t.false(next.calledOnce);
    t.is(err.status, 400);
  });

  return function (_x4) {
    return _ref4.apply(this, arguments);
  };
})());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3RhZ3MvY29udHJvbGxlci9fX3Rlc3RzX18vYWRkVGFnLnRlc3QuanMiXSwibmFtZXMiOlsiYmVmb3JlRWFjaCIsInQiLCJjb250ZXh0IiwiY3JlYXRlIiwibW9jayIsImV4cGVjdHMiLCJuZXh0Iiwic3B5IiwiY3R4IiwiYXBwIiwiZW1pdCIsImVtaXR0ZXIiLCJhZnRlckVhY2giLCJhbHdheXMiLCJyZXN0b3JlIiwicmVzZXQiLCJzZXJpYWwiLCJyZXF1ZXN0IiwiYm9keSIsIm5hbWUiLCJjb2xvciIsIndpdGhBcmdzIiwicmVzb2x2ZXMiLCJpcyIsInN0YXR1cyIsImZhbHNlIiwiY2FsbGVkT25jZSIsInJlamVjdHMiLCJlcnIiLCJhcmdzIiwidHJ1ZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsY0FBS0EsVUFBTCxDQUFnQkMsS0FBSztBQUNuQkEsSUFBRUMsT0FBRixDQUFVQyxNQUFWLEdBQW1CLGdCQUFNQyxJQUFOLGNBQ2hCQyxPQURnQixDQUNSLFFBRFEsQ0FBbkIsQ0FEbUIsQ0FFRTtBQUNyQkosSUFBRUMsT0FBRixDQUFVSSxJQUFWLEdBQWlCLGdCQUFNQyxHQUFOLEVBQWpCO0FBQ0FOLElBQUVDLE9BQUYsQ0FBVU0sR0FBVixHQUFnQjtBQUNkQyxTQUFLO0FBQ0hDLFlBQU0sTUFBTSxDQUFFO0FBRFg7QUFEUyxHQUFoQjtBQUtBVCxJQUFFQyxPQUFGLENBQVVTLE9BQVYsR0FBb0IsZ0JBQU1KLEdBQU4sQ0FBVU4sRUFBRUMsT0FBRixDQUFVTSxHQUFWLENBQWNDLEdBQXhCLEVBQTZCLE1BQTdCLENBQXBCO0FBQ0QsQ0FWRDs7QUFZQSxjQUFLRyxTQUFMLENBQWVDLE1BQWYsQ0FBc0JaLEtBQUs7QUFDekIsY0FBSUUsTUFBSixDQUFXVyxPQUFYO0FBQ0FiLElBQUVDLE9BQUYsQ0FB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QTs7QUFrQkEsY0FBS1IsTUFBTCxDQUFZLHdEQUFaO0FBQUEsZ0NBQXNFLFdBQU1mLENBQU4sRUFBVztBQUMvRSxVQUFNLEVBQUVPLEdBQUYsRUFBT0wsTUFBUCxFQUFlRyxJQUFmLEVBQXFCSyxPQUFyQixLQUFpQ1YsRUFBRUMsT0FBekM7QUFDQU0sUUFBSVMsT0FBSixHQUFjLEVBQUVDLE1BQU0sZUFBUixFQUFkOztBQUVBZixXQUNHd0IsT0FESCxDQUNXLElBQUlJLEtBQUosQ0FBVSxNQUFWLENBRFg7O0FBR0EsVUFBTSxjQUFPdkIsR0FBUCxFQUFZRixJQUFaLENBQU47QUFDQSxVQUFNc0IsTUFBTWpCLFFBQVFrQixJQUFSLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFaOztBQUVBNUIsTUFBRTZCLElBQUYsQ0FBT25CLFFBQVFlLFVBQWY7QUFDQXpCLE1BQUV3QixLQUFGLENBQVFuQixLQUFLb0IsVUFBYjtBQUNBekIsTUFBRXNCLEVBQUYsQ0FBS0ssSUFBSUosTUFBVCxFQUFpQixHQUFqQjtBQUNELEdBYkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiYWRkVGFnLnRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVzdCBmcm9tICdhdmEnXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nXG5pbXBvcnQgJ3Npbm9uLW1vbmdvb3NlJ1xuaW1wb3J0ICdzaW5vbi1hcy1wcm9taXNlZCdcblxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnfi9zZXJ2ZXIvbW9kZWxzJ1xuaW1wb3J0IHsgYWRkVGFnIH0gZnJvbSAnLi4nXG5pbXBvcnQgeyBjcmVhdGVUYWdzIH0gZnJvbSAnfi9zZXJ2ZXIvdXRpbHMvdGVzdC11dGlscydcbmltcG9ydCB7IGNyZWF0ZUVycm9yIH0gZnJvbSAnfi9zZXJ2ZXIvdXRpbHMnXG5cbnRlc3QuYmVmb3JlRWFjaCh0ID0+IHtcbiAgdC5jb250ZXh0LmNyZWF0ZSA9IHNpbm9uLm1vY2soVGFnKVxuICAgIC5leHBlY3RzKCdjcmVhdGUnKSAvLyBwYXNzIHRoZSB3aXRoQXJncyBhbmQgcmVzb2x2ZS9yZWplY3QgaW4gaW5kaXZpZHVhbCB0ZXN0c1xuICB0LmNvbnRleHQubmV4dCA9IHNpbm9uLnNweSgpXG4gIHQuY29udGV4dC5jdHggPSB7XG4gICAgYXBwOiB7XG4gICAgICBlbWl0OiAoKSA9PiB7fVxuICAgIH1cbiAgfVxuICB0LmNvbnRleHQuZW1pdHRlciA9IHNpbm9uLnNweSh0LmNvbnRleHQuY3R4LmFwcCwgJ2VtaXQnKVxufSlcblxudGVzdC5hZnRlckVhY2guYWx3YXlzKHQgPT4ge1xuICBUYWcuY3JlYXRlLnJlc3RvcmUoKVxuICB0LmNvbnRleHQuY3R4LmFwcC5lbWl0LnJlc3RvcmUoKVxuICB0LmNvbnRleHQubmV4dC5yZXNldCgpXG4gIHQuY29udGV4dCA9IHt9XG59KVxuXG50ZXN0LnNlcmlhbCgnc2hvdWxkIHJldHVybiB0aGUgbmV3bHkgY3JlYXRlZCB0YWcnLCBhc3luYyB0ID0+IHtcbiAgY29uc3QgeyBjdHgsIGNyZWF0ZSwgbmV4dCwgZW1pdHRlciB9ID0gdC5jb250ZXh0XG4gIGN0eC5yZXF1ZXN0ID0geyBib2R5OiB7IG5hbWU6ICd0ZXN0JywgY29sb3I6ICcjMTAwJyB9IH1cbiAgY3JlYXRlXG4gICAgLndpdGhBcmdzKHtcbiAgICAgIG5hbWU6ICd0ZXN0JyxcbiAgICAgIGNvbG9yOiAnIzEwMCdcbiAgICB9KVxuICAgIC5yZXNvbHZlcyhjcmVhdGVUYWdzKDEpKVxuXG4gIGF3YWl0IGFkZFRhZyhjdHgsIG5leHQpXG4gIHQuaXMoY3R4LnN0YXR1cywgMjAxKVxuICB0LmlzKGN0eC5ib2R5Lm5hbWUsICd0ZXN0LTAnKVxuICB0LmlzKGN0eC5ib2R5LmNvbG9yLCAnIzAwMCcpXG4gIHQuZmFsc2UobmV4dC5jYWxsZWRPbmNlKVxuICB0LmZhbHNlKGVtaXR0ZXIuY2FsbGVkT25jZSlcbn0pXG5cbnRlc3Quc2VyaWFsKCdzaG91bGQgcmV0dXJuIHRoZSBuZXdseSBjcmVhdGVkIHRhZyBpZiBubyBjb2xvciBnaXZlbicsIGFzeW5jIHQgPT4ge1xuICBjb25zdCB7IGN0eCwgY3JlYXRlLCBuZXh0LCBlbWl0dGVyIH0gPSB0LmNvbnRleHRcbiAgY3R4LnJlcXVlc3QgPSB7IGJvZHk6IHsgbmFtZTogJ3Rlc3QnIH0gfVxuICBjcmVhdGVcbiAgICAud2l0aEFyZ3Moe1xuICAgICAgbmFtZTogJ3Rlc3QnXG4gICAgfSlcbiAgICAucmVzb2x2ZXMoY3JlYXRlVGFncygxKSlcblxuICBhd2FpdCBhZGRUYWcoY3R4LCBuZXh0KVxuICB0LmlzKGN0eC5zdGF0dXMsIDIwMSlcbiAgdC5pcyhjdHguYm9keS5uYW1lLCAndGVzdC0wJykgLy8gY29tZXMgZnJvbSB0aGUgY3JlYXRlVGFncyB1dGlsIHJhdGhlciB0aGFuIGFjdHVhbCBpbnB1dFxuICB0LmZhbHNlKG5leHQuY2FsbGVkT25jZSlcbiAgdC5mYWxzZShlbWl0dGVyLmNhbGxlZE9uY2UpXG59KVxuXG50ZXN0LnNlcmlhbCgnc2hvdWxkIHByb3BhZ2F0ZSBlcnJvciB3aXRoIHN0YXR1cyBpZiBnaXZlbicsIGFzeW5jIHQgPT4ge1xuICBjb25zdCB7IGN0eCwgY3JlYXRlLCBuZXh0LCBlbWl0dGVyIH0gPSB0LmNvbnRleHRcbiAgY3R4LnJlcXVlc3QgPSB7IGJvZHk6IHsgbmFtZTogJ3Rlc3QnIH0gfVxuXG4gIGNyZWF0ZVxuICAgIC53aXRoQXJncyh7XG4gICAgICBuYW1lOiAndGVzdCdcbiAgICB9KVxuICAgIC5yZWplY3RzKGNyZWF0ZUVycm9yKDQwMSwgJ3Rlc3QgZXJyb3InKSlcblxuICBhd2FpdCBhZGRUYWcoY3R4LCBuZXh0KVxuICBjb25zdCBlcnIgPSBlbWl0dGVyLmFyZ3NbMF1bMV1cblxuICB0LnRydWUoZW1pdHRlci5jYWxsZWRPbmNlKVxuICB0LmZhbHNlKG5leHQuY2FsbGVkT25jZSlcbiAgdC5pcyhlcnIuc3RhdHVzLCA0MDEpXG59KVxuXG50ZXN0LnNlcmlhbCgnc2hvdWxkIHByb3BhZ2F0ZSBlcnJvciB3aXRoIGRlZmF1bHQgaWYgbm8gc3RhdHVzIGdpdmVuJywgYXN5bmMgdCA9PiB7XG4gIGNvbnN0IHsgY3R4LCBjcmVhdGUsIG5leHQsIGVtaXR0ZXIgfSA9IHQuY29udGV4dFxuICBjdHgucmVxdWVzdCA9IHsgYm9keTogJ0kgYW0gYSBzdHJpbmcnIH1cblxuICBjcmVhdGVcbiAgICAucmVqZWN0cyhuZXcgRXJyb3IoJ3Rlc3QnKSlcblxuICBhd2FpdCBhZGRUYWcoY3R4LCBuZXh0KVxuICBjb25zdCBlcnIgPSBlbWl0dGVyLmFyZ3NbMF1bMV1cblxuICB0LnRydWUoZW1pdHRlci5jYWxsZWRPbmNlKVxuICB0LmZhbHNlKG5leHQuY2FsbGVkT25jZSlcbiAgdC5pcyhlcnIuc3RhdHVzLCA0MDApXG59KVxuIl19