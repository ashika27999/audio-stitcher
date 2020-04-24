import React, { Component } from 'react';
import Card from './components/Card';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cardCount: 1,
    };
  }

  handleAddCard = () => {
    this.setState({
      cardCount: this.state.cardCount + 1,
    });
  }

  renderCards = () => {
    let cards = [];
    for (let i=0;i<this.state.cardCount;i++){
      cards.push(<Card />);
    }
    return(cards);
  }

  render() {
    return (
      <div id="App">
        {this.renderCards()}
        <button className="btn" id="add-card" onClick={this.handleAddCard}><i className="fa fa-plus"></i></button>
      </div>
    );
  }
}

export default App;