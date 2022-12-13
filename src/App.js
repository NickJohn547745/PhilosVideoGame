import logo from './logo.svg';
import './App.css';

import React, { useRef } from 'react'
import Button from '@mui/material/Button'
import { Radio, RadioGroup } from '@mui/material'
import ReactPlayer from 'react-player'

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
                <ReactPlayer id="videoPlayer"
                    ref={playerRef}
                    url="https://www.youtube.com/watch?v=8NMnnMRWJ-0"
                    style={{ margin: '0 auto' }}
                    onProgress={onProgress}
                    controls={true}
                    playing={playing}
                    onPlay={play}
                    onPause={pause}
                />
            </div>
            <div id="quizDiv">
                <div class="context">
                    <p><b>Context:</b></p>
                    <p>The "No Russian" mission is a controversial and disturbing level in the video game
                        "Call of Duty: Modern Warfare 2". In this mission, the player is given the option
                        to participate in a terrorist attack on a Russian airport, where innocent civilians
                        are ruthlessly gunned down. The mission was heavily criticized for its graphic
                        violence and for allowing the player to choose whether to play as the attackers
                        or as an undercover CIA agent attempting to stop the attack. Despite the controversy,
                        the mission remains a significant and powerful moment in the game's narrative,
                        forcing the player to confront the consequences of their actions.
                    </p>
                </div>
                <hr class="quizDivider"></hr>
                <p>1) Based on the given context, do you agree with the probable outcome of this scenario?</p>
                <RadioGroup class="quiz" defaultValue="option3" row>
                    <Radio value="option1" /><b> 1 - Disagree Fully</b>
                    <Radio value="option2" /> 2 - Partially Disagree
                    <Radio value="option3" /> 3 - Impartial
                    <Radio value="option4" /> 4 - Partially Agree
                    <Radio value="option5" /><b> 5 - Agree Fully</b>
                </RadioGroup>
            </div>
        </div>
    );
}

export default App;
