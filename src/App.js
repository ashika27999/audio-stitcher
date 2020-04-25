import React, { Component } from 'react';
import Card from './components/Card';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: [],
      audioBlobs: [],
      mergedURL: '',
      isMerged: false,
    };
  }

  handleAddCard = () => {
    let tempCards = this.state.cards;
    tempCards.push(<Card cardNumber={this.state.cards.length} parentCallBack={this.handleDeleteCard} passMergedBlob={this.getMergedBlob}/>)
    this.setState({
      cards: tempCards,
    });
  }

  handleDeleteCard = (cardNumber) => {
    let tempCards = this.state.cards;
    delete tempCards[cardNumber];
    this.setState({
      cards: tempCards,
    });
  }

  getMergedBlob = (mergedBlob) => {
    let audioBlobs = this.state.audioBlobs;
    audioBlobs.push(mergedBlob);
    this.setState({
      audioBlobs: audioBlobs,
    });
  }

  mergeAllBlobs = () => {
    let mergedBlobs = new Blob(this.state.audioBlobs, {type: "audi/mp3"});
    let mergedURL = URL.createObjectURL(mergedBlobs);
    this.setState({
      mergedURL: mergedURL,
      isMerged: true,
    });
  }

  render() {
    return (
      <div id="App">
        {this.state.cards.map((card) => 
        <div>{card}</div>
        )}
        <button className="btn" id="add-card" onClick={this.handleAddCard}><i className="fa fa-plus"></i></button>
        <button className="btn" id="merge-all-blobs" onClick={this.mergeAllBlobs}>Merge All</button>
        <div className="merge-all-audio-blobs">
          {this.state.isMerged && <audio src={this.state.mergedURL} id="audio-merge-all" controls="controls"></audio>}
        </div>
      </div>
    );
  }
}

export default App;