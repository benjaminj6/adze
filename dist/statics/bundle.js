/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__h__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__h__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return __WEBPACK_IMPORTED_MODULE_1__app__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_2__router__["a"]; });







/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = exports.Trash = exports.Tag = exports.SaveCheck = exports.Save = exports.Plus = exports.Paint = exports.More = exports.Menu = exports.Logout = exports.Logo = exports.FilePlus = exports.FileMultiple = exports.Close = exports.Check = exports.Calendar = exports.AngleDown = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //eslint-disable-line


var _hyperapp = __webpack_require__(0);

var _foundation = __webpack_require__(2);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Svg = function Svg(props, children) {
  if (props === null) {
    props = {};
  }

  return (0, _hyperapp.h)(
    'i',
    {
      className: (props.className || '') + ' ' + (props.iconName || ''),
      id: props.id || '' },
    (0, _hyperapp.h)(
      'svg',
      _extends({
        fill: props.fill || '#000',
        height: props.size || 24,
        width: props.size || 24,
        viewBox: '0 0 24 24'
      }, props),
      children
    )
  );
};

var AngleDown = exports.AngleDown = function AngleDown(props) {
  return (0, _hyperapp.h)(
    Svg,
    _extends({
      iconName: 'icon-angle-down'
    }, props),
    (0, _hyperapp.h)('path', { d: 'M7 10l5 5 5-5z' }),
    (0, _hyperapp.h)('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  );
};

var Calendar = exports.Calendar = function Calendar(props) {
  return (0, _hyperapp.h)(
    Svg,
    _extends({
      iconName: 'icon-calendar'
    }, props),
    (0, _hyperapp.h)('path', { d: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z' }),
    (0, _hyperapp.h)('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  );
};

var Check = exports.Check = function Check(props) {
  return (0, _hyperapp.h)(
    Svg,
    _extends({
      className: 'icon-check'
    }, props),
    (0, _hyperapp.h)('path', {
      fill: props.color || '#000',
      d: 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' }),
    (0, _hyperapp.h)('path', {
      fill: props.innerColor || '#fff',
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
  );
};

var Close = exports.Close = function Close(props) {
  return (0, _hyperapp.h)(
    Svg,
    _extends({
      className: 'icon-close'
    }, props),
    (0, _hyperapp.h)('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' }),
    (0, _hyperapp.h)('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  );
};

// TODO: See whether this can be deleted
var FileMultiple = exports.FileMultiple = function FileMultiple(props) {
  return (0, _hyperapp.h)(
    Svg,
    _extends({
      iconName: 'icon-file-multiple'
    }, props),
    (0, _hyperapp.h)('path', { d: 'M15,7H20.5L15,1.5V7M8,0H16L22,6V18A2,2 0 0,1 20,20H8C6.89,20 6,19.1 6,18V2A2,2 0 0,1 8,0M4,4V22H20V24H4A2,2 0 0,1 2,22V4H4Z' })
  );
};

// TODO: See wheter this can be deleted
var FilePlus = exports.FilePlus = function FilePlus(props) {
  return (0, _hyperapp.h)(
    Svg,
    _extends({
      className: 'icon-file-plus'
    }, props),
    (0, _hyperapp.h)('path', { d: 'M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M11,15V12H9V15H6V17H9V20H11V17H14V15H11Z' })
  );
};

// TODO: See whtehr can be deleted
var Logo = exports.Logo = function Logo(props) {
  return (0, _hyperapp.h)(
    Svg,
    _extends({
      className: 'icon-logo'
    }, props),
    (0, _hyperapp.h)(
      'g',
      null,
      (0, _hyperapp.h)('path', { d: 'M13.618 6.166c.237-.329.382-.729.382-1.166 0-1.102-.897-2-2-2-1.104 0-2 .898-2 2 0 .437.144.837.381 1.166-1.854.383-3.472 1.41-4.616 2.834h12.47c-1.145-1.424-2.763-2.451-4.617-2.834zm-1.618-.166c-.552 0-1-.447-1-1 0-.551.448-1 1-1 .551 0 1 .449 1 1 0 .553-.449 1-1 1zM20.5 9.5c-.751 0-2 .5-2 .5h-13.418c-.598 1.029-.969 2.201-1.055 3.453-1.153-.222-2.027-1.236-2.027-2.453v-1.5c0-.826-.673-1.5-1.5-1.5-.276 0-.5.225-.5.5 0 .276.224.5.5.5.275 0 .5.225.5.5v1.5c0 1.767 1.316 3.228 3.019 3.463.09 1.572.633 3.063 1.593 4.338.094.126.242.199.399.199h11.979c.157 0 .306-.073.399-.199.558-.741.971-1.556 1.241-2.415.283.073.573.114.869.114 1.93 0 3.5-1.568 3.5-3.5.001-1.93-1.569-3.5-3.499-3.5zm0 6c-.215 0-.424-.035-.629-.09.083-.462.129-.932.129-1.41 0-1.139-.244-2.222-.675-3.203.359-.194.759-.297 1.175-.297 1.378 0 2.5 1.122 2.5 2.5 0 1.379-1.122 2.5-2.5 2.5z' })
    )
  );
};

var Logout = exports.Logout = function Logout(props) {
  return (0, _hyperapp.h)(
    Svg,
    _extends({
      iconName: 'icon-logout'
    }, props),
    (0, _hyperapp.h)('path', { d: 'M14.08,15.59L16.67,13H7V11H16.67L14.08,8.41L15.5,7L20.5,12L15.5,17L14.08,15.59M19,3A2,2 0 0,1 21,5V9.67L19,7.67V5H5V19H19V16.33L21,14.33V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19Z' })
  );
};

var Menu = exports.Menu = function Menu(props) {
  return (0, _hyperapp.h)(
    Svg,
    _extends({
      className: 'icon-menu'
    }, props),
    (0, _hyperapp.h)('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    (0, _hyperapp.h)('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
  );
};

// TODO: See whether can be deleted
var More = exports.More = function More(props) {
  return (0, _hyperapp.h)(
    Svg,
    _extends({
      className: 'icon-more'
    }, props),
    (0, _hyperapp.h)('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    (0, _hyperapp.h)('path', { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
  );
};

var Paint = exports.Paint = function Paint(props) {
  return (0, _hyperapp.h)(
    Svg,
    _extends({
      iconName: 'icon-paint'
    }, props),
    (0, _hyperapp.h)('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    (0, _hyperapp.h)('path', { d: 'M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z' }),
    (0, _hyperapp.h)('path', { 'class': 'bar', d: 'M0 20h24v4H0z' })
  );
};

var Plus = exports.Plus = function Plus(props) {
  return (0, _hyperapp.h)(
    Svg,
    _extends({
      iconName: 'icon-plus'
    }, props),
    (0, _hyperapp.h)('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' }),
    (0, _hyperapp.h)('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  );
};

var Save = exports.Save = function Save(props) {
  return (0, _hyperapp.h)(
    Svg,
    _extends({
      iconName: 'icon-save'
    }, props),
    (0, _hyperapp.h)('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    (0, _hyperapp.h)('path', { d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z' })
  );
};

var SaveCheck = exports.SaveCheck = function SaveCheck(props) {
  var innerSize = props ? props.size * 0.75 : 16;
  var className = props ? 'icon-save-check ' + props.className : '';

  return (0, _hyperapp.h)(
    'i',
    {
      className: className,
      style: {
        position: 'relative'
      } },
    (0, _hyperapp.h)(Save, props),
    (0, _hyperapp.h)(Check, {
      size: innerSize,
      color: '#fff',
      innerColor: _foundation2.default.accent,
      style: {
        position: 'absolute',
        bottom: '-' + (props ? props.size / 4 : 6) + 'px',
        right: 0
      }
    })
  );
};

var Tag = exports.Tag = function Tag(props) {
  return (0, _hyperapp.h)(
    Svg,
    _extends({
      iconName: 'icon-tag'
    }, props),
    (0, _hyperapp.h)('path', { d: 'M5.5,7A1.5,1.5 0 0,0 7,5.5A1.5,1.5 0 0,0 5.5,4A1.5,1.5 0 0,0 4,5.5A1.5,1.5 0 0,0 5.5,7M21.41,11.58C21.77,11.94 22,12.44 22,13C22,13.55 21.78,14.05 21.41,14.41L14.41,21.41C14.05,21.77 13.55,22 13,22C12.45,22 11.95,21.77 11.58,21.41L2.59,12.41C2.22,12.05 2,11.55 2,11V4C2,2.89 2.89,2 4,2H11C11.55,2 12.05,2.22 12.41,2.58L21.41,11.58M13,20L20,13L11.5,4.5L4.5,11.5L13,20Z' })
  );
};

var Trash = exports.Trash = function Trash(props) {
  return (0, _hyperapp.h)(
    Svg,
    _extends({
      iconName: 'icon-trash'
    }, props),
    (0, _hyperapp.h)('path', { d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' }),
    (0, _hyperapp.h)('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  );
};

var User = exports.User = function User(props) {
  return (0, _hyperapp.h)(
    Svg,
    _extends({
      iconName: 'icon-user'
    }, props),
    (0, _hyperapp.h)('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z' }),
    (0, _hyperapp.h)('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  );
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
	"text-default-color": "#222",
	"text-accent-bg": "#fff",
	"color-default": "#333",
	"color-secondary": "#fff",
	"bg-default": "#fff",
	"accent": "#009688",
	"accent-lighter": "#1EEDD0",
	"base": "16px",
	"bd-rad": "2px"
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(0);

// eslint-disable-line

exports.default = function (props, children) {
  return (0, _hyperapp.h)(
    'div',
    { className: 'toggler ' + (props.className || '') },
    (0, _hyperapp.h)('input', {
      hidden: true,
      id: props.id,
      checked: props.checked || '',
      name: props.name || false,
      type: 'checkbox' }),
    (0, _hyperapp.h)(
      'label',
      {
        htmlFor: props.id,
        id: props.id + '-btn' },
      children[0]
    ),
    children[1]
  );
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(0);

// eslint-disable-line

exports.default = function (_ref) {
  var buttons = _ref.buttons;
  return (0, _hyperapp.h)(
    'ul',
    { className: 'header-buttons' },
    buttons.map(function (b) {
      return (0, _hyperapp.h)(
        'li',
        null,
        b
      );
    })
  );
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(0);

// eslint-disable-line

exports.default = function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _hyperapp.h)('input', {
    className: 'input-header ' + (props.className | ''),
    name: props.name || '',
    placeholder: props.placeholder || '',
    value: props.value || '',
    oninput: props.oninput || '',
    type: 'text' });
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _hyperapp = __webpack_require__(0);

// eslint-disable-line

exports.default = function (model, actions) {
  return (0, _hyperapp.h)(
    'div',
    {
      id: 'app',
      className: 'login-view',
      oncreate: function oncreate() {
        console.log('Redirecting to login?', document.referrer === 'https://benjaminj6.github.io/adze/');
        if (document.referrer === 'https://benjaminj6.github.io/adze/') {
          login({
            email: 'test@test.com',
            password: 'test'
          }, actions);
        }
      } },
    (0, _hyperapp.h)(
      'form',
      {
        action: '/api/auth/login',
        method: 'POST',
        onsubmit: function onsubmit(ev) {
          ev.preventDefault();
          login({
            email: ev.target.querySelector('[name=email]').value,
            password: ev.target.querySelector('[name=password]').value
          }, actions);
        } },
      (0, _hyperapp.h)(
        'h2',
        { style: {
            margin: '1rem 0'
          } },
        "adze"
      ),
      (0, _hyperapp.h)('input', {
        type: 'email',
        name: 'email',
        id: 'login-username',
        placeholder: 'email' }),
      (0, _hyperapp.h)('input', {
        type: 'password',
        name: 'password',
        placeholder: 'password'
      }),
      (0, _hyperapp.h)(
        'button',
        { type: 'submit' },
        'Log in'
      ),
       true ? (0, _hyperapp.h)(
        'a',
        {
          href: '/dashboard',
          onclick: function onclick(ev) {
            ev.preventDefault();
            login({
              email: 'test@test.com',
              password: 'test'
            }, actions);
          } },
        'See the demo'
      ) : ''
    )
  );
};

function login() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var actions = arguments[1];

  window.fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email: data.email,
      password: data.password
    }),
    headers: new window.Headers({
      'Content-Type': 'application/json'
    }),
    credentials: 'include'
  }).then(function (res) {
    console.log(res);
    if (res.status !== 200) {
      throw new Error('Unauthorized');
    }

    actions.router.go('/dashboard');
  }).catch(function (err) {
    console.log('there was a fatal error');
    console.log(err);
  });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _hyperapp = __webpack_require__(0);

// eslint-disable-line

exports.default = function (props, children) {
  return (0, _hyperapp.h)(
    'h3',
    _extends({}, props, {
      className: props.isActive ? 'active' : '' }),
    children
  );
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// related to newContent / staging
var defaultNewContent = {
  title: '',
  md: '',
  tags: [],
  date: new Date()
};

var addStagedTag = exports.addStagedTag = function addStagedTag(_ref, tag) {
  var tags = _ref.tags,
      newContent = _ref.newContent;

  var stagedTags = newContent.tags || [];
  console.log();
  console.log(tags.find(function (t) {
    return t.name === tag.name;
  }));
  return {
    newContentSaved: false,
    newContent: _extends({}, newContent, {
      tags: stagedTags.concat([tags.find(function (t) {
        return t.name === tag.name;
      }) || tag])
    })
  };
};

var removeStagedTag = exports.removeStagedTag = function removeStagedTag(_ref2, tagId) {
  var newContent = _ref2.newContent;

  if (newContent.tags) {
    return {
      newContentSaved: false,
      newContent: _extends({}, newContent, {
        tags: newContent.tags.slice().filter(function (t) {
          return t._id !== tagId;
        })
      })
    };
  }
};

var updateStagedPost = exports.updateStagedPost = function updateStagedPost(_ref3, post) {
  var newContent = _ref3.newContent;
  return {
    newContentSaved: false,
    newContent: _extends({}, newContent, {
      md: post
    })
  };
};

var updateStagedTitle = exports.updateStagedTitle = function updateStagedTitle(_ref4, title) {
  var newContent = _ref4.newContent;
  return {
    newContentSaved: false,
    newContent: _extends({}, newContent, {
      title: title
    })
  };
};

var selectPost = exports.selectPost = function selectPost(_ref5, postId) {
  var newContent = _ref5.newContent,
      posts = _ref5.posts;

  var post = posts.find(function (p) {
    return p._id === postId;
  });
  if (post) {
    return {
      newContentSaved: true,
      newContent: post
    };
  }
};

var clearNewContent = exports.clearNewContent = function clearNewContent() {
  return {
    newContentSaved: false,
    newContent: defaultNewContent
  };
};

// related to model.posts
var addPost = exports.addPost = function addPost(_ref6, post) {
  var posts = _ref6.posts;
  return {
    posts: [post].concat(posts),
    newContent: post,
    newContentSaved: true
  };
};

var addAllPosts = exports.addAllPosts = function addAllPosts(_ref7, newPosts) {
  var posts = _ref7.posts;
  return {
    posts: newPosts
  };
};

var updatePost = exports.updatePost = function updatePost(_ref8, post) {
  var posts = _ref8.posts;
  return {
    newContentSaved: true,
    posts: posts.map(function (p) {
      return p._id === post._id ? post : p;
    }),
    newContent: post
  };
};

var deletePostFromModel = exports.deletePostFromModel = function deletePostFromModel(_ref9, postId) {
  var posts = _ref9.posts;
  return {
    posts: posts.filter(function (p) {
      return p._id !== postId;
    }),
    newContent: defaultNewContent
  };
};

// related to model.tags
var addTag = exports.addTag = function addTag(_ref10, tag) {
  var tags = _ref10.tags;
  return {
    tags: [tag].concat(tags)
  };
};

var addAllTags = exports.addAllTags = function addAllTags(_ref11, newTags) {
  var tags = _ref11.tags;
  return {
    tags: newTags
  };
};

// related to writing to DB
var saveNewPost = exports.saveNewPost = function saveNewPost(_ref12, newPost, actions) {
  var posts = _ref12.posts;

  console.log('saving...');
  console.log(newPost);
  window.fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: newPost.title,
      post: newPost.md,
      tags: newPost.tags
    }),
    headers: new window.Headers({
      'Content-Type': 'application/json'
    }),
    credentials: 'include'
  }).then(function (res) {
    if (res.status !== 201) {
      throw new Error('Unauthorized');
    }

    return res.json();
  }).then(function (json) {
    actions.addPost(json);
    actions.router.go('/dashboard/posts/id=' + json._id);
  }).catch(function (err) {
    return console.log(err);
  });
};

var saveUpdatedPost = exports.saveUpdatedPost = function saveUpdatedPost(_ref13, updatedPost, actions) {
  var posts = _ref13.posts;

  console.log('saving...');
  console.log('preDB', updatedPost);
  window.fetch('/api/posts/' + updatedPost._id, {
    method: 'PATCH',
    body: JSON.stringify({
      title: updatedPost.title,
      post: updatedPost.md,
      tags: updatedPost.tags
    }),
    headers: new window.Headers({ 'Content-Type': 'application/json' }),
    credentials: 'include'
  }).then(function (res) {
    if (res.status === 401) {
      actions.router.go('/');
    }

    if (res.status !== 200) {
      throw new Error('Post failed to save');
    }

    return res.json();
  }).then(function (json) {
    console.log(json);
    actions.updatePost(json);
  }).catch(function (err) {
    console.log(err);
  });
};

var deletePost = exports.deletePost = function deletePost(_ref14, postId, actions) {
  var posts = _ref14.posts;

  console.log('deleting...');
  console.log('postId', postId);
  window.fetch('/api/posts/' + postId, {
    method: 'DELETE',
    credentials: 'include'
  }).then(function (res) {
    if (res.status !== 200) {
      throw new Error('Post failed to delete');
    }

    actions.deletePostFromModel(postId);
    actions.router.go('/dashboard');
  }).catch(function (err) {
    return console.log(err);
  });
};

var logout = exports.logout = function logout(model, data, actions) {
  window.fetch('/api/auth/logout').then(function (res) {
    return actions.router.go('/');
  });
};

var stageTagName = exports.stageTagName = function stageTagName(_ref15, name) {
  var newTagData = _ref15.newTagData,
      tag = _ref15.tag;
  return {
    newTagDataSaved: false,
    newTagData: _extends({}, newTagData, {
      name: name
    })
  };
};

var stageTagColor = exports.stageTagColor = function stageTagColor(_ref16, color) {
  var newTagData = _ref16.newTagData;
  return {
    newTagDataSaved: false,
    newTagData: _extends({}, newTagData, {
      color: color
    })
  };
};

var clearStagedTag = exports.clearStagedTag = function clearStagedTag(_ref17) {
  var newTagData = _ref17.newTagData;
  return {
    newTagDataSaved: false,
    newTagData: {
      name: '',
      color: ''
    }
  };
};

var selectTag = exports.selectTag = function selectTag(_ref18, tagId) {
  var tags = _ref18.tags;
  return {
    newTagDataSaved: true,
    newTagData: tags.find(function (t) {
      return t._id === tagId;
    })
  };
};

var updateSavedTag = exports.updateSavedTag = function updateSavedTag(_ref19, tag) {
  var tags = _ref19.tags,
      newTagData = _ref19.newTagData;
  return {
    tags: tags.map(function (t) {
      return t._id === tag._id ? tag : t;
    }),
    newTagData: tag,
    newTagDataSaved: true
  };
};

var saveTag = exports.saveTag = function saveTag(model, newTagData, actions) {
  window.fetch('/api/tags/' + newTagData._id, {
    method: 'PATCH',
    credentials: 'include',
    body: JSON.stringify({
      name: newTagData.name,
      color: newTagData.color
    }),
    headers: new window.Headers({ 'Content-Type': 'application/json' })
  }).then(function (res) {
    if (res.status !== 200) {
      throw new Error('Post failed to update');
    }

    return res.json();
  }).then(function (json) {
    return actions.updateSavedTag(json);
  }).catch(function (err) {
    return console.log('ERR!', err);
  });
};

var removeTagFromModel = exports.removeTagFromModel = function removeTagFromModel(_ref20, tagId) {
  var tags = _ref20.tags;
  return {
    tags: tags.filter(function (t) {
      return t._id !== tagId;
    })
  };
};

var deleteTag = exports.deleteTag = function deleteTag(_, tagId, actions) {
  window.fetch('/api/tags/' + tagId, {
    method: 'DELETE',
    credentials: 'include'
  }).then(function (res) {
    if (res.status !== 200) {
      throw new Error('Failed to delete');
    }

    return res.json();
  }).then(function (json) {
    actions.removeTagFromModel(json._id);
    actions.router.go('/dashboard');
  }).catch(function (err) {
    return console.log(err);
  });
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadRemoteData = exports.getTags = exports.getPosts = undefined;

var _Login = __webpack_require__(6);

/* eslint-disable */
var getPosts = exports.getPosts = function getPosts(model, actions) {
  return window.fetch('/api/posts').then(function (res) {
    return res.json();
  }).then(function (json) {
    actions.addAllPosts(json);
  }).catch(function (err) {
    return console.error('this handler', err);
  });
};

var getTags = exports.getTags = function getTags(model, actions) {
  return window.fetch('/api/tags').then(function (res) {
    return res.json();
  }).then(function (json) {
    actions.addAllTags(json);
  }).catch(function (err) {
    return console.error(err);
  });
};

var getInitialNewContent = function getInitialNewContent(model, actions) {
  if (/create|tags/.test(model.router.match)) {
    actions.clearNewContent();
  }

  if (/tags/.test(model.router.match)) {
    actions.selectTag(model.router.params.id);
  }

  if (/posts/.test(model.router.match)) {
    actions.selectPost(model.router.params.id);
  }
};

var loadRemoteData = exports.loadRemoteData = function loadRemoteData(model, actions) {
  getPosts(model, actions).then(function (_) {
    return getTags(model, actions);
  }).then(function (_) {
    return getInitialNewContent(model, actions);
  });
};

// export const loginIfFromLandingPage = (model, actions) => {
//   if (document.referrer = 'https://benjaminj6.github.io/adze') {
//     login({ 
//       email: 'test@test.com',
//       password: 'test'
//     }, actions)
//   }
// }

exports.default = [loadRemoteData];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = __webpack_require__(13);

Object.defineProperty(exports, 'NotFound', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_).default;
  }
});

var _Dashboard = __webpack_require__(14);

Object.defineProperty(exports, 'Dashboard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Dashboard).default;
  }
});

var _Login = __webpack_require__(6);

Object.defineProperty(exports, 'Login', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Login).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(0);

// eslint-disable-line

exports.default = function (model) {
  return (0, _hyperapp.h)(
    'div',
    { id: 'app', 'class': 'not-found-view' },
    (0, _hyperapp.h)(
      'section',
      null,
      (0, _hyperapp.h)(
        'h1',
        null,
        '404'
      ),
      (0, _hyperapp.h)(
        'h3',
        null,
        'Not Found'
      ),
      (0, _hyperapp.h)(
        'p',
        null,
        (0, _hyperapp.h)(
          'span',
          null,
          window.location.href
        ),
        ' could not be found. Please ',
        (0, _hyperapp.h)(
          'a',
          { href: '/' },
          'log in'
        ),
        ' to view your content'
      )
    )
  );
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(0);

var _Editor = __webpack_require__(19);

var _Editor2 = _interopRequireDefault(_Editor);

var _Prompt = __webpack_require__(20);

var _Prompt2 = _interopRequireDefault(_Prompt);

var _Tags = __webpack_require__(27);

var _Tags2 = _interopRequireDefault(_Tags);

var _Sidebar = __webpack_require__(25);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Toggler = __webpack_require__(3);

var _Toggler2 = _interopRequireDefault(_Toggler);

var _Icons = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line

var getDashboardView = function getDashboardView(model, actions) {
  if (/posts|create/.test(window.location.pathname)) {
    return (0, _hyperapp.h)(_Editor2.default, { model: model,
      actions: actions,
      selected: model.newContent });
  }

  if (/tags/.test(window.location.pathname)) {
    return (0, _hyperapp.h)(_Tags2.default, {
      model: model,
      actions: actions,
      tag: model.tags.find(function (t) {
        return t._id === model.router.params.id;
      }) });
  }

  return (0, _hyperapp.h)(_Prompt2.default, {
    model: model,
    actions: actions });
};

exports.default = function (model, actions) {
  return (0, _hyperapp.h)(
    'div',
    { id: 'app', className: 'dashboard-view' },
    (0, _hyperapp.h)(
      _Toggler2.default,
      { id: 'nav-toggler' },
      (0, _hyperapp.h)(_Icons.Menu, null),
      (0, _hyperapp.h)(
        'div',
        { id: 'nav-toggler-content' },
        (0, _hyperapp.h)(_Sidebar2.default, { model: model, actions: actions }),
        getDashboardView(model, actions)
      )
    )
  );
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(0);

var _Icons = __webpack_require__(1);

var _foundation = __webpack_require__(2);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line

exports.default = function (_ref) {
  var post = _ref.post,
      actions = _ref.actions;
  return (0, _hyperapp.h)(
    'div',
    { id: 'info-menu' },
    (0, _hyperapp.h)(
      'h3',
      null,
      'Tags'
    ),
    (0, _hyperapp.h)(
      'ul',
      {
        className: 'tags',
        onsubmit: function onsubmit(ev) {
          ev.preventDefault();
          if (/tag-applied/.test(ev.target.id)) {
            var id = ev.target.id.split(/tag-applied-/)[1];
            actions.removeStagedTag(id);
          }
        } },
      post ? post.tags.map(function (t) {
        return (0, _hyperapp.h)(
          'li',
          {
            style: { background: t.color } },
          (0, _hyperapp.h)(
            'form',
            {
              id: 'tag-applied-' + t._id,
              action: '' },
            (0, _hyperapp.h)(
              'span',
              null,
              t.name
            ),
            (0, _hyperapp.h)(
              'button',
              { type: 'submit' },
              (0, _hyperapp.h)(_Icons.Close, { height: '1em' })
            )
          )
        );
      }) : ''
    ),
    (0, _hyperapp.h)(
      'form',
      {
        id: 'add-tag',
        action: '',
        onsubmit: function onsubmit(ev) {
          ev.preventDefault();
          var form = ev.target;
          var name = form.querySelector('[name=\'name\']');
          var color = form.querySelector('[name=\'color\']');

          actions.addStagedTag({
            name: name.value,
            color: color.value,
            _id: Date.now().toString()
          });

          name.value = '';
          color.value = _foundation2.default['accent-lighter'];
          form.style.background = '#fff';
          form.style.color = '#000';
        } },
      (0, _hyperapp.h)('input', {
        name: 'name',
        placeholder: 'add a tag',
        type: 'text' }),
      (0, _hyperapp.h)('input', {
        id: 'color-picker',
        type: 'color',
        name: 'color',
        defaultValue: _foundation2.default['accent-lighter'],
        oninput: function oninput(e) {
          var form = document.getElementById('add-tag');
          form.style.background = e.target.value;
          form.style.color = '#fff';
        } }),
      (0, _hyperapp.h)(
        'label',
        {
          id: 'color-picker-btn',
          htmlFor: 'color-picker' },
        (0, _hyperapp.h)(_Icons.Paint, { height: '1rem', width: '1rem' })
      ),
      (0, _hyperapp.h)(
        'button',
        { type: 'submit' },
        (0, _hyperapp.h)(_Icons.Plus, null)
      )
    )
  );
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(0);

var _getHeaderButtons = __webpack_require__(18);

var _getHeaderButtons2 = _interopRequireDefault(_getHeaderButtons);

var _HeaderButtons = __webpack_require__(4);

var _HeaderButtons2 = _interopRequireDefault(_HeaderButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line

exports.default = function (_ref) {
  var model = _ref.model,
      actions = _ref.actions,
      selected = _ref.selected;

  var buttons = (0, _getHeaderButtons2.default)(model, actions, selected);

  return (0, _hyperapp.h)(
    'header',
    { className: 'editor-header' },
    (0, _hyperapp.h)(_HeaderButtons2.default, { buttons: buttons })
  );
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(0);

var _lodash = __webpack_require__(8);

var _lodash2 = _interopRequireDefault(_lodash);

var _InputHeader = __webpack_require__(5);

var _InputHeader2 = _interopRequireDefault(_InputHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line
exports.default = function (_ref) {
  var post = _ref.post,
      actions = _ref.actions;
  return (0, _hyperapp.h)(
    'section',
    { className: 'editor-section' },
    (0, _hyperapp.h)(
      'header',
      null,
      (0, _hyperapp.h)(_InputHeader2.default, {
        name: 'title',
        placeholder: 'my new post',
        value: post ? post.title : '',
        oninput: (0, _lodash2.default)(function (_ref2) {
          var target = _ref2.target;

          actions.updateStagedTitle(target.value);
        }, 500) }),
      (0, _hyperapp.h)(
        'h6',
        null,
        '(',
        new Date(post.date || Date.now()).toDateString(),
        ')'
      )
    ),
    (0, _hyperapp.h)('textarea', {
      name: 'editor',
      id: 'editor',
      cols: '50',
      rows: '30',
      placeholder: 'your content here...',
      value: post ? post.md : '',
      oninput: (0, _lodash2.default)(function (_ref3) {
        var target = _ref3.target;
        actions.updateStagedPost(target.value);
      }, 500),
      oncreate: function oncreate(el) {
        var height = window.innerHeight - 40;
        el.rows = height / 16;
      } })
  );
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // eslint-disable-line

var _hyperapp = __webpack_require__(0);

var _Icons = __webpack_require__(1);

var _AddTagsMenu = __webpack_require__(15);

var _AddTagsMenu2 = _interopRequireDefault(_AddTagsMenu);

var _Toggler = __webpack_require__(3);

var _Toggler2 = _interopRequireDefault(_Toggler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createSaveClickHandler = function createSaveClickHandler(newContent, actions) {
  var savable = newContent.title && newContent.md;
  var isNewPost = /create/.test(window.location.pathname);
  var isUpdatedPost = /posts/.test(window.location.pathname);

  return function (ev) {
    if (savable && isNewPost) {
      actions.saveNewPost(_extends({}, newContent));
    }

    if (savable && isUpdatedPost) {
      actions.saveUpdatedPost(newContent);
    }
  };
};

var SaveButton = function SaveButton(_ref) {
  var saved = _ref.saved,
      newContent = _ref.newContent,
      actions = _ref.actions;
  return (0, _hyperapp.h)(
    'button',
    null,
    saved ? (0, _hyperapp.h)(_Icons.SaveCheck, null) : (0, _hyperapp.h)(_Icons.Save, {
      onclick: createSaveClickHandler(newContent, actions),
      style: {
        color: newContent.title && newContent.md ? '' : 'rgba(0, 0, 0, 0.05)'
      } })
  );
};

var AddTagsToggler = function AddTagsToggler(_ref2) {
  var actions = _ref2.actions,
      selected = _ref2.selected;
  return (0, _hyperapp.h)(
    _Toggler2.default,
    {
      id: 'info-toggler',
      className: 'add-tags-toggler' },
    (0, _hyperapp.h)(_Icons.Tag, null),
    (0, _hyperapp.h)(_AddTagsMenu2.default, {
      actions: actions,
      post: selected || '' })
  );
};

var CancelButton = function CancelButton(_ref3) {
  var actions = _ref3.actions;
  return (0, _hyperapp.h)(
    'button',
    { onclick: function onclick(_) {
        return actions.router.go('/dashboard');
      } },
    (0, _hyperapp.h)(_Icons.Close, null)
  );
};

var DeleteButton = function DeleteButton(_ref4) {
  var id = _ref4.id,
      actions = _ref4.actions;
  return (0, _hyperapp.h)(
    'button',
    { onclick: function onclick(_) {
        return actions.deletePost(id);
      } },
    (0, _hyperapp.h)(_Icons.Trash, null)
  );
};

exports.default = function (model, actions, selected) {
  var buttons = [(0, _hyperapp.h)(SaveButton, {
    actions: actions,
    newContent: model.newContent,
    saved: model.newContentSaved }), (0, _hyperapp.h)(AddTagsToggler, {
    actions: actions,
    selected: selected })];

  if (/create/.test(window.location.pathname)) {
    buttons.push((0, _hyperapp.h)(CancelButton, { actions: actions }));
    return buttons;
  }

  buttons.push((0, _hyperapp.h)(DeleteButton, {
    actions: actions,
    id: model.newContent._id }));

  return buttons;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(0);

var _PostEditor = __webpack_require__(17);

var _PostEditor2 = _interopRequireDefault(_PostEditor);

var _EditorHeader = __webpack_require__(16);

var _EditorHeader2 = _interopRequireDefault(_EditorHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line

exports.default = function (props, children) {
  return (0, _hyperapp.h)(
    'main',
    null,
    (0, _hyperapp.h)(_EditorHeader2.default, props),
    (0, _hyperapp.h)(_PostEditor2.default, {
      post: props.selected,
      actions: props.actions })
  );
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(0);

// eslint-disable-line

exports.default = function (_ref) {
  var model = _ref.model,
      actions = _ref.actions;
  return (0, _hyperapp.h)(
    'main',
    null,
    (0, _hyperapp.h)(
      'section',
      { className: 'prompt' },
      (0, _hyperapp.h)(
        'h2',
        null,
        'You can select posts and categories on the left.',
        (0, _hyperapp.h)('br', null),
        'Or you can start a ',
        (0, _hyperapp.h)(
          'a',
          {
            href: '/dashboard/create',
            onclick: function onclick(ev) {
              ev.preventDefault();
              actions.router.go('/dashboard/create');
            } },
          'new one today'
        ),
        '.'
      )
    )
  );
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(0);

var _SidebarMenuList = __webpack_require__(23);

var _SidebarMenuList2 = _interopRequireDefault(_SidebarMenuList);

var _SidebarMenuHeading = __webpack_require__(7);

var _SidebarMenuHeading2 = _interopRequireDefault(_SidebarMenuHeading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line

exports.default = function (_ref) {
  var model = _ref.model,
      actions = _ref.actions;
  return (0, _hyperapp.h)(
    'section',
    null,
    model.nav.map(function (item) {
      return item.children ? (0, _hyperapp.h)(
        _SidebarMenuList2.default,
        { model: model, item: item, actions: actions },
        model[item.children]
      ) : (0, _hyperapp.h)(
        _SidebarMenuHeading2.default,
        {
          isActive: new RegExp(item.href + '$').test(model.router.match)
          // TODO: Move into a .scss file
          , style: { paddingLeft: '1.5rem' },
          onclick: function onclick(ev) {
            ev.preventDefault();
            actions.clearNewContent();
            actions.router.go('/dashboard/' + item.href);
          } },
        (0, _hyperapp.h)(
          'a',
          { href: '/dashboard/create' },
          'New Post'
        )
      );
    })
  );
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(0);

var _Icons = __webpack_require__(1);

exports.default = function (_ref) {
  var model = _ref.model,
      actions = _ref.actions;
  return (0, _hyperapp.h)(
    'header',
    null,
    (0, _hyperapp.h)(
      'div',
      { className: 'sidebar-user' },
      (0, _hyperapp.h)('input', {
        hidden: true,
        id: 'user-menu-toggler',
        type: 'checkbox' }),
      (0, _hyperapp.h)(
        'label',
        { htmlFor: 'user-menu-toggler' },
        (0, _hyperapp.h)(_Icons.AngleDown, null),
        (0, _hyperapp.h)(
          'span',
          null,
          model.email
        )
      ),
      (0, _hyperapp.h)(
        'div',
        { id: 'user-dropdown' },
        (0, _hyperapp.h)(
          'button',
          { onclick: function onclick(_) {
              return actions.logout();
            } },
          (0, _hyperapp.h)(_Icons.Logout, { size: '1rem' }),
          (0, _hyperapp.h)(
            'span',
            null,
            'Logout'
          )
        )
      )
    )
  );
}; // eslint-disable-line

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(0);

var _Icons = __webpack_require__(1);

var _SidebarMenuHeading = __webpack_require__(7);

var _SidebarMenuHeading2 = _interopRequireDefault(_SidebarMenuHeading);

var _SidebarMenuListItem = __webpack_require__(24);

var _SidebarMenuListItem2 = _interopRequireDefault(_SidebarMenuListItem);

var _Toggler = __webpack_require__(3);

var _Toggler2 = _interopRequireDefault(_Toggler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line

exports.default = function (_ref, children) {
  var actions = _ref.actions,
      item = _ref.item,
      model = _ref.model;

  var isActive = new RegExp('' + item.href).test(model.router.match);

  var menuAnchorHandler = function menuAnchorHandler(ev) {
    ev.preventDefault();
    var url = ev.target.pathname;
    var id = url.split('id=')[1];

    if (/posts/.test(url)) {
      actions.selectPost(id);
    }

    if (/tags/.test(url)) {
      actions.selectTag(id);
    }

    actions.router.go(url);
  };

  return (0, _hyperapp.h)(
    'div',
    { className: 'menu-list' },
    (0, _hyperapp.h)(
      _Toggler2.default,
      {
        checked: isActive,
        id: 'menu-' + item.href + '-toggler',
        name: 'menu-item-toggler' },
      (0, _hyperapp.h)(
        _SidebarMenuHeading2.default,
        {
          isActive: isActive },
        (0, _hyperapp.h)(_Icons.Plus, {
          className: 'icon-toggle open',
          height: '1rem' }),
        (0, _hyperapp.h)(_Icons.Close, {
          className: 'icon-toggle closed',
          height: '1rem' }),
        item.title
      ),
      (0, _hyperapp.h)(
        'ul',
        { onclick: menuAnchorHandler },
        children.map(function (child) {
          return (0, _hyperapp.h)(_SidebarMenuListItem2.default, {
            title: child.title || child.name,
            isActive: model.router.params.id === child._id,
            href: '/dashboard/' + item.href + '/id=' + child._id });
        })
      )
    )
  );
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(0);

var _foundation = __webpack_require__(2);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return (0, _hyperapp.h)(
    'li',
    null,
    (0, _hyperapp.h)(
      'a',
      {
        style: {
          background: props.isActive ? '#fff' : '',
          color: props.isActive ? _foundation2.default.accent : ''
        },
        href: props.href },
      props.title
    )
  );
}; // eslint-disable-line

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(0);

var _SidebarHeader = __webpack_require__(22);

var _SidebarHeader2 = _interopRequireDefault(_SidebarHeader);

var _SidebarBody = __webpack_require__(21);

var _SidebarBody2 = _interopRequireDefault(_SidebarBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line

exports.default = function (_ref) {
  var model = _ref.model,
      actions = _ref.actions;
  return (0, _hyperapp.h)(
    'nav',
    { id: 'nav' },
    (0, _hyperapp.h)(_SidebarHeader2.default, { model: model, actions: actions }),
    (0, _hyperapp.h)(_SidebarBody2.default, { model: model, actions: actions })
  );
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(0);

// eslint-disable-line

exports.default = function (_ref) {
  var post = _ref.post,
      actions = _ref.actions;
  return (0, _hyperapp.h)(
    'li',
    { className: 'post-card' },
    (0, _hyperapp.h)(
      'a',
      {
        href: '/dashboard/posts/id=' + post._id,
        onclick: function onclick(ev) {
          ev.preventDefault();
          actions.selectPost(post._id);
          actions.router.go('/dashboard/posts/id=' + post._id);
        } },
      (0, _hyperapp.h)(
        'h4',
        null,
        post.title
      ),
      (0, _hyperapp.h)(
        'h6',
        null,
        '(',
        new Date(post.date).toDateString(),
        ')'
      )
    )
  );
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // eslint-disable-line


var _hyperapp = __webpack_require__(0);

var _lodash = __webpack_require__(8);

var _lodash2 = _interopRequireDefault(_lodash);

var _PostCard = __webpack_require__(26);

var _PostCard2 = _interopRequireDefault(_PostCard);

var _InputHeader = __webpack_require__(5);

var _InputHeader2 = _interopRequireDefault(_InputHeader);

var _HeaderButtons = __webpack_require__(4);

var _HeaderButtons2 = _interopRequireDefault(_HeaderButtons);

var _Icons = __webpack_require__(1);

var _foundation = __webpack_require__(2);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getTagHeaderButtons = function getTagHeaderButtons(model, actions) {
  var savable = model.newTagData.name;
  var saveButton = savable && model.newTagDataSaved ? (0, _hyperapp.h)(_Icons.SaveCheck, null) : (0, _hyperapp.h)(_Icons.Save, {
    style: {
      color: !savable ? 'rgba(0, 0, 0, 0.1)' : ''
    } });

  return [(0, _hyperapp.h)(
    'label',
    { htmlFor: 'edit-tag-submit' },
    saveButton
  ), (0, _hyperapp.h)(
    'label',
    { htmlFor: 'edit-tag-color' },
    (0, _hyperapp.h)(_Icons.Paint, null)
  ), (0, _hyperapp.h)(_Icons.Trash, { onclick: function onclick(ev) {
      return actions.deleteTag(model.router.params.id);
    } })];
};

exports.default = function (_ref) {
  var model = _ref.model,
      actions = _ref.actions,
      tag = _ref.tag;

  var posts = [];

  if (tag) {
    posts = model.posts.filter(function (p) {
      return p.tags.find(function (t) {
        return t._id === tag._id;
      });
    });
  }

  var buttons = getTagHeaderButtons(model, actions);

  return (0, _hyperapp.h)(
    'main',
    null,
    (0, _hyperapp.h)(
      'header',
      { className: 'tags-header' },
      (0, _hyperapp.h)(_HeaderButtons2.default, { buttons: buttons })
    ),
    (0, _hyperapp.h)(
      'section',
      { className: 'tags-section', style: {
          padding: '3rem 5%'
        } },
      (0, _hyperapp.h)(
        'header',
        null,
        (0, _hyperapp.h)(
          'form',
          {
            id: 'edit-tag',
            oncreate: function oncreate(el) {
              console.log('created');
            },
            onremove: function onremove(el) {
              console.log('removed');
            },
            onsubmit: function onsubmit(ev) {
              ev.preventDefault();
              if (!model.newTagDataSaved) {
                actions.saveTag(_extends({}, model.newTagData));
              }
            } },
          (0, _hyperapp.h)(_InputHeader2.default, {
            className: 'tag-input-header',
            name: 'name',
            placeholder: 'tag name',
            value: tag ? tag.name : '',
            oninput: (0, _lodash2.default)(function (_ref2) {
              var target = _ref2.target;

              console.log('this runs');
              actions.stageTagName(target.value);
            }, 300) }),
          (0, _hyperapp.h)('input', {
            hidden: true,
            id: 'edit-tag-color',
            name: 'color',
            defaultValue: _foundation2.default['accent-lighter'],
            type: 'color' }),
          (0, _hyperapp.h)('input', {
            hidden: true,
            id: 'edit-tag-submit',
            type: 'submit' })
        ),
        (0, _hyperapp.h)(
          'h6',
          null,
          '(',
          posts.length === 1 ? posts.length + ' post' : posts.length + ' posts',
          ')'
        )
      ),
      (0, _hyperapp.h)(
        'section',
        { className: 'posts' },
        (0, _hyperapp.h)(
          'ul',
          null,
          posts.map(function (p) {
            return (0, _hyperapp.h)(_PostCard2.default, { post: p, actions: actions });
          })
        )
      )
    )
  );
};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (app) {
  // Default for app.view if not provided
  var view = app.view || function () {
    return ""
  }

  // variables
  var model
  var actions = {}
  var subscriptions = []
  var hooks = {
    onError: [],
    onAction: [],
    onUpdate: [],
    onRender: []
  }

  // Makes an array of plugins...first one is the app itself?
  // [{ app }] + [{app.plugins}]
  // more appropriates thatn an array of plugins is an array of apps
  var plugins = [app].concat((app.plugins || []).map(function (plugin) {
    return plugin(app)
  }))

  var node
  var root
  var batch = []

  // Loop through the plugins (apps)
  for (var i = 0; i < plugins.length; i++) {
    // current plugin
    var plugin = plugins[i]

    // If this plugin has a model, merge it into the existing app model (ironically also the first plugin...although that won't matter)
    if (plugin.model !== undefined) {
      model = merge(model, plugin.model)
    }

    // If this plugin has actions to add, merge them into the app as well
    if (plugin.actions) {
      init(actions, plugin.actions)
    }

    if (plugin.subscriptions) {
      subscriptions = subscriptions.concat(plugin.subscriptions)
    }

    var _hooks = plugin.hooks
    if (_hooks) {
      Object.keys(_hooks).forEach(function (key) {
        hooks[key].push(_hooks[key])
      })
    }
  }

  function onError(error) {
    for (var i = 0; i < hooks.onError.length; i++) {
      hooks.onError[i](error)
    }

    if (i <= 0) {
      throw error
    }
  }

  // add the 'group' into the 'container'
  function init(container, group, lastName) {
    // For every item in the group (every method/property)
    Object.keys(group).forEach(function (key) {
      // Add to the container as an empty object if it doesn't exist
      if (!container[key]) {
        container[key] = {}
      }

      // Set name to either a property of lastName or simply the key
      // Choose which level we are recursing through?
      var name = lastName ? lastName + "." + key : key
      // action is the current item being added
      var action = group[key]
      var i

      // If the action is a function, add it as a method
      if (typeof action === "function") {
        // Here is the method to be added to the container
        // Note -- same name as it is in the group (config?)
        container[key] = function (data) {
          // Call whatever hooks need to be called when this method is used
          for (i = 0; i < hooks.onAction.length; i++) {
            hooks.onAction[i](name, data)
          }

          // call the action
          // use the app model, data (local var), all actions, onError (a function)
          var result = action(model, data, actions, onError)

          // If the action doesn't return anything or it returns a promise, allows for chaining
          if (result === undefined || typeof result.then === "function") {
            return result

          } else {
            // Otherwise, action has ended, fire onUpdate hooks
            for (i = 0; i < hooks.onUpdate.length; i++) {
              hooks.onUpdate[i](model, result, data)
            }

            // update the model with the new model by merging the two
            model = merge(model, result)
            // render the existing data into the view
            render(model, view)
          }
        }
      } else {
        init(container[key], action, name)
      }
    })
  }

  load(function () {
    root = app.root || document.body.appendChild(document.createElement("div"))

    render(model, view)

    for (var i = 0; i < subscriptions.length; i++) {
      subscriptions[i](model, actions, onError)
    }
  })

  function load(fn) {
    if (document.readyState[0] !== "l") {
      fn()
    } else {
      document.addEventListener("DOMContentLoaded", fn)
    }
  }

  function render(model, view) {
    // fire all render hooks
    for (i = 0; i < hooks.onRender.length; i++) {
      view = hooks.onRender[i](model, view)
    }


    patch(root, node, node = view(model, actions), 0)

    for (var i = 0; i < batch.length; i++) {
      batch[i]()
    }

    batch = []
  }

  // Take properties of b and add them to a
  function merge(a, b) {
    var obj = {}
    var key

    // If the data isn't mergable just return the second
    if (isPrimitive(b) || Array.isArray(b)) {
      return b
    }

    // Get our keys
    for (key in a) {
      obj[key] = a[key]
    }
    // Add the ones from b, override if it's already in the object
    for (key in b) {
      obj[key] = b[key]
    }

    return obj
  }

  function isPrimitive(type) {
    type = typeof type
    return type === "string" || type === "number" || type === "boolean"
  }

  function defer(fn, data) {
    setTimeout(function () {
      fn(data)
    }, 0)
  }

  // checks for all the ways that two html nodes could possibly be different...returns boolean
  function shouldUpdate(a, b) {
    return a.tag !== b.tag || typeof a !== typeof b || isPrimitive(a) && a !== b
  }

  function createElementFrom(node) {
    var element

    // There are only two types of nodes. A string node, which is
    // converted into a Text node or an object that describes an
    // HTML element and may also contain children.

    if (typeof node === "string") {
      element = document.createTextNode(node)

    } else {
      element = node.data && node.data.ns
        ? document.createElementNS(node.data.ns, node.tag)
        : document.createElement(node.tag)

      for (var name in node.data) {
        if (name === "oncreate") {
          defer(node.data[name], element)
        } else {
          setElementData(element, name, node.data[name])
        }
      }

      for (var i = 0; i < node.children.length; i++) {
        element.appendChild(createElementFrom(node.children[i]))
      }
    }

    return element
  }

  // remove a value from an element or set it to false
  function removeElementData(element, name, value) {
    // Hyperx adds a className attribute to nodes we must handle.

    element.removeAttribute(name === "className" ? "class" : name)

    if (typeof value === "boolean" || value === "true" || value === "false") {
      element[name] = false
    }
  }

  function setElementData(element, name, value, oldValue) {
    if (name === "style") {
      // add all styles if needed.
      for (var i in value) {
        element.style[i] = value[i]
      }

    } else if (name[0] === "o" && name[1] === "n") {
      // if the attr is an event (onclick, onhover, etc)
      var event = name.substr(2)

      // clear previous event listeners
      element.removeEventListener(event, oldValue)
      // add a new event listener
      element.addEventListener(event, value)

    } else {
      if (value === "false" || value === false) {
        // if the attr is a boolean value set to false clear it and set it to false
        element.removeAttribute(name)
        element[name] = false

      } else {
        // otherwise then we're doing good, just add the attr to the el.
        element.setAttribute(name, value)
        if (element.namespaceURI !== "http://www.w3.org/2000/svg") {
          // SVG element's props are read only in strict mode.

          // if you include an svg and leave off the namespace you should be fine
          element[name] = value
        }
      }
    }
  }

  function updateElementData(element, data, oldData) {
    // loop through items in the data (new + old)
    for (var name in merge(oldData, data)) {
      var value = data[name]
      var oldValue = oldData[name]
      var realValue = element[name]

      // if the value doesn't exist in the new data
      if (value === undefined) {
        // remove it from the element, use the old value to know what to remove
        removeElementData(element, name, oldValue)

      } else if (name === "onupdate") {
        // if we're adding an onupdate hook, fire it asyncronously
        defer(value, element)

      } else if (
        // if the value is new and different
        value !== oldValue ||
        // or if the realValue is a boolean and has been changed
        typeof realValue === "boolean" &&
        realValue !== value
      ) {
        // This prevents cases where the node's data is out of sync with
        // the element's. For example, a list of checkboxes in which one
        // of the elements is recycled.

        // set the element data to the new data
        setElementData(element, name, value, oldValue)
      }
    }
  }

  // Takes an html node and only updates the changed elements?
  function patch(parent, oldNode, node, index) {
    // If there isn't a previous node to patch, create a new element
    if (oldNode === undefined) {
      parent.appendChild(createElementFrom(node))

    } else if (node === undefined) {
      // if there isn't anything to render in the view function
      var element = parent.childNodes[index]

      // Removing a child one at a time updates the DOM, so we end up
      // with an index out of date that needs to be adjusted. Instead,
      // collect all the elements and delete them in a batch.

      // push the operation to the batch to be performed later
      batch.push(parent.removeChild.bind(parent, element))

      // multiple cond to avoid 'cannot evaluate onremove of undefined' error
      if (oldNode && oldNode.data && oldNode.data.onremove) {
        // if there's an onremove event listener, fire it asyncronously
        defer(oldNode.data.onremove, element)
      }

    } else if (shouldUpdate(node, oldNode)) {
      // if the new node is different than the old node
      // replace the node at the current index with the new html
      parent.replaceChild(createElementFrom(node), parent.childNodes[index])

    } else if (node.tag) {
      // if there is a new tag that is not different from the old node
      // return the current node at the current index
      var element = parent.childNodes[index]

      // update the element with the new data, if any
      updateElementData(element, node.data, oldNode.data)

      var len = node.children.length, oldLen = oldNode.children.length

      // loop until we reach whichever item has less children? the new or the old node
      for (var i = 0; i < len || i < oldLen; i++) {
        var child = node.children[i]

        // update the oldNode with the stuff from the new node, calling patch recursively
        patch(element, oldNode.children[i], child, i)
      }
    }
  }
};


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var i, node, children, stack = []

/* harmony default export */ __webpack_exports__["a"] = function (tag, data) {
  var canConcat, oldCanConcat

  children = []
  i = arguments.length

  while (i-- > 2) {
    stack.push(arguments[i])
  }

  while (stack.length) {
    if (Array.isArray(node = stack.pop())) {
      i = node.length

      while (i--) {
        stack.push(node[i])
      }
    } else if (node != null && node !== true && node !== false) {
      // Ignore nulls and booleans; this is conditional rendering.

      if (typeof node === "number") {
        node = node + ""
      }

      // Concatenate contiguous number/string nodes into one string.
      // The idea is to avoid creating unnecessary text nodes.

      canConcat = typeof node === "string"

      if (canConcat && oldCanConcat) {
        children[children.length - 1] += node
      } else {
        children.push(node)
        oldCanConcat = canConcat
      }
    }
  }

  if (typeof tag === "function") {
    return tag(data, children)
  }

  if (tag === "svg") {
    svg(tag, data, children)
  }

  return {
    tag: tag,
    data: data || {},
    children: children
  }
};

function svg(tag, data, children) {
  data.ns = "http://www.w3.org/2000/svg"

  for (var i = 0; i < children.length; i++) {
    var node = children[i]
    if (node.data) {
      svg(node.tag, node.data, node.children)
    }
  }
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (options) {
  return {
    model: {
      router: match(options.view, location.pathname)
    },
    actions: {
      router: {
        match: function (_, data) {
          return {
            router: match(options.view, data)
          }
        },
        go: function (_, data, actions) {
          history.pushState({}, "", data)
          actions.router.match(data)
        }
      }
    },
    hooks: {
      onRender: function (model) {
        return options.view[model.router.match]
      }
    },
    subscriptions: [
      function (_, actions) {
        addEventListener("popstate", function () {
          actions.router.match(location.pathname)
        })
      }
    ]
  }
};

function match(routes, path) {
  var match, params = {}

  for (var route in routes) {
    var keys = []

    if (route === "*") {
      continue
    }

    path.replace(new RegExp("^" + route
      .replace(/\//g, "\\/")
      .replace(/:([A-Za-z0-9_]+)/g, function (_, key) {
        keys.push(key)
        return "([A-Za-z0-9_]+)"
      }) + "/?$", "g"), function () {

        for (var i = 1; i < arguments.length - 2; i++) {
          params[keys.shift()] = arguments[i]
        }
        match = route
      })

    if (match) {
      break
    }
  }

  return {
    match: match || "*",
    params: params
  }
}


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(9);

var actions = _interopRequireWildcard(_actions);

var _subscriptions = __webpack_require__(10);

var _subscriptions2 = _interopRequireDefault(_subscriptions);

var _view = __webpack_require__(11);

var views = _interopRequireWildcard(_view);

__webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Will be removed
// eslint-disable-line

var model = {
  email: 'test@test.com',
  nav: [{
    title: 'New Post',
    href: 'create'
  }, {
    title: 'Recent Posts',
    href: 'posts',
    children: 'posts'
  }, {
    title: 'Categories',
    href: 'tags',
    children: 'tags'
  }],
  posts: [],
  tags: [{
    title: 'foo',
    color: 'green',
    _id: '3'
  }, {
    title: 'bar',
    color: 'blue',
    _id: '4'
  }, {
    title: 'baz',
    color: 'red',
    _id: '5'
  }],
  newContentSaved: false,
  newContent: {
    title: '',
    md: '',
    tags: []
  },
  newTagDataSaved: false,
  newTagData: {
    name: '',
    color: ''
  }
};
// end temporary

(0, _hyperapp.app)({
  model: model,
  actions: actions,
  subscriptions: _subscriptions2.default,
  view: {
    '*': views.NotFound,
    '/': views.Login,
    '/dashboard/*': views.Dashboard,
    '/dashboard/tags/id=:id': views.Dashboard,
    '/dashboard/create': views.Dashboard,
    '/dashboard/posts/id=:id': views.Dashboard
  },
  plugins: [_hyperapp.Router],
  hooks: {
    onAction: function onAction(action) {
      return console.log(action);
    }
  },
  root: document.getElementById('root')
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map