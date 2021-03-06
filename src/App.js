import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

    state = {
        stocks: []
    }



    componentDidMount() {
        fetch('http://localhost:3000/stocks')
        .then(res => res.json())
        .then(data => {
            this.setState({
                stocks: data
            })
        })
    }



  render() {
    return (
      <div>
        <Header/>
        <MainContainer stocks={this.state.stocks} />
      </div>
    );
  }
}

export default App;
