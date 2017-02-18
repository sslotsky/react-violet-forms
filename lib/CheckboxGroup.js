"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CheckboxGroup;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CheckboxGroup(_ref) {
  var fields = _ref.fields,
      label = _ref.label,
      _ref$error = _ref.error,
      error = _ref$error === undefined ? undefined : _ref$error;

  var renderCheckbox = function renderCheckbox(field, i) {
    return _react2.default.createElement(
      "label",
      { key: i },
      _react2.default.createElement("input", _extends({ type: "checkbox" }, field.input, { checked: !!field.input.value })),
      field.label
    );
  };

  var notice = error && _react2.default.createElement(
    "p",
    { className: "error" },
    error
  );

  return _react2.default.createElement(
    "div",
    { className: "form-group checkbox" },
    fields.map(renderCheckbox),
    notice
  );
}