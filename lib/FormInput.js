'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.FormInput = FormInput;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormField = require('./FormField');

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormInput(_ref) {
  var id = _ref.id,
      label = _ref.label,
      input = _ref.input,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? 'text' : _ref$type;

  return _react2.default.createElement('input', _extends({}, input, { id: id, type: type }));
}

FormInput.propTypes = {
  label: _react.PropTypes.string.isRequired,
  input: _react.PropTypes.shape({
    name: _react.PropTypes.string.isRequired,
    value: _react.PropTypes.string.isRequired,
    onChange: _react.PropTypes.func.isRequired
  }).isRequired,
  type: _react.PropTypes.string
};

exports.default = (0, _FormField2.default)()(FormInput);