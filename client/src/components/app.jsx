


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      owner: '',
      image:'',
      description:'',
      cats:[],
      lendCatView:'true'
    };


  }

// to fetch data to populate cats upon load
  componentDidMount(){

  fetch('/api/displayCats')
      .then(response => response.json())
      .then(responseJson => this.setState({cats:responseJson }));

  }

// toggles to switch pages based upon a true or false state
  setBorrow(){
    this.setState({lendCatView:'false'});
  }

  setLend(){
    this.setState({lendCatView:'true'});
  }


//could not get toggle to work, if statements and are tricky
   render () {

    return (
    <div className="catEntry">
      <button onClick={() => this.setBorrow()}> Borrow a Cat</button>
      <button onClick={() => this.setLend()}> Lend a Cat</button>
      <div className="box">
      { this.state.lendCatView === 'true' && <window.catList /> }
      { this.state.lendCatView === 'false' && <window.borrowCats cats={this.state.cats}/>}

      </div>

    </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));

