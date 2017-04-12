'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../../../models');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    console.log('here');
    try {
      const posts = yield _models.Post.find().sort('-date').populate('tags');
      ctx.status = 200;
      ctx.body = posts;
    } catch (err) {
      err.status = err.status || 404;
      ctx.app.emit('error', err, ctx);
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3Bvc3RzL2NvbnRyb2xsZXIvZ2V0UG9zdHMuanMiXSwibmFtZXMiOlsiY3R4IiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0cyIsImZpbmQiLCJzb3J0IiwicG9wdWxhdGUiLCJzdGF0dXMiLCJib2R5IiwiZXJyIiwiYXBwIiwiZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OytCQUVlLFdBQU9BLEdBQVAsRUFBWUMsSUFBWixFQUFxQjtBQUNsQ0MsWUFBUUMsR0FBUixDQUFZLE1BQVo7QUFDQSxRQUFJO0FBQ0YsWUFBTUMsUUFBUSxNQUFNLGFBQUtDLElBQUwsR0FBWUMsSUFBWixDQUFpQixPQUFqQixFQUEwQkMsUUFBMUIsQ0FBbUMsTUFBbkMsQ0FBcEI7QUFDQVAsVUFBSVEsTUFBSixHQUFhLEdBQWI7QUFDQVIsVUFBSVMsSUFBSixHQUFXTCxLQUFYO0FBQ0QsS0FKRCxDQUlFLE9BQU9NLEdBQVAsRUFBWTtBQUNaQSxVQUFJRixNQUFKLEdBQWFFLElBQUlGLE1BQUosSUFBYyxHQUEzQjtBQUNBUixVQUFJVyxHQUFKLENBQVFDLElBQVIsQ0FBYSxPQUFiLEVBQXNCRixHQUF0QixFQUEyQlYsR0FBM0I7QUFDRDtBQUNGLEciLCJmaWxlIjoiZ2V0UG9zdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3N0IH0gZnJvbSAnfi9zZXJ2ZXIvbW9kZWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoY3R4LCBuZXh0KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdoZXJlJylcbiAgdHJ5IHtcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IFBvc3QuZmluZCgpLnNvcnQoJy1kYXRlJykucG9wdWxhdGUoJ3RhZ3MnKVxuICAgIGN0eC5zdGF0dXMgPSAyMDBcbiAgICBjdHguYm9keSA9IHBvc3RzXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGVyci5zdGF0dXMgPSBlcnIuc3RhdHVzIHx8IDQwNFxuICAgIGN0eC5hcHAuZW1pdCgnZXJyb3InLCBlcnIsIGN0eClcbiAgfVxufVxuIl19