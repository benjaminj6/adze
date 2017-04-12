'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearDB = exports.populateDB = undefined;

let populateDB = exports.populateDB = (() => {
  var _ref = _asyncToGenerator(function* (number) {
    const posts = createPosts(number);
    const inDB = yield _models.Post.create(posts);
    return inDB;
  });

  return function populateDB(_x) {
    return _ref.apply(this, arguments);
  };
})();

let clearDB = exports.clearDB = (() => {
  var _ref2 = _asyncToGenerator(function* () {
    yield _models.Post.remove({});
  });

  return function clearDB() {
    return _ref2.apply(this, arguments);
  };
})();

exports.createPosts = createPosts;

var _models = require('../../models');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function createPosts(number) {
  const posts = [];

  for (let i = 0; i < number; i++) {
    const content = `test-${i}`;
    posts.push({
      title: content,
      html: `<p>${content}</p>`,
      md: content,
      id: i,
      date: new Date(0 + i * 1000 * 60 * 60 * 24) // each entry 1 day apart
    });
  }

  if (posts.length === 1) {
    return posts[0];
  } else {
    return posts;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvdXRpbHMvdGVzdC11dGlscy9fcG9zdHMuanMiXSwibmFtZXMiOlsibnVtYmVyIiwicG9zdHMiLCJjcmVhdGVQb3N0cyIsImluREIiLCJjcmVhdGUiLCJwb3B1bGF0ZURCIiwicmVtb3ZlIiwiY2xlYXJEQiIsImkiLCJjb250ZW50IiwicHVzaCIsInRpdGxlIiwiaHRtbCIsIm1kIiwiaWQiLCJkYXRlIiwiRGF0ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7K0JBdUJPLFdBQTJCQSxNQUEzQixFQUFtQztBQUN4QyxVQUFNQyxRQUFRQyxZQUFZRixNQUFaLENBQWQ7QUFDQSxVQUFNRyxPQUFPLE1BQU0sYUFBS0MsTUFBTCxDQUFZSCxLQUFaLENBQW5CO0FBQ0EsV0FBT0UsSUFBUDtBQUNELEc7O2tCQUpxQkUsVTs7Ozs7O2dDQU1mLGFBQTBCO0FBQy9CLFVBQU0sYUFBS0MsTUFBTCxDQUFZLEVBQVosQ0FBTjtBQUNELEc7O2tCQUZxQkMsTzs7Ozs7UUEzQk5MLFcsR0FBQUEsVzs7QUFGaEI7Ozs7QUFFTyxTQUFTQSxXQUFULENBQXNCRixNQUF0QixFQUE4QjtBQUNuQyxRQUFNQyxRQUFRLEVBQWQ7O0FBRUEsT0FBSyxJQUFJTyxJQUFJLENBQWIsRUFBZ0JBLElBQUlSLE1BQXBCLEVBQTRCUSxHQUE1QixFQUFpQztBQUMvQixVQUFNQyxVQUFXLFFBQU9ELENBQUUsRUFBMUI7QUFDQVAsVUFBTVMsSUFBTixDQUFXO0FBQ1RDLGFBQU9GLE9BREU7QUFFVEcsWUFBTyxNQUFLSCxPQUFRLE1BRlg7QUFHVEksVUFBSUosT0FISztBQUlUSyxVQUFJTixDQUpLO0FBS1RPLFlBQU0sSUFBSUMsSUFBSixDQUFTLElBQUtSLElBQUksSUFBSixHQUFXLEVBQVgsR0FBZ0IsRUFBaEIsR0FBcUIsRUFBbkMsQ0FMRyxDQUtxQztBQUxyQyxLQUFYO0FBT0Q7O0FBRUQsTUFBSVAsTUFBTWdCLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsV0FBT2hCLE1BQU0sQ0FBTixDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBT0EsS0FBUDtBQUNEO0FBQ0YiLCJmaWxlIjoiX3Bvc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9zdCB9IGZyb20gJ34vc2VydmVyL21vZGVscydcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvc3RzIChudW1iZXIpIHtcbiAgY29uc3QgcG9zdHMgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcbiAgICBjb25zdCBjb250ZW50ID0gYHRlc3QtJHtpfWBcbiAgICBwb3N0cy5wdXNoKHtcbiAgICAgIHRpdGxlOiBjb250ZW50LFxuICAgICAgaHRtbDogYDxwPiR7Y29udGVudH08L3A+YCxcbiAgICAgIG1kOiBjb250ZW50LFxuICAgICAgaWQ6IGksXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgwICsgKGkgKiAxMDAwICogNjAgKiA2MCAqIDI0KSkgLy8gZWFjaCBlbnRyeSAxIGRheSBhcGFydFxuICAgIH0pXG4gIH1cblxuICBpZiAocG9zdHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHBvc3RzWzBdXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBvc3RzXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlREIgKG51bWJlcikge1xuICBjb25zdCBwb3N0cyA9IGNyZWF0ZVBvc3RzKG51bWJlcilcbiAgY29uc3QgaW5EQiA9IGF3YWl0IFBvc3QuY3JlYXRlKHBvc3RzKVxuICByZXR1cm4gaW5EQlxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xlYXJEQiAoKSB7XG4gIGF3YWl0IFBvc3QucmVtb3ZlKHt9KVxufVxuIl19