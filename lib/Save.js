'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Save;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Save(_ref) {
  var valid = _ref.valid,
      dirty = _ref.dirty,
      saving = _ref.saving,
      _ref$text = _ref.text,
      text = _ref$text === undefined ? 'Save' : _ref$text,
      _ref$icon = _ref.icon,
      icon = _ref$icon === undefined ? '✓' : _ref$icon,
      _ref$progressIcon = _ref.progressIcon,
      progressIcon = _ref$progressIcon === undefined ? '↻' : _ref$progressIcon;

  var disabled = !valid || !dirty || saving;
  var classes = (0, _classnames2.default)({ spinner: saving });
  var displayIcon = saving ? progressIcon : icon;

  return _react2.default.createElement(
    'button',
    { disabled: disabled, type: 'submit' },
    _react2.default.createElement(
      'i',
      { className: classes },
      displayIcon
    ),
    text
  );
}