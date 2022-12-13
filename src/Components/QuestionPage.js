import React from 'react'
import { ButtonOneToFive } from './OneToFiveBtn.js';
import { Question } from './Question.js'

export function QuestionPage(props){
    return(
        <div>
            <div class="context">
                <p><b>Context:</b></p>
                <p>{props.context}</p>
            </div>
            <hr class="quizDivider"></hr>
            <Question content="Based on the given context, do you agree with the probable outcome of this scenario?" number="1"/>
            <ButtonOneToFive />

            <Question content="Based on the given context, do you agree with the probable outcome of this scenario?" number="2"/>
            <ButtonOneToFive />

            <Question content="Based on the given context, do you agree with the probable outcome of this scenario?" number="3"/>
            <ButtonOneToFive />

            <Question content="Based on the given context, do you agree with the probable outcome of this scenario?" number="4"/>
            <ButtonOneToFive />

            <Question content="Based on the given context, do you agree with the probable outcome of this scenario?" number="5"/>
            <ButtonOneToFive />
        </div>
    );
}