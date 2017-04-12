'use strict';

let errorTest = (() => {
  var _ref = _asyncToGenerator(function* (t, input) {
    const user = new _.User(input);
    const err = yield t.throws(user.validate());
    t.is(err.name, 'ValidationError');
  });

  return function errorTest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

let setupValidationTest = (() => {
  var _ref7 = _asyncToGenerator(function* (password) {
    const hash = yield _.User.hashPassword(password);

    const user = new _.User({
      email: 'test@test.com',
      password: hash
    });

    return user;
  });

  return function setupValidationTest(_x8) {
    return _ref7.apply(this, arguments);
  };
})();

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(0, _ava2.default)('User -- should pass validation', t => {
  const user = new _.User({
    email: 'test@test.com',
    password: 'test'
  });

  t.notThrows(user.validate());
  t.is(user.email, 'test@test.com');
  t.is(user.password, 'test');
});

(0, _ava2.default)('User -- should fail validation if no email', errorTest, { password: 'test' });

(0, _ava2.default)('User -- should fail validation if no password', errorTest, { email: 'test@test.com' });

(0, _ava2.default)('User -- should fail validation if email has no `@`', errorTest, { email: 'testtesttest.com', password: 'test' });

(0, _ava2.default)('User -- should fail validation if email has no `.TLD`', errorTest, { email: 'test@test', password: 'test' });

(0, _ava2.default)('User -- should fail validation if email is not a string', errorTest, { email: [], password: 'test' });

(0, _ava2.default)('User -- should fail validation if email is blank before `@`', errorTest, { email: '@test.com', password: 'test' });

(0, _ava2.default)('User -- should fail validation if password is not a string', errorTest, { email: 'test@test.com', password: [] });

(0, _ava2.default)('hashPassword() -- should hash password', (() => {
  var _ref2 = _asyncToGenerator(function* (t) {
    const hash = yield _.User.hashPassword('string');
    t.not(hash, 'string');
  });

  return function (_x3) {
    return _ref2.apply(this, arguments);
  };
})());

(0, _ava2.default)('hashPassword() -- should return error', (() => {
  var _ref3 = _asyncToGenerator(function* (t) {
    const err = yield t.throws(_.User.hashPassword());
    t.is(err.message, 'Encryption failed');
  });

  return function (_x4) {
    return _ref3.apply(this, arguments);
  };
})());

(0, _ava2.default)('validatePassword() -- should return password', (() => {
  var _ref4 = _asyncToGenerator(function* (t) {
    const user = yield setupValidationTest('test');
    const validated = yield user.validatePassword('test');
    t.is(validated.true);
  });

  return function (_x5) {
    return _ref4.apply(this, arguments);
  };
})());

(0, _ava2.default)('validatePassword() -- should return false if wrong password', (() => {
  var _ref5 = _asyncToGenerator(function* (t) {
    const user = yield setupValidationTest('test');
    const validated = yield user.validatePassword('foo');
    t.is(validated, false);
    // t.is(err.message, 'Passwords do not match')
  });

  return function (_x6) {
    return _ref5.apply(this, arguments);
  };
})());

(0, _ava2.default)('validatePassword() -- should throw if no password', (() => {
  var _ref6 = _asyncToGenerator(function* (t) {
    const user = yield setupValidationTest('test');
    const err = yield t.throws(user.validatePassword());
    t.is(err.status, 500);
    t.regex(err.message, /Illegal arguments/);
  });

  return function (_x7) {
    return _ref6.apply(this, arguments);
  };
})());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvbW9kZWxzL19fdGVzdHNfXy91c2VyLW1vZGVsLnRlc3QuanMiXSwibmFtZXMiOlsidCIsImlucHV0IiwidXNlciIsImVyciIsInRocm93cyIsInZhbGlkYXRlIiwiaXMiLCJuYW1lIiwiZXJyb3JUZXN0IiwicGFzc3dvcmQiLCJoYXNoIiwiaGFzaFBhc3N3b3JkIiwiZW1haWwiLCJzZXR1cFZhbGlkYXRpb25UZXN0Iiwibm90VGhyb3dzIiwibm90IiwibWVzc2FnZSIsInZhbGlkYXRlZCIsInZhbGlkYXRlUGFzc3dvcmQiLCJ0cnVlIiwic3RhdHVzIiwicmVnZXgiXSwibWFwcGluZ3MiOiI7OzsrQkFjQSxXQUEwQkEsQ0FBMUIsRUFBNkJDLEtBQTdCLEVBQW9DO0FBQ2xDLFVBQU1DLE9BQU8sV0FBU0QsS0FBVCxDQUFiO0FBQ0EsVUFBTUUsTUFBTSxNQUFNSCxFQUFFSSxNQUFGLENBQVNGLEtBQUtHLFFBQUwsRUFBVCxDQUFsQjtBQUNBTCxNQUFFTSxFQUFGLENBQUtILElBQUlJLElBQVQsRUFBZSxpQkFBZjtBQUNELEc7O2tCQUpjQyxTOzs7Ozs7Z0NBOEVmLFdBQW9DQyxRQUFwQyxFQUE4QztBQUM1QyxVQUFNQyxPQUFPLE1BQU0sT0FBS0MsWUFBTCxDQUFrQkYsUUFBbEIsQ0FBbkI7O0FBRUEsVUFBTVAsT0FBTyxXQUFTO0FBQ3BCVSxhQUFPLGVBRGE7QUFFcEJILGdCQUFVQztBQUZVLEtBQVQsQ0FBYjs7QUFLQSxXQUFPUixJQUFQO0FBQ0QsRzs7a0JBVGNXLG1COzs7OztBQTVGZjs7OztBQUNBOzs7Ozs7QUFFQSxtQkFBSyxnQ0FBTCxFQUF1Q2IsS0FBSztBQUMxQyxRQUFNRSxPQUFPLFdBQVM7QUFDcEJVLFdBQU8sZUFEYTtBQUVwQkgsY0FBVTtBQUZVLEdBQVQsQ0FBYjs7QUFLQVQsSUFBRWMsU0FBRixDQUFZWixLQUFLRyxRQUFMLEVBQVo7QUFDQUwsSUFBRU0sRUFBRixDQUFLSixLQUFLVSxLQUFWLEVBQWlCLGVBQWpCO0FBQ0FaLElBQUVNLEVBQUYsQ0FBS0osS0FBS08sUUFBVixFQUFvQixNQUFwQjtBQUNELENBVEQ7O0FBaUJBLG1CQUNFLDRDQURGLEVBRUVELFNBRkYsRUFHRSxFQUFFQyxVQUFVLE1BQVosRUFIRjs7QUFNQSxtQkFDRSwrQ0FERixFQUVFRCxTQUZGLEVBR0UsRUFBRUksT0FBTyxlQUFULEVBSEY7O0FBTUEsbUJBQ0Usb0RBREYsRUFFRUosU0FGRixFQUdFLEVBQUVJLE9BQU8sa0JBQVQsRUFBNkJILFVBQVUsTUFBdkMsRUFIRjs7QUFNQSxtQkFDRSx1REFERixFQUVFRCxTQUZGLEVBR0UsRUFBRUksT0FBTyxXQUFULEVBQXNCSCxVQUFVLE1BQWhDLEVBSEY7O0FBTUEsbUJBQ0UseURBREYsRUFFRUQsU0FGRixFQUdFLEVBQUVJLE9BQU8sRUFBVCxFQUFhSCxVQUFVLE1BQXZCLEVBSEY7O0FBTUEsbUJBQ0UsNkRBREYsRUFFRUQsU0FGRixFQUdFLEVBQUVJLE9BQU8sV0FBVCxFQUFzQkgsVUFBVSxNQUFoQyxFQUhGOztBQU1BLG1CQUNFLDREQURGLEVBRUVELFNBRkYsRUFHRSxFQUFFSSxPQUFPLGVBQVQsRUFBMEJILFVBQVUsRUFBcEMsRUFIRjs7QUFNQSxtQkFBSyx3Q0FBTDtBQUFBLGdDQUErQyxXQUFNVCxDQUFOLEVBQVc7QUFDeEQsVUFBTVUsT0FBTyxNQUFNLE9BQUtDLFlBQUwsQ0FBa0IsUUFBbEIsQ0FBbkI7QUFDQVgsTUFBRWUsR0FBRixDQUFNTCxJQUFOLEVBQVksUUFBWjtBQUNELEdBSEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS0EsbUJBQUssdUNBQUw7QUFBQSxnQ0FBOEMsV0FBTVYsQ0FBTixFQUFXO0FBQ3ZELFVBQU1HLE1BQU0sTUFBTUgsRUFBRUksTUFBRixDQUFTLE9BQUtPLFlBQUwsRUFBVCxDQUFsQjtBQUNBWCxNQUFFTSxFQUFGLENBQUtILElBQUlhLE9BQVQsRUFBa0IsbUJBQWxCO0FBQ0QsR0FIRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLQSxtQkFBSyw4Q0FBTDtBQUFBLGdDQUFxRCxXQUFNaEIsQ0FBTixFQUFXO0FBQzlELFVBQU1FLE9BQU8sTUFBTVcsb0JBQW9CLE1BQXBCLENBQW5CO0FBQ0EsVUFBTUksWUFBWSxNQUFNZixLQUFLZ0IsZ0JBQUwsQ0FBc0IsTUFBdEIsQ0FBeEI7QUFDQWxCLE1BQUVNLEVBQUYsQ0FBS1csVUFBVUUsSUFBZjtBQUNELEdBSkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTUEsbUJBQUssNkRBQUw7QUFBQSxnQ0FBb0UsV0FBTW5CLENBQU4sRUFBVztBQUM3RSxVQUFNRSxPQUFPLE1BQU1XLG9CQUFvQixNQUFwQixDQUFuQjtBQUNBLFVBQU1JLFlBQVksTUFBTWYsS0FBS2dCLGdCQUFMLENBQXNCLEtBQXRCLENBQXhCO0FBQ0FsQixNQUFFTSxFQUFGLENBQUtXLFNBQUwsRUFBZ0IsS0FBaEI7QUFDQTtBQUNELEdBTEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT0EsbUJBQUssbURBQUw7QUFBQSxnQ0FBMEQsV0FBTWpCLENBQU4sRUFBVztBQUNuRSxVQUFNRSxPQUFPLE1BQU1XLG9CQUFvQixNQUFwQixDQUFuQjtBQUNBLFVBQU1WLE1BQU0sTUFBTUgsRUFBRUksTUFBRixDQUFTRixLQUFLZ0IsZ0JBQUwsRUFBVCxDQUFsQjtBQUNBbEIsTUFBRU0sRUFBRixDQUFLSCxJQUFJaUIsTUFBVCxFQUFpQixHQUFqQjtBQUNBcEIsTUFBRXFCLEtBQUYsQ0FBUWxCLElBQUlhLE9BQVosRUFBcUIsbUJBQXJCO0FBQ0QsR0FMRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJ1c2VyLW1vZGVsLnRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVzdCBmcm9tICdhdmEnXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4nXG5cbnRlc3QoJ1VzZXIgLS0gc2hvdWxkIHBhc3MgdmFsaWRhdGlvbicsIHQgPT4ge1xuICBjb25zdCB1c2VyID0gbmV3IFVzZXIoe1xuICAgIGVtYWlsOiAndGVzdEB0ZXN0LmNvbScsXG4gICAgcGFzc3dvcmQ6ICd0ZXN0J1xuICB9KVxuXG4gIHQubm90VGhyb3dzKHVzZXIudmFsaWRhdGUoKSlcbiAgdC5pcyh1c2VyLmVtYWlsLCAndGVzdEB0ZXN0LmNvbScpXG4gIHQuaXModXNlci5wYXNzd29yZCwgJ3Rlc3QnKVxufSlcblxuYXN5bmMgZnVuY3Rpb24gZXJyb3JUZXN0ICh0LCBpbnB1dCkge1xuICBjb25zdCB1c2VyID0gbmV3IFVzZXIoaW5wdXQpXG4gIGNvbnN0IGVyciA9IGF3YWl0IHQudGhyb3dzKHVzZXIudmFsaWRhdGUoKSlcbiAgdC5pcyhlcnIubmFtZSwgJ1ZhbGlkYXRpb25FcnJvcicpXG59XG5cbnRlc3QoXG4gICdVc2VyIC0tIHNob3VsZCBmYWlsIHZhbGlkYXRpb24gaWYgbm8gZW1haWwnLFxuICBlcnJvclRlc3QsXG4gIHsgcGFzc3dvcmQ6ICd0ZXN0JyB9XG4pXG5cbnRlc3QoXG4gICdVc2VyIC0tIHNob3VsZCBmYWlsIHZhbGlkYXRpb24gaWYgbm8gcGFzc3dvcmQnLFxuICBlcnJvclRlc3QsXG4gIHsgZW1haWw6ICd0ZXN0QHRlc3QuY29tJyB9XG4pXG5cbnRlc3QoXG4gICdVc2VyIC0tIHNob3VsZCBmYWlsIHZhbGlkYXRpb24gaWYgZW1haWwgaGFzIG5vIGBAYCcsXG4gIGVycm9yVGVzdCxcbiAgeyBlbWFpbDogJ3Rlc3R0ZXN0dGVzdC5jb20nLCBwYXNzd29yZDogJ3Rlc3QnIH1cbilcblxudGVzdChcbiAgJ1VzZXIgLS0gc2hvdWxkIGZhaWwgdmFsaWRhdGlvbiBpZiBlbWFpbCBoYXMgbm8gYC5UTERgJyxcbiAgZXJyb3JUZXN0LFxuICB7IGVtYWlsOiAndGVzdEB0ZXN0JywgcGFzc3dvcmQ6ICd0ZXN0JyB9XG4pXG5cbnRlc3QoXG4gICdVc2VyIC0tIHNob3VsZCBmYWlsIHZhbGlkYXRpb24gaWYgZW1haWwgaXMgbm90IGEgc3RyaW5nJyxcbiAgZXJyb3JUZXN0LFxuICB7IGVtYWlsOiBbXSwgcGFzc3dvcmQ6ICd0ZXN0JyB9XG4pXG5cbnRlc3QoXG4gICdVc2VyIC0tIHNob3VsZCBmYWlsIHZhbGlkYXRpb24gaWYgZW1haWwgaXMgYmxhbmsgYmVmb3JlIGBAYCcsXG4gIGVycm9yVGVzdCxcbiAgeyBlbWFpbDogJ0B0ZXN0LmNvbScsIHBhc3N3b3JkOiAndGVzdCcgfVxuKVxuXG50ZXN0KFxuICAnVXNlciAtLSBzaG91bGQgZmFpbCB2YWxpZGF0aW9uIGlmIHBhc3N3b3JkIGlzIG5vdCBhIHN0cmluZycsXG4gIGVycm9yVGVzdCxcbiAgeyBlbWFpbDogJ3Rlc3RAdGVzdC5jb20nLCBwYXNzd29yZDogW10gfVxuKVxuXG50ZXN0KCdoYXNoUGFzc3dvcmQoKSAtLSBzaG91bGQgaGFzaCBwYXNzd29yZCcsIGFzeW5jIHQgPT4ge1xuICBjb25zdCBoYXNoID0gYXdhaXQgVXNlci5oYXNoUGFzc3dvcmQoJ3N0cmluZycpXG4gIHQubm90KGhhc2gsICdzdHJpbmcnKVxufSlcblxudGVzdCgnaGFzaFBhc3N3b3JkKCkgLS0gc2hvdWxkIHJldHVybiBlcnJvcicsIGFzeW5jIHQgPT4ge1xuICBjb25zdCBlcnIgPSBhd2FpdCB0LnRocm93cyhVc2VyLmhhc2hQYXNzd29yZCgpKVxuICB0LmlzKGVyci5tZXNzYWdlLCAnRW5jcnlwdGlvbiBmYWlsZWQnKVxufSlcblxudGVzdCgndmFsaWRhdGVQYXNzd29yZCgpIC0tIHNob3VsZCByZXR1cm4gcGFzc3dvcmQnLCBhc3luYyB0ID0+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IHNldHVwVmFsaWRhdGlvblRlc3QoJ3Rlc3QnKVxuICBjb25zdCB2YWxpZGF0ZWQgPSBhd2FpdCB1c2VyLnZhbGlkYXRlUGFzc3dvcmQoJ3Rlc3QnKVxuICB0LmlzKHZhbGlkYXRlZC50cnVlKVxufSlcblxudGVzdCgndmFsaWRhdGVQYXNzd29yZCgpIC0tIHNob3VsZCByZXR1cm4gZmFsc2UgaWYgd3JvbmcgcGFzc3dvcmQnLCBhc3luYyB0ID0+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IHNldHVwVmFsaWRhdGlvblRlc3QoJ3Rlc3QnKVxuICBjb25zdCB2YWxpZGF0ZWQgPSBhd2FpdCB1c2VyLnZhbGlkYXRlUGFzc3dvcmQoJ2ZvbycpXG4gIHQuaXModmFsaWRhdGVkLCBmYWxzZSlcbiAgLy8gdC5pcyhlcnIubWVzc2FnZSwgJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnKVxufSlcblxudGVzdCgndmFsaWRhdGVQYXNzd29yZCgpIC0tIHNob3VsZCB0aHJvdyBpZiBubyBwYXNzd29yZCcsIGFzeW5jIHQgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgc2V0dXBWYWxpZGF0aW9uVGVzdCgndGVzdCcpXG4gIGNvbnN0IGVyciA9IGF3YWl0IHQudGhyb3dzKHVzZXIudmFsaWRhdGVQYXNzd29yZCgpKVxuICB0LmlzKGVyci5zdGF0dXMsIDUwMClcbiAgdC5yZWdleChlcnIubWVzc2FnZSwgL0lsbGVnYWwgYXJndW1lbnRzLylcbn0pXG5cbmFzeW5jIGZ1bmN0aW9uIHNldHVwVmFsaWRhdGlvblRlc3QgKHBhc3N3b3JkKSB7XG4gIGNvbnN0IGhhc2ggPSBhd2FpdCBVc2VyLmhhc2hQYXNzd29yZChwYXNzd29yZClcblxuICBjb25zdCB1c2VyID0gbmV3IFVzZXIoe1xuICAgIGVtYWlsOiAndGVzdEB0ZXN0LmNvbScsXG4gICAgcGFzc3dvcmQ6IGhhc2hcbiAgfSlcblxuICByZXR1cm4gdXNlclxufVxuIl19