'use strict';

var _errorGenerator = require('../errorGenerator');

var _errorGenerator2 = _interopRequireDefault(_errorGenerator);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava2.default)('errorGenerator -- returns error from status/message', t => {
  const err = (0, _errorGenerator2.default)(500, 'test');
  t.is(err.status, 500);
  t.is(err.message, 'test');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvdXRpbHMvX190ZXN0c19fL2Vycm9yR2VuZXJhdG9yLnRlc3QuanMiXSwibmFtZXMiOlsidCIsImVyciIsImlzIiwic3RhdHVzIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxtQkFBSyxxREFBTCxFQUE0REEsS0FBSztBQUMvRCxRQUFNQyxNQUFNLDhCQUFZLEdBQVosRUFBaUIsTUFBakIsQ0FBWjtBQUNBRCxJQUFFRSxFQUFGLENBQUtELElBQUlFLE1BQVQsRUFBaUIsR0FBakI7QUFDQUgsSUFBRUUsRUFBRixDQUFLRCxJQUFJRyxPQUFULEVBQWtCLE1BQWxCO0FBQ0QsQ0FKRCIsImZpbGUiOiJlcnJvckdlbmVyYXRvci50ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUVycm9yIGZyb20gJy4uL2Vycm9yR2VuZXJhdG9yJ1xuaW1wb3J0IHRlc3QgZnJvbSAnYXZhJ1xuXG50ZXN0KCdlcnJvckdlbmVyYXRvciAtLSByZXR1cm5zIGVycm9yIGZyb20gc3RhdHVzL21lc3NhZ2UnLCB0ID0+IHtcbiAgY29uc3QgZXJyID0gY3JlYXRlRXJyb3IoNTAwLCAndGVzdCcpXG4gIHQuaXMoZXJyLnN0YXR1cywgNTAwKVxuICB0LmlzKGVyci5tZXNzYWdlLCAndGVzdCcpXG59KVxuIl19