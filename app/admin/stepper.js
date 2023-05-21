"use client"
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    Box,
    useSteps,
  } from '@chakra-ui/react'
import { useEffect } from 'react'
const steps = [
    { title: 'Name your current Mailist', description: 'Informations' },
    { title: 'Import your Data', description: 'Importation' },
    { title: 'Deliver mails', description: 'Delivery' },
  ]
  
  export default function StepperCompoment({setIndex}) {
    const { activeStep } = useSteps({
      index: 1,
      count: steps.length,
    })
  

    useEffect(() => {
     
        console.log(setIndex())
     
    }, [activeStep])
    

    return (
      <Stepper index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator >
              <StepStatus
              
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
  
            <Box flexShrink=''>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
  
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    )
  }
   