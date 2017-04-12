'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava2.default)('should call next() if ctx.passport.user exists', t => {
  const ctx = {
    passport: {
      user: { id: 'test' }
    }
  };
  const next = _sinon2.default.spy();

  t.notThrows(() => {
    (0, _.isLoggedIn)(ctx, next);
  });
  t.true(next.calledOnce);
});

(0, _ava2.default)('should throw if no ctx.passport.user', t => {
  const ctx = {
    passport: {}
  };
  const next = _sinon2.default.spy();
  const err = t.throws(() => {
    (0, _.isLoggedIn)(ctx, next);
  });
  t.is(err.message, 'Unauthorized');
  t.is(err.status, 401);
  t.falsy(next.calledOnce);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvdXRpbHMvX190ZXN0c19fL2lzTG9nZ2VkSW4udGVzdC5qcyJdLCJuYW1lcyI6WyJ0IiwiY3R4IiwicGFzc3BvcnQiLCJ1c2VyIiwiaWQiLCJuZXh0Iiwic3B5Iiwibm90VGhyb3dzIiwidHJ1ZSIsImNhbGxlZE9uY2UiLCJlcnIiLCJ0aHJvd3MiLCJpcyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJmYWxzeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQSxtQkFBSyxnREFBTCxFQUF1REEsS0FBSztBQUMxRCxRQUFNQyxNQUFNO0FBQ1ZDLGNBQVU7QUFDUkMsWUFBTSxFQUFFQyxJQUFJLE1BQU47QUFERTtBQURBLEdBQVo7QUFLQSxRQUFNQyxPQUFPLGdCQUFNQyxHQUFOLEVBQWI7O0FBRUFOLElBQUVPLFNBQUYsQ0FBWSxNQUFNO0FBQ2hCLHNCQUFXTixHQUFYLEVBQWdCSSxJQUFoQjtBQUNELEdBRkQ7QUFHQUwsSUFBRVEsSUFBRixDQUFPSCxLQUFLSSxVQUFaO0FBQ0QsQ0FaRDs7QUFjQSxtQkFBSyxzQ0FBTCxFQUE2Q1QsS0FBSztBQUNoRCxRQUFNQyxNQUFNO0FBQ1ZDLGNBQVU7QUFEQSxHQUFaO0FBR0EsUUFBTUcsT0FBTyxnQkFBTUMsR0FBTixFQUFiO0FBQ0EsUUFBTUksTUFBTVYsRUFBRVcsTUFBRixDQUFTLE1BQU07QUFDekIsc0JBQVdWLEdBQVgsRUFBZ0JJLElBQWhCO0FBQ0QsR0FGVyxDQUFaO0FBR0FMLElBQUVZLEVBQUYsQ0FBS0YsSUFBSUcsT0FBVCxFQUFrQixjQUFsQjtBQUNBYixJQUFFWSxFQUFGLENBQUtGLElBQUlJLE1BQVQsRUFBaUIsR0FBakI7QUFDQWQsSUFBRWUsS0FBRixDQUFRVixLQUFLSSxVQUFiO0FBQ0QsQ0FYRCIsImZpbGUiOiJpc0xvZ2dlZEluLnRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVzdCBmcm9tICdhdmEnXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nXG5cbmltcG9ydCB7IGlzTG9nZ2VkSW4gfSBmcm9tICcuLidcblxudGVzdCgnc2hvdWxkIGNhbGwgbmV4dCgpIGlmIGN0eC5wYXNzcG9ydC51c2VyIGV4aXN0cycsIHQgPT4ge1xuICBjb25zdCBjdHggPSB7XG4gICAgcGFzc3BvcnQ6IHtcbiAgICAgIHVzZXI6IHsgaWQ6ICd0ZXN0JyB9XG4gICAgfVxuICB9XG4gIGNvbnN0IG5leHQgPSBzaW5vbi5zcHkoKVxuXG4gIHQubm90VGhyb3dzKCgpID0+IHtcbiAgICBpc0xvZ2dlZEluKGN0eCwgbmV4dClcbiAgfSlcbiAgdC50cnVlKG5leHQuY2FsbGVkT25jZSlcbn0pXG5cbnRlc3QoJ3Nob3VsZCB0aHJvdyBpZiBubyBjdHgucGFzc3BvcnQudXNlcicsIHQgPT4ge1xuICBjb25zdCBjdHggPSB7XG4gICAgcGFzc3BvcnQ6IHt9XG4gIH1cbiAgY29uc3QgbmV4dCA9IHNpbm9uLnNweSgpXG4gIGNvbnN0IGVyciA9IHQudGhyb3dzKCgpID0+IHtcbiAgICBpc0xvZ2dlZEluKGN0eCwgbmV4dClcbiAgfSlcbiAgdC5pcyhlcnIubWVzc2FnZSwgJ1VuYXV0aG9yaXplZCcpXG4gIHQuaXMoZXJyLnN0YXR1cywgNDAxKVxuICB0LmZhbHN5KG5leHQuY2FsbGVkT25jZSlcbn0pXG4iXX0=