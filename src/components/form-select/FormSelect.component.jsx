import React from 'react';

import { SelectContainer, Select, DisabledOption, VectorContainer } from './FormSelect.styles';

const FormSelect = ({
  register,
  name, 
  error, 
  value, 
  disabledOptionText, 
  optionsArray, 
  cpus,
  forminputstypeone, 
  forminputstypetwo,
  forminputstypethree,
  disabled,
}) => {
  return (
    <SelectContainer
      forminputstypetwo={forminputstypetwo}
      forminputstypeone={forminputstypeone} 
      forminputstypethree={forminputstypethree}
    >
        <Select 
          {...register(name, { required: true })}
          error={error}
          forminputstypeone={forminputstypeone} 
          forminputstypetwo={forminputstypetwo}
          value={value}
          disabled={disabled}
        >
            <DisabledOption disabled selected value=''>{disabledOptionText}</DisabledOption>
            {optionsArray?.map(({id, name}) => (
              <option key={name} value={id}>{name}</option>
            ))}
            {cpus?.map(({id, name}) => (
              <option key={name} value={name}>{name}</option>
            ))}
        </Select>
        <VectorContainer 
          forminputstypeone={forminputstypeone} 
          forminputstypetwo={forminputstypetwo}
          forminputstypethree={forminputstypethree}
        />
    </SelectContainer> 
  )
}

export default FormSelect