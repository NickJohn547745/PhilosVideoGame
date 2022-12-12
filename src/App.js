import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button'
import ReactPlayer from 'react-player'

function App() {
    function startFirst() {
        var welcomeDiv = document.getElementById("welcomeComponents");
        var firstDiv = document.getElementById("firstDiv");
        var videoPlayer = document.getElementById("videoPlayer");

        welcomeDiv.style.display = 'none';
        firstDiv.style.display = 'block';
        videoPlayer.muted = true;
        videoPlayer.playing = true;
    }

    const playerRef = React.useRef();

    return (
        <div className="App">
            <h1>Philos of Video Games - Group Project</h1>
            <h2>Moral Scenario Interactive Survey</h2>
            <div id="welcomeComponents">
                <p class="desc">
                    <b>Description:</b>
                    <br />
                    This interactive survey works by first showing
                    you a clip of a game when a particually taxing
                    event is about to happen. Then, you respond on
                    how you believe the outcome should be. We will
                    then play the rest of the footage and gather
                    data on your reaction.
                    <br />
                    <br />
                    <b>Authors:</b>
                    <br />
                    Andrew Wilkes
                    <br />
                    Nicholas Johnson
                </p>
                <Button onClick={startFirst} variant="contained">Begin Survey</Button>
            </div>
            <div id="firstDiv">
                <ReactPlayer id="videoPlayer" url="https://www.youtube.com/watch?v=ysz5S6PUM-U" ref={playerRef} config={{
                    youtube: {
                        playerVars: {
                            start: 33
                        }
                    }
                }} />
            </div>
        </div>
    );
}

export default App;
