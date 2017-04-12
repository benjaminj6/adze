"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTags = createTags;
function createTags(amt) {
  const tags = [];

  for (let i = 0; i < amt; i++) {
    tags.push({
      name: `test-${i}`,
      color: `#${i < 10 ? i : 0}00`
    });
  }

  return tags.length === 1 ? tags[0] : tags;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvdXRpbHMvdGVzdC11dGlscy9fdGFncy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVUYWdzIiwiYW10IiwidGFncyIsImkiLCJwdXNoIiwibmFtZSIsImNvbG9yIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7OztRQUFnQkEsVSxHQUFBQSxVO0FBQVQsU0FBU0EsVUFBVCxDQUFxQkMsR0FBckIsRUFBMEI7QUFDL0IsUUFBTUMsT0FBTyxFQUFiOztBQUVBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixHQUFwQixFQUF5QkUsR0FBekIsRUFBOEI7QUFDNUJELFNBQUtFLElBQUwsQ0FBVTtBQUNSQyxZQUFPLFFBQU9GLENBQUUsRUFEUjtBQUVSRyxhQUFRLElBQUdILElBQUksRUFBSixHQUFTQSxDQUFULEdBQWEsQ0FBRTtBQUZsQixLQUFWO0FBSUQ7O0FBRUQsU0FBT0QsS0FBS0ssTUFBTCxLQUFnQixDQUFoQixHQUFvQkwsS0FBSyxDQUFMLENBQXBCLEdBQThCQSxJQUFyQztBQUNEIiwiZmlsZSI6Il90YWdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhZ3MgKGFtdCkge1xuICBjb25zdCB0YWdzID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtdDsgaSsrKSB7XG4gICAgdGFncy5wdXNoKHtcbiAgICAgIG5hbWU6IGB0ZXN0LSR7aX1gLFxuICAgICAgY29sb3I6IGAjJHtpIDwgMTAgPyBpIDogMH0wMGBcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHRhZ3MubGVuZ3RoID09PSAxID8gdGFnc1swXSA6IHRhZ3Ncbn1cbiJdfQ==