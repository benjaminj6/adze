'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _router = require('./posts/router');

var _router2 = _interopRequireDefault(_router);

var _router3 = require('./auth/router');

var _router4 = _interopRequireDefault(_router3);

var _router5 = require('./tags/router');

var _router6 = _interopRequireDefault(_router5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = new _koaRouter2.default();

api.use('/api/posts', _router2.default.routes());
api.use('/api/auth', _router4.default.routes());
api.use('/api/tags', _router6.default.routes());

exports.default = api;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvYXBpL2luZGV4LmpzIl0sIm5hbWVzIjpbImFwaSIsInVzZSIsInJvdXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLE1BQU0seUJBQVo7O0FBRUFBLElBQUlDLEdBQUosQ0FBUSxZQUFSLEVBQXNCLGlCQUFZQyxNQUFaLEVBQXRCO0FBQ0FGLElBQUlDLEdBQUosQ0FBUSxXQUFSLEVBQXFCLGlCQUFXQyxNQUFYLEVBQXJCO0FBQ0FGLElBQUlDLEdBQUosQ0FBUSxXQUFSLEVBQXFCLGlCQUFXQyxNQUFYLEVBQXJCOztrQkFFZUYsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcidcbmltcG9ydCBwb3N0c1JvdXRlciBmcm9tICcuL3Bvc3RzL3JvdXRlcidcbmltcG9ydCBhdXRoUm91dGVyIGZyb20gJy4vYXV0aC9yb3V0ZXInXG5pbXBvcnQgdGFnc1JvdXRlciBmcm9tICcuL3RhZ3Mvcm91dGVyJ1xuXG5jb25zdCBhcGkgPSBuZXcgUm91dGVyKClcblxuYXBpLnVzZSgnL2FwaS9wb3N0cycsIHBvc3RzUm91dGVyLnJvdXRlcygpKVxuYXBpLnVzZSgnL2FwaS9hdXRoJywgYXV0aFJvdXRlci5yb3V0ZXMoKSlcbmFwaS51c2UoJy9hcGkvdGFncycsIHRhZ3NSb3V0ZXIucm91dGVzKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGFwaVxuIl19