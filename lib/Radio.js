"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Radio;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Radio(_ref) {
  var input = _ref.input,
      val = _ref.val,
      label = _ref.label;

  var value = input.value,
      onChange = input.onChange,
      rest = _objectWithoutProperties(input, ["value", "onChange"]);

  var checked = value === val;
  var update = function update(e) {
    return onChange(e.target.value);
  };

  return _react2.default.createElement(
    "label",
    null,
    _react2.default.createElement("input", _extends({
      type: "radio"
    }, rest, {
      value: val,
      checked: checked,
      onChange: update
    })),
    label
  );
}

Radio.propTypes = {
  label: _react.PropTypes.string.isRequired,
  input: _react.PropTypes.shape({
    value: _react.PropTypes.string,
    onChange: _react.PropTypes.func.isRequired
  }),
  val: _react.PropTypes.string.isRequired
};