import React from 'react'
import { Radio, RadioGroup } from '@mui/material'

export function ButtonOneToFive(props){
    return (
        <RadioGroup class="quiz" row>
            <Radio value="option1" /><b> 1 </b>
            <Radio value="option2" /> 2 
            <Radio value="option3" /> 3 
            <Radio value="option4" /> 4 
            <Radio value="option5" /><b> 5 </b>
        </RadioGroup>
    );
}