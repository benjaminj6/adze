'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaPassport = require('koa-passport');

var _koaPassport2 = _interopRequireDefault(_koaPassport);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const auth = new _koaRouter2.default();

auth.post('/login', _koaPassport2.default.authenticate('local', {
  successRedirect: '/api/posts/',
  failureRedirect: '/api/auth/unauthorized' // Will give anything right now...no file served from here
})).get('/logout', (ctx, next) => {
  ctx.logout();
  ctx.redirect('/');
}).get('/unauthorized', (ctx, next) => {
  ctx.status = 401;
  ctx.body = { message: 'Unauthorized' };
});

exports.default = auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL2F1dGgvcm91dGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbImF1dGgiLCJwb3N0IiwiYXV0aGVudGljYXRlIiwic3VjY2Vzc1JlZGlyZWN0IiwiZmFpbHVyZVJlZGlyZWN0IiwiZ2V0IiwiY3R4IiwibmV4dCIsImxvZ291dCIsInJlZGlyZWN0Iiwic3RhdHVzIiwiYm9keSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLE9BQU8seUJBQWI7O0FBRUFBLEtBQ0dDLElBREgsQ0FDUSxRQURSLEVBRUUsc0JBQVNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDN0JDLG1CQUFpQixhQURZO0FBRTdCQyxtQkFBaUIsd0JBRlksQ0FFYTtBQUZiLENBQS9CLENBRkYsRUFNR0MsR0FOSCxDQU1PLFNBTlAsRUFNa0IsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLEtBQWU7QUFDN0JELE1BQUlFLE1BQUo7QUFDQUYsTUFBSUcsUUFBSixDQUFhLEdBQWI7QUFDRCxDQVRILEVBVUdKLEdBVkgsQ0FVTyxlQVZQLEVBVXdCLENBQUNDLEdBQUQsRUFBTUMsSUFBTixLQUFlO0FBQ25DRCxNQUFJSSxNQUFKLEdBQWEsR0FBYjtBQUNBSixNQUFJSyxJQUFKLEdBQVcsRUFBRUMsU0FBUyxjQUFYLEVBQVg7QUFDRCxDQWJIOztrQkFlZVosSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXNzcG9ydCBmcm9tICdrb2EtcGFzc3BvcnQnXG5pbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInXG5cbmNvbnN0IGF1dGggPSBuZXcgUm91dGVyKClcblxuYXV0aFxuICAucG9zdCgnL2xvZ2luJyxcbiAgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdsb2NhbCcsIHtcbiAgICBzdWNjZXNzUmVkaXJlY3Q6ICcvYXBpL3Bvc3RzLycsXG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2FwaS9hdXRoL3VuYXV0aG9yaXplZCcgLy8gV2lsbCBnaXZlIGFueXRoaW5nIHJpZ2h0IG5vdy4uLm5vIGZpbGUgc2VydmVkIGZyb20gaGVyZVxuICB9KSlcbiAgLmdldCgnL2xvZ291dCcsIChjdHgsIG5leHQpID0+IHtcbiAgICBjdHgubG9nb3V0KClcbiAgICBjdHgucmVkaXJlY3QoJy8nKVxuICB9KVxuICAuZ2V0KCcvdW5hdXRob3JpemVkJywgKGN0eCwgbmV4dCkgPT4ge1xuICAgIGN0eC5zdGF0dXMgPSA0MDFcbiAgICBjdHguYm9keSA9IHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfVxuICB9KVxuXG5leHBvcnQgZGVmYXVsdCBhdXRoXG4iXX0=