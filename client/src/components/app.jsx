


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      owner: '',
      image:'',
      description:'',
      cats:[],
      lendCatView:true
    };


  }


  componentDidMount(){

  fetch('/api/displayCats')
      .then(response => response.json())
      .then(responseJson => this.setState({cats:responseJson }));

  }

  setBorrow(){
    this.setState({lendCatView:false});
  }

  setLend(){
    this.setState({lendCatView:true});
  }



   render () {
    return (
    <div className="catEntry">
    <button onClick={() => this.setBorrow()}> Borrow a Cat</button>
    <button onClick={() => this.setLend()}> Lend a Cat</button>

    <window.catList />


    </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));

