import React from 'react'
import { Stepper, Step, StepLabel } from '@material-ui/core'

const EasyStepper = ({steps=[], alternativeLabel, activeStep}) =>{

    return(
        <Stepper activeStep={activeStep} alternativeLabel={alternativeLabel}>
            {
                steps.map((item, i)=>{
                    return(
                        <Step  key={i}>
                            <StepLabel >{item}</StepLabel>
                        </Step>
                    )
                })
            }
        </Stepper>
    )
}

export {EasyStepper}