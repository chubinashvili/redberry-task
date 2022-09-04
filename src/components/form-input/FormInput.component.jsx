import React from 'react';

import { InputContainer, Input, Label, GuideMessage, ErrorMessage, LariSign } from './formInput.styles';

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
  laptoppriceinput,
  surnameInput,
  placeholder,
  onblur
}) => {
  return (
    <>
    <InputContainer 
      type={type} 
      forminputstypeone={forminputstypeone} 
      forminputstypetwo={forminputstypetwo}
      dateInput={dateInput}
      laptoppriceinput={laptoppriceinput}
      surnameInput={surnameInput}
    >
      {label && <Label error={errors?.[name] ? true : false}  htmlFor={name}>{label}</Label>}
      <Input 
        type={type} 
        error={errors?.[name] ? true : false} 
        {...register(name, validation)}
        autoComplete='off'
        placeholder={placeholder}
        forminputstypeone={forminputstypeone} 
        forminputstypetwo={forminputstypetwo}
      />
      {errors?.[name] ? <ErrorMessage>{errors?.[name]?.message}</ErrorMessage> : guideMessage && <GuideMessage>{guideMessage}</GuideMessage>}
    </InputContainer>
    <LariSign 
        laptoppriceinput={laptoppriceinput}
    />
    </>
  )
}

export default FormInput;