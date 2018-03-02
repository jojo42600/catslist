"use strict";

var singleCat = function singleCat(_ref) {
  var cat = _ref.cat;
  return React.createElement(
    "div",
    { className: "singleCat" },
    React.createElement("img", { src: cat.image }),
    React.createElement(
      "h1",
      null,
      cat.name
    ),
    React.createElement(
      "a",
      { href: "#" },
      cat.owner
    ),
    React.createElement(
      "h5",
      null,
      cat.description
    )
  );
};

window.singleCat = singleCat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9zaW5nbGVDYXQuanN4Il0sIm5hbWVzIjpbInNpbmdsZUNhdCIsImNhdCIsImltYWdlIiwibmFtZSIsIm93bmVyIiwiZGVzY3JpcHRpb24iLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTUEsWUFBWSxTQUFaQSxTQUFZO0FBQUEsTUFBRUMsR0FBRixRQUFFQSxHQUFGO0FBQUEsU0FFaEI7QUFBQTtBQUFBLE1BQUssV0FBVSxXQUFmO0FBQ0EsaUNBQUssS0FBS0EsSUFBSUMsS0FBZCxHQURBO0FBRUE7QUFBQTtBQUFBO0FBQUtELFVBQUlFO0FBQVQsS0FGQTtBQUdBO0FBQUE7QUFBQSxRQUFHLE1BQUssR0FBUjtBQUFhRixVQUFJRztBQUFqQixLQUhBO0FBSUE7QUFBQTtBQUFBO0FBQUtILFVBQUlJO0FBQVQ7QUFKQSxHQUZnQjtBQUFBLENBQWxCOztBQWFBQyxPQUFPTixTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJzaW5nbGVDYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHNpbmdsZUNhdCA9ICh7Y2F0fSkgPT4gKFxuXG4gIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlQ2F0XCI+XG4gIDxpbWcgc3JjPXtjYXQuaW1hZ2V9IC8+XG4gIDxoMT57Y2F0Lm5hbWV9PC9oMT5cbiAgPGEgaHJlZj1cIiNcIj57Y2F0Lm93bmVyfTwvYT5cbiAgPGg1PntjYXQuZGVzY3JpcHRpb259PC9oNT5cblxuXG4gIDwvZGl2PlxuXG4pXG5cbndpbmRvdy5zaW5nbGVDYXQgPSBzaW5nbGVDYXQ7XG5cbiJdfQ==