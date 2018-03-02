


class catList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      owner: '',
      image:'',
      description:'',
      lendCatView:'true',
    };

//bind functions so they may be used as they are intended in app component
  this.handleInputChange = this.handleInputChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  }
  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]:value
    });

  }

// when button is clicked save state data to be sent to server
   onSubmit() {

    var kitty = {
      name: this.state.name,
      owner: this.state.owner,
      image: this.state.image,
      description: this.state.description,
    };
//trouble using ajax, not sure why, I have only played around with webpack and have no expereince without it sure has proven tough today except for earlier sprints.
    $.ajax({
      url: '/api/newCatListing',
      type: 'POST',
      data: kitty,
      success: function(data) {
          alert("your cat has been listed");
      },
      error: function(err){
        console.log('ajax cat send error', err);
      }
    });
  }



//on change change state to field data





//forms and form data
  render () {
    return (
    <div className="catList">
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
          Owner's email <br />
          <input
          name="owner"
          type="string"
          value={this.state.owner}
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


window.catList = catList;