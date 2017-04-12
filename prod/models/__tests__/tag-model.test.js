'use strict';

let errorTest = (() => {
  var _ref = _asyncToGenerator(function* (t, input) {
    const tag = new _.Tag(input);
    const err = yield t.throws(tag.validate());
    t.is(err.name, 'ValidationError');
  });

  return function errorTest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(0, _ava2.default)('Should pass validation', t => {
  const tag = new _.Tag({
    name: 'test',
    color: '#000'
  });

  t.notThrows(tag.validate());
  t.is(tag.name, 'test');
  t.is(tag.color, '#000');
});

(0, _ava2.default)('should pass validation if no color', t => {
  const tag = new _.Tag({
    name: 'test'
  });

  t.notThrows(tag.validate());
  t.is(tag.name, 'test');
});

(0, _ava2.default)('should fail validation if no name', errorTest, { color: '#000' });

(0, _ava2.default)('should fail validation if name is not a String', errorTest, { name: [] });

(0, _ava2.default)('should fail validation if color is not a String', errorTest, { name: 'test', color: [] });

(0, _ava2.default)('should fail validation if color is not a hexadecimal', errorTest, { name: 'test', color: 'test' });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvbW9kZWxzL19fdGVzdHNfXy90YWctbW9kZWwudGVzdC5qcyJdLCJuYW1lcyI6WyJ0IiwiaW5wdXQiLCJ0YWciLCJlcnIiLCJ0aHJvd3MiLCJ2YWxpZGF0ZSIsImlzIiwibmFtZSIsImVycm9yVGVzdCIsImNvbG9yIiwibm90VGhyb3dzIl0sIm1hcHBpbmdzIjoiOzs7K0JBdUJBLFdBQTBCQSxDQUExQixFQUE2QkMsS0FBN0IsRUFBb0M7QUFDbEMsVUFBTUMsTUFBTSxVQUFRRCxLQUFSLENBQVo7QUFDQSxVQUFNRSxNQUFNLE1BQU1ILEVBQUVJLE1BQUYsQ0FBU0YsSUFBSUcsUUFBSixFQUFULENBQWxCO0FBQ0FMLE1BQUVNLEVBQUYsQ0FBS0gsSUFBSUksSUFBVCxFQUFlLGlCQUFmO0FBQ0QsRzs7a0JBSmNDLFM7Ozs7O0FBdkJmOzs7O0FBQ0E7Ozs7OztBQUVBLG1CQUFLLHdCQUFMLEVBQStCUixLQUFLO0FBQ2xDLFFBQU1FLE1BQU0sVUFBUTtBQUNsQkssVUFBTSxNQURZO0FBRWxCRSxXQUFPO0FBRlcsR0FBUixDQUFaOztBQUtBVCxJQUFFVSxTQUFGLENBQVlSLElBQUlHLFFBQUosRUFBWjtBQUNBTCxJQUFFTSxFQUFGLENBQUtKLElBQUlLLElBQVQsRUFBZSxNQUFmO0FBQ0FQLElBQUVNLEVBQUYsQ0FBS0osSUFBSU8sS0FBVCxFQUFnQixNQUFoQjtBQUNELENBVEQ7O0FBV0EsbUJBQUssb0NBQUwsRUFBMkNULEtBQUs7QUFDOUMsUUFBTUUsTUFBTSxVQUFRO0FBQ2xCSyxVQUFNO0FBRFksR0FBUixDQUFaOztBQUlBUCxJQUFFVSxTQUFGLENBQVlSLElBQUlHLFFBQUosRUFBWjtBQUNBTCxJQUFFTSxFQUFGLENBQUtKLElBQUlLLElBQVQsRUFBZSxNQUFmO0FBQ0QsQ0FQRDs7QUFlQSxtQkFDRSxtQ0FERixFQUVFQyxTQUZGLEVBR0UsRUFBRUMsT0FBTyxNQUFULEVBSEY7O0FBTUEsbUJBQ0UsZ0RBREYsRUFFRUQsU0FGRixFQUdFLEVBQUVELE1BQU0sRUFBUixFQUhGOztBQU1BLG1CQUNFLGlEQURGLEVBRUVDLFNBRkYsRUFHRSxFQUFFRCxNQUFNLE1BQVIsRUFBZ0JFLE9BQU8sRUFBdkIsRUFIRjs7QUFNQSxtQkFDRSxzREFERixFQUVFRCxTQUZGLEVBR0UsRUFBRUQsTUFBTSxNQUFSLEVBQWdCRSxPQUFPLE1BQXZCLEVBSEYiLCJmaWxlIjoidGFnLW1vZGVsLnRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVzdCBmcm9tICdhdmEnXG5pbXBvcnQgeyBUYWcgfSBmcm9tICcuLidcblxudGVzdCgnU2hvdWxkIHBhc3MgdmFsaWRhdGlvbicsIHQgPT4ge1xuICBjb25zdCB0YWcgPSBuZXcgVGFnKHtcbiAgICBuYW1lOiAndGVzdCcsXG4gICAgY29sb3I6ICcjMDAwJ1xuICB9KVxuXG4gIHQubm90VGhyb3dzKHRhZy52YWxpZGF0ZSgpKVxuICB0LmlzKHRhZy5uYW1lLCAndGVzdCcpXG4gIHQuaXModGFnLmNvbG9yLCAnIzAwMCcpXG59KVxuXG50ZXN0KCdzaG91bGQgcGFzcyB2YWxpZGF0aW9uIGlmIG5vIGNvbG9yJywgdCA9PiB7XG4gIGNvbnN0IHRhZyA9IG5ldyBUYWcoe1xuICAgIG5hbWU6ICd0ZXN0J1xuICB9KVxuXG4gIHQubm90VGhyb3dzKHRhZy52YWxpZGF0ZSgpKVxuICB0LmlzKHRhZy5uYW1lLCAndGVzdCcpXG59KVxuXG5hc3luYyBmdW5jdGlvbiBlcnJvclRlc3QgKHQsIGlucHV0KSB7XG4gIGNvbnN0IHRhZyA9IG5ldyBUYWcoaW5wdXQpXG4gIGNvbnN0IGVyciA9IGF3YWl0IHQudGhyb3dzKHRhZy52YWxpZGF0ZSgpKVxuICB0LmlzKGVyci5uYW1lLCAnVmFsaWRhdGlvbkVycm9yJylcbn1cblxudGVzdChcbiAgJ3Nob3VsZCBmYWlsIHZhbGlkYXRpb24gaWYgbm8gbmFtZScsXG4gIGVycm9yVGVzdCxcbiAgeyBjb2xvcjogJyMwMDAnIH1cbilcblxudGVzdChcbiAgJ3Nob3VsZCBmYWlsIHZhbGlkYXRpb24gaWYgbmFtZSBpcyBub3QgYSBTdHJpbmcnLFxuICBlcnJvclRlc3QsXG4gIHsgbmFtZTogW10gfVxuKVxuXG50ZXN0KFxuICAnc2hvdWxkIGZhaWwgdmFsaWRhdGlvbiBpZiBjb2xvciBpcyBub3QgYSBTdHJpbmcnLFxuICBlcnJvclRlc3QsXG4gIHsgbmFtZTogJ3Rlc3QnLCBjb2xvcjogW10gfVxuKVxuXG50ZXN0KFxuICAnc2hvdWxkIGZhaWwgdmFsaWRhdGlvbiBpZiBjb2xvciBpcyBub3QgYSBoZXhhZGVjaW1hbCcsXG4gIGVycm9yVGVzdCxcbiAgeyBuYW1lOiAndGVzdCcsIGNvbG9yOiAndGVzdCcgfVxuKVxuIl19