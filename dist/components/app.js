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
      lendCatView: 'true'
    };

    return _this;
  }

  // to fetch data to populate cats upon load


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

    // toggles to switch pages based upon a true or false state

  }, {
    key: 'setBorrow',
    value: function setBorrow() {
      this.setState({ lendCatView: 'false' });
    }
  }, {
    key: 'setLend',
    value: function setLend() {
      this.setState({ lendCatView: 'true' });
    }

    //could not get toggle to work, if statements and are tricky

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
        React.createElement(
          'div',
          { className: 'box' },
          this.state.lendCatView === 'true' && React.createElement(window.catList, null),
          this.state.lendCatView === 'false' && React.createElement(window.borrowCats, { cats: this.state.cats })
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwib3duZXIiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiY2F0cyIsImxlbmRDYXRWaWV3IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2V0U3RhdGUiLCJyZXNwb25zZUpzb24iLCJzZXRCb3Jyb3ciLCJzZXRMZW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFHTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLO0FBRVhDLGFBQU8sRUFGSTtBQUdYQyxhQUFNLEVBSEs7QUFJWEMsbUJBQVksRUFKRDtBQUtYQyxZQUFLLEVBTE07QUFNWEMsbUJBQVk7QUFORCxLQUFiOztBQUZpQjtBQVlsQjs7QUFFSDs7Ozs7d0NBQ3FCO0FBQUE7O0FBRW5CQyxZQUFNLGtCQUFOLEVBQ0tDLElBREwsQ0FDVTtBQUFBLGVBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLE9BRFYsRUFFS0YsSUFGTCxDQUVVO0FBQUEsZUFBZ0IsT0FBS0csUUFBTCxDQUFjLEVBQUNOLE1BQUtPLFlBQU4sRUFBZCxDQUFoQjtBQUFBLE9BRlY7QUFJQzs7QUFFSDs7OztnQ0FDYTtBQUNULFdBQUtELFFBQUwsQ0FBYyxFQUFDTCxhQUFZLE9BQWIsRUFBZDtBQUNEOzs7OEJBRVE7QUFDUCxXQUFLSyxRQUFMLENBQWMsRUFBQ0wsYUFBWSxNQUFiLEVBQWQ7QUFDRDs7QUFHSDs7Ozs2QkFDYTtBQUFBOztBQUVULGFBQ0E7QUFBQTtBQUFBLFVBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQVEsU0FBUztBQUFBLHFCQUFNLE9BQUtPLFNBQUwsRUFBTjtBQUFBLGFBQWpCO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQVEsU0FBUztBQUFBLHFCQUFNLE9BQUtDLE9BQUwsRUFBTjtBQUFBLGFBQWpCO0FBQUE7QUFBQSxTQUZGO0FBR0U7QUFBQTtBQUFBLFlBQUssV0FBVSxLQUFmO0FBQ0UsZUFBS2QsS0FBTCxDQUFXTSxXQUFYLEtBQTJCLE1BQTNCLElBQXFDLG9CQUFDLE1BQUQsQ0FBUSxPQUFSLE9BRHZDO0FBRUUsZUFBS04sS0FBTCxDQUFXTSxXQUFYLEtBQTJCLE9BQTNCLElBQXNDLG9CQUFDLE1BQUQsQ0FBUSxVQUFSLElBQW1CLE1BQU0sS0FBS04sS0FBTCxDQUFXSyxJQUFwQztBQUZ4QztBQUhGLE9BREE7QUFZRDs7OztFQWpEZVUsTUFBTUMsUzs7QUFzRHhCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgb3duZXI6ICcnLFxuICAgICAgaW1hZ2U6JycsXG4gICAgICBkZXNjcmlwdGlvbjonJyxcbiAgICAgIGNhdHM6W10sXG4gICAgICBsZW5kQ2F0VmlldzondHJ1ZSdcbiAgICB9O1xuXG5cbiAgfVxuXG4vLyB0byBmZXRjaCBkYXRhIHRvIHBvcHVsYXRlIGNhdHMgdXBvbiBsb2FkXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG5cbiAgZmV0Y2goJy9hcGkvZGlzcGxheUNhdHMnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHRoaXMuc2V0U3RhdGUoe2NhdHM6cmVzcG9uc2VKc29uIH0pKTtcblxuICB9XG5cbi8vIHRvZ2dsZXMgdG8gc3dpdGNoIHBhZ2VzIGJhc2VkIHVwb24gYSB0cnVlIG9yIGZhbHNlIHN0YXRlXG4gIHNldEJvcnJvdygpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2xlbmRDYXRWaWV3OidmYWxzZSd9KTtcbiAgfVxuXG4gIHNldExlbmQoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtsZW5kQ2F0VmlldzondHJ1ZSd9KTtcbiAgfVxuXG5cbi8vY291bGQgbm90IGdldCB0b2dnbGUgdG8gd29yaywgaWYgc3RhdGVtZW50cyBhbmQgYXJlIHRyaWNreVxuICAgcmVuZGVyICgpIHtcblxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXRFbnRyeVwiPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldEJvcnJvdygpfT4gQm9ycm93IGEgQ2F0PC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0TGVuZCgpfT4gTGVuZCBhIENhdDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgIHsgdGhpcy5zdGF0ZS5sZW5kQ2F0VmlldyA9PT0gJ3RydWUnICYmIDx3aW5kb3cuY2F0TGlzdCAvPiB9XG4gICAgICB7IHRoaXMuc3RhdGUubGVuZENhdFZpZXcgPT09ICdmYWxzZScgJiYgPHdpbmRvdy5ib3Jyb3dDYXRzIGNhdHM9e3RoaXMuc3RhdGUuY2F0c30vPn1cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG4iXX0=