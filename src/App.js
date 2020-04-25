import React, { Component } from 'react';
import Card from './components/Card';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: [],
    };
  }

  handleAddCard = () => {
    let tempCards = this.state.cards;
    tempCards.push(<Card cardNumber={this.state.cards.length} parentCallBack={this.handleDeleteCard}/>)
    this.setState({
      cards: tempCards,
    });
  }

  handleDeleteCard = (cardNumber) => {
    let tempCards = this.state.cards;
    delete tempCards[cardNumber];
    console.log(tempCards);
    this.setState({
      cards: tempCards,
    });
  }

  render() {
    return (
      <div id="App">
        { this.state.cards.map((card) => 
        <div>{card}</div>
        )}
        <button className="btn" id="add-card" onClick={this.handleAddCard}><i className="fa fa-plus"></i></button>
      </div>
    );
  }
}

export default App;