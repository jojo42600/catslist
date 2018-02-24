'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      email: '',
      image: '',
      description: '',
      cats: [],
      lendCatView: true
    };

    _this.handleInputChange = _this.handleInputChange.bind(_this);

    return _this;
  }

  _createClass(App, [{
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
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      var kitty = {
        name: this.state.name,
        email: this.state.email,
        image: this.state.image,
        description: this.state.description
      };

      $.ajax({
        url: '/api/newCatListing',
        type: 'POST',
        data: kitty,
        success: function success(data) {
          alert("your cat has been listed");
        },
        error: function error(err) {
          console.log('ajax cat send error', err);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'catEntry' },
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.setBorrow();
            } },
          ' Borrow a Cat'
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.setLend();
            } },
          ' Lend a Cat'
        ),
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
              value: this.state.name,
              onChange: this.handleInputChange })
          ),
          React.createElement(
            'label',
            null,
            'Owner\'s Email ',
            React.createElement('br', null),
            React.createElement('input', {
              name: 'email',
              type: 'string',
              value: this.state.email,
              onChange: this.handleInputChange })
          ),
          React.createElement(
            'label',
            null,
            'Image url ',
            React.createElement('br', null),
            React.createElement('input', {
              name: 'image',
              type: 'string',
              value: this.state.image,
              onChange: this.handleInputChange })
          ),
          React.createElement(
            'label',
            null,
            'Adoption message ',
            React.createElement('br', null),
            React.createElement('textarea', {
              name: 'description',
              value: this.state.description,
              onChange: this.handleInputChange })
          ),
          React.createElement('br', null),
          React.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.onSubmit();
              } },
            ' Add Cat'
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiY2F0cyIsImxlbmRDYXRWaWV3IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJiaW5kIiwic2V0U3RhdGUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwia2l0dHkiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwic3VjY2VzcyIsImFsZXJ0IiwiZXJyb3IiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic2V0Qm9ycm93Iiwic2V0TGVuZCIsIm9uU3VibWl0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUdNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBREs7QUFFWEMsYUFBTyxFQUZJO0FBR1hDLGFBQU0sRUFISztBQUlYQyxtQkFBWSxFQUpEO0FBS1hDLFlBQUssRUFMTTtBQU1YQyxtQkFBWTtBQU5ELEtBQWI7O0FBU0YsVUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLE9BQXpCOztBQVhtQjtBQWFsQjs7OztnQ0FHVTtBQUNULFdBQUtDLFFBQUwsQ0FBYyxFQUFDSCxhQUFZLEtBQWIsRUFBZDtBQUNEOzs7OEJBRVE7QUFDUCxXQUFLRyxRQUFMLENBQWMsRUFBQ0gsYUFBWSxJQUFiLEVBQWQ7QUFDRDs7O3NDQUVpQkksSyxFQUFNO0FBQ3RCLFVBQU1DLFNBQVNELE1BQU1DLE1BQXJCO0FBQ0EsVUFBTUMsUUFBUUQsT0FBT0MsS0FBckI7QUFDQSxVQUFNWCxPQUFPVSxPQUFPVixJQUFwQjs7QUFFRixXQUFLUSxRQUFMLHFCQUNHUixJQURILEVBQ1NXLEtBRFQ7QUFJQzs7OytCQUdTO0FBQ1IsVUFBSUMsUUFBUTtBQUNWWixjQUFNLEtBQUtELEtBQUwsQ0FBV0MsSUFEUDtBQUVWQyxlQUFPLEtBQUtGLEtBQUwsQ0FBV0UsS0FGUjtBQUdWQyxlQUFPLEtBQUtILEtBQUwsQ0FBV0csS0FIUjtBQUlWQyxxQkFBYSxLQUFLSixLQUFMLENBQVdJO0FBSmQsT0FBWjs7QUFRQVUsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssb0JBREE7QUFFTEMsY0FBTSxNQUZEO0FBR0xDLGNBQU1MLEtBSEQ7QUFJTE0saUJBQVMsaUJBQVNELElBQVQsRUFBZTtBQUNwQkUsZ0JBQU0sMEJBQU47QUFDSCxTQU5JO0FBT0xDLGVBQU8sZUFBU0MsR0FBVCxFQUFhO0FBQ2xCQyxrQkFBUUMsR0FBUixDQUFZLHFCQUFaLEVBQW1DRixHQUFuQztBQUNEO0FBVEksT0FBUDtBQVdEOzs7NkJBR1U7QUFBQTs7QUFDVCxhQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNBO0FBQUE7QUFBQSxZQUFRLFNBQVM7QUFBQSxxQkFBTSxPQUFLRyxTQUFMLEVBQU47QUFBQSxhQUFqQjtBQUFBO0FBQUEsU0FEQTtBQUVBO0FBQUE7QUFBQSxZQUFRLFNBQVM7QUFBQSxxQkFBTSxPQUFLQyxPQUFMLEVBQU47QUFBQSxhQUFqQjtBQUFBO0FBQUEsU0FGQTtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FKRjtBQU1FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQ08sMkNBRFA7QUFFRTtBQUNBLG9CQUFLLE1BREw7QUFFQSxvQkFBSyxRQUZMO0FBR0EscUJBQU8sS0FBSzFCLEtBQUwsQ0FBV0MsSUFIbEI7QUFJQSx3QkFBVSxLQUFLTSxpQkFKZjtBQUZGLFdBREY7QUFTRTtBQUFBO0FBQUE7QUFBQTtBQUNnQiwyQ0FEaEI7QUFFRTtBQUNBLG9CQUFLLE9BREw7QUFFQSxvQkFBSyxRQUZMO0FBR0EscUJBQU8sS0FBS1AsS0FBTCxDQUFXRSxLQUhsQjtBQUlBLHdCQUFVLEtBQUtLLGlCQUpmO0FBRkYsV0FURjtBQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUNZLDJDQURaO0FBRUU7QUFDQSxvQkFBSyxPQURMO0FBRUEsb0JBQUssUUFGTDtBQUdBLHFCQUFPLEtBQUtQLEtBQUwsQ0FBV0csS0FIbEI7QUFJQSx3QkFBVSxLQUFLSSxpQkFKZjtBQUZGLFdBakJGO0FBeUJFO0FBQUE7QUFBQTtBQUFBO0FBQ21CLDJDQURuQjtBQUVFO0FBQ0Esb0JBQUssYUFETDtBQUVBLHFCQUFPLEtBQUtQLEtBQUwsQ0FBV0ksV0FGbEI7QUFHQSx3QkFBVSxLQUFLRyxpQkFIZjtBQUZGLFdBekJGO0FBZ0NFLHlDQWhDRjtBQWlDRTtBQUFBO0FBQUEsY0FBUSxTQUFTO0FBQUEsdUJBQU0sT0FBS29CLFFBQUwsRUFBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQTtBQWpDRjtBQU5GLE9BREE7QUE4Q0Q7Ozs7RUEzR2VDLE1BQU1DLFM7O0FBZ0h4QkMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIGltYWdlOicnLFxuICAgICAgZGVzY3JpcHRpb246JycsXG4gICAgICBjYXRzOltdLFxuICAgICAgbGVuZENhdFZpZXc6dHJ1ZVxuICAgIH07XG5cbiAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcblxuICB9XG5cblxuICBzZXRCb3Jyb3coKXtcbiAgICB0aGlzLnNldFN0YXRlKHtsZW5kQ2F0VmlldzpmYWxzZX0pO1xuICB9XG5cbiAgc2V0TGVuZCgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2xlbmRDYXRWaWV3OnRydWV9KTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KXtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xuXG4gIHRoaXMuc2V0U3RhdGUoe1xuICAgIFtuYW1lXTp2YWx1ZVxuICB9KTtcblxuICB9XG5cblxuICBvblN1Ym1pdCgpe1xuICAgIHZhciBraXR0eSA9IHtcbiAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgaW1hZ2U6IHRoaXMuc3RhdGUuaW1hZ2UsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5zdGF0ZS5kZXNjcmlwdGlvblxuICAgIH07XG5cblxuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvYXBpL25ld0NhdExpc3RpbmcnLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YToga2l0dHksXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgYWxlcnQoXCJ5b3VyIGNhdCBoYXMgYmVlbiBsaXN0ZWRcIik7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhamF4IGNhdCBzZW5kIGVycm9yJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdEVudHJ5XCI+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldEJvcnJvdygpfT4gQm9ycm93IGEgQ2F0PC9idXR0b24+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldExlbmQoKX0+IExlbmQgYSBDYXQ8L2J1dHRvbj5cblxuICAgICAgPGgxPiBMaXN0IGEgY2F0IHRvIGxlbmQgPC9oMT5cblxuICAgICAgPGZvcm0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBOYW1lIDxiciAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICB0eXBlPVwic3RyaW5nXCJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgT3duZXIncyBFbWFpbCA8YnIgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIHR5cGU9XCJzdHJpbmdcIlxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgSW1hZ2UgdXJsIDxiciAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW1hZ2V9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBBZG9wdGlvbiBtZXNzYWdlIDxiciAvPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMub25TdWJtaXQoKX0+IEFkZCBDYXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuXG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuIl19