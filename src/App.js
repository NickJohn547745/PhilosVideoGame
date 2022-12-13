import logo from './logo.svg';
import './App.css';

import React, { useRef } from 'react'
import Button from '@mui/material/Button'

import { PhilVideoPlayer } from './Components/VideoComponent'
import { ButtonOneToFive } from './Components/OneToFiveBtn';

function App() {
    const playerRef = useRef(null);

    const [playing, setPlaying] = React.useState(false)
    const play = () => setPlaying(true)
    const pause = () => setPlaying(false)

    function startFirst() {
        var welcomeDiv = document.getElementById("welcomeComponents");
        var videoDiv = document.getElementById("videoDiv");
        var videoPlayer = document.getElementById("videoPlayer");

        welcomeDiv.style.display = 'none';
        videoDiv.style.display = 'block';
    }

    const onProgress = (state) => {
        if (state.playedSeconds >= 24) {
            console.log(playerRef.current);
            setPlaying(false);

            var videoDiv = document.getElementById("videoDiv");
            var quizDiv = document.getElementById("quizDiv");

            videoDiv.style.display = 'none';
            quizDiv.style.display = 'block';
        }
    }

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
            <div id="videoDiv">
                <PhilVideoPlayer
                    url="https://www.youtube.com/watch?v=8NMnnMRWJ-0"
                    ref={playerRef}
                    style={{ margin: '0 auto' }}
                    onProgress={onProgress}
                    playing={playing}
                    onPlay={play}
                    onPause={pause}
                />
            </div>
            <div id="quizDiv">
                <ButtonOneToFive />
            </div>
        </div>
    );
}

export default App;
