

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }

   render () {
    return (<div>
      <h1>My Cat app</h1>
      <catEntry />
      <catList />
      <singleCat />
    </div>)
  }
}



ReactDOM.render(<App />, document.getElementById('app'));

