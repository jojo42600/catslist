

class borrowCats extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      lendCatView:true,
      cats:[]
    };
  }

//attempted to pull the data from cats and post it own as a list
// so I could then start playing around with it in CSS


  render(){
    return(
     <div className="borrowCats">
     {this.state.cats.map((cat) =>
      <li key={cat._key}>
      name {cat.name}
      owner {cat.owner}
      {cat.description}
      Cute Cat pic {cat.image}
      </li>)}


     </div>

      )
    }


}


window.borrowCats = borrowCats