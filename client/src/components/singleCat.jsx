
const singleCat = ({cat}) => (

  <div className="singleCat">
  <img src={cat.image} />
  <h1>{cat.name}</h1>
  <a href="#">{cat.owner}</a>
  <h5>{cat.description}</h5>


  </div>

)

window.singleCat = singleCat;

