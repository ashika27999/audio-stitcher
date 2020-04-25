import React, { Component } from 'react';
import Recorder from './Recorder';

const transcripts = [];

export class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            botText: '',
            userText: '',
            botSubmittedText: '',
            userSubmittedText: '',
            isBotTextChanged: false,
            isUserTextChanged: false,
            transcript: {
                bot: '',
                user: '',
            },
            userBlob: Blob,
            botBlob: Blob,
            concatBlob: Blob,
            mergedURL: '',
            isMerged: false,
        }
    }

    handleBotTextChange = (event) => {
        this.setState({
            botText: event.target.value,
            isBotTextChanged: false,
            isMerged: false,
        });
    }

    handleUserTextChange = (event) => {
        this.setState({
            userText: event.target.value,
            isUserTextChanged: false,
        });
    }

    handleBotSubmit = () => {
        this.setState({
            isBotTextChanged: true,
            botSubmittedText: this.state.botText,
        }, this.setTranscript);
    }

    handleUserSubmit = () => {
        this.setState({
            isUserTextChanged: true,
            userSubmittedText: this.state.userText,
        }, this.setTranscript);
    }

    setTranscript = () => {
        this.setState({
            transcript: {
                bot: this.state.botSubmittedText,
                user: this.state.userSubmittedText,
            }
        }, this.callbackFunction);
    }

    callbackFunction = () => {
        try{
            transcripts[this.props.cardNumber] = this.state.transcript;
        }
        catch(error){
            console.log(error);
        }
    }

    deleteCard = () => {
        delete transcripts[this.props.cardNumber]
        this.props.parentCallBack(this.props.cardNumber);
    }

    getUserBlob = (userBlob) => {
        this.setState({
            userBlob: userBlob,
        });
    }

    getBotBlob = (botBlob) => {
        this.setState({
            botBlob: botBlob,
        });
    }


    mergeBlobs = () => {
        var mergedBlob = new Blob([this.state.botBlob, this.state.userBlob], { type: "audio/mp3" });
        const audioURL = URL.createObjectURL(mergedBlob);
        console.log(audioURL);
        this.setState({
            isMerged: true,
            mergedURL: audioURL,
        });
    }

    render() {
        return (
            <div id="Card">
                <div className="card">
                    <div className="card-container">
                        <div id="bot">
                            <label for="bot-name">Bot: </label>
                            <input type="text" id="bot-name" value={this.state.botText} onChange={this.handleBotTextChange} placeholder="Bot Text"/>
                            <button className="submit" type="submit" id="bot-submit" onClick={this.handleBotSubmit}><i className="fa fa-paper-plane"></i></button>        
                            <Recorder isTextChanged={this.state.isBotTextChanged} parentCallBack={this.getBotBlob}/>
                        </div>
                        <div id="user">
                            <label for="user-name">User:</label>
                            <input type="text" id="user-name" value={this.state.userText} onChange={this.handleUserTextChange} placeholder="User Text"/>
                            <button className="submit" type="submit" id="user-submit" onClick={this.handleUserSubmit}><i className="fa fa-paper-plane"></i></button>
                            <Recorder isTextChanged={this.state.isUserTextChanged} parentCallBack={this.getUserBlob} />
                        </div>
                    </div>
                    <button className="btn" id="delete-card" onClick={this.deleteCard} ><i className="fa fa-trash"></i></button>
                    <button className="btn" id="merge-clips" onClick={this.mergeBlobs} >Merge</button>
                    {this.state.isMerged &&<audio src={this.state.mergedURL} id="audio-merge" controls="controls"></audio>}
                </div>            
            </div>
        )
    }
}

export default Card;