'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _controller = require('../controller');

var controller = _interopRequireWildcard(_controller);

var _utils = require('../../../utils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tags = new _koaRouter2.default();

tags.get('/', controller.getTags).post('/', _utils.isLoggedIn, controller.addTag).patch('/:id', _utils.isLoggedIn, controller.editTag).del('/:id', _utils.isLoggedIn, controller.deleteTag);

exports.default = tags;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3RhZ3Mvcm91dGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbnRyb2xsZXIiLCJ0YWdzIiwiZ2V0IiwiZ2V0VGFncyIsInBvc3QiLCJhZGRUYWciLCJwYXRjaCIsImVkaXRUYWciLCJkZWwiLCJkZWxldGVUYWciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBRUE7O0lBQVlBLFU7O0FBQ1o7Ozs7OztBQUVBLE1BQU1DLE9BQU8seUJBQWI7O0FBRUFBLEtBQ0dDLEdBREgsQ0FDTyxHQURQLEVBQ1lGLFdBQVdHLE9BRHZCLEVBRUdDLElBRkgsQ0FFUSxHQUZSLHFCQUV5QkosV0FBV0ssTUFGcEMsRUFHR0MsS0FISCxDQUdTLE1BSFQscUJBRzZCTixXQUFXTyxPQUh4QyxFQUlHQyxHQUpILENBSU8sTUFKUCxxQkFJMkJSLFdBQVdTLFNBSnRDOztrQkFNZVIsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcidcblxuaW1wb3J0ICogYXMgY29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVyJ1xuaW1wb3J0IHsgaXNMb2dnZWRJbiB9IGZyb20gJ34vc2VydmVyL3V0aWxzJ1xuXG5jb25zdCB0YWdzID0gbmV3IFJvdXRlcigpXG5cbnRhZ3NcbiAgLmdldCgnLycsIGNvbnRyb2xsZXIuZ2V0VGFncylcbiAgLnBvc3QoJy8nLCBpc0xvZ2dlZEluLCBjb250cm9sbGVyLmFkZFRhZylcbiAgLnBhdGNoKCcvOmlkJywgaXNMb2dnZWRJbiwgY29udHJvbGxlci5lZGl0VGFnKVxuICAuZGVsKCcvOmlkJywgaXNMb2dnZWRJbiwgY29udHJvbGxlci5kZWxldGVUYWcpXG5cbmV4cG9ydCBkZWZhdWx0IHRhZ3NcbiJdfQ==