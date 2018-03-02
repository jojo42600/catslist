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
      lendCatView: 'true'
    };

    //bind functions so they may be used as they are intended in app component
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(catList, [{
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

    //on change change state to field data


    //forms and form data

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

  return catList;
}(React.Component);

window.catList = catList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9jYXRMaXN0LmpzeCJdLCJuYW1lcyI6WyJjYXRMaXN0IiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJvd25lciIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJsZW5kQ2F0VmlldyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsIm9uU3VibWl0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwia2l0dHkiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwic3VjY2VzcyIsImFsZXJ0IiwiZXJyb3IiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUdNQSxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLO0FBRVhDLGFBQU8sRUFGSTtBQUdYQyxhQUFNLEVBSEs7QUFJWEMsbUJBQVksRUFKRDtBQUtYQyxtQkFBWTtBQUxELEtBQWI7O0FBUUo7QUFDRSxVQUFLQyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsT0FBekI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0QsSUFBZCxPQUFoQjtBQVptQjtBQWFsQjs7OztzQ0FDaUJFLEssRUFBTTtBQUN0QixVQUFNQyxTQUFTRCxNQUFNQyxNQUFyQjtBQUNBLFVBQU1DLFFBQVFELE9BQU9DLEtBQXJCO0FBQ0EsVUFBTVYsT0FBT1MsT0FBT1QsSUFBcEI7O0FBRUEsV0FBS1csUUFBTCxxQkFDR1gsSUFESCxFQUNTVSxLQURUO0FBSUQ7O0FBRUg7Ozs7K0JBQ2M7O0FBRVYsVUFBSUUsUUFBUTtBQUNWWixjQUFNLEtBQUtELEtBQUwsQ0FBV0MsSUFEUDtBQUVWQyxlQUFPLEtBQUtGLEtBQUwsQ0FBV0UsS0FGUjtBQUdWQyxlQUFPLEtBQUtILEtBQUwsQ0FBV0csS0FIUjtBQUlWQyxxQkFBYSxLQUFLSixLQUFMLENBQVdJO0FBSmQsT0FBWjtBQU1KO0FBQ0lVLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLG9CQURBO0FBRUxDLGNBQU0sTUFGRDtBQUdMQyxjQUFNTCxLQUhEO0FBSUxNLGlCQUFTLGlCQUFTRCxJQUFULEVBQWU7QUFDcEJFLGdCQUFNLDBCQUFOO0FBQ0gsU0FOSTtBQU9MQyxlQUFPLGVBQVNDLEdBQVQsRUFBYTtBQUNsQkMsa0JBQVFDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ0YsR0FBbkM7QUFDRDtBQVRJLE9BQVA7QUFXRDs7QUFJSDs7O0FBTUE7Ozs7NkJBQ1k7QUFBQTs7QUFDUixhQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUdFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQ08sMkNBRFA7QUFFRTtBQUNBLG9CQUFLLE1BREw7QUFFQSxvQkFBSyxRQUZMO0FBR0EscUJBQU8sS0FBS3RCLEtBQUwsQ0FBV0MsSUFIbEI7QUFJQSx3QkFBVSxLQUFLSyxpQkFKZjtBQUZGLFdBREY7QUFTRTtBQUFBO0FBQUE7QUFBQTtBQUNnQiwyQ0FEaEI7QUFFRTtBQUNBLG9CQUFLLE9BREw7QUFFQSxvQkFBSyxRQUZMO0FBR0EscUJBQU8sS0FBS04sS0FBTCxDQUFXRSxLQUhsQjtBQUlBLHdCQUFVLEtBQUtJLGlCQUpmO0FBRkYsV0FURjtBQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUNZLDJDQURaO0FBRUU7QUFDQSxvQkFBSyxPQURMO0FBRUEsb0JBQUssUUFGTDtBQUdBLHFCQUFPLEtBQUtOLEtBQUwsQ0FBV0csS0FIbEI7QUFJQSx3QkFBVSxLQUFLRyxpQkFKZjtBQUZGLFdBakJGO0FBeUJFO0FBQUE7QUFBQTtBQUFBO0FBQ21CLDJDQURuQjtBQUVFO0FBQ0Esb0JBQUssYUFETDtBQUVBLHFCQUFPLEtBQUtOLEtBQUwsQ0FBV0ksV0FGbEI7QUFHQSx3QkFBVSxLQUFLRSxpQkFIZjtBQUZGLFdBekJGO0FBZ0NFLHlDQWhDRjtBQWlDRTtBQUFBO0FBQUEsY0FBUSxTQUFTO0FBQUEsdUJBQU0sT0FBS0UsUUFBTCxFQUFOO0FBQUEsZUFBakI7QUFBQTtBQUFBO0FBakNGO0FBSEYsT0FEQTtBQTJDRDs7OztFQXRHbUJpQixNQUFNQyxTOztBQTBHNUJDLE9BQU83QixPQUFQLEdBQWlCQSxPQUFqQiIsImZpbGUiOiJjYXRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuY2xhc3MgY2F0TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIG93bmVyOiAnJyxcbiAgICAgIGltYWdlOicnLFxuICAgICAgZGVzY3JpcHRpb246JycsXG4gICAgICBsZW5kQ2F0VmlldzondHJ1ZScsXG4gICAgfTtcblxuLy9iaW5kIGZ1bmN0aW9ucyBzbyB0aGV5IG1heSBiZSB1c2VkIGFzIHRoZXkgYXJlIGludGVuZGVkIGluIGFwcCBjb21wb25lbnRcbiAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuICBoYW5kbGVJbnB1dENoYW5nZShldmVudCl7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW25hbWVdOnZhbHVlXG4gICAgfSk7XG5cbiAgfVxuXG4vLyB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkIHNhdmUgc3RhdGUgZGF0YSB0byBiZSBzZW50IHRvIHNlcnZlclxuICAgb25TdWJtaXQoKSB7XG5cbiAgICB2YXIga2l0dHkgPSB7XG4gICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgICBvd25lcjogdGhpcy5zdGF0ZS5vd25lcixcbiAgICAgIGltYWdlOiB0aGlzLnN0YXRlLmltYWdlLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuc3RhdGUuZGVzY3JpcHRpb24sXG4gICAgfTtcbi8vdHJvdWJsZSB1c2luZyBhamF4LCBub3Qgc3VyZSB3aHksIEkgaGF2ZSBvbmx5IHBsYXllZCBhcm91bmQgd2l0aCB3ZWJwYWNrIGFuZCBoYXZlIG5vIGV4cGVyZWluY2Ugd2l0aG91dCBpdCBzdXJlIGhhcyBwcm92ZW4gdG91Z2ggdG9kYXkgZXhjZXB0IGZvciBlYXJsaWVyIHNwcmludHMuXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9hcGkvbmV3Q2F0TGlzdGluZycsXG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICBkYXRhOiBraXR0eSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBhbGVydChcInlvdXIgY2F0IGhhcyBiZWVuIGxpc3RlZFwiKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2FqYXggY2F0IHNlbmQgZXJyb3InLCBlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuXG4vL29uIGNoYW5nZSBjaGFuZ2Ugc3RhdGUgdG8gZmllbGQgZGF0YVxuXG5cblxuXG5cbi8vZm9ybXMgYW5kIGZvcm0gZGF0YVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXRMaXN0XCI+XG4gICAgICA8aDE+IExpc3QgYSBjYXQgdG8gbGVuZCA8L2gxPlxuXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIE5hbWUgPGJyIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgIHR5cGU9XCJzdHJpbmdcIlxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBPd25lcidzIGVtYWlsIDxiciAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJvd25lclwiXG4gICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub3duZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBJbWFnZSB1cmwgPGJyIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT1cImltYWdlXCJcbiAgICAgICAgICB0eXBlPVwic3RyaW5nXCJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbWFnZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEFkb3B0aW9uIG1lc3NhZ2UgPGJyIC8+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5vblN1Ym1pdCgpfT4gQWRkIENhdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuXG5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG53aW5kb3cuY2F0TGlzdCA9IGNhdExpc3Q7Il19