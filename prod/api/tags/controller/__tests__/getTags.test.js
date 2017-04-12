'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

require('sinon-mongoose');

require('sinon-as-promised');

var _models = require('../../../../models');

var _testUtils = require('../../../../utils/test-utils');

var _utils = require('../../../../utils');

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_ava2.default.beforeEach(t => {
  t.context = {
    query: _sinon2.default.mock(_models.Tag).expects('find').chain('exec'),
    next: _sinon2.default.spy(),
    ctx: {
      app: { emit: () => {} }
    }
  };

  t.context.emitter = _sinon2.default.spy(t.context.ctx.app, 'emit');
});

_ava2.default.afterEach(t => {
  _models.Tag.find.restore();
  t.context.next.reset();
  t.context.query.reset();
});

_ava2.default.serial('should return tags', (() => {
  var _ref = _asyncToGenerator(function* (t) {
    const { ctx, query, next, emitter } = t.context;
    query.resolves((0, _testUtils.createTags)(3));

    yield (0, _.getTags)(ctx, next);
    t.false(next.calledOnce);
    t.false(emitter.calledOnce);
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

_ava2.default.serial('should propagate default err', (() => {
  var _ref2 = _asyncToGenerator(function* (t) {
    const { ctx, query, next, emitter } = t.context;
    query.rejects(new Error('test'));

    yield (0, _.getTags)(ctx, next);
    const err = emitter.args[0][1];

    t.true(emitter.calledOnce);
    t.false(next.calledOnce);
    t.is(err.status, 404);
    t.is(err.message, 'test');
  });

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
})());

_ava2.default.serial('should propagate custom err', (() => {
  var _ref3 = _asyncToGenerator(function* (t) {
    const { ctx, query, next, emitter } = t.context;
    query.rejects((0, _utils.createError)(401, 'test'));

    yield (0, _.getTags)(ctx, next);
    const err = emitter.args[0][1];

    t.true(emitter.calledOnce);
    t.false(next.calledOnce);
    t.is(err.status, 401);
    t.is(err.message, 'test');
  });

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
})());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3RhZ3MvY29udHJvbGxlci9fX3Rlc3RzX18vZ2V0VGFncy50ZXN0LmpzIl0sIm5hbWVzIjpbImJlZm9yZUVhY2giLCJ0IiwiY29udGV4dCIsInF1ZXJ5IiwibW9jayIsImV4cGVjdHMiLCJjaGFpbiIsIm5leHQiLCJzcHkiLCJjdHgiLCJhcHAiLCJlbWl0IiwiZW1pdHRlciIsImFmdGVyRWFjaCIsImZpbmQiLCJyZXN0b3JlIiwicmVzZXQiLCJzZXJpYWwiLCJyZXNvbHZlcyIsImZhbHNlIiwiY2FsbGVkT25jZSIsInJlamVjdHMiLCJFcnJvciIsImVyciIsImFyZ3MiLCJ0cnVlIiwiaXMiLCJzdGF0dXMiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsY0FBS0EsVUFBTCxDQUFnQkMsS0FBSztBQUNuQkEsSUFBRUMsT0FBRixHQUFZO0FBQ1ZDLFdBQU8sZ0JBQU1DLElBQU4sY0FDSkMsT0FESSxDQUNJLE1BREosRUFFSkMsS0FGSSxDQUVFLE1BRkYsQ0FERztBQUlWQyxVQUFNLGdCQUFNQyxHQUFOLEVBSkk7QUFLVkMsU0FBSztBQUNIQyxXQUFLLEVBQUVDLE1BQU0sTUFBTSxDQUFFLENBQWhCO0FBREY7QUFMSyxHQUFaOztBQVVBVixJQUFFQyxPQUFGLENBQVVVLE9BQVYsR0FBb0IsZ0JBQU1KLEdBQU4sQ0FBVVAsRUFBRUMsT0FBRixDQUFVTyxHQUFWLENBQWNDLEdBQXhCLEVBQTZCLE1BQTdCLENBQXBCO0FBQ0QsQ0FaRDs7QUFjQSxjQUFLRyxTQUFMLENBQWVaLEtBQUs7QUFDbEIsY0FBSWEsSUFBSixDQUFTQyxPQUFUO0FBQ0FkLElBQUVDLE9BQUYsQ0FBVUssSUFBVixDQUFlUyxLQUFmO0FBQ0FmLElBQUVDLE9BQUYsQ0FBVUMsS0FBVixDQUFnQmEsS0FBaEI7QUFDRCxDQUpEOztBQU1BLGNBQUtDLE1BQUwsQ0FBWSxvQkFBWjtBQUFBLCtCQUFrQyxXQUFNaEIsQ0FBTixFQUFXO0FBQzNDLFVBQU0sRUFBRVEsR0FBRixFQUFPTixLQUFQLEVBQWNJLElBQWQsRUFBb0JLLE9BQXBCLEtBQWdDWCxFQUFFQyxPQUF4QztBQUNBQyxVQUFNZSxRQUFOLENBQWUsMkJBQVcsQ0FBWCxDQUFmOztBQUVBLFVBQU0sZUFBUVQsR0FBUixFQUFhRixJQUFiLENBQU47QUFDQU4sTUFBRWtCLEtBQUYsQ0FBUVosS0FBS2EsVUFBYjtBQUNBbkIsTUFBRWtCLEtBQUYsQ0FBUVAsUUFBUVEsVUFBaEI7QUFDRCxHQVBEOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBLGNBQUtILE1BQUwsQ0FBWSw4QkFBWjtBQUFBLGdDQUE0QyxXQUFNaEIsQ0FBTixFQUFXO0FBQ3JELFVBQU0sRUFBRVEsR0FBRixFQUFPTixLQUFQLEVBQWNJLElBQWQsRUFBb0JLLE9BQXBCLEtBQWdDWCxFQUFFQyxPQUF4QztBQUNBQyxVQUFNa0IsT0FBTixDQUFjLElBQUlDLEtBQUosQ0FBVSxNQUFWLENBQWQ7O0FBRUEsVUFBTSxlQUFRYixHQUFSLEVBQWFGLElBQWIsQ0FBTjtBQUNBLFVBQU1nQixNQUFNWCxRQUFRWSxJQUFSLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFaOztBQUVBdkIsTUFBRXdCLElBQUYsQ0FBT2IsUUFBUVEsVUFBZjtBQUNBbkIsTUFBRWtCLEtBQUYsQ0FBUVosS0FBS2EsVUFBYjtBQUNBbkIsTUFBRXlCLEVBQUYsQ0FBS0gsSUFBSUksTUFBVCxFQUFpQixHQUFqQjtBQUNBMUIsTUFBRXlCLEVBQUYsQ0FBS0gsSUFBSUssT0FBVCxFQUFrQixNQUFsQjtBQUNELEdBWEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYUEsY0FBS1gsTUFBTCxDQUFZLDZCQUFaO0FBQUEsZ0NBQTJDLFdBQU1oQixDQUFOLEVBQVc7QUFDcEQsVUFBTSxFQUFFUSxHQUFGLEVBQU9OLEtBQVAsRUFBY0ksSUFBZCxFQUFvQkssT0FBcEIsS0FBZ0NYLEVBQUVDLE9BQXhDO0FBQ0FDLFVBQU1rQixPQUFOLENBQWMsd0JBQVksR0FBWixFQUFpQixNQUFqQixDQUFkOztBQUVBLFVBQU0sZUFBUVosR0FBUixFQUFhRixJQUFiLENBQU47QUFDQSxVQUFNZ0IsTUFBTVgsUUFBUVksSUFBUixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBWjs7QUFFQXZCLE1BQUV3QixJQUFGLENBQU9iLFFBQVFRLFVBQWY7QUFDQW5CLE1BQUVrQixLQUFGLENBQVFaLEtBQUthLFVBQWI7QUFDQW5CLE1BQUV5QixFQUFGLENBQUtILElBQUlJLE1BQVQsRUFBaUIsR0FBakI7QUFDQTFCLE1BQUV5QixFQUFGLENBQUtILElBQUlLLE9BQVQsRUFBa0IsTUFBbEI7QUFDRCxHQVhEOztBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImdldFRhZ3MudGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZXN0IGZyb20gJ2F2YSdcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbidcbmltcG9ydCAnc2lub24tbW9uZ29vc2UnXG5pbXBvcnQgJ3Npbm9uLWFzLXByb21pc2VkJ1xuXG5pbXBvcnQgeyBUYWcgfSBmcm9tICd+L3NlcnZlci9tb2RlbHMnXG5pbXBvcnQgeyBjcmVhdGVUYWdzIH0gZnJvbSAnfi9zZXJ2ZXIvdXRpbHMvdGVzdC11dGlscydcbmltcG9ydCB7IGNyZWF0ZUVycm9yIH0gZnJvbSAnfi9zZXJ2ZXIvdXRpbHMnXG5pbXBvcnQgeyBnZXRUYWdzIH0gZnJvbSAnLi4nXG5cbnRlc3QuYmVmb3JlRWFjaCh0ID0+IHtcbiAgdC5jb250ZXh0ID0ge1xuICAgIHF1ZXJ5OiBzaW5vbi5tb2NrKFRhZylcbiAgICAgIC5leHBlY3RzKCdmaW5kJylcbiAgICAgIC5jaGFpbignZXhlYycpLFxuICAgIG5leHQ6IHNpbm9uLnNweSgpLFxuICAgIGN0eDoge1xuICAgICAgYXBwOiB7IGVtaXQ6ICgpID0+IHt9IH1cbiAgICB9XG4gIH1cblxuICB0LmNvbnRleHQuZW1pdHRlciA9IHNpbm9uLnNweSh0LmNvbnRleHQuY3R4LmFwcCwgJ2VtaXQnKVxufSlcblxudGVzdC5hZnRlckVhY2godCA9PiB7XG4gIFRhZy5maW5kLnJlc3RvcmUoKVxuICB0LmNvbnRleHQubmV4dC5yZXNldCgpXG4gIHQuY29udGV4dC5xdWVyeS5yZXNldCgpXG59KVxuXG50ZXN0LnNlcmlhbCgnc2hvdWxkIHJldHVybiB0YWdzJywgYXN5bmMgdCA9PiB7XG4gIGNvbnN0IHsgY3R4LCBxdWVyeSwgbmV4dCwgZW1pdHRlciB9ID0gdC5jb250ZXh0XG4gIHF1ZXJ5LnJlc29sdmVzKGNyZWF0ZVRhZ3MoMykpXG5cbiAgYXdhaXQgZ2V0VGFncyhjdHgsIG5leHQpXG4gIHQuZmFsc2UobmV4dC5jYWxsZWRPbmNlKVxuICB0LmZhbHNlKGVtaXR0ZXIuY2FsbGVkT25jZSlcbn0pXG5cbnRlc3Quc2VyaWFsKCdzaG91bGQgcHJvcGFnYXRlIGRlZmF1bHQgZXJyJywgYXN5bmMgdCA9PiB7XG4gIGNvbnN0IHsgY3R4LCBxdWVyeSwgbmV4dCwgZW1pdHRlciB9ID0gdC5jb250ZXh0XG4gIHF1ZXJ5LnJlamVjdHMobmV3IEVycm9yKCd0ZXN0JykpXG5cbiAgYXdhaXQgZ2V0VGFncyhjdHgsIG5leHQpXG4gIGNvbnN0IGVyciA9IGVtaXR0ZXIuYXJnc1swXVsxXVxuXG4gIHQudHJ1ZShlbWl0dGVyLmNhbGxlZE9uY2UpXG4gIHQuZmFsc2UobmV4dC5jYWxsZWRPbmNlKVxuICB0LmlzKGVyci5zdGF0dXMsIDQwNClcbiAgdC5pcyhlcnIubWVzc2FnZSwgJ3Rlc3QnKVxufSlcblxudGVzdC5zZXJpYWwoJ3Nob3VsZCBwcm9wYWdhdGUgY3VzdG9tIGVycicsIGFzeW5jIHQgPT4ge1xuICBjb25zdCB7IGN0eCwgcXVlcnksIG5leHQsIGVtaXR0ZXIgfSA9IHQuY29udGV4dFxuICBxdWVyeS5yZWplY3RzKGNyZWF0ZUVycm9yKDQwMSwgJ3Rlc3QnKSlcblxuICBhd2FpdCBnZXRUYWdzKGN0eCwgbmV4dClcbiAgY29uc3QgZXJyID0gZW1pdHRlci5hcmdzWzBdWzFdXG5cbiAgdC50cnVlKGVtaXR0ZXIuY2FsbGVkT25jZSlcbiAgdC5mYWxzZShuZXh0LmNhbGxlZE9uY2UpXG4gIHQuaXMoZXJyLnN0YXR1cywgNDAxKVxuICB0LmlzKGVyci5tZXNzYWdlLCAndGVzdCcpXG59KVxuIl19