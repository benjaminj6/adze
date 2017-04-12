'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

require('sinon-mongoose');

require('sinon-as-promised');

var _auth = require('../auth');

var _models = require('../../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const email = 'test@test.com';
const testPassword = 'test';
const testUser = {
  email,
  password: testPassword,
  validatePassword(password) {
    return password === this.password;
  }
};

_ava2.default.beforeEach(t => {
  _sinon2.default.mock(_models.User).expects('findOne').withArgs({ email: 'test@test.com' }).chain('exec').resolves(testUser);
});

_ava2.default.afterEach(t => {
  _models.User.findOne.restore();
});

_ava2.default.serial('validate() -- should call `done` w/ user if valid', (() => {
  var _ref = _asyncToGenerator(function* (t) {
    const done = _sinon2.default.spy();
    yield (0, _auth.validate)(email, testPassword, done);
    t.true(done.calledOnce);
    t.true(done.calledWith(null, testUser));
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

_ava2.default.serial('validate() -- should call `done` w/ false if invalid password', (() => {
  var _ref2 = _asyncToGenerator(function* (t) {
    const done = _sinon2.default.spy();
    yield (0, _auth.validate)(email, 'someotherpasswrod', done);
    t.true(done.calledOnce);
    t.true(done.calledWith(null, false));
  });

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
})());

_ava2.default.serial('validate() -- should call `done` w/ err if error thrown', (() => {
  var _ref3 = _asyncToGenerator(function* (t) {
    const done = _sinon2.default.spy();
    yield (0, _auth.validate)(undefined, 'test', done);
    t.true(done.calledOnce);
    t.regex(done.args[0][0], /Error/);
  });

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
})());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvY29uZmlnL19fdGVzdHNfXy9hdXRoLnRlc3QuanMiXSwibmFtZXMiOlsiZW1haWwiLCJ0ZXN0UGFzc3dvcmQiLCJ0ZXN0VXNlciIsInBhc3N3b3JkIiwidmFsaWRhdGVQYXNzd29yZCIsImJlZm9yZUVhY2giLCJ0IiwibW9jayIsImV4cGVjdHMiLCJ3aXRoQXJncyIsImNoYWluIiwicmVzb2x2ZXMiLCJhZnRlckVhY2giLCJmaW5kT25lIiwicmVzdG9yZSIsInNlcmlhbCIsImRvbmUiLCJzcHkiLCJ0cnVlIiwiY2FsbGVkT25jZSIsImNhbGxlZFdpdGgiLCJ1bmRlZmluZWQiLCJyZWdleCIsImFyZ3MiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxRQUFRLGVBQWQ7QUFDQSxNQUFNQyxlQUFlLE1BQXJCO0FBQ0EsTUFBTUMsV0FBVztBQUNmRixPQURlO0FBRWZHLFlBQVVGLFlBRks7QUFHZkcsbUJBQWtCRCxRQUFsQixFQUE0QjtBQUMxQixXQUFPQSxhQUFhLEtBQUtBLFFBQXpCO0FBQ0Q7QUFMYyxDQUFqQjs7QUFRQSxjQUFLRSxVQUFMLENBQWdCQyxLQUFLO0FBQ25CLGtCQUFNQyxJQUFOLGVBQ0dDLE9BREgsQ0FDVyxTQURYLEVBQ3NCQyxRQUR0QixDQUMrQixFQUFFVCxPQUFPLGVBQVQsRUFEL0IsRUFFR1UsS0FGSCxDQUVTLE1BRlQsRUFHR0MsUUFISCxDQUdZVCxRQUhaO0FBSUQsQ0FMRDs7QUFPQSxjQUFLVSxTQUFMLENBQWVOLEtBQUs7QUFDbEIsZUFBS08sT0FBTCxDQUFhQyxPQUFiO0FBQ0QsQ0FGRDs7QUFJQSxjQUFLQyxNQUFMLENBQVksbURBQVo7QUFBQSwrQkFBaUUsV0FBTVQsQ0FBTixFQUFXO0FBQzFFLFVBQU1VLE9BQU8sZ0JBQU1DLEdBQU4sRUFBYjtBQUNBLFVBQU0sb0JBQVNqQixLQUFULEVBQWdCQyxZQUFoQixFQUE4QmUsSUFBOUIsQ0FBTjtBQUNBVixNQUFFWSxJQUFGLENBQU9GLEtBQUtHLFVBQVo7QUFDQWIsTUFBRVksSUFBRixDQUFPRixLQUFLSSxVQUFMLENBQWdCLElBQWhCLEVBQXNCbEIsUUFBdEIsQ0FBUDtBQUNELEdBTEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT0EsY0FBS2EsTUFBTCxDQUFZLCtEQUFaO0FBQUEsZ0NBQTZFLFdBQU1ULENBQU4sRUFBVztBQUN0RixVQUFNVSxPQUFPLGdCQUFNQyxHQUFOLEVBQWI7QUFDQSxVQUFNLG9CQUFTakIsS0FBVCxFQUFnQixtQkFBaEIsRUFBcUNnQixJQUFyQyxDQUFOO0FBQ0FWLE1BQUVZLElBQUYsQ0FBT0YsS0FBS0csVUFBWjtBQUNBYixNQUFFWSxJQUFGLENBQU9GLEtBQUtJLFVBQUwsQ0FBZ0IsSUFBaEIsRUFBc0IsS0FBdEIsQ0FBUDtBQUNELEdBTEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT0EsY0FBS0wsTUFBTCxDQUFZLHlEQUFaO0FBQUEsZ0NBQXVFLFdBQU1ULENBQU4sRUFBVztBQUNoRixVQUFNVSxPQUFPLGdCQUFNQyxHQUFOLEVBQWI7QUFDQSxVQUFNLG9CQUFTSSxTQUFULEVBQW9CLE1BQXBCLEVBQTRCTCxJQUE1QixDQUFOO0FBQ0FWLE1BQUVZLElBQUYsQ0FBT0YsS0FBS0csVUFBWjtBQUNBYixNQUFFZ0IsS0FBRixDQUFRTixLQUFLTyxJQUFMLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FBUixFQUF5QixPQUF6QjtBQUNELEdBTEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiYXV0aC50ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRlc3QgZnJvbSAnYXZhJ1xuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJ1xuaW1wb3J0ICdzaW5vbi1tb25nb29zZSdcbmltcG9ydCAnc2lub24tYXMtcHJvbWlzZWQnXG5cbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnLi4vYXV0aCdcbmltcG9ydCB7IFVzZXIgfSBmcm9tICd+L3NlcnZlci9tb2RlbHMnXG5cbmNvbnN0IGVtYWlsID0gJ3Rlc3RAdGVzdC5jb20nXG5jb25zdCB0ZXN0UGFzc3dvcmQgPSAndGVzdCdcbmNvbnN0IHRlc3RVc2VyID0ge1xuICBlbWFpbCxcbiAgcGFzc3dvcmQ6IHRlc3RQYXNzd29yZCxcbiAgdmFsaWRhdGVQYXNzd29yZCAocGFzc3dvcmQpIHtcbiAgICByZXR1cm4gcGFzc3dvcmQgPT09IHRoaXMucGFzc3dvcmRcbiAgfVxufVxuXG50ZXN0LmJlZm9yZUVhY2godCA9PiB7XG4gIHNpbm9uLm1vY2soVXNlcilcbiAgICAuZXhwZWN0cygnZmluZE9uZScpLndpdGhBcmdzKHsgZW1haWw6ICd0ZXN0QHRlc3QuY29tJyB9KVxuICAgIC5jaGFpbignZXhlYycpXG4gICAgLnJlc29sdmVzKHRlc3RVc2VyKVxufSlcblxudGVzdC5hZnRlckVhY2godCA9PiB7XG4gIFVzZXIuZmluZE9uZS5yZXN0b3JlKClcbn0pXG5cbnRlc3Quc2VyaWFsKCd2YWxpZGF0ZSgpIC0tIHNob3VsZCBjYWxsIGBkb25lYCB3LyB1c2VyIGlmIHZhbGlkJywgYXN5bmMgdCA9PiB7XG4gIGNvbnN0IGRvbmUgPSBzaW5vbi5zcHkoKVxuICBhd2FpdCB2YWxpZGF0ZShlbWFpbCwgdGVzdFBhc3N3b3JkLCBkb25lKVxuICB0LnRydWUoZG9uZS5jYWxsZWRPbmNlKVxuICB0LnRydWUoZG9uZS5jYWxsZWRXaXRoKG51bGwsIHRlc3RVc2VyKSlcbn0pXG5cbnRlc3Quc2VyaWFsKCd2YWxpZGF0ZSgpIC0tIHNob3VsZCBjYWxsIGBkb25lYCB3LyBmYWxzZSBpZiBpbnZhbGlkIHBhc3N3b3JkJywgYXN5bmMgdCA9PiB7XG4gIGNvbnN0IGRvbmUgPSBzaW5vbi5zcHkoKVxuICBhd2FpdCB2YWxpZGF0ZShlbWFpbCwgJ3NvbWVvdGhlcnBhc3N3cm9kJywgZG9uZSlcbiAgdC50cnVlKGRvbmUuY2FsbGVkT25jZSlcbiAgdC50cnVlKGRvbmUuY2FsbGVkV2l0aChudWxsLCBmYWxzZSkpXG59KVxuXG50ZXN0LnNlcmlhbCgndmFsaWRhdGUoKSAtLSBzaG91bGQgY2FsbCBgZG9uZWAgdy8gZXJyIGlmIGVycm9yIHRocm93bicsIGFzeW5jIHQgPT4ge1xuICBjb25zdCBkb25lID0gc2lub24uc3B5KClcbiAgYXdhaXQgdmFsaWRhdGUodW5kZWZpbmVkLCAndGVzdCcsIGRvbmUpXG4gIHQudHJ1ZShkb25lLmNhbGxlZE9uY2UpXG4gIHQucmVnZXgoZG9uZS5hcmdzWzBdWzBdLCAvRXJyb3IvKVxufSlcbiJdfQ==