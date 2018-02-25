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

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      name: '',
      owner: '',
      image: '',
      description: '',
      cats: [],
      lendCatView: true
    };

    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('/api/displayCats').then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        return _this2.setState({
          cats: responseJson
        });
      });
    }
  }, {
    key: 'setBorrow',
    value: function setBorrow() {
      this.setState({
        lendCatView: false
      });
    }
  }, {
    key: 'setLend',
    value: function setLend() {
      this.setState({
        lendCatView: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div', {
          className: 'catEntry'
        },
        React.createElement(
          'button', {
            onClick: function onClick() {
              return _this3.setBorrow();
            }
          },
          ' Borrow a Cat'
        ),
        React.createElement(
          'button', {
            onClick: function onClick() {
              return _this3.setLend();
            }
          },
          ' Lend a Cat'
        ),
        React.createElement(
          'div', {
            className: 'box'
          },
          React.createElement(window.catList, null)
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwib3duZXIiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiY2F0cyIsImxlbmRDYXRWaWV3IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2V0U3RhdGUiLCJyZXNwb25zZUpzb24iLCJzZXRCb3Jyb3ciLCJzZXRMZW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFHTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLO0FBRVhDLGFBQU8sRUFGSTtBQUdYQyxhQUFNLEVBSEs7QUFJWEMsbUJBQVksRUFKRDtBQUtYQyxZQUFLLEVBTE07QUFNWEMsbUJBQVk7QUFORCxLQUFiOztBQUZpQjtBQVlsQjs7Ozt3Q0FHa0I7QUFBQTs7QUFFbkJDLFlBQU0sa0JBQU4sRUFDS0MsSUFETCxDQUNVO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsT0FEVixFQUVLRixJQUZMLENBRVU7QUFBQSxlQUFnQixPQUFLRyxRQUFMLENBQWMsRUFBQ04sTUFBS08sWUFBTixFQUFkLENBQWhCO0FBQUEsT0FGVjtBQUlDOzs7Z0NBRVU7QUFDVCxXQUFLRCxRQUFMLENBQWMsRUFBQ0wsYUFBWSxLQUFiLEVBQWQ7QUFDRDs7OzhCQUVRO0FBQ1AsV0FBS0ssUUFBTCxDQUFjLEVBQUNMLGFBQVksSUFBYixFQUFkO0FBQ0Q7Ozs2QkFJVTtBQUFBOztBQUNULGFBQ0E7QUFBQTtBQUFBLFVBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQVEsU0FBUztBQUFBLHFCQUFNLE9BQUtPLFNBQUwsRUFBTjtBQUFBLGFBQWpCO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQVEsU0FBUztBQUFBLHFCQUFNLE9BQUtDLE9BQUwsRUFBTjtBQUFBLGFBQWpCO0FBQUE7QUFBQSxTQUZGO0FBR0U7QUFBQTtBQUFBLFlBQUssV0FBVSxLQUFmO0FBQ0EsOEJBQUMsTUFBRCxDQUFRLE9BQVI7QUFEQTtBQUhGLE9BREE7QUFVRDs7OztFQTdDZUMsTUFBTUMsUzs7QUFrRHhCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgb3duZXI6ICcnLFxuICAgICAgaW1hZ2U6JycsXG4gICAgICBkZXNjcmlwdGlvbjonJyxcbiAgICAgIGNhdHM6W10sXG4gICAgICBsZW5kQ2F0Vmlldzp0cnVlXG4gICAgfTtcblxuXG4gIH1cblxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG5cbiAgZmV0Y2goJy9hcGkvZGlzcGxheUNhdHMnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHRoaXMuc2V0U3RhdGUoe2NhdHM6cmVzcG9uc2VKc29uIH0pKTtcblxuICB9XG5cbiAgc2V0Qm9ycm93KCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGVuZENhdFZpZXc6ZmFsc2V9KTtcbiAgfVxuXG4gIHNldExlbmQoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtsZW5kQ2F0Vmlldzp0cnVlfSk7XG4gIH1cblxuXG5cbiAgIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdEVudHJ5XCI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0Qm9ycm93KCl9PiBCb3Jyb3cgYSBDYXQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRMZW5kKCl9PiBMZW5kIGEgQ2F0PC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgPHdpbmRvdy5jYXRMaXN0IC8+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cbiJdfQ==