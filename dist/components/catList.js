"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var catList = function (_React$Component) {
  _inherits(catList, _React$Component);

  function catList(props) {
    _classCallCheck(this, catList);

    var _this = _possibleConstructorReturn(this, (catList.__proto__ || Object.getPrototypeOf(catList)).call(this, props));

    _this.state = {
      cats: []
    };
    return _this;
  }

  _createClass(catList, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "cat list"
        )
      );
    }
  }]);

  return catList;
}(React.Component);

window.catList = catList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9jYXRMaXN0LmpzeCJdLCJuYW1lcyI6WyJjYXRMaXN0IiwicHJvcHMiLCJzdGF0ZSIsImNhdHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUVNQSxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTTtBQURLLEtBQWI7QUFGaUI7QUFLbEI7Ozs7NkJBRVU7QUFDVCxhQUFRO0FBQUE7QUFBQTtBQUNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETSxPQUFSO0FBR0Q7Ozs7RUFabUJDLE1BQU1DLFM7O0FBaUI1QkMsT0FBT04sT0FBUCxHQUFpQkEsT0FBakIiLCJmaWxlIjoiY2F0TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBjYXRMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNhdHM6IFtdXG4gICAgfVxuICB9XG5cbiAgIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAgPGgxPmNhdCBsaXN0PC9oMT5cbiAgICA8L2Rpdj4pXG4gIH1cbn1cblxuXG5cbndpbmRvdy5jYXRMaXN0ID0gY2F0TGlzdDsiXX0=