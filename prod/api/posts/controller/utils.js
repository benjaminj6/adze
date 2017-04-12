'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewTags = undefined;

var _validator = require('validator');

var _config = require('../../../config');

var _models = require('../../../models');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // TODO: Figure out WHERE to put this specifically... in a mongoose static?


const createNewTags = exports.createNewTags = (() => {
  var _ref = _asyncToGenerator(function* (tags) {
    const newTags = tags.filter(function (t) {
      return !(0, _validator.isMongoId)(t._id);
    });
    _config.log.debug('newTags', newTags);

    const promises = newTags.map(function ({ name, color }) {
      return _models.Tag.create({
        name,
        color
      });
    });

    const savedNewTags = yield Promise.all(promises);
    _config.log.debug('savedNewTags', savedNewTags);

    return tags.filter(function (t) {
      return (0, _validator.isMongoId)(t._id);
    }).concat(savedNewTags).map(function (t) {
      return t._id;
    });
  });

  return function createNewTags(_x) {
    return _ref.apply(this, arguments);
  };
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvYXBpL3Bvc3RzL2NvbnRyb2xsZXIvdXRpbHMuanMiXSwibmFtZXMiOlsiY3JlYXRlTmV3VGFncyIsInRhZ3MiLCJuZXdUYWdzIiwiZmlsdGVyIiwidCIsIl9pZCIsImRlYnVnIiwicHJvbWlzZXMiLCJtYXAiLCJuYW1lIiwiY29sb3IiLCJjcmVhdGUiLCJzYXZlZE5ld1RhZ3MiLCJQcm9taXNlIiwiYWxsIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7OzJjQUhBOzs7QUFLTyxNQUFNQTtBQUFBLCtCQUFnQixXQUFNQyxJQUFOLEVBQWM7QUFDekMsVUFBTUMsVUFBVUQsS0FBS0UsTUFBTCxDQUFZO0FBQUEsYUFBSyxDQUFDLDBCQUFVQyxFQUFFQyxHQUFaLENBQU47QUFBQSxLQUFaLENBQWhCO0FBQ0EsZ0JBQUlDLEtBQUosQ0FBVSxTQUFWLEVBQXFCSixPQUFyQjs7QUFFQSxVQUFNSyxXQUFXTCxRQUFRTSxHQUFSLENBQVksVUFBQyxFQUFFQyxJQUFGLEVBQVFDLEtBQVIsRUFBRDtBQUFBLGFBQXFCLFlBQUlDLE1BQUosQ0FBVztBQUMzREYsWUFEMkQ7QUFFM0RDO0FBRjJELE9BQVgsQ0FBckI7QUFBQSxLQUFaLENBQWpCOztBQUtBLFVBQU1FLGVBQWUsTUFBTUMsUUFBUUMsR0FBUixDQUFZUCxRQUFaLENBQTNCO0FBQ0EsZ0JBQUlELEtBQUosQ0FBVSxjQUFWLEVBQTBCTSxZQUExQjs7QUFFQSxXQUFPWCxLQUFLRSxNQUFMLENBQVk7QUFBQSxhQUFLLDBCQUFVQyxFQUFFQyxHQUFaLENBQUw7QUFBQSxLQUFaLEVBQ0pVLE1BREksQ0FDR0gsWUFESCxFQUVKSixHQUZJLENBRUE7QUFBQSxhQUFLSixFQUFFQyxHQUFQO0FBQUEsS0FGQSxDQUFQO0FBR0QsR0FmWTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFOIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ETzogRmlndXJlIG91dCBXSEVSRSB0byBwdXQgdGhpcyBzcGVjaWZpY2FsbHkuLi4gaW4gYSBtb25nb29zZSBzdGF0aWM/XG5pbXBvcnQgeyBpc01vbmdvSWQgfSBmcm9tICd2YWxpZGF0b3InXG5pbXBvcnQgeyBsb2cgfSBmcm9tICd+L3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBUYWcgfSBmcm9tICd+L3NlcnZlci9tb2RlbHMnXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdUYWdzID0gYXN5bmMgdGFncyA9PiB7XG4gIGNvbnN0IG5ld1RhZ3MgPSB0YWdzLmZpbHRlcih0ID0+ICFpc01vbmdvSWQodC5faWQpKVxuICBsb2cuZGVidWcoJ25ld1RhZ3MnLCBuZXdUYWdzKVxuXG4gIGNvbnN0IHByb21pc2VzID0gbmV3VGFncy5tYXAoKHsgbmFtZSwgY29sb3IgfSkgPT4gVGFnLmNyZWF0ZSh7XG4gICAgbmFtZSxcbiAgICBjb2xvclxuICB9KSlcblxuICBjb25zdCBzYXZlZE5ld1RhZ3MgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgbG9nLmRlYnVnKCdzYXZlZE5ld1RhZ3MnLCBzYXZlZE5ld1RhZ3MpXG5cbiAgcmV0dXJuIHRhZ3MuZmlsdGVyKHQgPT4gaXNNb25nb0lkKHQuX2lkKSlcbiAgICAuY29uY2F0KHNhdmVkTmV3VGFncylcbiAgICAubWFwKHQgPT4gdC5faWQpXG59XG4iXX0=