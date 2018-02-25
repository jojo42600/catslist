'use strict';

var _createClass = function () {
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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
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
}

var catEntry = function (_React$Component) {
  _inherits(catEntry, _React$Component);

  function catEntry(props) {
    _classCallCheck(this, catEntry);

    var _this = _possibleConstructorReturn(this, (catEntry.__proto__ || Object.getPrototypeOf(catEntry)).call(this, props));

    _this.state = {
      name: '',
      email: '',
      image: '',
      description: ''
    };

    _this.handleInputChange = _this.handleInputChange.bind(_this);

    return _this;
  }

  _createClass(catEntry, [{
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      var target = event.target;
      var value = event.value;
      var name = event.name;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div', {
          className: 'catEntry'
        },
        React.createElement(
          'h1',
          null,
          ' List a cat to lend '
        ),
        React.createElement(
          'form',
          null,
          React.createElement(
            'label',
            null,
            'Name ',
            React.createElement('br', null),
            React.createElement('input', {
              name: 'name',
              type: 'string',
              value: "this.state.name",
              onChange: this.handleInputChange
            })
          ),
          React.createElement(
            'label',
            null,
            'Owner\'s Email ',
            React.createElement('br', null),
            React.createElement('input', {
              name: 'email',
              type: 'string',
              value: "this.state.email",
              onChange: this.handleInputChange
            })
          ),
          React.createElement(
            'label',
            null,
            'Image url ',
            React.createElement('br', null),
            React.createElement('input', {
              name: 'image',
              type: 'string',
              value: "this.state.image",
              onChange: this.handleInputChange
            })
          ),
          React.createElement(
            'label',
            null,
            'Adoption message ',
            React.createElement('br', null),
            React.createElement('textarea', {
              value: "this.state.description",
              onChange: this.handleInputChange
            })
          ),
          React.createElement(
            'button', {
              onClick: function onClick() {
                return _this2.onSubmit();
              }
            },
            ' Add Cat'
          )
        )
      );
    }
  }]);

  return catEntry;
}(React.Component);

window.catEntry = catEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9jYXRFbnRyeS5qc3giXSwibmFtZXMiOlsiY2F0RW50cnkiLCJwcm9wcyIsInN0YXRlIiwibmFtZSIsImVtYWlsIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsIm9uU3VibWl0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUNNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLO0FBRVhDLGFBQU8sRUFGSTtBQUdYQyxhQUFNLEVBSEs7QUFJWEMsbUJBQVk7QUFKRCxLQUFiOztBQU9GLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCQyxJQUF2QixPQUF6Qjs7QUFUbUI7QUFXbEI7Ozs7c0NBRWlCQyxLLEVBQU07QUFDdEIsVUFBTUMsU0FBU0QsTUFBTUMsTUFBckI7QUFDQSxVQUFNQyxRQUFRRixNQUFNRSxLQUFwQjtBQUNBLFVBQU1SLE9BQU9NLE1BQU1OLElBQW5COztBQUVGLFdBQUtTLFFBQUwscUJBQ0dULElBREgsRUFDU1EsS0FEVDtBQUlDOzs7NkJBRVU7QUFBQTs7QUFDVCxhQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUdFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQ08sMkNBRFA7QUFFRTtBQUNBLG9CQUFLLE1BREw7QUFFQSxvQkFBSyxRQUZMO0FBR0EscUJBQU8saUJBSFA7QUFJQSx3QkFBVSxLQUFLSixpQkFKZjtBQUZGLFdBREY7QUFTRTtBQUFBO0FBQUE7QUFBQTtBQUNnQiwyQ0FEaEI7QUFFRTtBQUNBLG9CQUFLLE9BREw7QUFFQSxvQkFBSyxRQUZMO0FBR0EscUJBQU8sa0JBSFA7QUFJQSx3QkFBVSxLQUFLQSxpQkFKZjtBQUZGLFdBVEY7QUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFDWSwyQ0FEWjtBQUVFO0FBQ0Esb0JBQUssT0FETDtBQUVBLG9CQUFLLFFBRkw7QUFHQSxxQkFBTyxrQkFIUDtBQUlBLHdCQUFVLEtBQUtBLGlCQUpmO0FBRkYsV0FqQkY7QUF5QkU7QUFBQTtBQUFBO0FBQUE7QUFDbUIsMkNBRG5CO0FBRUU7QUFDQSxxQkFBTyx3QkFEUDtBQUVBLHdCQUFVLEtBQUtBLGlCQUZmO0FBRkYsV0F6QkY7QUErQkU7QUFBQTtBQUFBLGNBQVEsU0FBUztBQUFBLHVCQUFNLE9BQUtNLFFBQUwsRUFBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQTtBQS9CRjtBQUhGLE9BREE7QUF5Q0Q7Ozs7RUFuRW9CQyxNQUFNQyxTOztBQXVFN0JDLE9BQU9oQixRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJjYXRFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgY2F0RW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBpbWFnZTonJyxcbiAgICAgIGRlc2NyaXB0aW9uOicnXG4gICAgfTtcblxuICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShldmVudCl7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWU7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50Lm5hbWU7XG5cbiAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgW25hbWVdOnZhbHVlXG4gIH0pO1xuXG4gIH1cblxuICAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0RW50cnlcIj5cbiAgICAgIDxoMT4gTGlzdCBhIGNhdCB0byBsZW5kIDwvaDE+XG5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgTmFtZSA8YnIgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgdmFsdWU9e1widGhpcy5zdGF0ZS5uYW1lXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBPd25lcidzIEVtYWlsIDxiciAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgdmFsdWU9e1widGhpcy5zdGF0ZS5lbWFpbFwifVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgSW1hZ2UgdXJsIDxiciAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgdmFsdWU9e1widGhpcy5zdGF0ZS5pbWFnZVwifVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgQWRvcHRpb24gbWVzc2FnZSA8YnIgLz5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICB2YWx1ZT17XCJ0aGlzLnN0YXRlLmRlc2NyaXB0aW9uXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5vblN1Ym1pdCgpfT4gQWRkIENhdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuXG5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG53aW5kb3cuY2F0RW50cnkgPSBjYXRFbnRyeTsiXX0=