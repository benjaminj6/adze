'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

require('sinon-mongoose');

require('sinon-as-promised');

var _proxyquire = require('proxyquire');

var _proxyquire2 = _interopRequireDefault(_proxyquire);

var _models = require('../../../../models');

var _testUtils = require('../../../../utils/test-utils');

var _utils = require('../../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// imports addPost and stubs its dependencies
const { default: editPost } = (0, _proxyquire2.default)('../editPost', {
  './utils': {
    createNewTags: _sinon2.default.stub().resolves(['12345'])
  }
});

_ava2.default.beforeEach(t => {
  t.context.query = _sinon2.default.mock(_models.Post).expects('findByIdAndUpdate');
  t.context.next = _sinon2.default.spy();
  t.context.ctx = {
    app: { emit: () => {} }
  };
  t.context.emitter = _sinon2.default.spy(t.context.ctx.app, 'emit');
});

_ava2.default.afterEach(t => {
  _models.Post.findByIdAndUpdate.restore();
  t.context.next.reset();
  t.context.emitter.reset();
  t.context.ctx.app.emit.reset();
});

_ava2.default.serial('editPost() -- should return the edited post (200)', (() => {
  var _ref = _asyncToGenerator(function* (t) {
    const { ctx, query, next, emitter } = t.context;
    ctx.params = { id: 2 };
    ctx.request = { body: { title: 'test', post: 'test', tags: ['12345'] } };
    query.withArgs(2, {
      title: 'test',
      html: '<p>test</p>\n',
      md: 'test',
      tags: ['12345']
    }).chain('exec').resolves((0, _testUtils.createPosts)(1));

    yield editPost(ctx, next);
    t.is(ctx.status, 200);
    t.is(ctx.body.title, 'test-0'); // Mock returns from the utility function ... NOT from request
    t.is(ctx.body.md, 'test-0');
    t.is(ctx.body.html, '<p>test-0</p>');
    t.false(next.calledOnce);
    t.false(emitter.calledOnce);
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

_ava2.default.serial('editPost() -- should propagate err with default status (400)', (() => {
  var _ref2 = _asyncToGenerator(function* (t) {
    const { ctx, query, next, emitter } = t.context;
    ctx.params = { id: 'foo' };
    ctx.request = { body: { title: 'test' } };
    query.withArgs('foo', {
      title: 'test'
    }).chain('populate').withArgs('tags').chain('exec').rejects(new Error('test'));

    yield editPost(ctx, next);
    const err = emitter.args[0][1];

    t.true(emitter.calledOnce);
    t.false(next.calledOnce);
    t.is(err.status, 400);
    t.is(err.message, 'test');
  });

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
})());

_ava2.default.serial('editPost() -- should propagate err with specified error status', (() => {
  var _ref3 = _asyncToGenerator(function* (t) {
    const { ctx, query, next, emitter } = t.context;
    ctx.params = { id: 'foo' };
    ctx.request = { body: { post: 'test' } };
    query.withArgs('foo', {
      html: '<p>test</p>\n',
      md: 'test'
    }).chain('populate').withArgs('tags').chain('exec').rejects((0, _utils.createError)(500, 'test'));

    yield editPost(ctx, next);
    const err = emitter.args[0][1];

    t.true(emitter.calledOnce);
    t.false(next.calledOnce);
    t.is(err.status, 500);
    t.is(err.message, 'test');
  });

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
})());

_ava2.default.todo('should propagate error if tags are not an array');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3Bvc3RzL2NvbnRyb2xsZXIvX190ZXN0c19fL2VkaXRQb3N0LnRlc3QuanMiXSwibmFtZXMiOlsiZGVmYXVsdCIsImVkaXRQb3N0IiwiY3JlYXRlTmV3VGFncyIsInN0dWIiLCJyZXNvbHZlcyIsImJlZm9yZUVhY2giLCJ0IiwiY29udGV4dCIsInF1ZXJ5IiwibW9jayIsImV4cGVjdHMiLCJuZXh0Iiwic3B5IiwiY3R4IiwiYXBwIiwiZW1pdCIsImVtaXR0ZXIiLCJhZnRlckVhY2giLCJmaW5kQnlJZEFuZFVwZGF0ZSIsInJlc3RvcmUiLCJyZXNldCIsInNlcmlhbCIsInBhcmFtcyIsImlkIiwicmVxdWVzdCIsImJvZHkiLCJ0aXRsZSIsInBvc3QiLCJ0YWdzIiwid2l0aEFyZ3MiLCJodG1sIiwibWQiLCJjaGFpbiIsImlzIiwic3RhdHVzIiwiZmFsc2UiLCJjYWxsZWRPbmNlIiwicmVqZWN0cyIsIkVycm9yIiwiZXJyIiwiYXJncyIsInRydWUiLCJtZXNzYWdlIiwidG9kbyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUE7QUFDQSxNQUFNLEVBQUVBLFNBQVNDLFFBQVgsS0FBd0IsMEJBQVcsYUFBWCxFQUEwQjtBQUN0RCxhQUFXO0FBQ1RDLG1CQUFlLGdCQUFNQyxJQUFOLEdBQWFDLFFBQWIsQ0FBc0IsQ0FBRSxPQUFGLENBQXRCO0FBRE47QUFEMkMsQ0FBMUIsQ0FBOUI7O0FBTUEsY0FBS0MsVUFBTCxDQUFnQkMsS0FBSztBQUNuQkEsSUFBRUMsT0FBRixDQUFVQyxLQUFWLEdBQWtCLGdCQUFNQyxJQUFOLGVBQWlCQyxPQUFqQixDQUF5QixtQkFBekIsQ0FBbEI7QUFDQUosSUFBRUMsT0FBRixDQUFVSSxJQUFWLEdBQWlCLGdCQUFNQyxHQUFOLEVBQWpCO0FBQ0FOLElBQUVDLE9BQUYsQ0FBVU0sR0FBVixH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anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVzdCBmcm9tICdhdmEnXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nXG5pbXBvcnQgJ3Npbm9uLW1vbmdvb3NlJ1xuaW1wb3J0ICdzaW5vbi1hcy1wcm9taXNlZCdcbmltcG9ydCBwcm94eXF1aXJlIGZyb20gJ3Byb3h5cXVpcmUnXG5cbmltcG9ydCB7IFBvc3QgfSBmcm9tICd+L3NlcnZlci9tb2RlbHMnXG5pbXBvcnQgeyBjcmVhdGVQb3N0cyB9IGZyb20gJ34vc2VydmVyL3V0aWxzL3Rlc3QtdXRpbHMnXG5pbXBvcnQgeyBjcmVhdGVFcnJvciB9IGZyb20gJ34vc2VydmVyL3V0aWxzJ1xuXG4vLyBpbXBvcnRzIGFkZFBvc3QgYW5kIHN0dWJzIGl0cyBkZXBlbmRlbmNpZXNcbmNvbnN0IHsgZGVmYXVsdDogZWRpdFBvc3QgfSA9IHByb3h5cXVpcmUoJy4uL2VkaXRQb3N0Jywge1xuICAnLi91dGlscyc6IHtcbiAgICBjcmVhdGVOZXdUYWdzOiBzaW5vbi5zdHViKCkucmVzb2x2ZXMoWyAnMTIzNDUnIF0pXG4gIH1cbn0pXG5cbnRlc3QuYmVmb3JlRWFjaCh0ID0+IHtcbiAgdC5jb250ZXh0LnF1ZXJ5ID0gc2lub24ubW9jayhQb3N0KS5leHBlY3RzKCdmaW5kQnlJZEFuZFVwZGF0ZScpXG4gIHQuY29udGV4dC5uZXh0ID0gc2lub24uc3B5KClcbiAgdC5jb250ZXh0LmN0eCA9IHtcbiAgICBhcHA6IHsgZW1pdDogKCkgPT4ge30gfVxuICB9XG4gIHQuY29udGV4dC5lbWl0dGVyID0gc2lub24uc3B5KHQuY29udGV4dC5jdHguYXBwLCAnZW1pdCcpXG59KVxuXG50ZXN0LmFmdGVyRWFjaCh0ID0+IHtcbiAgUG9zdC5maW5kQnlJZEFuZFVwZGF0ZS5yZXN0b3JlKClcbiAgdC5jb250ZXh0Lm5leHQucmVzZXQoKVxuICB0LmNvbnRleHQuZW1pdHRlci5yZXNldCgpXG4gIHQuY29udGV4dC5jdHguYXBwLmVtaXQucmVzZXQoKVxufSlcblxudGVzdC5zZXJpYWwoJ2VkaXRQb3N0KCkgLS0gc2hvdWxkIHJldHVybiB0aGUgZWRpdGVkIHBvc3QgKDIwMCknLCBhc3luYyB0ID0+IHtcbiAgY29uc3QgeyBjdHgsIHF1ZXJ5LCBuZXh0LCBlbWl0dGVyIH0gPSB0LmNvbnRleHRcbiAgY3R4LnBhcmFtcyA9IHsgaWQ6IDIgfVxuICBjdHgucmVxdWVzdCA9IHsgYm9keTogeyB0aXRsZTogJ3Rlc3QnLCBwb3N0OiAndGVzdCcsIHRhZ3M6IFsnMTIzNDUnXSB9IH1cbiAgcXVlcnlcbiAgICAud2l0aEFyZ3MoMiwge1xuICAgICAgdGl0bGU6ICd0ZXN0JyxcbiAgICAgIGh0bWw6ICc8cD50ZXN0PC9wPlxcbicsXG4gICAgICBtZDogJ3Rlc3QnLFxuICAgICAgdGFnczogWycxMjM0NSddXG4gICAgfSlcbiAgICAuY2hhaW4oJ2V4ZWMnKVxuICAgIC5yZXNvbHZlcyhjcmVhdGVQb3N0cygxKSlcblxuICBhd2FpdCBlZGl0UG9zdChjdHgsIG5leHQpXG4gIHQuaXMoY3R4LnN0YXR1cywgMjAwKVxuICB0LmlzKGN0eC5ib2R5LnRpdGxlLCAndGVzdC0wJykgLy8gTW9jayByZXR1cm5zIGZyb20gdGhlIHV0aWxpdHkgZnVuY3Rpb24gLi4uIE5PVCBmcm9tIHJlcXVlc3RcbiAgdC5pcyhjdHguYm9keS5tZCwgJ3Rlc3QtMCcpXG4gIHQuaXMoY3R4LmJvZHkuaHRtbCwgJzxwPnRlc3QtMDwvcD4nKVxuICB0LmZhbHNlKG5leHQuY2FsbGVkT25jZSlcbiAgdC5mYWxzZShlbWl0dGVyLmNhbGxlZE9uY2UpXG59KVxuXG50ZXN0LnNlcmlhbCgnZWRpdFBvc3QoKSAtLSBzaG91bGQgcHJvcGFnYXRlIGVyciB3aXRoIGRlZmF1bHQgc3RhdHVzICg0MDApJywgYXN5bmMgdCA9PiB7XG4gIGNvbnN0IHsgY3R4LCBxdWVyeSwgbmV4dCwgZW1pdHRlciB9ID0gdC5jb250ZXh0XG4gIGN0eC5wYXJhbXMgPSB7IGlkOiAnZm9vJyB9XG4gIGN0eC5yZXF1ZXN0ID0geyBib2R5OiB7IHRpdGxlOiAndGVzdCcgfSB9XG4gIHF1ZXJ5XG4gICAgLndpdGhBcmdzKCdmb28nLCB7XG4gICAgICB0aXRsZTogJ3Rlc3QnXG4gICAgfSlcbiAgICAuY2hhaW4oJ3BvcHVsYXRlJykud2l0aEFyZ3MoJ3RhZ3MnKVxuICAgIC5jaGFpbignZXhlYycpXG4gICAgLnJlamVjdHMobmV3IEVycm9yKCd0ZXN0JykpXG5cbiAgYXdhaXQgZWRpdFBvc3QoY3R4LCBuZXh0KVxuICBjb25zdCBlcnIgPSBlbWl0dGVyLmFyZ3NbMF1bMV1cblxuICB0LnRydWUoZW1pdHRlci5jYWxsZWRPbmNlKVxuICB0LmZhbHNlKG5leHQuY2FsbGVkT25jZSlcbiAgdC5pcyhlcnIuc3RhdHVzLCA0MDApXG4gIHQuaXMoZXJyLm1lc3NhZ2UsICd0ZXN0Jylcbn0pXG5cbnRlc3Quc2VyaWFsKCdlZGl0UG9zdCgpIC0tIHNob3VsZCBwcm9wYWdhdGUgZXJyIHdpdGggc3BlY2lmaWVkIGVycm9yIHN0YXR1cycsIGFzeW5jIHQgPT4ge1xuICBjb25zdCB7IGN0eCwgcXVlcnksIG5leHQsIGVtaXR0ZXIgfSA9IHQuY29udGV4dFxuICBjdHgucGFyYW1zID0geyBpZDogJ2ZvbycgfVxuICBjdHgucmVxdWVzdCA9IHsgYm9keTogeyBwb3N0OiAndGVzdCcgfSB9XG4gIHF1ZXJ5XG4gICAgLndpdGhBcmdzKCdmb28nLCB7XG4gICAgICBodG1sOiAnPHA+dGVzdDwvcD5cXG4nLFxuICAgICAgbWQ6ICd0ZXN0J1xuICAgIH0pXG4gICAgLmNoYWluKCdwb3B1bGF0ZScpLndpdGhBcmdzKCd0YWdzJylcbiAgICAuY2hhaW4oJ2V4ZWMnKVxuICAgIC5yZWplY3RzKGNyZWF0ZUVycm9yKDUwMCwgJ3Rlc3QnKSlcblxuICBhd2FpdCBlZGl0UG9zdChjdHgsIG5leHQpXG4gIGNvbnN0IGVyciA9IGVtaXR0ZXIuYXJnc1swXVsxXVxuXG4gIHQudHJ1ZShlbWl0dGVyLmNhbGxlZE9uY2UpXG4gIHQuZmFsc2UobmV4dC5jYWxsZWRPbmNlKVxuICB0LmlzKGVyci5zdGF0dXMsIDUwMClcbiAgdC5pcyhlcnIubWVzc2FnZSwgJ3Rlc3QnKVxufSlcblxudGVzdC50b2RvKCdzaG91bGQgcHJvcGFnYXRlIGVycm9yIGlmIHRhZ3MgYXJlIG5vdCBhbiBhcnJheScpXG4iXX0=