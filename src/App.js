import './App.css';

import React, { useRef } from 'react'
import Button from '@mui/material/Button'

import { PhilVideoPlayer } from './Components/VideoComponent.js'
import { QuestionPage } from './Components/QuestionPage.js'
import { Question } from './Components/Question';


function App() {
    function startFirst() {
        var welcomeDiv = document.getElementById("welcomeComponents");
        var videoDiv = document.getElementById("videoDiv");
        var videoPlayer = document.getElementById("video11");

        welcomeDiv.style.display = 'none';
        videoDiv.style.display = 'block';
        videoPlayer.style.display = 'block';
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
                <div id="video11">
                    <PhilVideoPlayer
                        url="https://www.youtube.com/watch?v=8NMnnMRWJ-0"
                        startTime={0}
                        endTime={24}
                        quizId="page11"
                        videoId="video11"
                    />
                </div>
                <div id="video12">
                    <PhilVideoPlayer
                        url="https://www.youtube.com/watch?v=8NMnnMRWJ-0"
                        startTime={24}
                        endTime={34}
                        quizId="page12"
                        videoId="video12"
                    />
                </div>

                <div id="video21">
                    <PhilVideoPlayer
                        url="https://www.youtube.com/watch?v=12FNU8bNEbE"
                        startTime={114}
                        endTime={130}
                        quizId="page21"
                        videoId="video21"
                    />
                </div>
                <div id="video22">
                    <PhilVideoPlayer
                        url="https://www.youtube.com/watch?v=12FNU8bNEbE"
                        startTime={330}
                        endTime={360}
                        quizId="page22"
                        videoId="video22"
                    />
                </div>

                <div id="video12">
                    <PhilVideoPlayer
                        url="https://www.youtube.com/watch?v=8NMnnMRWJ-0"
                        startTime={24}
                        endTime={34}
                        quizId="page12"
                        videoId="video12"
                    />
                </div>
                <div id="video12">
                    <PhilVideoPlayer
                        url="https://www.youtube.com/watch?v=8NMnnMRWJ-0"
                        startTime={24}
                        endTime={34}
                        quizId="page12"
                        videoId="video12"
                    />
                </div>

                <div id="video12">
                    <PhilVideoPlayer
                        url="https://www.youtube.com/watch?v=8NMnnMRWJ-0"
                        startTime={24}
                        endTime={34}
                        quizId="page12"
                        videoId="video12"
                    />
                </div>
                <div id="video12">
                    <PhilVideoPlayer
                        url="https://www.youtube.com/watch?v=8NMnnMRWJ-0"
                        startTime={24}
                        endTime={34}
                        quizId="page12"
                        videoId="video12"
                    />
                </div>

                <div id="video12">
                    <PhilVideoPlayer
                        url="https://www.youtube.com/watch?v=8NMnnMRWJ-0"
                        startTime={24}
                        endTime={34}
                        quizId="page12"
                        videoId="video12"
                    />
                </div>
                <div id="video12">
                    <PhilVideoPlayer
                        url="https://www.youtube.com/watch?v=8NMnnMRWJ-0"
                        startTime={24}
                        endTime={34}
                        quizId="page12"
                        videoId="video12"
                    />
                </div>
            </div>
            <div id="quizDiv">
                <div id="page11">
                    <QuestionPage nextVideoId="video12" quizId="page11"
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
                <div id="page12">
                    <QuestionPage nextVideoId="video21" quizId="page12"
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
                <div id="page21">
                    <QuestionPage nextVideoId="video22" quizId="page21"
                        context="In It Takes Two, Cody and May are transformed into tiny toy-like figures 
                    by their own daughter's tears. They deduce that the only way to return to their human 
                    form is to get their daughter, Rose, to cry on them again. To do this they decide to
                    kill off Rose's favorite stuffed animal, Cutie the elephant."
                    />
                </div>
                <div id="page22">
                    <QuestionPage nextVideoId="video31" quizId="page22"
                        context="In It Takes Two, Cody and May are transformed into tiny toy-like figures 
                    by their own daughter's tears. They deduce that the only way to return to their human 
                    form is to get their daughter, Rose, to cry on them again. To do this they decide to
                    kill off Rose's favorite stuffed animal, Cutie the elephant."
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
