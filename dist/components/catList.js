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
    _this.onSubmit = _this.onSubmit.bind(_this);
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
      return React.createElement(
        'div', {
          className: 'catList'
        },
        React.createElement(
          'h1',
          null,
          ' List a cat to lend '
        ),
        React.createElement(
          'form', {
            action: 'http://www.latlmes.com/world/your-sensational-news-article-headline-1',
            input: true,
            type: 'submit'
          },
          React.createElement(
            'label',
            null,
            'Name ',
            React.createElement('br', null),
            React.createElement('input', {
              name: 'name',
              type: 'string',
              value: this.state.name,
              onChange: this.handleInputChange
            })
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
              value: this.state.image,
              onChange: this.handleInputChange
            })
          ),
          React.createElement(
            'label',
            null,
            'Adoption message ',
            React.createElement('br', null),
            React.createElement('textarea', {
              name: 'description',
              value: this.state.description,
              onChange: this.handleInputChange
            })
          ),
          React.createElement('br', null),
          React.createElement(
            'button', {
              type: 'submit'
            },
            ' Add Cat'
          )
        )
      );
    }
  }]);

  return catList;
}(React.Component);

window.catList = catList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9jYXRMaXN0LmpzeCJdLCJuYW1lcyI6WyJjYXRMaXN0IiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJvd25lciIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJsZW5kQ2F0VmlldyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsIm9uU3VibWl0Iiwia2l0dHkiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwic3VjY2VzcyIsImFsZXJ0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZXJyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUdNQSxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLO0FBRVhDLGFBQU8sRUFGSTtBQUdYQyxhQUFNLEVBSEs7QUFJWEMsbUJBQVksRUFKRDtBQUtYQyxtQkFBWTtBQUxELEtBQWI7O0FBUUYsVUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLE9BQXpCO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNELElBQWQsT0FBaEI7QUFYbUI7QUFZbEI7Ozs7K0JBRVU7QUFDVCxVQUFJRSxRQUFRO0FBQ1ZSLGNBQU0sS0FBS0QsS0FBTCxDQUFXQyxJQURQO0FBRVZDLGVBQU8sS0FBS0YsS0FBTCxDQUFXRSxLQUZSO0FBR1ZDLGVBQU8sS0FBS0gsS0FBTCxDQUFXRyxLQUhSO0FBSVZDLHFCQUFhLEtBQUtKLEtBQUwsQ0FBV0k7QUFKZCxPQUFaOztBQVFBTSxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxvQkFEQTtBQUVMQyxjQUFNLE1BRkQ7QUFHTEMsY0FBTUwsS0FIRDtBQUlMTSxpQkFBUyxpQkFBU0QsSUFBVCxFQUFlO0FBQ3BCRSxnQkFBTSwwQkFBTjtBQUNBQyxrQkFBUUMsR0FBUixDQUFZSixJQUFaO0FBQ0gsU0FQSTtBQVFMSyxlQUFPLGVBQVNDLEdBQVQsRUFBYTtBQUNsQkgsa0JBQVFDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ0UsR0FBbkM7QUFDRDtBQVZJLE9BQVA7QUFZRDs7O3NDQUVpQkMsSyxFQUFNO0FBQ3RCLFVBQU1DLFNBQVNELE1BQU1DLE1BQXJCO0FBQ0EsVUFBTUMsUUFBUUQsT0FBT0MsS0FBckI7QUFDQSxVQUFNdEIsT0FBT3FCLE9BQU9yQixJQUFwQjs7QUFFQSxXQUFLdUIsUUFBTCxxQkFDR3ZCLElBREgsRUFDU3NCLEtBRFQ7QUFJRDs7OzZCQU9TO0FBQ1IsYUFDQTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFHRTtBQUFBO0FBQUEsWUFBTSxRQUFPLHVFQUFiLEVBQXFGLFdBQXJGLEVBQTJGLE1BQUssUUFBaEc7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUNPLDJDQURQO0FBRUU7QUFDQSxvQkFBSyxNQURMO0FBRUEsb0JBQUssUUFGTDtBQUdBLHFCQUFPLEtBQUt2QixLQUFMLENBQVdDLElBSGxCO0FBSUEsd0JBQVUsS0FBS0ssaUJBSmY7QUFGRixXQURGO0FBU0U7QUFBQTtBQUFBO0FBQUE7QUFDZ0IsMkNBRGhCO0FBRUU7QUFDQSxvQkFBSyxPQURMO0FBRUEsb0JBQUssUUFGTDtBQUdBLHFCQUFPLEtBQUtOLEtBQUwsQ0FBV0UsS0FIbEI7QUFJQSx3QkFBVSxLQUFLSSxpQkFKZjtBQUZGLFdBVEY7QUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFDWSwyQ0FEWjtBQUVFO0FBQ0Esb0JBQUssT0FETDtBQUVBLG9CQUFLLFFBRkw7QUFHQSxxQkFBTyxLQUFLTixLQUFMLENBQVdHLEtBSGxCO0FBSUEsd0JBQVUsS0FBS0csaUJBSmY7QUFGRixXQWpCRjtBQXlCRTtBQUFBO0FBQUE7QUFBQTtBQUNtQiwyQ0FEbkI7QUFFRTtBQUNBLG9CQUFLLGFBREw7QUFFQSxxQkFBTyxLQUFLTixLQUFMLENBQVdJLFdBRmxCO0FBR0Esd0JBQVUsS0FBS0UsaUJBSGY7QUFGRixXQXpCRjtBQWdDRSx5Q0FoQ0Y7QUFpQ0U7QUFBQTtBQUFBLGNBQVEsTUFBSyxRQUFiO0FBQUE7QUFBQTtBQWpDRjtBQUhGLE9BREE7QUEyQ0Q7Ozs7RUFsR21CbUIsTUFBTUMsUzs7QUFzRzVCQyxPQUFPN0IsT0FBUCxHQUFpQkEsT0FBakIiLCJmaWxlIjoiY2F0TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmNsYXNzIGNhdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBvd25lcjogJycsXG4gICAgICBpbWFnZTonJyxcbiAgICAgIGRlc2NyaXB0aW9uOicnLFxuICAgICAgbGVuZENhdFZpZXc6dHJ1ZVxuICAgIH07XG5cbiAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gICBvblN1Ym1pdCgpe1xuICAgIHZhciBraXR0eSA9IHtcbiAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgIG93bmVyOiB0aGlzLnN0YXRlLm93bmVyLFxuICAgICAgaW1hZ2U6IHRoaXMuc3RhdGUuaW1hZ2UsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbixcbiAgICB9O1xuXG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL2FwaS9uZXdDYXRMaXN0aW5nJyxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGRhdGE6IGtpdHR5LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGFsZXJ0KFwieW91ciBjYXQgaGFzIGJlZW4gbGlzdGVkXCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhamF4IGNhdCBzZW5kIGVycm9yJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KXtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbbmFtZV06dmFsdWVcbiAgICB9KTtcblxuICB9XG5cblxuXG5cblxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdExpc3RcIj5cbiAgICAgIDxoMT4gTGlzdCBhIGNhdCB0byBsZW5kIDwvaDE+XG5cbiAgICAgIDxmb3JtIGFjdGlvbj1cImh0dHA6Ly93d3cubGF0bG1lcy5jb20vd29ybGQveW91ci1zZW5zYXRpb25hbC1uZXdzLWFydGljbGUtaGVhZGxpbmUtMVwiIGlucHV0IHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIE5hbWUgPGJyIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgIHR5cGU9XCJzdHJpbmdcIlxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBPd25lcidzIG93bmVyIDxiciAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJvd25lclwiXG4gICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub3duZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBJbWFnZSB1cmwgPGJyIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT1cImltYWdlXCJcbiAgICAgICAgICB0eXBlPVwic3RyaW5nXCJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbWFnZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEFkb3B0aW9uIG1lc3NhZ2UgPGJyIC8+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPiBBZGQgQ2F0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG5cblxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbndpbmRvdy5jYXRMaXN0ID0gY2F0TGlzdDsiXX0=