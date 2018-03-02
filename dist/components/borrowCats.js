"use strict";

var borrowCats = function borrowCats(_ref) {
  var cats = _ref.cats;
  return React.createElement(
    "div",
    { className: "borrowCats" },
    cats.map(function (cat) {
      return React.createElement(window.singleCat, {
        cat: cat,
        key: cat._id });
    })
  );
};

window.borrowCats = borrowCats;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9ib3Jyb3dDYXRzLmpzeCJdLCJuYW1lcyI6WyJib3Jyb3dDYXRzIiwiY2F0cyIsIm1hcCIsImNhdCIsIl9pZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxhQUFhLFNBQWJBLFVBQWE7QUFBQSxNQUFFQyxJQUFGLFFBQUVBLElBQUY7QUFBQSxTQUVmO0FBQUE7QUFBQSxNQUFLLFdBQVUsWUFBZjtBQUNHQSxTQUFLQyxHQUFMLENBQVMsVUFBQ0MsR0FBRDtBQUFBLGFBQ1Isb0JBQUMsTUFBRCxDQUFRLFNBQVI7QUFDQSxhQUFLQSxHQURMO0FBRUEsYUFBS0EsSUFBSUMsR0FGVCxHQURRO0FBQUEsS0FBVDtBQURILEdBRmU7QUFBQSxDQUFqQjs7QUFZQUMsT0FBT0wsVUFBUCxHQUFvQkEsVUFBcEIiLCJmaWxlIjoiYm9ycm93Q2F0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBib3Jyb3dDYXRzID0gKHtjYXRzfSkgPT4gKFxuXG4gIDxkaXYgY2xhc3NOYW1lPVwiYm9ycm93Q2F0c1wiPlxuICAgIHtjYXRzLm1hcCgoY2F0KSA9PlxuICAgICAgPHdpbmRvdy5zaW5nbGVDYXRcbiAgICAgIGNhdD17Y2F0fVxuICAgICAga2V5PXtjYXQuX2lkfSAvPlxuXG4gICAgICApfVxuICA8L2Rpdj5cbik7XG5cbndpbmRvdy5ib3Jyb3dDYXRzID0gYm9ycm93Q2F0cyJdfQ==