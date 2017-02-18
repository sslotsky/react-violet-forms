'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.FormField = FormField;
exports.default = formField;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _fieldTypes = require('./fieldTypes');

var fieldTypes = _interopRequireWildcard(_fieldTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function FormField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      children = _ref.children,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      type = _ref.type;

  var errors = touched && error && error.map(function (e, i) {
    return _react2.default.createElement(
      'p',
      { className: 'error', key: i },
      e
    );
  });

  var customClass = _defineProperty({}, fieldTypes.RADIO, 'radio')[type];

  var classes = (0, _classnames2.default)('form-group', customClass);
  var fieldLabel = label && _react2.default.createElement(
    'label',
    { htmlFor: id },
    label
  );

  return _react2.default.createElement(
    'div',
    { className: classes },
    fieldLabel,
    children,
    errors
  );
}

FormField.propTypes = {
  children: _react.PropTypes.element.isRequired,
  meta: _react.PropTypes.shape({
    touched: _react.PropTypes.bool,
    error: _react.PropTypes.arrayOf(_react.PropTypes.string)
  })
};

function formField() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$type = config.type,
      type = _config$type === undefined ? fieldTypes.INPUT : _config$type;

  return function (Component) {
    return function (props) {
      return _react2.default.createElement(
        FormField,
        _extends({}, props, { id: props.input.name, type: type }),
        _react2.default.createElement(Component, _extends({}, props, { id: props.input.name }))
      );
    };
  };
}