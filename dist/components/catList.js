'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var catList = function (_React$Component) {
  _inherits(catList, _React$Component);

  function catList(props) {
    _classCallCheck(this, catList);

    var _this = _possibleConstructorReturn(this, (catList.__proto__ || Object.getPrototypeOf(catList)).call(this, props));

    _this.state = {
      name: '',
      owner: '',
      image: '',
      description: '',
      lendCatView: true
    };

    _this.handleInputChange = _this.handleInputChange.bind(_this);

    return _this;
  }

  _createClass(catList, [{
    key: 'onSubmit',
    value: function onSubmit() {
      var kitty = {
        name: this.state.name,
        owner: this.state.owner,
        image: this.state.image,
        description: this.state.description
      };

      $.ajax({
        url: '/api/newCatListing',
        type: 'POST',
        data: kitty,
        success: function success(data) {
          alert("your cat has been listed");
          console.log(data);
        },
        error: function error(err) {
          console.log('ajax cat send error', err);
        }
      });
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
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'catList' },
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
            'Owner\'s owner ',
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

  return catList;
}(React.Component);

window.catList = catList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9jYXRMaXN0LmpzeCJdLCJuYW1lcyI6WyJjYXRMaXN0IiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJvd25lciIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJsZW5kQ2F0VmlldyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsImtpdHR5IiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsInN1Y2Nlc3MiLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImVyciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsIm9uU3VibWl0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUdNQSxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLO0FBRVhDLGFBQU8sRUFGSTtBQUdYQyxhQUFNLEVBSEs7QUFJWEMsbUJBQVksRUFKRDtBQUtYQyxtQkFBWTtBQUxELEtBQWI7O0FBUUYsVUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLE9BQXpCOztBQVZtQjtBQVlsQjs7OzsrQkFFVTtBQUNULFVBQUlDLFFBQVE7QUFDVlAsY0FBTSxLQUFLRCxLQUFMLENBQVdDLElBRFA7QUFFVkMsZUFBTyxLQUFLRixLQUFMLENBQVdFLEtBRlI7QUFHVkMsZUFBTyxLQUFLSCxLQUFMLENBQVdHLEtBSFI7QUFJVkMscUJBQWEsS0FBS0osS0FBTCxDQUFXSTtBQUpkLE9BQVo7O0FBUUFLLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLG9CQURBO0FBRUxDLGNBQU0sTUFGRDtBQUdMQyxjQUFNTCxLQUhEO0FBSUxNLGlCQUFTLGlCQUFTRCxJQUFULEVBQWU7QUFDcEJFLGdCQUFNLDBCQUFOO0FBQ0FDLGtCQUFRQyxHQUFSLENBQVlKLElBQVo7QUFDSCxTQVBJO0FBUUxLLGVBQU8sZUFBU0MsR0FBVCxFQUFhO0FBQ2xCSCxrQkFBUUMsR0FBUixDQUFZLHFCQUFaLEVBQW1DRSxHQUFuQztBQUNEO0FBVkksT0FBUDtBQVlEOzs7c0NBRWlCQyxLLEVBQU07QUFDdEIsVUFBTUMsU0FBU0QsTUFBTUMsTUFBckI7QUFDQSxVQUFNQyxRQUFRRCxPQUFPQyxLQUFyQjtBQUNBLFVBQU1yQixPQUFPb0IsT0FBT3BCLElBQXBCOztBQUVBLFdBQUtzQixRQUFMLHFCQUNHdEIsSUFESCxFQUNTcUIsS0FEVDtBQUlEOzs7NkJBRVM7QUFBQTs7QUFDUixhQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUdFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQ08sMkNBRFA7QUFFRTtBQUNBLG9CQUFLLE1BREw7QUFFQSxvQkFBSyxRQUZMO0FBR0EscUJBQU8sS0FBS3RCLEtBQUwsQ0FBV0MsSUFIbEI7QUFJQSx3QkFBVSxLQUFLSyxpQkFKZjtBQUZGLFdBREY7QUFTRTtBQUFBO0FBQUE7QUFBQTtBQUNnQiwyQ0FEaEI7QUFFRTtBQUNBLG9CQUFLLE9BREw7QUFFQSxvQkFBSyxRQUZMO0FBR0EscUJBQU8sS0FBS04sS0FBTCxDQUFXRSxLQUhsQjtBQUlBLHdCQUFVLEtBQUtJLGlCQUpmO0FBRkYsV0FURjtBQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUNZLDJDQURaO0FBRUU7QUFDQSxvQkFBSyxPQURMO0FBRUEsb0JBQUssUUFGTDtBQUdBLHFCQUFPLEtBQUtOLEtBQUwsQ0FBV0csS0FIbEI7QUFJQSx3QkFBVSxLQUFLRyxpQkFKZjtBQUZGLFdBakJGO0FBeUJFO0FBQUE7QUFBQTtBQUFBO0FBQ21CLDJDQURuQjtBQUVFO0FBQ0Esb0JBQUssYUFETDtBQUVBLHFCQUFPLEtBQUtOLEtBQUwsQ0FBV0ksV0FGbEI7QUFHQSx3QkFBVSxLQUFLRSxpQkFIZjtBQUZGLFdBekJGO0FBZ0NFLHlDQWhDRjtBQWlDRTtBQUFBO0FBQUEsY0FBUSxTQUFTO0FBQUEsdUJBQU0sT0FBS2tCLFFBQUwsRUFBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQTtBQWpDRjtBQUhGLE9BREE7QUEyQ0Q7Ozs7RUE3Rm1CQyxNQUFNQyxTOztBQWlHNUJDLE9BQU83QixPQUFQLEdBQWlCQSxPQUFqQiIsImZpbGUiOiJjYXRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuY2xhc3MgY2F0TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIG93bmVyOiAnJyxcbiAgICAgIGltYWdlOicnLFxuICAgICAgZGVzY3JpcHRpb246JycsXG4gICAgICBsZW5kQ2F0Vmlldzp0cnVlXG4gICAgfTtcblxuICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICAgb25TdWJtaXQoKXtcbiAgICB2YXIga2l0dHkgPSB7XG4gICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgICBvd25lcjogdGhpcy5zdGF0ZS5vd25lcixcbiAgICAgIGltYWdlOiB0aGlzLnN0YXRlLmltYWdlLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuc3RhdGUuZGVzY3JpcHRpb25cbiAgICB9O1xuXG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL2FwaS9uZXdDYXRMaXN0aW5nJyxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGRhdGE6IGtpdHR5LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGFsZXJ0KFwieW91ciBjYXQgaGFzIGJlZW4gbGlzdGVkXCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhamF4IGNhdCBzZW5kIGVycm9yJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KXtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbbmFtZV06dmFsdWVcbiAgICB9KTtcblxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0TGlzdFwiPlxuICAgICAgPGgxPiBMaXN0IGEgY2F0IHRvIGxlbmQgPC9oMT5cblxuICAgICAgPGZvcm0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBOYW1lIDxiciAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICB0eXBlPVwic3RyaW5nXCJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgT3duZXIncyBvd25lciA8YnIgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPVwib3duZXJcIlxuICAgICAgICAgIHR5cGU9XCJzdHJpbmdcIlxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm93bmVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgSW1hZ2UgdXJsIDxiciAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW1hZ2V9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBBZG9wdGlvbiBtZXNzYWdlIDxiciAvPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMub25TdWJtaXQoKX0+IEFkZCBDYXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuXG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxud2luZG93LmNhdExpc3QgPSBjYXRMaXN0OyJdfQ==