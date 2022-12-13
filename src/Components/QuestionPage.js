import React from 'react'
import { ButtonOneToFive } from './OneToFiveBtn.js';
import { Question } from './Question.js'
import Button from '@mui/material/Button'

export function QuestionPage(props) {
    function submit() {
        var nextVideo = document.getElementById(props.nextVideoId);
        var currentQuiz = document.getElementById(props.quizId);

        nextVideo.style.display = 'block';
        currentQuiz.style.display = 'none';
    }

    return(
        <div>
            <div class="context">
                <p><b>Context:</b></p>
                <p>{props.context}</p>
            </div>
            <hr class="quizDivider"></hr>
            <Question content="1) The provided clip shows the only reasonable actions." number="1"/>
            <ButtonOneToFive />

            <Question content="2) The provided clip shows actions which were necessary." number="2"/>
            <ButtonOneToFive />

            <Question content="3) The provided clip represents what I would do in the situation." number="3"/>
            <ButtonOneToFive />

            <Question content="4) The provided clip does not affect me." number="4"/>
            <ButtonOneToFive />

            <Question content="5) The provided clip raises a moral or ethical question/point." number="5"/>
            <ButtonOneToFive />

            <Button onClick={submit} variant="contained">Continue</Button>
        </div>
    );
}