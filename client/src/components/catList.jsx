


class catList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      owner: '',
      image:'',
      description:'',
      lendCatView:true
    };

  this.handleInputChange = this.handleInputChange.bind(this);

  }

   onSubmit(){
    var kitty = {
      name: this.state.name,
      owner: this.state.owner,
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

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]:value
    });

  }

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
          Owner's owner <br />
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