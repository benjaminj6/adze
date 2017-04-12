'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = undefined;

// exported for unit tests
let validate = exports.validate = (() => {
  var _ref2 = _asyncToGenerator(function* (email, password, done) {
    try {
      const user = yield _models.User.findOne({ email }).exec();
      const isAuth = yield user.validatePassword(password);

      if (isAuth) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (err) {
      done(err);
    }
  });

  return function validate(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
})();

var _passportLocal = require('passport-local');

var _models = require('../models');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = passport => {
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((() => {
    var _ref = _asyncToGenerator(function* (id, done) {
      _models.User.findById(id, done);
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })());

  passport.use(new _passportLocal.Strategy({ usernameField: 'email' }, validate));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvY29uZmlnL2F1dGguanMiXSwibmFtZXMiOlsiZW1haWwiLCJwYXNzd29yZCIsImRvbmUiLCJ1c2VyIiwiZmluZE9uZSIsImV4ZWMiLCJpc0F1dGgiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwiZXJyIiwidmFsaWRhdGUiLCJwYXNzcG9ydCIsInNlcmlhbGl6ZVVzZXIiLCJfaWQiLCJkZXNlcmlhbGl6ZVVzZXIiLCJpZCIsImZpbmRCeUlkIiwidXNlIiwidXNlcm5hbWVGaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWVBOztnQ0FDTyxXQUF5QkEsS0FBekIsRUFBZ0NDLFFBQWhDLEVBQTBDQyxJQUExQyxFQUFnRDtBQUNyRCxRQUFJO0FBQ0YsWUFBTUMsT0FBTyxNQUFNLGFBQUtDLE9BQUwsQ0FBYSxFQUFFSixLQUFGLEVBQWIsRUFBd0JLLElBQXhCLEVBQW5CO0FBQ0EsWUFBTUMsU0FBUyxNQUFNSCxLQUFLSSxnQkFBTCxDQUFzQk4sUUFBdEIsQ0FBckI7O0FBRUEsVUFBSUssTUFBSixFQUFZO0FBQ1ZKLGFBQUssSUFBTCxFQUFXQyxJQUFYO0FBQ0QsT0FGRCxNQUVPO0FBQ0xELGFBQUssSUFBTCxFQUFXLEtBQVg7QUFDRDtBQUNGLEtBVEQsQ0FTRSxPQUFPTSxHQUFQLEVBQVk7QUFDWk4sV0FBS00sR0FBTDtBQUNEO0FBQ0YsRzs7a0JBYnFCQyxROzs7OztBQWhCdEI7O0FBQ0E7Ozs7a0JBRWdCQyxRQUFELElBQWM7QUFDM0JBLFdBQVNDLGFBQVQsQ0FBdUIsQ0FBQ1IsSUFBRCxFQUFPRCxJQUFQLEtBQWdCO0FBQ3JDQSxTQUFLLElBQUwsRUFBV0MsS0FBS1MsR0FBaEI7QUFDRCxHQUZEOztBQUlBRixXQUFTRyxlQUFUO0FBQUEsaUNBQXlCLFdBQU9DLEVBQVAsRUFBV1osSUFBWCxFQUFvQjtBQUMzQyxtQkFBS2EsUUFBTCxDQUFjRCxFQUFkLEVBQWtCWixJQUFsQjtBQUNELEtBRkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUFRLFdBQVNNLEdBQVQsQ0FBYSw0QkFBYSxFQUFFQyxlQUFlLE9BQWpCLEVBQWIsRUFBeUNSLFFBQXpDLENBQWI7QUFDRCxDIiwiZmlsZSI6ImF1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJhdGVneSB9IGZyb20gJ3Bhc3Nwb3J0LWxvY2FsJ1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ34vc2VydmVyL21vZGVscydcblxuZXhwb3J0IGRlZmF1bHQgKHBhc3Nwb3J0KSA9PiB7XG4gIHBhc3Nwb3J0LnNlcmlhbGl6ZVVzZXIoKHVzZXIsIGRvbmUpID0+IHtcbiAgICBkb25lKG51bGwsIHVzZXIuX2lkKVxuICB9KVxuXG4gIHBhc3Nwb3J0LmRlc2VyaWFsaXplVXNlcihhc3luYyAoaWQsIGRvbmUpID0+IHtcbiAgICBVc2VyLmZpbmRCeUlkKGlkLCBkb25lKVxuICB9KVxuXG4gIHBhc3Nwb3J0LnVzZShuZXcgU3RyYXRlZ3koeyB1c2VybmFtZUZpZWxkOiAnZW1haWwnIH0sIHZhbGlkYXRlKSlcbn1cblxuLy8gZXhwb3J0ZWQgZm9yIHVuaXQgdGVzdHNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZSAoZW1haWwsIHBhc3N3b3JkLCBkb25lKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pLmV4ZWMoKVxuICAgIGNvbnN0IGlzQXV0aCA9IGF3YWl0IHVzZXIudmFsaWRhdGVQYXNzd29yZChwYXNzd29yZClcblxuICAgIGlmIChpc0F1dGgpIHtcbiAgICAgIGRvbmUobnVsbCwgdXNlcilcbiAgICB9IGVsc2Uge1xuICAgICAgZG9uZShudWxsLCBmYWxzZSlcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRvbmUoZXJyKVxuICB9XG59XG4iXX0=