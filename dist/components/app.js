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

  // to fetch data to populate cats upon load


  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('/api/cats').then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        return _this2.setState({ cats: responseJson });
      });
    }

    // toggles to switch pages based upon a true or false state

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
          this.state.lendCatView && React.createElement(CatLend, null),
          !this.state.lendCatView && React.createElement(BorrowCats, { cats: this.state.cats })
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwib3duZXIiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiY2F0cyIsImxlbmRDYXRWaWV3IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2V0U3RhdGUiLCJyZXNwb25zZUpzb24iLCJzZXRCb3Jyb3ciLCJzZXRMZW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLO0FBRVhDLGFBQU8sRUFGSTtBQUdYQyxhQUFNLEVBSEs7QUFJWEMsbUJBQVksRUFKRDtBQUtYQyxZQUFLLEVBTE07QUFNWEMsbUJBQWE7QUFORixLQUFiO0FBRmlCO0FBVWxCOztBQUVIOzs7Ozt3Q0FDcUI7QUFBQTs7QUFDakJDLFlBQU0sV0FBTixFQUNHQyxJQURILENBQ1E7QUFBQSxlQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxPQURSLEVBRUdGLElBRkgsQ0FFUTtBQUFBLGVBQWdCLE9BQUtHLFFBQUwsQ0FBYyxFQUFDTixNQUFLTyxZQUFOLEVBQWQsQ0FBaEI7QUFBQSxPQUZSO0FBR0Q7O0FBRUg7Ozs7Z0NBQ2E7QUFDVCxXQUFLRCxRQUFMLENBQWMsRUFBQ0wsYUFBWSxLQUFiLEVBQWQ7QUFDRDs7OzhCQUVRO0FBQ1AsV0FBS0ssUUFBTCxDQUFjLEVBQUNMLGFBQVksSUFBYixFQUFkO0FBQ0Q7O0FBRUg7Ozs7NkJBQ1k7QUFBQTs7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFRLFNBQVM7QUFBQSxxQkFBTSxPQUFLTyxTQUFMLEVBQU47QUFBQSxhQUFqQjtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFRLFNBQVM7QUFBQSxxQkFBTSxPQUFLQyxPQUFMLEVBQU47QUFBQSxhQUFqQjtBQUFBO0FBQUEsU0FGRjtBQUdFO0FBQUE7QUFBQSxZQUFLLFdBQVUsS0FBZjtBQUNJLGVBQUtkLEtBQUwsQ0FBV00sV0FBWCxJQUEwQixvQkFBQyxPQUFELE9BRDlCO0FBRUksV0FBQyxLQUFLTixLQUFMLENBQVdNLFdBQVosSUFBMkIsb0JBQUMsVUFBRCxJQUFZLE1BQU0sS0FBS04sS0FBTCxDQUFXSyxJQUE3QjtBQUYvQjtBQUhGLE9BREY7QUFVRDs7OztFQXpDZVUsTUFBTUMsUzs7QUE0Q3hCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgb3duZXI6ICcnLFxuICAgICAgaW1hZ2U6JycsXG4gICAgICBkZXNjcmlwdGlvbjonJyxcbiAgICAgIGNhdHM6W10sXG4gICAgICBsZW5kQ2F0VmlldzogdHJ1ZVxuICAgIH07XG4gIH1cblxuLy8gdG8gZmV0Y2ggZGF0YSB0byBwb3B1bGF0ZSBjYXRzIHVwb24gbG9hZFxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGZldGNoKCcvYXBpL2NhdHMnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHRoaXMuc2V0U3RhdGUoe2NhdHM6cmVzcG9uc2VKc29uIH0pKTtcbiAgfVxuXG4vLyB0b2dnbGVzIHRvIHN3aXRjaCBwYWdlcyBiYXNlZCB1cG9uIGEgdHJ1ZSBvciBmYWxzZSBzdGF0ZVxuICBzZXRCb3Jyb3coKXtcbiAgICB0aGlzLnNldFN0YXRlKHtsZW5kQ2F0VmlldzpmYWxzZX0pO1xuICB9XG5cbiAgc2V0TGVuZCgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2xlbmRDYXRWaWV3OnRydWV9KTtcbiAgfVxuXG4vL2NvdWxkIG5vdCBnZXQgdG9nZ2xlIHRvIHdvcmssIGlmIHN0YXRlbWVudHMgYW5kIGFyZSB0cmlja3lcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRFbnRyeVwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0Qm9ycm93KCl9PiBCb3Jyb3cgYSBDYXQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldExlbmQoKX0+IExlbmQgYSBDYXQ8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICB7IHRoaXMuc3RhdGUubGVuZENhdFZpZXcgJiYgPENhdExlbmQgLz4gfVxuICAgICAgICAgIHsgIXRoaXMuc3RhdGUubGVuZENhdFZpZXcgJiYgPEJvcnJvd0NhdHMgY2F0cz17dGhpcy5zdGF0ZS5jYXRzfS8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuIl19