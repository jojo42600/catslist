

class borrowCats extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      lendCatView:true,
      cats:[]
    };
  }




  render(){
    return(
     <div className="borrowCats">
     this.state.cats.map((cat) =>
      <li key={cat._key}>
      {cat.name}
      {cat.owner}
      {cat.description}
      {cat.image}
      </li>)


     </div>

      )
    }


}


window.borrowCats = borrowCats