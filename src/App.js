import './App.css';

import React, { useRef } from 'react'
import Button from '@mui/material/Button'

import { PhilVideoPlayer } from './Components/VideoComponent.js'
import { QuestionPage } from './Components/QuestionPage.js'


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
                <br />
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
                <QuestionPage 
                context="The 'No Russian' mission is a controversial and disturbing level in the video game
                'Call of Duty: Modern Warfare 2'. In this mission, the player is given the option
                to participate in a terrorist attack on a Russian airport, where innocent civilians
                are ruthlessly gunned down. The mission was heavily criticized for its graphic
                violence and for allowing the player to choose whether to play as the attackers
                or as an undercover CIA agent attempting to stop the attack. Despite the controversy,
                the mission remains a significant and powerful moment in the game's narrative,
                forcing the player to confront the consequences of their actions."
                />
            </div>
        </div>
    );
}

export default App;
