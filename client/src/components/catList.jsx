

class catList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }

   render () {
    return (<div>
      <h1>cat list</h1>
    </div>)
  }
}



window.catList = catList;