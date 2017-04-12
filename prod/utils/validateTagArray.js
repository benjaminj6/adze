'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./index');

exports.default = tags => {
  if (tags && !Array.isArray(tags)) {
    throw (0, _index.createError)(400, 'Tags must be an array');
  }

  return tags;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvdXRpbHMvdmFsaWRhdGVUYWdBcnJheS5qcyJdLCJuYW1lcyI6WyJ0YWdzIiwiQXJyYXkiLCJpc0FycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7a0JBRWVBLFFBQVE7QUFDckIsTUFBSUEsUUFBUSxDQUFDQyxNQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBYixFQUFrQztBQUNoQyxVQUFNLHdCQUFZLEdBQVosRUFBaUIsdUJBQWpCLENBQU47QUFDRDs7QUFFRCxTQUFPQSxJQUFQO0FBQ0QsQyIsImZpbGUiOiJ2YWxpZGF0ZVRhZ0FycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRXJyb3IgfSBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCB0YWdzID0+IHtcbiAgaWYgKHRhZ3MgJiYgIUFycmF5LmlzQXJyYXkodGFncykpIHtcbiAgICB0aHJvdyBjcmVhdGVFcnJvcig0MDAsICdUYWdzIG11c3QgYmUgYW4gYXJyYXknKVxuICB9XG5cbiAgcmV0dXJuIHRhZ3Ncbn1cbiJdfQ==