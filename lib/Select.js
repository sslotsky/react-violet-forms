'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Select = Select;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormField = require('./FormField');

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Select(_ref) {
  var id = _ref.id,
      label = _ref.label,
      input = _ref.input,
      options = _ref.options,
      prompt = _ref.prompt;

  var blank = prompt && _react2.default.createElement(
    'option',
    null,
    prompt
  );

  var renderOption = function renderOption(option, index) {
    return _react2.default.createElement(
      'option',
      { key: index, value: option.value },
      option.text
    );
  };

  return _react2.default.createElement(
    'select',
    _extends({}, input, { id: id }),
    blank,
    options.map(renderOption)
  );
}

exports.default = (0, _FormField2.default)()(Select);