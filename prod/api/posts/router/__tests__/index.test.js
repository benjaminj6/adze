'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _supertestSession = require('supertest-session');

var _supertestSession2 = _interopRequireDefault(_supertestSession);

var _ = require('../../../..');

var _testUtils = require('../../../../utils/test-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_mongoose2.default.Promise = global.Promise;

let server;
let req;

_ava2.default.before((() => {
  var _ref = _asyncToGenerator(function* (t) {
    server = yield (0, _.start)();
    req = (0, _supertestSession2.default)(server);

    yield req.post('/api/auth/login').send({ email: 'test@test.com', password: 'test' });
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

_ava2.default.beforeEach((() => {
  var _ref2 = _asyncToGenerator(function* (t) {
    const dbResults = yield (0, _testUtils.populateDB)(5);
    t.context.postId = dbResults[0].id;
  });

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
})());

_ava2.default.afterEach.always((() => {
  var _ref3 = _asyncToGenerator(function* (t) {
    yield (0, _testUtils.clearDB)();
  });

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
})());

_ava2.default.after.always((() => {
  var _ref4 = _asyncToGenerator(function* (t) {
    yield _mongoose2.default.disconnect();
    yield server.close();
  });

  return function (_x4) {
    return _ref4.apply(this, arguments);
  };
})());

_ava2.default.serial('GET /api/posts -- should return posts', (() => {
  var _ref5 = _asyncToGenerator(function* (t) {
    const { body } = yield req.get('/api/posts').expect(200);
    t.is(body.length, 5);
  });

  return function (_x5) {
    return _ref5.apply(this, arguments);
  };
})());

_ava2.default.serial('GET /api/posts/:number -- should return number of posts', (() => {
  var _ref6 = _asyncToGenerator(function* (t) {
    const { body } = yield req.get('/api/posts/2').expect(200);
    t.is(body.length, 2);
  });

  return function (_x6) {
    return _ref6.apply(this, arguments);
  };
})());

_ava2.default.serial('DELETE /api/posts/:id -- should return confirmation message', (() => {
  var _ref7 = _asyncToGenerator(function* (t) {
    const { text } = yield req.delete(`/api/posts/${t.context.postId}`).expect(200);
    t.is(text, 'Post removed successfully');
  });

  return function (_x7) {
    return _ref7.apply(this, arguments);
  };
})());

_ava2.default.serial('POST /api/posts -- should return added item', (() => {
  var _ref8 = _asyncToGenerator(function* (t) {
    const { body } = yield req.post('/api/posts').send({ title: 'test', post: 'test' }).expect(201);

    t.true(body.toString() === '[object Object]');
    t.is(body.title, 'test');
    t.regex(body.html, /<p>test<\/p>/);
    t.is(body.md, 'test');
  });

  return function (_x8) {
    return _ref8.apply(this, arguments);
  };
})());

_ava2.default.serial('PATCH /api/edit/:id -- should return the edited item', (() => {
  var _ref9 = _asyncToGenerator(function* (t) {
    const { body } = yield req.patch(`/api/posts/${t.context.postId}`).send({ title: 'something new test' }).expect(200);

    t.is(body.title, 'something new test');
    t.truthy(body.html);
    t.truthy(body.md);
  });

  return function (_x9) {
    return _ref9.apply(this, arguments);
  };
})());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3Bvc3RzL3JvdXRlci9fX3Rlc3RzX18vaW5kZXgudGVzdC5qcyJdLCJuYW1lcyI6WyJQcm9taXNlIiwiZ2xvYmFsIiwic2VydmVyIiwicmVxIiwiYmVmb3JlIiwidCIsInBvc3QiLCJzZW5kIiwiZW1haWwiLCJwYXNzd29yZCIsImJlZm9yZUVhY2giLCJkYlJlc3VsdHMiLCJjb250ZXh0IiwicG9zdElkIiwiaWQiLCJhZnRlckVhY2giLCJhbHdheXMiLCJhZnRlciIsImRpc2Nvbm5lY3QiLCJjbG9zZSIsInNlcmlhbCIsImJvZHkiLCJnZXQiLCJleHBlY3QiLCJpcyIsImxlbmd0aCIsInRleHQiLCJkZWxldGUiLCJ0aXRsZSIsInRydWUiLCJ0b1N0cmluZyIsInJlZ2V4IiwiaHRtbCIsIm1kIiwicGF0Y2giLCJ0cnV0aHkiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUdBOzs7O0FBRUE7O0FBQ0E7Ozs7OztBQUxBLG1CQUFTQSxPQUFULEdBQW1CQyxPQUFPRCxPQUExQjs7QUFPQSxJQUFJRSxNQUFKO0FBQ0EsSUFBSUMsR0FBSjs7QUFFQSxjQUFLQyxNQUFMO0FBQUEsK0JBQVksV0FBTUMsQ0FBTixFQUFXO0FBQ3JCSCxhQUFTLE1BQU0sY0FBZjtBQUNBQyxVQUFNLGdDQUFRRCxNQUFSLENBQU47O0FBRUEsVUFBTUMsSUFBSUcsSUFBSixDQUFTLGlCQUFULEVBQ0hDLElBREcsQ0FDRSxFQUFFQyxPQUFPLGVBQVQsRUFBMEJDLFVBQVUsTUFBcEMsRUFERixDQUFOO0FBRUQsR0FORDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRQSxjQUFLQyxVQUFMO0FBQUEsZ0NBQWdCLFdBQU1MLENBQU4sRUFBVztBQUN6QixVQUFNTSxZQUFZLE1BQU0sMkJBQVcsQ0FBWCxDQUF4QjtBQUNBTixNQUFFTyxPQUFGLENBQVVDLE1BQVYsR0FBbUJGLFVBQVUsQ0FBVixFQUFhRyxFQUFoQztBQUNELEdBSEQ7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IHRlc3QgZnJvbSAnYXZhJ1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xubW9uZ29vc2UuUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlXG5cbmltcG9ydCBzZXNzaW9uIGZyb20gJ3N1cGVydGVzdC1zZXNzaW9uJ1xuXG5pbXBvcnQgeyBzdGFydCB9IGZyb20gJ34vc2VydmVyJ1xuaW1wb3J0IHsgcG9wdWxhdGVEQiwgY2xlYXJEQiB9IGZyb20gJ34vc2VydmVyL3V0aWxzL3Rlc3QtdXRpbHMnXG5cbmxldCBzZXJ2ZXJcbmxldCByZXFcblxudGVzdC5iZWZvcmUoYXN5bmMgdCA9PiB7XG4gIHNlcnZlciA9IGF3YWl0IHN0YXJ0KClcbiAgcmVxID0gc2Vzc2lvbihzZXJ2ZXIpXG5cbiAgYXdhaXQgcmVxLnBvc3QoJy9hcGkvYXV0aC9sb2dpbicpXG4gICAgLnNlbmQoeyBlbWFpbDogJ3Rlc3RAdGVzdC5jb20nLCBwYXNzd29yZDogJ3Rlc3QnIH0pXG59KVxuXG50ZXN0LmJlZm9yZUVhY2goYXN5bmMgdCA9PiB7XG4gIGNvbnN0IGRiUmVzdWx0cyA9IGF3YWl0IHBvcHVsYXRlREIoNSlcbiAgdC5jb250ZXh0LnBvc3RJZCA9IGRiUmVzdWx0c1swXS5pZFxufSlcblxudGVzdC5hZnRlckVhY2guYWx3YXlzKGFzeW5jIHQgPT4ge1xuICBhd2FpdCBjbGVhckRCKClcbn0pXG5cbnRlc3QuYWZ0ZXIuYWx3YXlzKGFzeW5jIHQgPT4ge1xuICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KClcbiAgYXdhaXQgc2VydmVyLmNsb3NlKClcbn0pXG5cbnRlc3Quc2VyaWFsKCdHRVQgL2FwaS9wb3N0cyAtLSBzaG91bGQgcmV0dXJuIHBvc3RzJywgYXN5bmMgdCA9PiB7XG4gIGNvbnN0IHsgYm9keSB9ID0gYXdhaXQgcmVxLmdldCgnL2FwaS9wb3N0cycpLmV4cGVjdCgyMDApXG4gIHQuaXMoYm9keS5sZW5ndGgsIDUpXG59KVxuXG50ZXN0LnNlcmlhbCgnR0VUIC9hcGkvcG9zdHMvOm51bWJlciAtLSBzaG91bGQgcmV0dXJuIG51bWJlciBvZiBwb3N0cycsIGFzeW5jIHQgPT4ge1xuICBjb25zdCB7IGJvZHkgfSA9IGF3YWl0IHJlcS5nZXQoJy9hcGkvcG9zdHMvMicpLmV4cGVjdCgyMDApXG4gIHQuaXMoYm9keS5sZW5ndGgsIDIpXG59KVxuXG50ZXN0LnNlcmlhbCgnREVMRVRFIC9hcGkvcG9zdHMvOmlkIC0tIHNob3VsZCByZXR1cm4gY29uZmlybWF0aW9uIG1lc3NhZ2UnLCBhc3luYyB0ID0+IHtcbiAgY29uc3QgeyB0ZXh0IH0gPSBhd2FpdCByZXEuZGVsZXRlKGAvYXBpL3Bvc3RzLyR7dC5jb250ZXh0LnBvc3RJZH1gKS5leHBlY3QoMjAwKVxuICB0LmlzKHRleHQsICdQb3N0IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5Jylcbn0pXG5cbnRlc3Quc2VyaWFsKCdQT1NUIC9hcGkvcG9zdHMgLS0gc2hvdWxkIHJldHVybiBhZGRlZCBpdGVtJywgYXN5bmMgdCA9PiB7XG4gIGNvbnN0IHsgYm9keSB9ID0gYXdhaXQgcmVxLnBvc3QoJy9hcGkvcG9zdHMnKVxuICAgIC5zZW5kKHsgdGl0bGU6ICd0ZXN0JywgcG9zdDogJ3Rlc3QnIH0pXG4gICAgLmV4cGVjdCgyMDEpXG5cbiAgdC50cnVlKGJvZHkudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpXG4gIHQuaXMoYm9keS50aXRsZSwgJ3Rlc3QnKVxuICB0LnJlZ2V4KGJvZHkuaHRtbCwgLzxwPnRlc3Q8XFwvcD4vKVxuICB0LmlzKGJvZHkubWQsICd0ZXN0Jylcbn0pXG5cbnRlc3Quc2VyaWFsKCdQQVRDSCAvYXBpL2VkaXQvOmlkIC0tIHNob3VsZCByZXR1cm4gdGhlIGVkaXRlZCBpdGVtJywgYXN5bmMgdCA9PiB7XG4gIGNvbnN0IHsgYm9keSB9ID0gYXdhaXQgcmVxLnBhdGNoKGAvYXBpL3Bvc3RzLyR7dC5jb250ZXh0LnBvc3RJZH1gKVxuICAgIC5zZW5kKHsgdGl0bGU6ICdzb21ldGhpbmcgbmV3IHRlc3QnIH0pXG4gICAgLmV4cGVjdCgyMDApXG5cbiAgdC5pcyhib2R5LnRpdGxlLCAnc29tZXRoaW5nIG5ldyB0ZXN0JylcbiAgdC50cnV0aHkoYm9keS5odG1sKVxuICB0LnRydXRoeShib2R5Lm1kKVxufSlcbiJdfQ==