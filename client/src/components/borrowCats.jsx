var borrowCats = ({cats}) => (

  <div className="borrowCats">
    {cats.map((cat) =>
      <window.singleCat
      cat={cat}
      key={cat._id} />

      )}
  </div>
);

window.borrowCats = borrowCats