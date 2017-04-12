'use strict';

let validationErrorTest = (() => {
  var _ref = _asyncToGenerator(function* (t, input) {
    const post = new _.Post(input);

    const err = yield t.throws(post.validate());
    t.is(err.name, 'ValidationError');
  });

  return function validationErrorTest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

validationErrorTest.title = message => `post-model -- ${message}`;

(0, _ava2.default)('fails validation if empty title', validationErrorTest, { html: 'testing' });

(0, _ava2.default)('fails validation if title not string', validationErrorTest, { title: [], html: 'Yay for type checking!' });

(0, _ava2.default)('fails validation if empty html', validationErrorTest, { title: 'test' });

(0, _ava2.default)('fails validation if no md', validationErrorTest, { title: 'test', html: 'test' });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvbW9kZWxzL19fdGVzdHNfXy9wb3N0LW1vZGVsLnRlc3QuanMiXSwibmFtZXMiOlsidCIsImlucHV0IiwicG9zdCIsImVyciIsInRocm93cyIsInZhbGlkYXRlIiwiaXMiLCJuYW1lIiwidmFsaWRhdGlvbkVycm9yVGVzdCIsInRpdGxlIiwibWVzc2FnZSIsImh0bWwiXSwibWFwcGluZ3MiOiI7OzsrQkFHQSxXQUFvQ0EsQ0FBcEMsRUFBdUNDLEtBQXZDLEVBQThDO0FBQzVDLFVBQU1DLE9BQU8sV0FBU0QsS0FBVCxDQUFiOztBQUVBLFVBQU1FLE1BQU0sTUFBTUgsRUFBRUksTUFBRixDQUFTRixLQUFLRyxRQUFMLEVBQVQsQ0FBbEI7QUFDQUwsTUFBRU0sRUFBRixDQUFLSCxJQUFJSSxJQUFULEVBQWUsaUJBQWY7QUFDRCxHOztrQkFMY0MsbUI7Ozs7O0FBSGY7Ozs7QUFDQTs7Ozs7O0FBU0FBLG9CQUFvQkMsS0FBcEIsR0FBNkJDLE9BQUQsSUFBYyxpQkFBZ0JBLE9BQVEsRUFBbEU7O0FBRUEsbUJBQ0UsaUNBREYsRUFFRUYsbUJBRkYsRUFHRSxFQUFFRyxNQUFNLFNBQVIsRUFIRjs7QUFNQSxtQkFDRSxzQ0FERixFQUVFSCxtQkFGRixFQUdFLEVBQUVDLE9BQU8sRUFBVCxFQUFhRSxNQUFNLHdCQUFuQixFQUhGOztBQU1BLG1CQUNFLGdDQURGLEVBRUVILG1CQUZGLEVBR0UsRUFBRUMsT0FBTyxNQUFULEVBSEY7O0FBTUEsbUJBQ0UsMkJBREYsRUFFRUQsbUJBRkYsRUFHRSxFQUFFQyxPQUFPLE1BQVQsRUFBaUJFLE1BQU0sTUFBdkIsRUFIRiIsImZpbGUiOiJwb3N0LW1vZGVsLnRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVzdCBmcm9tICdhdmEnXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4nXG5cbmFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRpb25FcnJvclRlc3QgKHQsIGlucHV0KSB7XG4gIGNvbnN0IHBvc3QgPSBuZXcgUG9zdChpbnB1dClcblxuICBjb25zdCBlcnIgPSBhd2FpdCB0LnRocm93cyhwb3N0LnZhbGlkYXRlKCkpXG4gIHQuaXMoZXJyLm5hbWUsICdWYWxpZGF0aW9uRXJyb3InKVxufVxuXG52YWxpZGF0aW9uRXJyb3JUZXN0LnRpdGxlID0gKG1lc3NhZ2UpID0+IGBwb3N0LW1vZGVsIC0tICR7bWVzc2FnZX1gXG5cbnRlc3QoXG4gICdmYWlscyB2YWxpZGF0aW9uIGlmIGVtcHR5IHRpdGxlJyxcbiAgdmFsaWRhdGlvbkVycm9yVGVzdCxcbiAgeyBodG1sOiAndGVzdGluZycgfVxuKVxuXG50ZXN0KFxuICAnZmFpbHMgdmFsaWRhdGlvbiBpZiB0aXRsZSBub3Qgc3RyaW5nJyxcbiAgdmFsaWRhdGlvbkVycm9yVGVzdCxcbiAgeyB0aXRsZTogW10sIGh0bWw6ICdZYXkgZm9yIHR5cGUgY2hlY2tpbmchJyB9XG4pXG5cbnRlc3QoXG4gICdmYWlscyB2YWxpZGF0aW9uIGlmIGVtcHR5IGh0bWwnLFxuICB2YWxpZGF0aW9uRXJyb3JUZXN0LFxuICB7IHRpdGxlOiAndGVzdCcgfVxuKVxuXG50ZXN0KFxuICAnZmFpbHMgdmFsaWRhdGlvbiBpZiBubyBtZCcsXG4gIHZhbGlkYXRpb25FcnJvclRlc3QsXG4gIHsgdGl0bGU6ICd0ZXN0JywgaHRtbDogJ3Rlc3QnIH1cbilcbiJdfQ==