import React from 'react';

import { InputContainer, Input, Label, GuideMessage, ErrorMessage } from './formInput.styles';

const FormInput = ({ 
  register, 
  type, 
  name, 
  label, 
  validation, 
  errors, 
  guideMessage, 
  forminputstypeone, 
  forminputstypetwo, 
  dateInput,
  laptopPriceInput,
  surnameInput,
}) => {
  return (
    <InputContainer 
      type={type} 
      forminputstypeone={forminputstypeone} 
      forminputstypetwo={forminputstypetwo}
      dateInput={dateInput}
      laptopPriceInput={laptopPriceInput}
      surnameInput={surnameInput}
    >
      {label && <Label error={errors?.[name] ? true : false}  htmlFor={name}>{label}</Label>}
      <Input 
        type={type} 
        error={errors?.[name] ? true : false} 
        {...register(name, validation)}
        autoComplete='off'
        forminputstypeone={forminputstypeone} 
        forminputstypetwo={forminputstypetwo}
      />
      {errors?.[name] ? <ErrorMessage>{errors?.[name]?.message}</ErrorMessage> : guideMessage && <GuideMessage>{guideMessage}</GuideMessage>}
    </InputContainer>
  )
}

export default FormInput;