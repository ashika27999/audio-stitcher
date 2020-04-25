import React, { Component } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';

const AudioRecorder = new MicRecorder({ bitRate: 128 });

class Recorder extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonClicks: 0,
            isRecording: false,
            isBlocked: true,
            clickCounter: 0,     
            audioURL: '',  
        }
    }

    handleClick = () => {
        this.setState({
            clickCounter: this.state.clickCounter + 1,
        }, this.setRecoderState);
    }

    setRecoderState = () => {
        if(this.state.clickCounter % 2 !== 0){
            this.handleRecord();
        }
        else{
            this.handleStop();
        }
    }

    handleRecord(){
        AudioRecorder.start().then(() => {
            this.setState({
                isRecording: true,
            });
        }).catch((error) => {
            console.log('Error');
        });
    }

    handleStop(){
        AudioRecorder.stop().getMp3().then(([buffer, Blob]) => {
            const audioURL = URL.createObjectURL(Blob);
            this.setState({
                audioURL: audioURL,
                isRecording: false,
            }, this.props.parentCallBack(Blob));
        }).catch((error) => {
            console.log(error);
        });
    }

    componentDidMount(){
        navigator.getUserMedia({audio: true}, 
        () => {
            this.setState({
                isBlocked: false,
            });
        },
        () => {
            this.setState({
                isBlocked: true,
            });
        });
    }

    render() {
        return (
            <div id="Recorder">
                <button className="btn" id="recorder" onClick={this.handleClick} ><i className="fa fa-microphone"></i></button>  
                {this.props.isTextChanged && <audio src={this.state.audioURL} id="audio-playback" controls="controls"></audio>}        
            </div>
        )
    }
}

export default Recorder;