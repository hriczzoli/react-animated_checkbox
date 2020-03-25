'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* add css styles here (optional) */\ninput[type=checkbox] {\n  display: none;\n  pointer-events: none; }\n  input[type=checkbox]:checked + label .styles_checkCircle__1h3Ed {\n    animation: styles_changeShape__IhQAW 1.5s; }\n  input[type=checkbox]:checked + label .styles_checkCircleFill__28gcf {\n    background-color: #619c7a;\n    transition-delay: 1600ms;\n    transition-property: background-color;\n    transition-duration: .5s;\n    transition-timing-function: ease-in-out;\n    animation: styles_changeShapeFill__1EkYe 1.5s; }\n    input[type=checkbox]:checked + label .styles_checkCircleFill__28gcf svg polyline {\n      stroke: white;\n      fill: #619c7a;\n      stroke-dashoffset: 0;\n      transition-delay: 1600ms;\n      transition-property: all;\n      transition-duration: .5s;\n      transition-timing-function: ease-in-out; }\n  input[type=checkbox]:checked + label svg polyline {\n    stroke-dashoffset: 0;\n    transition-delay: 1600ms;\n    transition-property: stroke-dashoffset;\n    transition-duration: .5s;\n    transition-timing-function: ease-in-out; }\n\nlabel {\n  color: #619c7a;\n  display: flex;\n  align-items: center;\n  position: relative;\n  font-family: \"Inter\", sans-serif;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  font-size: .8em;\n  display: flex;\n  flex-direction: column; }\n  label .styles_checkCircle__1h3Ed {\n    width: 1rem;\n    height: 1rem;\n    border: 1px solid #619c7a;\n    border-radius: 10px; }\n  label .styles_checkCircleFill__28gcf {\n    width: 1rem;\n    height: 1rem;\n    border: 1px solid #619c7a;\n    border-radius: 10px; }\n    label .styles_checkCircleFill__28gcf svg {\n      width: 2em;\n      position: absolute;\n      top: 12%;\n      left: 9%; }\n      label .styles_checkCircleFill__28gcf svg polyline {\n        stroke: white;\n        fill: white;\n        stroke-width: 6;\n        stroke-dasharray: 365;\n        stroke-dashoffset: 365;\n        transition: stroke-dashoffset .3s ease-out; }\n  label svg {\n    width: 2em;\n    position: absolute;\n    top: 12%;\n    left: 9%; }\n    label svg polyline {\n      stroke: #619c7a;\n      fill: white;\n      stroke-width: 6;\n      stroke-dasharray: 365;\n      stroke-dashoffset: 365;\n      transition: stroke-dashoffset .3s ease-out; }\n  label span {\n    font-size: 0.6em; }\n\n@keyframes styles_changeShape__IhQAW {\n  0% {\n    border-radius: 10px;\n    border-color: #619c7a; }\n  25% {\n    border-radius: 0px;\n    border-color: #788498;\n    transform: rotate(90deg); }\n  50% {\n    border-radius: 10px;\n    border-color: #619c7a; }\n  75% {\n    border-radius: 0px;\n    border-color: #788498;\n    transform: rotate(-90deg); }\n  100% {\n    border-radius: 10px;\n    border-color: #619c7a; } }\n\n@keyframes styles_changeShapeFill__1EkYe {\n  0% {\n    border-radius: 10px;\n    border-color: #619c7a; }\n  25% {\n    border-radius: 0px;\n    border-color: #788498;\n    transform: rotate(90deg); }\n  50% {\n    border-radius: 10px;\n    border-color: #619c7a; }\n  75% {\n    border-radius: 0px;\n    border-color: #788498;\n    transform: rotate(-90deg); }\n  100% {\n    border-radius: 10px;\n    border-color: #619c7a; } }\n";
var styles = { "checkCircle": "styles_checkCircle__1h3Ed", "changeShape": "styles_changeShape__IhQAW", "checkCircleFill": "styles_checkCircleFill__28gcf", "changeShapeFill": "styles_changeShapeFill__1EkYe" };
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var AnimatedCheckbox = function (_Component) {
  inherits(AnimatedCheckbox, _Component);

  function AnimatedCheckbox() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, AnimatedCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = AnimatedCheckbox.__proto__ || Object.getPrototypeOf(AnimatedCheckbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isChecked: false
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(AnimatedCheckbox, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          name = _props.name,
          value = _props.value,
          onChange = _props.onChange,
          disabled = _props.disabled,
          fill = _props.fill;


      return React__default.createElement(
        'div',
        null,
        React__default.createElement('input', {
          id: id,
          type: 'checkbox',
          className: styles.hiddenCheckbox,
          value: value,
          disabled: disabled,
          onChange: function onChange() {
            _this2.setState({ isChecked: !_this2.state.isChecked });
          }
        }),
        React__default.createElement(
          'label',
          { htmlFor: id },
          React__default.createElement(
            'div',
            { className: fill ? styles.checkCircleFill : styles.checkCircle },
            React__default.createElement(
              'svg',
              {
                id: 'Layer_1',
                viewBox: '0 0 104 104',
                enableBackground: 'new 0 0 104 104'
              },
              React__default.createElement('polyline', {
                id: 'Line-6',
                stroke: '#979797',
                points: '8.5 17.1666667 43.3333333 4.5 8.5 28.0238095 43.3333333 10.8333333 8.5 35.2619048 52.5 17.1666667 19.5 35.2619048 52.5 23.047619 14 42.5 52.5 29.1547619'
              })
            )
          ),
          React__default.createElement(
            'span',
            null,
            name
          )
        )
      );
    }
  }]);
  return AnimatedCheckbox;
}(React.Component);

AnimatedCheckbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.node,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  fill: PropTypes.bool
};
AnimatedCheckbox.defaultProps = {
  id: 'test',
  name: 'NPM',
  value: 1,
  disabled: false,
  fill: false
};

module.exports = AnimatedCheckbox;
//# sourceMappingURL=index.js.map
