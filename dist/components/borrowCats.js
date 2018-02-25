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
        this.state.cats.map(function (cat) {
          return React.createElement(
            "li",
            { key: cat._key },
            "name ",
            cat.name,
            "owner ",
            cat.owner,
            cat.description,
            "Cute Cat pic ",
            cat.image
          );
        })
      );
    }
  }]);

  return borrowCats;
}(React.Component);

window.borrowCats = borrowCats;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9ib3Jyb3dDYXRzLmpzeCJdLCJuYW1lcyI6WyJib3Jyb3dDYXRzIiwicHJvcHMiLCJzdGF0ZSIsImxlbmRDYXRWaWV3IiwiY2F0cyIsIm1hcCIsImNhdCIsIl9rZXkiLCJuYW1lIiwib3duZXIiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFFTUEsVTs7O0FBQ0osc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFZO0FBQ1ZDLG1CQUFZLElBREY7QUFFVkMsWUFBSztBQUZLLEtBQVo7QUFGaUI7QUFNbEI7Ozs7NkJBS087QUFDTixhQUNDO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUNDLGFBQUtGLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsR0FBRDtBQUFBLGlCQUNwQjtBQUFBO0FBQUEsY0FBSSxLQUFLQSxJQUFJQyxJQUFiO0FBQUE7QUFDTUQsZ0JBQUlFLElBRFY7QUFBQTtBQUVPRixnQkFBSUcsS0FGWDtBQUdDSCxnQkFBSUksV0FITDtBQUFBO0FBSWNKLGdCQUFJSztBQUpsQixXQURvQjtBQUFBLFNBQXBCO0FBREQsT0FERDtBQWNDOzs7O0VBM0JvQkMsTUFBTUMsUzs7QUFpQy9CQyxPQUFPZCxVQUFQLEdBQW9CQSxVQUFwQiIsImZpbGUiOiJib3Jyb3dDYXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNsYXNzIGJvcnJvd0NhdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPXtcbiAgICAgIGxlbmRDYXRWaWV3OnRydWUsXG4gICAgICBjYXRzOltdXG4gICAgfTtcbiAgfVxuXG5cblxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJib3Jyb3dDYXRzXCI+XG4gICAgIHt0aGlzLnN0YXRlLmNhdHMubWFwKChjYXQpID0+XG4gICAgICA8bGkga2V5PXtjYXQuX2tleX0+XG4gICAgICBuYW1lIHtjYXQubmFtZX1cbiAgICAgIG93bmVyIHtjYXQub3duZXJ9XG4gICAgICB7Y2F0LmRlc2NyaXB0aW9ufVxuICAgICAgQ3V0ZSBDYXQgcGljIHtjYXQuaW1hZ2V9XG4gICAgICA8L2xpPil9XG5cblxuICAgICA8L2Rpdj5cblxuICAgICAgKVxuICAgIH1cblxuXG59XG5cblxud2luZG93LmJvcnJvd0NhdHMgPSBib3Jyb3dDYXRzIl19