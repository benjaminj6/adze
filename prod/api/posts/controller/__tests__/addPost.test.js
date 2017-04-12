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
const { default: addPost } = (0, _proxyquire2.default)('../addPost', {
  './utils': {
    createNewTags: _sinon2.default.stub().resolves(['12345'])
  }
});

_ava2.default.beforeEach(t => {
  t.context.create = _sinon2.default.mock(_models.Post).expects('create');
  t.context.query = _sinon2.default.mock(_models.Post).expects('populate').resolves((0, _testUtils.createPosts)(1));
  t.context.next = _sinon2.default.spy();
  t.context.ctx = {
    app: {
      emit: () => {}
    }
  };
  t.context.emitter = _sinon2.default.spy(t.context.ctx.app, 'emit');
});

_ava2.default.afterEach.always(t => {
  _models.Post.create.restore();
  _models.Post.populate.restore();
  t.context.ctx.app.emit.restore();
  t.context.next.reset();
  t.context.emitter.reset();
  t.context = {};
});

_ava2.default.serial('addPost() -- should return the newly created post (201)', (() => {
  var _ref = _asyncToGenerator(function* (t) {
    const { ctx, create, next, emitter } = t.context;
    ctx.request = { body: { title: 'test', post: 'test' } };
    create.withArgs({
      title: 'test',
      html: '<p>test</p>\n',
      md: 'test'
    }).resolves((0, _testUtils.createPosts)(1));

    yield addPost(ctx, next);
    t.is(ctx.status, 201);
    t.is(ctx.body.md, 'test-0');
    t.false(next.calledOnce);
    t.false(emitter.calledOnce);
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

_ava2.default.serial('should return newly created Posts with tags if tags provided', (() => {
  var _ref2 = _asyncToGenerator(function* (t) {
    const { ctx, create, next, emitter } = t.context;
    const tags = ['12345'];
    ctx.request = { body: { title: 'test', post: 'test', tags } };

    create.withArgs({
      title: 'test',
      html: '<p>test</p>\n',
      'md': 'test',
      tags
    }).resolves((0, _testUtils.createPosts)(1));

    yield addPost(ctx, next);
    t.is(ctx.status, 201);
    t.false(next.calledOnce);
    t.false(emitter.calledOnce);
  });

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
})());

_ava2.default.serial('should propagate err if invalid JSON (400)', (() => {
  var _ref3 = _asyncToGenerator(function* (t) {
    const { ctx, next, emitter } = t.context;
    ctx.request = { body: 'test string' };

    yield addPost(ctx, next);
    const err = emitter.args[0][1];

    t.true(emitter.calledOnce);
    t.false(next.calledOnce);
    t.is(err.status, 400);
    t.regex(err.message, /Cannot read property/);
    t.regex(err.message, /undefined/);
  });

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
})());

_ava2.default.serial('should propagate err if post not created', (() => {
  var _ref4 = _asyncToGenerator(function* (t) {
    const { ctx, create, next, emitter } = t.context;
    ctx.request = { body: { title: 'test', post: 'test' } };
    create.withArgs({
      title: 'test',
      html: '<p>test</p>\n',
      md: 'test'
    }).rejects((0, _utils.createError)(500, 'test'));

    yield addPost(ctx, next);
    const err = emitter.args[0][1];

    t.true(emitter.calledOnce);
    t.false(next.calledOnce);
    t.is(err.status, 500);
    t.is(err.message, 'test');
  });

  return function (_x4) {
    return _ref4.apply(this, arguments);
  };
})());

_ava2.default.serial('should propagate error if tags are not an array', (() => {
  var _ref5 = _asyncToGenerator(function* (t) {
    const { ctx, next, emitter } = t.context;
    ctx.request = { body: { title: 'test', post: 'test', tags: '[arraystring]' } };

    yield addPost(ctx, next);
    const err = emitter.args[0][1];

    t.true(emitter.calledOnce);
    t.false(next.calledOnce);
    t.is(err.status, 400);
    t.is(err.message, 'Tags must be an array');
  });

  return function (_x5) {
    return _ref5.apply(this, arguments);
  };
})());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3Bvc3RzL2NvbnRyb2xsZXIvX190ZXN0c19fL2FkZFBvc3QudGVzdC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiYWRkUG9zdCIsImNyZWF0ZU5ld1RhZ3MiLCJzdHViIiwicmVzb2x2ZXMiLCJiZWZvcmVFYWNoIiwidCIsImNvbnRleHQiLCJjcmVhdGUiLCJtb2NrIiwiZXhwZWN0cyIsInF1ZXJ5IiwibmV4dCIsInNweSIsImN0eCIsImFwcCIsImVtaXQiLCJlbWl0dGVyIiwiYWZ0ZXJFYWNoIiwiYWx3YXlzIiwicmVzdG9yZSIsInBvcHVsYXRlIiwicmVzZXQiLCJzZXJpYWwiLCJyZXF1ZXN0IiwiYm9keSIsInRpdGxlIiwicG9zdCIsIndpdGhBcmdzIiwiaHRtbCIsIm1kIiwiaXMiLCJzdGF0dXMiLCJmYWxzZSIsImNhbGxlZE9uY2UiLCJ0YWdzIiwiZXJyIiwiYXJncyIsInRydWUiLCJyZWdleCIsIm1lc3NhZ2UiLCJyZWplY3RzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTtBQUNBLE1BQU0sRUFBRUEsU0FBU0MsT0FBWCxLQUF1QiwwQkFBVyxZQUFYLEVBQXlCO0FBQ3BELGFBQVc7QUFDVEMsbUJBQWUsZ0JBQU1DLElBQU4sR0FBYUMsUUFBYixDQUFzQixDQUFFLE9BQUYsQ0FBdEI7QUFETjtBQUR5QyxDQUF6QixDQUE3Qjs7QUFNQSxjQUFLQyxVQUFMLENBQWdCQyxLQUFLO0FBQ25CQSxJQUFFQyxPQUFGLENBQVVDLE1BQVYsR0FBbUIsZ0JBQU1DLElBQU4sZUFBaUJDLE9BQWpCLENBQXlCLFFBQXpCLENBQW5CO0FBQ0FKLElBQUVDLE9BQUYsQ0FBVUksS0FBVixHQUFrQixnQkFBTUYsSUFBTixlQUFpQkMsT0FBakIsQ0FBeUIsVUFBekIsRUFBcUNOLFFBQXJDLENBQThDLDRCQUFZLENBQVosQ0FB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QUFLc0IsVUFBYjtBQUNBNUIsTUFBRXlCLEVBQUYsQ0FBS0ssSUFBSUosTUFBVCxFQUFpQixHQUFqQjtBQUNBMUIsTUFBRXlCLEVBQUYsQ0FBS0ssSUFBSUksT0FBVCxFQUFrQixNQUFsQjtBQUNELEdBbEJEOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW9CQSxjQUFLakIsTUFBTCxDQUFZLGlEQUFaO0FBQUEsZ0NBQStELFdBQU1qQixDQUFOLEVBQVc7QUFDeEUsVUFBTSxFQUFFUSxHQUFGLEVBQU9GLElBQVAsRUFBYUssT0FBYixLQUF5QlgsRUFBRUMsT0FBakM7QUFDQU8sUUFBSVUsT0FBSixHQUFjLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxNQUFULEVBQWlCQyxNQUFNLE1BQXZCLEVBQStCUSxNQUFNLGVBQXJDLEVBQVIsRUFBZDs7QUFFQSxVQUFNbEMsUUFBUWEsR0FBUixFQUFhRixJQUFiLENBQU47QUFDQSxVQUFNd0IsTUFBTW5CLFFBQVFvQixJQUFSLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFaOztBQUVBL0IsTUFBRWdDLElBQUYsQ0FBT3JCLFFBQVFpQixVQUFmO0FBQ0E1QixNQUFFMkIsS0FBRixDQUFRckIsS0FBS3NCLFVBQWI7QUFDQTVCLE1BQUV5QixFQUFGLENBQUtLLElBQUlKLE1BQVQsRUFBaUIsR0FBakI7QUFDQTFCLE1BQUV5QixFQUFGLENBQUtLLElBQUlJLE9BQVQsRUFBa0IsdUJBQWxCO0FBQ0QsR0FYRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJhZGRQb3N0LnRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVzdCBmcm9tICdhdmEnXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nXG5pbXBvcnQgJ3Npbm9uLW1vbmdvb3NlJ1xuaW1wb3J0ICdzaW5vbi1hcy1wcm9taXNlZCdcbmltcG9ydCBwcm94eXF1aXJlIGZyb20gJ3Byb3h5cXVpcmUnXG5cbmltcG9ydCB7IFBvc3QgfSBmcm9tICd+L3NlcnZlci9tb2RlbHMnXG5pbXBvcnQgeyBjcmVhdGVQb3N0cyB9IGZyb20gJ34vc2VydmVyL3V0aWxzL3Rlc3QtdXRpbHMnXG5pbXBvcnQgeyBjcmVhdGVFcnJvciB9IGZyb20gJ34vc2VydmVyL3V0aWxzJ1xuXG4vLyBpbXBvcnRzIGFkZFBvc3QgYW5kIHN0dWJzIGl0cyBkZXBlbmRlbmNpZXNcbmNvbnN0IHsgZGVmYXVsdDogYWRkUG9zdCB9ID0gcHJveHlxdWlyZSgnLi4vYWRkUG9zdCcsIHtcbiAgJy4vdXRpbHMnOiB7XG4gICAgY3JlYXRlTmV3VGFnczogc2lub24uc3R1YigpLnJlc29sdmVzKFsgJzEyMzQ1JyBdKVxuICB9XG59KVxuXG50ZXN0LmJlZm9yZUVhY2godCA9PiB7XG4gIHQuY29udGV4dC5jcmVhdGUgPSBzaW5vbi5tb2NrKFBvc3QpLmV4cGVjdHMoJ2NyZWF0ZScpXG4gIHQuY29udGV4dC5xdWVyeSA9IHNpbm9uLm1vY2soUG9zdCkuZXhwZWN0cygncG9wdWxhdGUnKS5yZXNvbHZlcyhjcmVhdGVQb3N0cygxKSlcbiAgdC5jb250ZXh0Lm5leHQgPSBzaW5vbi5zcHkoKVxuICB0LmNvbnRleHQuY3R4ID0ge1xuICAgIGFwcDoge1xuICAgICAgZW1pdDogKCkgPT4ge31cbiAgICB9XG4gIH1cbiAgdC5jb250ZXh0LmVtaXR0ZXIgPSBzaW5vbi5zcHkodC5jb250ZXh0LmN0eC5hcHAsICdlbWl0Jylcbn0pXG5cbnRlc3QuYWZ0ZXJFYWNoLmFsd2F5cyh0ID0+IHtcbiAgUG9zdC5jcmVhdGUucmVzdG9yZSgpXG4gIFBvc3QucG9wdWxhdGUucmVzdG9yZSgpXG4gIHQuY29udGV4dC5jdHguYXBwLmVtaXQucmVzdG9yZSgpXG4gIHQuY29udGV4dC5uZXh0LnJlc2V0KClcbiAgdC5jb250ZXh0LmVtaXR0ZXIucmVzZXQoKVxuICB0LmNvbnRleHQgPSB7fVxufSlcblxudGVzdC5zZXJpYWwoJ2FkZFBvc3QoKSAtLSBzaG91bGQgcmV0dXJuIHRoZSBuZXdseSBjcmVhdGVkIHBvc3QgKDIwMSknLCBhc3luYyB0ID0+IHtcbiAgY29uc3QgeyBjdHgsIGNyZWF0ZSwgbmV4dCwgZW1pdHRlciB9ID0gdC5jb250ZXh0XG4gIGN0eC5yZXF1ZXN0ID0geyBib2R5OiB7IHRpdGxlOiAndGVzdCcsIHBvc3Q6ICd0ZXN0JyB9IH1cbiAgY3JlYXRlXG4gICAgLndpdGhBcmdzKHtcbiAgICAgIHRpdGxlOiAndGVzdCcsXG4gICAgICBodG1sOiAnPHA+dGVzdDwvcD5cXG4nLFxuICAgICAgbWQ6ICd0ZXN0J1xuICAgIH0pXG4gICAgLnJlc29sdmVzKGNyZWF0ZVBvc3RzKDEpKVxuXG4gIGF3YWl0IGFkZFBvc3QoY3R4LCBuZXh0KVxuICB0LmlzKGN0eC5zdGF0dXMsIDIwMSlcbiAgdC5pcyhjdHguYm9keS5tZCwgJ3Rlc3QtMCcpXG4gIHQuZmFsc2UobmV4dC5jYWxsZWRPbmNlKVxuICB0LmZhbHNlKGVtaXR0ZXIuY2FsbGVkT25jZSlcbn0pXG5cbnRlc3Quc2VyaWFsKCdzaG91bGQgcmV0dXJuIG5ld2x5IGNyZWF0ZWQgUG9zdHMgd2l0aCB0YWdzIGlmIHRhZ3MgcHJvdmlkZWQnLCBhc3luYyB0ID0+IHtcbiAgY29uc3QgeyBjdHgsIGNyZWF0ZSwgbmV4dCwgZW1pdHRlciB9ID0gdC5jb250ZXh0XG4gIGNvbnN0IHRhZ3MgPSBbJzEyMzQ1J11cbiAgY3R4LnJlcXVlc3QgPSB7IGJvZHk6IHsgdGl0bGU6ICd0ZXN0JywgcG9zdDogJ3Rlc3QnLCB0YWdzIH0gfVxuXG4gIGNyZWF0ZVxuICAgIC53aXRoQXJncyh7XG4gICAgICB0aXRsZTogJ3Rlc3QnLFxuICAgICAgaHRtbDogJzxwPnRlc3Q8L3A+XFxuJyxcbiAgICAgICdtZCc6ICd0ZXN0JyxcbiAgICAgIHRhZ3NcbiAgICB9KVxuICAgIC5yZXNvbHZlcyhjcmVhdGVQb3N0cygxKSlcblxuICBhd2FpdCBhZGRQb3N0KGN0eCwgbmV4dClcbiAgdC5pcyhjdHguc3RhdHVzLCAyMDEpXG4gIHQuZmFsc2UobmV4dC5jYWxsZWRPbmNlKVxuICB0LmZhbHNlKGVtaXR0ZXIuY2FsbGVkT25jZSlcbn0pXG5cbnRlc3Quc2VyaWFsKCdzaG91bGQgcHJvcGFnYXRlIGVyciBpZiBpbnZhbGlkIEpTT04gKDQwMCknLCBhc3luYyB0ID0+IHtcbiAgY29uc3QgeyBjdHgsIG5leHQsIGVtaXR0ZXIgfSA9IHQuY29udGV4dFxuICBjdHgucmVxdWVzdCA9IHsgYm9keTogJ3Rlc3Qgc3RyaW5nJyB9XG5cbiAgYXdhaXQgYWRkUG9zdChjdHgsIG5leHQpXG4gIGNvbnN0IGVyciA9IGVtaXR0ZXIuYXJnc1swXVsxXVxuXG4gIHQudHJ1ZShlbWl0dGVyLmNhbGxlZE9uY2UpXG4gIHQuZmFsc2UobmV4dC5jYWxsZWRPbmNlKVxuICB0LmlzKGVyci5zdGF0dXMsIDQwMClcbiAgdC5yZWdleChlcnIubWVzc2FnZSwgL0Nhbm5vdCByZWFkIHByb3BlcnR5LylcbiAgdC5yZWdleChlcnIubWVzc2FnZSwgL3VuZGVmaW5lZC8pXG59KVxuXG50ZXN0LnNlcmlhbCgnc2hvdWxkIHByb3BhZ2F0ZSBlcnIgaWYgcG9zdCBub3QgY3JlYXRlZCcsIGFzeW5jIHQgPT4ge1xuICBjb25zdCB7IGN0eCwgY3JlYXRlLCBuZXh0LCBlbWl0dGVyIH0gPSB0LmNvbnRleHRcbiAgY3R4LnJlcXVlc3QgPSB7IGJvZHk6IHsgdGl0bGU6ICd0ZXN0JywgcG9zdDogJ3Rlc3QnIH0gfVxuICBjcmVhdGVcbiAgICAud2l0aEFyZ3Moe1xuICAgICAgdGl0bGU6ICd0ZXN0JyxcbiAgICAgIGh0bWw6ICc8cD50ZXN0PC9wPlxcbicsXG4gICAgICBtZDogJ3Rlc3QnXG4gICAgfSlcbiAgICAucmVqZWN0cyhjcmVhdGVFcnJvcig1MDAsICd0ZXN0JykpXG5cbiAgYXdhaXQgYWRkUG9zdChjdHgsIG5leHQpXG4gIGNvbnN0IGVyciA9IGVtaXR0ZXIuYXJnc1swXVsxXVxuXG4gIHQudHJ1ZShlbWl0dGVyLmNhbGxlZE9uY2UpXG4gIHQuZmFsc2UobmV4dC5jYWxsZWRPbmNlKVxuICB0LmlzKGVyci5zdGF0dXMsIDUwMClcbiAgdC5pcyhlcnIubWVzc2FnZSwgJ3Rlc3QnKVxufSlcblxudGVzdC5zZXJpYWwoJ3Nob3VsZCBwcm9wYWdhdGUgZXJyb3IgaWYgdGFncyBhcmUgbm90IGFuIGFycmF5JywgYXN5bmMgdCA9PiB7XG4gIGNvbnN0IHsgY3R4LCBuZXh0LCBlbWl0dGVyIH0gPSB0LmNvbnRleHRcbiAgY3R4LnJlcXVlc3QgPSB7IGJvZHk6IHsgdGl0bGU6ICd0ZXN0JywgcG9zdDogJ3Rlc3QnLCB0YWdzOiAnW2FycmF5c3RyaW5nXScgfSB9XG5cbiAgYXdhaXQgYWRkUG9zdChjdHgsIG5leHQpXG4gIGNvbnN0IGVyciA9IGVtaXR0ZXIuYXJnc1swXVsxXVxuXG4gIHQudHJ1ZShlbWl0dGVyLmNhbGxlZE9uY2UpXG4gIHQuZmFsc2UobmV4dC5jYWxsZWRPbmNlKVxuICB0LmlzKGVyci5zdGF0dXMsIDQwMClcbiAgdC5pcyhlcnIubWVzc2FnZSwgJ1RhZ3MgbXVzdCBiZSBhbiBhcnJheScpXG59KVxuIl19