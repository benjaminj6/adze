'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _validator = require('validator');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_mongoose2.default.Promise = global.Promise;

const UserSchema = new _mongoose.Schema({
  email: {
    required: true,
    unique: true,
    type: String,
    validate: {
      validator: _validator.isEmail,
      message: 'Email is not a valid email address'
    }
  },
  password: {
    required: true,
    type: String
  }
});

UserSchema.statics.hashPassword = (() => {
  var _ref = _asyncToGenerator(function* (password) {
    try {
      const hash = yield _bcryptjs2.default.hash(password, 10);
      return hash;
    } catch (err) {
      throw (0, _utils.createError)(500, 'Encryption failed');
    }
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();

UserSchema.methods.validatePassword = (() => {
  var _ref2 = _asyncToGenerator(function* (password) {
    const correct = this.password;

    try {
      const isSame = yield _bcryptjs2.default.compare(password, correct);
      return isSame;
    } catch (err) {
      err.status = err.status || 500;
      throw err;
    }
  });

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
})();

const User = _mongoose2.default.model('User', UserSchema);
exports.default = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvbW9kZWxzL3VzZXItbW9kZWwuanMiXSwibmFtZXMiOlsiUHJvbWlzZSIsImdsb2JhbCIsIlVzZXJTY2hlbWEiLCJlbWFpbCIsInJlcXVpcmVkIiwidW5pcXVlIiwidHlwZSIsIlN0cmluZyIsInZhbGlkYXRlIiwidmFsaWRhdG9yIiwibWVzc2FnZSIsInBhc3N3b3JkIiwic3RhdGljcyIsImhhc2hQYXNzd29yZCIsImhhc2giLCJlcnIiLCJtZXRob2RzIiwidmFsaWRhdGVQYXNzd29yZCIsImNvcnJlY3QiLCJpc1NhbWUiLCJjb21wYXJlIiwic3RhdHVzIiwiVXNlciIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBR0E7O0FBQ0E7Ozs7OztBQUhBLG1CQUFTQSxPQUFULEdBQW1CQyxPQUFPRCxPQUExQjs7QUFLQSxNQUFNRSxhQUFhLHFCQUFXO0FBQzVCQyxTQUFPO0FBQ0xDLGNBQVUsSUFETDtBQUVMQyxZQUFRLElBRkg7QUFHTEMsVUFBTUMsTUFIRDtBQUlMQyxjQUFVO0FBQ1JDLG1DQURRO0FBRVJDLGVBQVM7QUFGRDtBQUpMLEdBRHFCO0FBVTVCQyxZQUFVO0FBQ1JQLGNBQVUsSUFERjtBQUVSRSxVQUFNQztBQUZFO0FBVmtCLENBQVgsQ0FBbkI7O0FBZ0JBTCxXQUFXVSxPQUFYLENBQW1CQyxZQUFuQjtBQUFBLCtCQUFrQyxXQUFNRixRQUFOLEVBQWtCO0FBQ2xELFFBQUk7QUFDRixZQUFNRyxPQUFPLE1BQU0sbUJBQU9BLElBQVAsQ0FBWUgsUUFBWixFQUFzQixFQUF0QixDQUFuQjtBQUNBLGFBQU9HLElBQVA7QUFDRCxLQUhELENBR0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1osWUFBTSx3QkFBWSxHQUFaLEVBQWlCLG1CQUFqQixDQUFOO0FBQ0Q7QUFDRixHQVBEOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBYixXQUFXYyxPQUFYLENBQW1CQyxnQkFBbkI7QUFBQSxnQ0FBc0MsV0FBZ0JOLFFBQWhCLEVBQTBCO0FBQzlELFVBQU1PLFVBQVUsS0FBS1AsUUFBckI7O0FBRUEsUUFBSTtBQUNGLFlBQU1RLFNBQVMsTUFBTSxtQkFBT0MsT0FBUCxDQUFlVCxRQUFmLEVBQXlCTyxPQUF6QixDQUFyQjtBQUNBLGFBQU9DLE1BQVA7QUFDRCxLQUhELENBR0UsT0FBT0osR0FBUCxFQUFZO0FBQ1pBLFVBQUlNLE1BQUosR0FBYU4sSUFBSU0sTUFBSixJQUFjLEdBQTNCO0FBQ0EsWUFBTU4sR0FBTjtBQUNEO0FBQ0YsR0FWRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFZQSxNQUFNTyxPQUFPLG1CQUFTQyxLQUFULENBQWUsTUFBZixFQUF1QnJCLFVBQXZCLENBQWI7a0JBQ2VvQixJIiwiZmlsZSI6InVzZXItbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJ1xuaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJ1xubW9uZ29vc2UuUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlXG5cbmltcG9ydCB7IGlzRW1haWwgfSBmcm9tICd2YWxpZGF0b3InXG5pbXBvcnQgeyBjcmVhdGVFcnJvciB9IGZyb20gJ34vc2VydmVyL3V0aWxzJ1xuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGVtYWlsOiB7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgdW5pcXVlOiB0cnVlLFxuICAgIHR5cGU6IFN0cmluZyxcbiAgICB2YWxpZGF0ZToge1xuICAgICAgdmFsaWRhdG9yOiBpc0VtYWlsLFxuICAgICAgbWVzc2FnZTogJ0VtYWlsIGlzIG5vdCBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnXG4gICAgfVxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHR5cGU6IFN0cmluZ1xuICB9XG59KVxuXG5Vc2VyU2NoZW1hLnN0YXRpY3MuaGFzaFBhc3N3b3JkID0gYXN5bmMgcGFzc3dvcmQgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApXG4gICAgcmV0dXJuIGhhc2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoNTAwLCAnRW5jcnlwdGlvbiBmYWlsZWQnKVxuICB9XG59XG5cblVzZXJTY2hlbWEubWV0aG9kcy52YWxpZGF0ZVBhc3N3b3JkID0gYXN5bmMgZnVuY3Rpb24gKHBhc3N3b3JkKSB7XG4gIGNvbnN0IGNvcnJlY3QgPSB0aGlzLnBhc3N3b3JkXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBpc1NhbWUgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgY29ycmVjdClcbiAgICByZXR1cm4gaXNTYW1lXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGVyci5zdGF0dXMgPSBlcnIuc3RhdHVzIHx8IDUwMFxuICAgIHRocm93IGVyclxuICB9XG59XG5cbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbCgnVXNlcicsIFVzZXJTY2hlbWEpXG5leHBvcnQgZGVmYXVsdCBVc2VyXG5cbiJdfQ==