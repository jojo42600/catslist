'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        return _this2.setState({ cats: responseJson });
      });
    }
  }, {
    key: 'setBorrow',
    value: function setBorrow() {
      this.setState({ lendCatView: false });
    }
  }, {
    key: 'setLend',
    value: function setLend() {
      this.setState({ lendCatView: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        { className: 'catEntry' },
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this3.setBorrow();
            } },
          ' Borrow a Cat'
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this3.setLend();
            } },
          ' Lend a Cat'
        ),
        React.createElement(window.catList, null)
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwib3duZXIiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiY2F0cyIsImxlbmRDYXRWaWV3IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2V0U3RhdGUiLCJyZXNwb25zZUpzb24iLCJzZXRCb3Jyb3ciLCJzZXRMZW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFHTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLO0FBRVhDLGFBQU8sRUFGSTtBQUdYQyxhQUFNLEVBSEs7QUFJWEMsbUJBQVksRUFKRDtBQUtYQyxZQUFLLEVBTE07QUFNWEMsbUJBQVk7QUFORCxLQUFiOztBQUZpQjtBQVlsQjs7Ozt3Q0FHa0I7QUFBQTs7QUFFbkJDLFlBQU0sa0JBQU4sRUFDS0MsSUFETCxDQUNVO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsT0FEVixFQUVLRixJQUZMLENBRVU7QUFBQSxlQUFnQixPQUFLRyxRQUFMLENBQWMsRUFBQ04sTUFBS08sWUFBTixFQUFkLENBQWhCO0FBQUEsT0FGVjtBQUlDOzs7Z0NBRVU7QUFDVCxXQUFLRCxRQUFMLENBQWMsRUFBQ0wsYUFBWSxLQUFiLEVBQWQ7QUFDRDs7OzhCQUVRO0FBQ1AsV0FBS0ssUUFBTCxDQUFjLEVBQUNMLGFBQVksSUFBYixFQUFkO0FBQ0Q7Ozs2QkFJVTtBQUFBOztBQUNULGFBQ0E7QUFBQTtBQUFBLFVBQUssV0FBVSxVQUFmO0FBQ0E7QUFBQTtBQUFBLFlBQVEsU0FBUztBQUFBLHFCQUFNLE9BQUtPLFNBQUwsRUFBTjtBQUFBLGFBQWpCO0FBQUE7QUFBQSxTQURBO0FBRUE7QUFBQTtBQUFBLFlBQVEsU0FBUztBQUFBLHFCQUFNLE9BQUtDLE9BQUwsRUFBTjtBQUFBLGFBQWpCO0FBQUE7QUFBQSxTQUZBO0FBSUEsNEJBQUMsTUFBRCxDQUFRLE9BQVI7QUFKQSxPQURBO0FBVUQ7Ozs7RUE3Q2VDLE1BQU1DLFM7O0FBa0R4QkMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIG93bmVyOiAnJyxcbiAgICAgIGltYWdlOicnLFxuICAgICAgZGVzY3JpcHRpb246JycsXG4gICAgICBjYXRzOltdLFxuICAgICAgbGVuZENhdFZpZXc6dHJ1ZVxuICAgIH07XG5cblxuICB9XG5cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuXG4gIGZldGNoKCcvYXBpL2Rpc3BsYXlDYXRzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiB0aGlzLnNldFN0YXRlKHtjYXRzOnJlc3BvbnNlSnNvbiB9KSk7XG5cbiAgfVxuXG4gIHNldEJvcnJvdygpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2xlbmRDYXRWaWV3OmZhbHNlfSk7XG4gIH1cblxuICBzZXRMZW5kKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGVuZENhdFZpZXc6dHJ1ZX0pO1xuICB9XG5cblxuXG4gICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXRFbnRyeVwiPlxuICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRCb3Jyb3coKX0+IEJvcnJvdyBhIENhdDwvYnV0dG9uPlxuICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRMZW5kKCl9PiBMZW5kIGEgQ2F0PC9idXR0b24+XG5cbiAgICA8d2luZG93LmNhdExpc3QgLz5cblxuXG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuIl19