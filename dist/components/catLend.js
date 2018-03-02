'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CatLend = function (_React$Component) {
  _inherits(CatLend, _React$Component);

  function CatLend(props) {
    _classCallCheck(this, CatLend);

    var _this = _possibleConstructorReturn(this, (CatLend.__proto__ || Object.getPrototypeOf(CatLend)).call(this, props));

    _this.state = {
      name: '',
      owner: '',
      image: '',
      description: ''
    };

    //bind functions so they may be used as they are intended in app component
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(CatLend, [{
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;

      this.setState(_defineProperty({}, name, value));
    }

    // when button is clicked save state data to be sent to server

  }, {
    key: 'onSubmit',
    value: function onSubmit() {

      var kitty = {
        name: this.state.name,
        owner: this.state.owner,
        image: this.state.image,
        description: this.state.description
      };
      //trouble using ajax, not sure why, I have only played around with webpack and have no expereince without it sure has proven tough today except for earlier sprints.
      $.ajax({
        url: '/api/cats',
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

    //on change change state to field data


    //forms and form data

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'catLend' },
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
            'Owner\'s email ',
            React.createElement('br', null),
            React.createElement('input', {
              name: 'owner',
              type: 'string',
              value: this.state.owner,
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

  return CatLend;
}(React.Component);

window.CatLend = CatLend;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9jYXRMZW5kLmpzeCJdLCJuYW1lcyI6WyJDYXRMZW5kIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJvd25lciIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJoYW5kbGVJbnB1dENoYW5nZSIsImJpbmQiLCJvblN1Ym1pdCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImtpdHR5IiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsInN1Y2Nlc3MiLCJhbGVydCIsImVycm9yIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFHTUEsTzs7O0FBQ0osbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFESztBQUVYQyxhQUFPLEVBRkk7QUFHWEMsYUFBTSxFQUhLO0FBSVhDLG1CQUFZO0FBSkQsS0FBYjs7QUFPSjtBQUNFLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCQyxJQUF2QixPQUF6QjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjRCxJQUFkLE9BQWhCO0FBWG1CO0FBWWxCOzs7O3NDQUNpQkUsSyxFQUFNO0FBQ3RCLFVBQU1DLFNBQVNELE1BQU1DLE1BQXJCO0FBQ0EsVUFBTUMsUUFBUUQsT0FBT0MsS0FBckI7QUFDQSxVQUFNVCxPQUFPUSxPQUFPUixJQUFwQjs7QUFFQSxXQUFLVSxRQUFMLHFCQUNHVixJQURILEVBQ1NTLEtBRFQ7QUFJRDs7QUFFSDs7OzsrQkFDYzs7QUFFVixVQUFJRSxRQUFRO0FBQ1ZYLGNBQU0sS0FBS0QsS0FBTCxDQUFXQyxJQURQO0FBRVZDLGVBQU8sS0FBS0YsS0FBTCxDQUFXRSxLQUZSO0FBR1ZDLGVBQU8sS0FBS0gsS0FBTCxDQUFXRyxLQUhSO0FBSVZDLHFCQUFhLEtBQUtKLEtBQUwsQ0FBV0k7QUFKZCxPQUFaO0FBTUo7QUFDSVMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssV0FEQTtBQUVMQyxjQUFNLE1BRkQ7QUFHTEMsY0FBTUwsS0FIRDtBQUlMTSxpQkFBUyxpQkFBU0QsSUFBVCxFQUFlO0FBQ3BCRSxnQkFBTSwwQkFBTjtBQUNILFNBTkk7QUFPTEMsZUFBTyxlQUFTQyxHQUFULEVBQWE7QUFDbEJDLGtCQUFRQyxHQUFSLENBQVkscUJBQVosRUFBbUNGLEdBQW5DO0FBQ0Q7QUFUSSxPQUFQO0FBV0Q7O0FBSUg7OztBQU1BOzs7OzZCQUNZO0FBQUE7O0FBQ1IsYUFDQTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFHRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUNPLDJDQURQO0FBRUU7QUFDQSxvQkFBSyxNQURMO0FBRUEsb0JBQUssUUFGTDtBQUdBLHFCQUFPLEtBQUtyQixLQUFMLENBQVdDLElBSGxCO0FBSUEsd0JBQVUsS0FBS0ksaUJBSmY7QUFGRixXQURGO0FBU0U7QUFBQTtBQUFBO0FBQUE7QUFDZ0IsMkNBRGhCO0FBRUU7QUFDQSxvQkFBSyxPQURMO0FBRUEsb0JBQUssUUFGTDtBQUdBLHFCQUFPLEtBQUtMLEtBQUwsQ0FBV0UsS0FIbEI7QUFJQSx3QkFBVSxLQUFLRyxpQkFKZjtBQUZGLFdBVEY7QUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFDWSwyQ0FEWjtBQUVFO0FBQ0Esb0JBQUssT0FETDtBQUVBLG9CQUFLLFFBRkw7QUFHQSxxQkFBTyxLQUFLTCxLQUFMLENBQVdHLEtBSGxCO0FBSUEsd0JBQVUsS0FBS0UsaUJBSmY7QUFGRixXQWpCRjtBQXlCRTtBQUFBO0FBQUE7QUFBQTtBQUNtQiwyQ0FEbkI7QUFFRTtBQUNBLG9CQUFLLGFBREw7QUFFQSxxQkFBTyxLQUFLTCxLQUFMLENBQVdJLFdBRmxCO0FBR0Esd0JBQVUsS0FBS0MsaUJBSGY7QUFGRixXQXpCRjtBQWdDRSx5Q0FoQ0Y7QUFpQ0U7QUFBQTtBQUFBLGNBQVEsU0FBUztBQUFBLHVCQUFNLE9BQUtFLFFBQUwsRUFBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQTtBQWpDRjtBQUhGLE9BREE7QUEyQ0Q7Ozs7RUFyR21CaUIsTUFBTUMsUzs7QUF5RzVCQyxPQUFPNUIsT0FBUCxHQUFpQkEsT0FBakIiLCJmaWxlIjoiY2F0TGVuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmNsYXNzIENhdExlbmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBvd25lcjogJycsXG4gICAgICBpbWFnZTonJyxcbiAgICAgIGRlc2NyaXB0aW9uOicnLFxuICAgIH07XG5cbi8vYmluZCBmdW5jdGlvbnMgc28gdGhleSBtYXkgYmUgdXNlZCBhcyB0aGV5IGFyZSBpbnRlbmRlZCBpbiBhcHAgY29tcG9uZW50XG4gIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gIHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpe1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtuYW1lXTp2YWx1ZVxuICAgIH0pO1xuXG4gIH1cblxuLy8gd2hlbiBidXR0b24gaXMgY2xpY2tlZCBzYXZlIHN0YXRlIGRhdGEgdG8gYmUgc2VudCB0byBzZXJ2ZXJcbiAgIG9uU3VibWl0KCkge1xuXG4gICAgdmFyIGtpdHR5ID0ge1xuICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgb3duZXI6IHRoaXMuc3RhdGUub3duZXIsXG4gICAgICBpbWFnZTogdGhpcy5zdGF0ZS5pbWFnZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnN0YXRlLmRlc2NyaXB0aW9uLFxuICAgIH07XG4vL3Ryb3VibGUgdXNpbmcgYWpheCwgbm90IHN1cmUgd2h5LCBJIGhhdmUgb25seSBwbGF5ZWQgYXJvdW5kIHdpdGggd2VicGFjayBhbmQgaGF2ZSBubyBleHBlcmVpbmNlIHdpdGhvdXQgaXQgc3VyZSBoYXMgcHJvdmVuIHRvdWdoIHRvZGF5IGV4Y2VwdCBmb3IgZWFybGllciBzcHJpbnRzLlxuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvYXBpL2NhdHMnLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YToga2l0dHksXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgYWxlcnQoXCJ5b3VyIGNhdCBoYXMgYmVlbiBsaXN0ZWRcIik7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhamF4IGNhdCBzZW5kIGVycm9yJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cblxuLy9vbiBjaGFuZ2UgY2hhbmdlIHN0YXRlIHRvIGZpZWxkIGRhdGFcblxuXG5cblxuXG4vL2Zvcm1zIGFuZCBmb3JtIGRhdGFcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0TGVuZFwiPlxuICAgICAgPGgxPiBMaXN0IGEgY2F0IHRvIGxlbmQgPC9oMT5cblxuICAgICAgPGZvcm0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBOYW1lIDxiciAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICB0eXBlPVwic3RyaW5nXCJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgT3duZXIncyBlbWFpbCA8YnIgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPVwib3duZXJcIlxuICAgICAgICAgIHR5cGU9XCJzdHJpbmdcIlxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm93bmVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgSW1hZ2UgdXJsIDxiciAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW1hZ2V9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBBZG9wdGlvbiBtZXNzYWdlIDxiciAvPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMub25TdWJtaXQoKX0+IEFkZCBDYXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuXG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxud2luZG93LkNhdExlbmQgPSBDYXRMZW5kOyJdfQ==