'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../../../models');

var _utils = require('../../../utils');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    try {
      yield _models.Tag.removePostsRelatedToId(ctx.params.id);
      const deletedTag = yield _models.Tag.findByIdAndRemove(ctx.params.id);

      if (!deletedTag) {
        throw (0, _utils.createError)(404, 'No tags with the specified id were found');
      }

      ctx.status = 200;
      ctx.body = deletedTag;
    } catch (err) {
      err.status = err.status;
      ctx.app.emit('error', err, ctx);
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3RhZ3MvY29udHJvbGxlci9kZWxldGVUYWcuanMiXSwibmFtZXMiOlsiY3R4IiwibmV4dCIsInJlbW92ZVBvc3RzUmVsYXRlZFRvSWQiLCJwYXJhbXMiLCJpZCIsImRlbGV0ZWRUYWciLCJmaW5kQnlJZEFuZFJlbW92ZSIsInN0YXR1cyIsImJvZHkiLCJlcnIiLCJhcHAiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7Ozs7K0JBRWUsV0FBT0EsR0FBUCxFQUFZQyxJQUFaLEVBQXFCO0FBQ2xDLFFBQUk7QUFDRixZQUFNLFlBQUlDLHNCQUFKLENBQTJCRixJQUFJRyxNQUFKLENBQVdDLEVBQXRDLENBQU47QUFDQSxZQUFNQyxhQUFhLE1BQU0sWUFBSUMsaUJBQUosQ0FBc0JOLElBQUlHLE1BQUosQ0FBV0MsRUFBakMsQ0FBekI7O0FBRUEsVUFBSSxDQUFDQyxVQUFMLEVBQWlCO0FBQ2YsY0FBTSx3QkFBWSxHQUFaLEVBQWlCLDBDQUFqQixDQUFOO0FBQ0Q7O0FBRURMLFVBQUlPLE1BQUosR0FBYSxHQUFiO0FBQ0FQLFVBQUlRLElBQUosR0FBV0gsVUFBWDtBQUNELEtBVkQsQ0FVRSxPQUFPSSxHQUFQLEVBQVk7QUFDWkEsVUFBSUYsTUFBSixHQUFhRSxJQUFJRixNQUFqQjtBQUNBUCxVQUFJVSxHQUFKLENBQVFDLElBQVIsQ0FBYSxPQUFiLEVBQXNCRixHQUF0QixFQUEyQlQsR0FBM0I7QUFDRDtBQUNGLEciLCJmaWxlIjoiZGVsZXRlVGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFnIH0gZnJvbSAnfi9zZXJ2ZXIvbW9kZWxzJ1xuaW1wb3J0IHsgY3JlYXRlRXJyb3IgfSBmcm9tICd+L3NlcnZlci91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGN0eCwgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IFRhZy5yZW1vdmVQb3N0c1JlbGF0ZWRUb0lkKGN0eC5wYXJhbXMuaWQpXG4gICAgY29uc3QgZGVsZXRlZFRhZyA9IGF3YWl0IFRhZy5maW5kQnlJZEFuZFJlbW92ZShjdHgucGFyYW1zLmlkKVxuXG4gICAgaWYgKCFkZWxldGVkVGFnKSB7XG4gICAgICB0aHJvdyBjcmVhdGVFcnJvcig0MDQsICdObyB0YWdzIHdpdGggdGhlIHNwZWNpZmllZCBpZCB3ZXJlIGZvdW5kJylcbiAgICB9XG5cbiAgICBjdHguc3RhdHVzID0gMjAwXG4gICAgY3R4LmJvZHkgPSBkZWxldGVkVGFnXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGVyci5zdGF0dXMgPSBlcnIuc3RhdHVzXG4gICAgY3R4LmFwcC5lbWl0KCdlcnJvcicsIGVyciwgY3R4KVxuICB9XG59XG4iXX0=