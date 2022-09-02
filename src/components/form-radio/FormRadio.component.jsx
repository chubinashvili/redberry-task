import React from 'react';

import { RadioContainer, Header, RadioGroup, RadioLabel, RadioInput, RadioRequiredVector } from './formRadio.styles';

const FormRadio = ({ question, name, errors, register, labelOne, labelTwo, valueOne, valueTwo}) => {
  return (
    <RadioContainer>
        <Header error={errors?.[name] ? true : false}>
          {question}
          <RadioRequiredVector 
            error={errors?.[name] ? true : false}
          />
        </Header>
        <RadioInput
            type='radio'
            id='1'
            {...register(name, { required: true })}
            value={valueOne}
            />
        <RadioLabel htmlFor='1'>
          {labelOne}
        </RadioLabel>
        <RadioGroup>
          <RadioInput
            type='radio'
            id='2'
            {...register(name, { required: true })}
            value={valueTwo}
          />
          <RadioLabel htmlFor='2'>
            {labelTwo}
          </RadioLabel>            
        </RadioGroup>
    </RadioContainer>
  )
}

export default FormRadio