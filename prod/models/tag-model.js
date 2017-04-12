'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validator = require('validator');

var _index = require('./index');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_mongoose2.default.Promise = global.Promise;

const TagSchema = new _mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  color: {
    type: String,
    validate: {
      validator: _validator.isHexColor,
      message: 'Color must be a valid hexadecimal color'
    }
  }
});

TagSchema.statics.removePostsRelatedToId = (() => {
  var _ref = _asyncToGenerator(function* (id) {
    yield _index.Post.updateMany({ tags: { $in: [id] } }, { $pull: { tags: id } });
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();

const Tag = _mongoose2.default.model('Tag', TagSchema);

exports.default = Tag;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvbW9kZWxzL3RhZy1tb2RlbC5qcyJdLCJuYW1lcyI6WyJQcm9taXNlIiwiZ2xvYmFsIiwiVGFnU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJ1bmlxdWUiLCJyZXF1aXJlZCIsImNvbG9yIiwidmFsaWRhdGUiLCJ2YWxpZGF0b3IiLCJtZXNzYWdlIiwic3RhdGljcyIsInJlbW92ZVBvc3RzUmVsYXRlZFRvSWQiLCJpZCIsInVwZGF0ZU1hbnkiLCJ0YWdzIiwiJGluIiwiJHB1bGwiLCJUYWciLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBQ0EsbUJBQVNBLE9BQVQsR0FBbUJDLE9BQU9ELE9BQTFCOztBQUVBLE1BQU1FLFlBQVkscUJBQVc7QUFDM0JDLFFBQU07QUFDSkMsVUFBTUMsTUFERjtBQUVKQyxZQUFRLElBRko7QUFHSkMsY0FBVTtBQUhOLEdBRHFCO0FBTTNCQyxTQUFPO0FBQ0xKLFVBQU1DLE1BREQ7QUFFTEksY0FBVTtBQUNSQyxzQ0FEUTtBQUVSQyxlQUFTO0FBRkQ7QUFGTDtBQU5vQixDQUFYLENBQWxCOztBQWVBVCxVQUFVVSxPQUFWLENBQWtCQyxzQkFBbEI7QUFBQSwrQkFBMkMsV0FBTUMsRUFBTixFQUFZO0FBQ3JELFVBQU0sWUFBS0MsVUFBTCxDQUNKLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxDQUFDSCxFQUFELENBQVAsRUFBUixFQURJLEVBRUosRUFBRUksT0FBTyxFQUFFRixNQUFNRixFQUFSLEVBQVQsRUFGSSxDQUFOO0FBSUQsR0FMRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPQSxNQUFNSyxNQUFNLG1CQUFTQyxLQUFULENBQWUsS0FBZixFQUFzQmxCLFNBQXRCLENBQVo7O2tCQUVlaUIsRyIsImZpbGUiOiJ0YWctbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0hleENvbG9yIH0gZnJvbSAndmFsaWRhdG9yJ1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnXG5tb25nb29zZS5Qcm9taXNlID0gZ2xvYmFsLlByb21pc2VcblxuY29uc3QgVGFnU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIG5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdW5pcXVlOiB0cnVlLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIGNvbG9yOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHZhbGlkYXRlOiB7XG4gICAgICB2YWxpZGF0b3I6IGlzSGV4Q29sb3IsXG4gICAgICBtZXNzYWdlOiAnQ29sb3IgbXVzdCBiZSBhIHZhbGlkIGhleGFkZWNpbWFsIGNvbG9yJ1xuICAgIH1cbiAgfVxufSlcblxuVGFnU2NoZW1hLnN0YXRpY3MucmVtb3ZlUG9zdHNSZWxhdGVkVG9JZCA9IGFzeW5jIGlkID0+IHtcbiAgYXdhaXQgUG9zdC51cGRhdGVNYW55KFxuICAgIHsgdGFnczogeyAkaW46IFtpZF0gfSB9LFxuICAgIHsgJHB1bGw6IHsgdGFnczogaWQgfSB9XG4gIClcbn1cblxuY29uc3QgVGFnID0gbW9uZ29vc2UubW9kZWwoJ1RhZycsIFRhZ1NjaGVtYSlcblxuZXhwb3J0IGRlZmF1bHQgVGFnXG4iXX0=