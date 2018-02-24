


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      image:'',
      description:'',
      cats:[],
      lendCatView:true
    };

  this.handleInputChange = this.handleInputChange.bind(this);

  }


  setBorrow(){
    this.setState({lendCatView:false});
  }

  setLend(){
    this.setState({lendCatView:true});
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

  this.setState({
    [name]:value
  });

  }


  onSubmit(){
    var kitty = {
      name: this.state.name,
      email: this.state.email,
      image: this.state.image,
      description: this.state.description
    };


    $.ajax({
      url: '/api/newCatListing',
      type: 'POST',
      data: kitty,
      success: function(data) {
          alert("your cat has been listed");
          console.log(data)
      },
      error: function(err){
        console.log('ajax cat send error', err);
      }
    });
  }


   render () {
    return (
    <div className="catEntry">
    <button onClick={() => this.setBorrow()}> Borrow a Cat</button>
    <button onClick={() => this.setLend()}> Lend a Cat</button>

      <h1> List a cat to lend </h1>

      <form>
        <label>
          Name <br />
          <input
          name="name"
          type="string"
          value={this.state.name}
          onChange={this.handleInputChange} />
        </label>
        <label>
          Owner's Email <br />
          <input
          name="email"
          type="string"
          value={this.state.email}
          onChange={this.handleInputChange} />
        </label>
        <label>
          Image url <br />
          <input
          name="image"
          type="string"
          value={this.state.image}
          onChange={this.handleInputChange} />
        </label>
        <label>
          Adoption message <br />
          <textarea
          name="description"
          value={this.state.description}
          onChange={this.handleInputChange} />
        </label>
        <br />
        <button onClick={() => this.onSubmit()}> Add Cat</button>
      </form>


    </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));

