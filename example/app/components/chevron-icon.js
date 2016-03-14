'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRotation = function getRotation(direction) {
  switch (direction) {
    case 'top':
      return { rotate: '270deg' };
    case 'right':
      return { rotate: '0deg' };
    case 'bottom':
      return { rotate: '90deg' };
    case 'left':
      return { rotate: '180deg' };
  }
};

var ChevronIcon = function ChevronIcon(_ref) {
  var direction = _ref.direction;
  var style = _ref.style;
  return _reactNative2.default.createElement(
    _reactNative.View,
    { style: { transform: [getRotation(direction)] } },
    _reactNative2.default.createElement(_reactNative.Image, {
      style: style,
      source: require('../img/icon-chevron.png')
    })
  );
};

ChevronIcon.defaultProps = {
  direction: 'right'
};

ChevronIcon.propTypes = {
  direction: _reactNative2.default.PropTypes.string,
  style: _reactNative2.default.PropTypes.object
};

exports.default = ChevronIcon;