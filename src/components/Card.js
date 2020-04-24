import React, { Component } from 'react';
import Recorder from './Recorder';


export class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            botText: '',
            userText: '',
        }
    }

    handleBotTextChange = (event) => {
        this.setState({
            botText: event.target.value,
        });
    }

    handleUserTextChange = (event) => {
        this.setState({
            userText: event.target.value,
        });
    }

    handleBotSubmit = () => {
        console.log(this.state.botText);
    }

    handleUserSubmit = () => {
        console.log(this.state.userText);
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
                            <Recorder />

                        </div>
                        <div id="user">
                            <label for="user-name">User:</label>
                            <input type="text" id="user-name" value={this.state.userText} onChange={this.handleUserTextChange} placeholder="User Text"/>
                            <button className="submit" type="submit" id="user-submit" onClick={this.handleUserSubmit}><i className="fa fa-paper-plane"></i></button>
                            <Recorder />
                        </div>
                    </div>
                </div>            
            </div>
        )
    }
}

export default Card
