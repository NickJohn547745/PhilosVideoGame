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
                    <b>Instructions:</b>
                    <br />
                    When you begin, simply start the clips as they
                    appear. They will automatically pause and transition
                    into the quiz.
                    <br />
                    <br />
                    <b>Purpose:</b>
                    <br />
                    The purpose of this experiment is to test out a
                    new form of survey taking which involves an
                    interactive component. This way we can stimulate 
                    and engage the subject as they progress through 
                    the survey questions.
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

                <div id="video31">
                    <PhilVideoPlayer
                        url="https://www.youtube.com/watch?v=r-k_H50cBj8"
                        startTime={40}
                        endTime={50}
                        quizId="page31"
                        videoId="video31"
                    />
                </div>
                <div id="video32">
                    <PhilVideoPlayer
                        url="https://www.youtube.com/watch?v=r-k_H50cBj8"
                        startTime={373}
                        endTime={439}
                        quizId="page32"
                        videoId="video32"
                    />
                </div>

                <div id="video41">
                    <PhilVideoPlayer
                        url="https://www.youtube.com/watch?v=v7IdefXpP-o"
                        startTime={258}
                        endTime={274}
                        quizId="page41"
                        videoId="video41"
                    />
                </div>
                <div id="video42">
                    <PhilVideoPlayer
                        url="https://www.youtube.com/watch?v=v7IdefXpP-o"
                        startTime={274}
                        endTime={300}
                        quizId="page42"
                        videoId="video42"
                    />
                </div>

                <div id="video51">
                    <PhilVideoPlayer
                        url="https://www.youtube.com/watch?v=F4EP7DkJeQc"
                        startTime={131}
                        endTime={153}
                        quizId="page51"
                        videoId="video51"
                    />
                </div>
                <div id="video52">
                    <PhilVideoPlayer
                        url="https://www.youtube.com/watch?v=F4EP7DkJeQc"
                        startTime={174}
                        endTime={213}
                        quizId="page52"
                        videoId="video52"
                    />
                </div>
                <div id="results">
                    <h2>Survey Completed!</h2>
                    <p>Thank you for completing our interactive survey. Your results have been submitted and are appreciated. Have a wonderful day.</p>
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
                <div id="page31">
                    <QuestionPage nextVideoId="video32" quizId="page31"
                        context="In the game Grand Theft Auto V, there is a scene where the character Trevor tortures another man. The scene takes place in a dingy and dimly-lit warehouse, with Trevor standing over the man who is tied to a chair. Trevor is known for his ruthless and violent nature, and in this scene he uses various methods to try to extract information from the man. He punches and kicks him, threatens him with a knife, and uses waterboarding to try to get the man to talk. The man, clearly terrified, begs for mercy and tries to hold out as long as he can, but ultimately he gives in and reveals what Trevor wants to know. The scene is intense and graphic, and shows Trevor's ruthless and violent side."
                    />
                </div>
                <div id="page32">
                    <QuestionPage nextVideoId="video41" quizId="page32"
                        context="In the game Grand Theft Auto V, there is a scene where the character Trevor tortures another man. The scene takes place in a dingy and dimly-lit warehouse, with Trevor standing over the man who is tied to a chair. Trevor is known for his ruthless and violent nature, and in this scene he uses various methods to try to extract information from the man. He punches and kicks him, threatens him with a knife, and uses waterboarding to try to get the man to talk. The man, clearly terrified, begs for mercy and tries to hold out as long as he can, but ultimately he gives in and reveals what Trevor wants to know. The scene is intense and graphic, and shows Trevor's ruthless and violent side."
                    />
                </div>
                <div id="page41">
                    <QuestionPage nextVideoId="video42" quizId="page41"
                        context="In The Last of Us, the main character, Joel, is tasked with escorting a young girl named Ellie across a post-apocalyptic United States. As they journey together, they encounter a variety of dangers, including hostile human factions and deadly infected creatures. In one particularly tense moment, Joel is able to save Ellie from a group of attackers, using his quick thinking and combat skills to take down the enemies and protect her. This act of heroism solidifies the bond between Joel and Ellie, and they continue on their journey with a newfound sense of trust and camaraderie."
                    />
                </div>
                <div id="page42">
                    <QuestionPage nextVideoId="video51" quizId="page42"
                        context="In The Last of Us, the main character, Joel, is tasked with escorting a young girl named Ellie across a post-apocalyptic United States. As they journey together, they encounter a variety of dangers, including hostile human factions and deadly infected creatures. In one particularly tense moment, Joel is able to save Ellie from a group of attackers, using his quick thinking and combat skills to take down the enemies and protect her. This act of heroism solidifies the bond between Joel and Ellie, and they continue on their journey with a newfound sense of trust and camaraderie."
                    />
                </div>
                <div id="page51">
                    <QuestionPage nextVideoId="video52" quizId="page51"
                        context="In the game A Way Out, the player's character is tasked with killing Vincent, a dangerous criminal who has been causing havoc in the city. The scene takes place in a warehouse, where Vincent is hiding out and planning his next move. The player must carefully make their way through the warehouse, using stealth and cunning to avoid detection. As they get closer to Vincent, the tension mounts, and when they finally confront him, they must make the tough decision to either try to reason with him or take him out by any means necessary. In the end, the player must make a quick and decisive move to take Vincent down, bringing an end to his reign of terror."
                    />
                </div>
                <div id="page52">
                    <QuestionPage nextVideoId="results" quizId="page52"
                        context="In the game A Way Out, the player's character is tasked with killing Vincent, a dangerous criminal who has been causing havoc in the city. The scene takes place in a warehouse, where Vincent is hiding out and planning his next move. The player must carefully make their way through the warehouse, using stealth and cunning to avoid detection. As they get closer to Vincent, the tension mounts, and when they finally confront him, they must make the tough decision to either try to reason with him or take him out by any means necessary. In the end, the player must make a quick and decisive move to take Vincent down, bringing an end to his reign of terror."
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
