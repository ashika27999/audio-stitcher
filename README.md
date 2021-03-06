## Audio Stitcher
Audio stitcher records conversations between two people, and stitches the conversations to make them into downloadable transcripts or audiobooks of the conversations or any particular snippet of the conversation.  
This project is hosted on Heroku:
-https://aud1o-stitcher.herokuapp.com/

## Build status
The project is in it's alpha stage. 

## Code style
The Application follows the Standard style, and eslint has been used for linting purposes.

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Tech/framework used
<b>Built with</b>
- [ReactJS](https://reactjs.org)

## Features
- Record conversations and download the transcription as JSON files
- Record user audio, and enables playback without downloading
- Change in user text automatically discards previous audio
- Can add or delete snippets as per convenience  

## Requirements
- Node Package Manager (npm)

## Installation
- Clone the respository to your local machine
```sh
git clone https://github.com/ashika27999/audio-stitcher.git
```

- Install the required packages using package-lock
```sh
npm install
```

## How to use?
- Run the application
```sh
npm start
```
- Tap the plus icon to add a snippet
- Enter text onto the text boxes provided
- Click on the airplane icon to submit the entered text
- The recording option will only be available after submission of the text
- Tap the recording option to initiate recording, and tap again to stop. (Note! ,Make sure you give acccess to your microphone when prompted)
- Upon change of text, the recording option will be disabled and the previous audio will be discarded
- Click the "Merge" button to merge both the recordings together
- Click the "Download Transcript" button to download the transcript for the snippet
- Click the "Download Transcript till Snippet" button to download the transcript til that snippet
- Click the trash icon to delete the current snippet
- Click the "Merge All" button to merge all the previous recordings into a single, downloadable mp3 file
