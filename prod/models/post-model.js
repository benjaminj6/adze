'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

const PostSchema = new _mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  html: {
    required: true,
    type: String
  },
  md: {
    required: true,
    type: String
  },
  tags: {
    type: [{ type: _mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    required: false
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Post = _mongoose2.default.model('Post', PostSchema);
exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvbW9kZWxzL3Bvc3QtbW9kZWwuanMiXSwibmFtZXMiOlsiUHJvbWlzZSIsImdsb2JhbCIsIlBvc3RTY2hlbWEiLCJ0aXRsZSIsInJlcXVpcmVkIiwidHlwZSIsIlN0cmluZyIsImh0bWwiLCJtZCIsInRhZ3MiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiZGF0ZSIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwiUG9zdCIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQ0EsbUJBQVNBLE9BQVQsR0FBbUJDLE9BQU9ELE9BQTFCOztBQUVBLE1BQU1FLGFBQWEscUJBQVc7QUFDNUJDLFNBQU87QUFDTEMsY0FBVSxJQURMO0FBRUxDLFVBQU1DO0FBRkQsR0FEcUI7QUFLNUJDLFFBQU07QUFDSkgsY0FBVSxJQUROO0FBRUpDLFVBQU1DO0FBRkYsR0FMc0I7QUFTNUJFLE1BQUk7QUFDRkosY0FBVSxJQURSO0FBRUZDLFVBQU1DO0FBRkosR0FUd0I7QUFhNUJHLFFBQU07QUFDSkosVUFBTSxDQUFDLEVBQUVBLE1BQU0saUJBQU9LLEtBQVAsQ0FBYUMsUUFBckIsRUFBK0JDLEtBQUssS0FBcEMsRUFBRCxDQURGO0FBRUpSLGNBQVU7QUFGTixHQWJzQjtBQWlCNUJTLFFBQU07QUFDSlIsVUFBTVMsSUFERjtBQUVKQyxhQUFTRCxLQUFLRSxHQUFMO0FBRkw7QUFqQnNCLENBQVgsQ0FBbkI7O0FBdUJBLE1BQU1DLE9BQU8sbUJBQVNDLEtBQVQsQ0FBZSxNQUFmLEVBQXVCaEIsVUFBdkIsQ0FBYjtrQkFDZWUsSSIsImZpbGUiOiJwb3N0LW1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJ1xubW9uZ29vc2UuUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlXG5cbmNvbnN0IFBvc3RTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgdGl0bGU6IHtcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB0eXBlOiBTdHJpbmdcbiAgfSxcbiAgaHRtbDoge1xuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHR5cGU6IFN0cmluZ1xuICB9LFxuICBtZDoge1xuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHR5cGU6IFN0cmluZ1xuICB9LFxuICB0YWdzOiB7XG4gICAgdHlwZTogW3sgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdUYWcnIH1dLFxuICAgIHJlcXVpcmVkOiBmYWxzZVxuICB9LFxuICBkYXRlOiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICBkZWZhdWx0OiBEYXRlLm5vdygpXG4gIH1cbn0pXG5cbmNvbnN0IFBvc3QgPSBtb25nb29zZS5tb2RlbCgnUG9zdCcsIFBvc3RTY2hlbWEpXG5leHBvcnQgZGVmYXVsdCBQb3N0XG4iXX0=