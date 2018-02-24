"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var borrowCats = function (_React$Component) {
  _inherits(borrowCats, _React$Component);

  function borrowCats(props) {
    _classCallCheck(this, borrowCats);

    var _this = _possibleConstructorReturn(this, (borrowCats.__proto__ || Object.getPrototypeOf(borrowCats)).call(this, props));

    _this.state = {
      lendCatView: true,
      cats: []
    };
    return _this;
  }

  _createClass(borrowCats, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "borrowCats" },
        "this.state.cats.map((cat) =>",
        React.createElement(
          "li",
          { key: cat._key },
          cat.name,
          cat.owner,
          cat.description,
          cat.image
        ),
        ")"
      );
    }
  }]);

  return borrowCats;
}(React.Component);

window.borrowCats = borrowCats;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9ib3Jyb3dDYXRzLmpzeCJdLCJuYW1lcyI6WyJib3Jyb3dDYXRzIiwicHJvcHMiLCJzdGF0ZSIsImxlbmRDYXRWaWV3IiwiY2F0cyIsImNhdCIsIl9rZXkiLCJuYW1lIiwib3duZXIiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFFTUEsVTs7O0FBQ0osc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFZO0FBQ1ZDLG1CQUFZLElBREY7QUFFVkMsWUFBSztBQUZLLEtBQVo7QUFGaUI7QUFNbEI7Ozs7NkJBS087QUFDTixhQUNDO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUFBO0FBRUM7QUFBQTtBQUFBLFlBQUksS0FBS0MsSUFBSUMsSUFBYjtBQUNDRCxjQUFJRSxJQURMO0FBRUNGLGNBQUlHLEtBRkw7QUFHQ0gsY0FBSUksV0FITDtBQUlDSixjQUFJSztBQUpMLFNBRkQ7QUFBQTtBQUFBLE9BREQ7QUFjQzs7OztFQTNCb0JDLE1BQU1DLFM7O0FBaUMvQkMsT0FBT2IsVUFBUCxHQUFvQkEsVUFBcEIiLCJmaWxlIjoiYm9ycm93Q2F0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBib3Jyb3dDYXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID17XG4gICAgICBsZW5kQ2F0Vmlldzp0cnVlLFxuICAgICAgY2F0czpbXVxuICAgIH07XG4gIH1cblxuXG5cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9ycm93Q2F0c1wiPlxuICAgICB0aGlzLnN0YXRlLmNhdHMubWFwKChjYXQpID0+XG4gICAgICA8bGkga2V5PXtjYXQuX2tleX0+XG4gICAgICB7Y2F0Lm5hbWV9XG4gICAgICB7Y2F0Lm93bmVyfVxuICAgICAge2NhdC5kZXNjcmlwdGlvbn1cbiAgICAgIHtjYXQuaW1hZ2V9XG4gICAgICA8L2xpPilcblxuXG4gICAgIDwvZGl2PlxuXG4gICAgICApXG4gICAgfVxuXG5cbn1cblxuXG53aW5kb3cuYm9ycm93Q2F0cyA9IGJvcnJvd0NhdHMiXX0=