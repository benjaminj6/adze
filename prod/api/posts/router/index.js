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

const posts = new _koaRouter2.default();

posts.get('/', controller.getPosts).get('/:number', controller.getLimitedPosts).del('/:id', _utils.isLoggedIn, controller.deletePost).post('/', _utils.isLoggedIn, controller.addPost).patch('/:id', _utils.isLoggedIn, controller.editPost);

exports.default = posts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3Bvc3RzL3JvdXRlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb250cm9sbGVyIiwicG9zdHMiLCJnZXQiLCJnZXRQb3N0cyIsImdldExpbWl0ZWRQb3N0cyIsImRlbCIsImRlbGV0ZVBvc3QiLCJwb3N0IiwiYWRkUG9zdCIsInBhdGNoIiwiZWRpdFBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0lBQVlBLFU7O0FBSVo7Ozs7OztBQUZBLE1BQU1DLFFBQVEseUJBQWQ7O0FBSUFBLE1BQ0dDLEdBREgsQ0FDTyxHQURQLEVBQ1lGLFdBQVdHLFFBRHZCLEVBRUdELEdBRkgsQ0FFTyxVQUZQLEVBRW1CRixXQUFXSSxlQUY5QixFQUdHQyxHQUhILENBR08sTUFIUCxxQkFHMkJMLFdBQVdNLFVBSHRDLEVBSUdDLElBSkgsQ0FJUSxHQUpSLHFCQUl5QlAsV0FBV1EsT0FKcEMsRUFLR0MsS0FMSCxDQUtTLE1BTFQscUJBSzZCVCxXQUFXVSxRQUx4Qzs7a0JBT2VULEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInXG5pbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXInXG5cbmNvbnN0IHBvc3RzID0gbmV3IFJvdXRlcigpXG5cbmltcG9ydCB7IGlzTG9nZ2VkSW4gfSBmcm9tICd+L3NlcnZlci91dGlscydcblxucG9zdHNcbiAgLmdldCgnLycsIGNvbnRyb2xsZXIuZ2V0UG9zdHMpXG4gIC5nZXQoJy86bnVtYmVyJywgY29udHJvbGxlci5nZXRMaW1pdGVkUG9zdHMpXG4gIC5kZWwoJy86aWQnLCBpc0xvZ2dlZEluLCBjb250cm9sbGVyLmRlbGV0ZVBvc3QpXG4gIC5wb3N0KCcvJywgaXNMb2dnZWRJbiwgY29udHJvbGxlci5hZGRQb3N0KVxuICAucGF0Y2goJy86aWQnLCBpc0xvZ2dlZEluLCBjb250cm9sbGVyLmVkaXRQb3N0KVxuXG5leHBvcnQgZGVmYXVsdCBwb3N0c1xuIl19