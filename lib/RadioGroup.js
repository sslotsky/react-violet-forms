'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.RadioGroup = RadioGroup;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _FormField = require('./FormField');

var _FormField2 = _interopRequireDefault(_FormField);

var _fieldTypes = require('./fieldTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function RadioGroup(_ref) {
  var options = _ref.options,
      rest = _objectWithoutProperties(_ref, ['options']);

  var renderRadio = function renderRadio(option, i) {
    return _react2.default.createElement(_Radio2.default, _extends({}, rest, { label: option.text, val: option.value, key: i }));
  };

  return _react2.default.createElement(
    'section',
    { className: 'hard' },
    options.map(renderRadio)
  );
}

exports.default = (0, _FormField2.default)({ type: _fieldTypes.RADIO })(RadioGroup);