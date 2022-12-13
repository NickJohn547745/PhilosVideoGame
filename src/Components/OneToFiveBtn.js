import React from 'react'
import { Radio, RadioGroup } from '@mui/material'

export function ButtonOneToFive(props){
    return (
        <RadioGroup class="quiz" row>
            <Radio value="option1" /><b> 1 - Disagree Fully</b>
            <Radio value="option2" /> 2 - Partially Disagree
            <Radio value="option3" /> 3 - Impartial
            <Radio value="option4" /> 4 - Partially Agree
            <Radio value="option5" /><b> 5 - Agree Fully</b>
        </RadioGroup>
    );
}