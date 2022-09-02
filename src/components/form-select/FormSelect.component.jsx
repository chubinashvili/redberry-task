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
}) => {
  return (
    <SelectContainer
      forminputstypetwo={forminputstypetwo}
      forminputstypethree={forminputstypethree}
    >
        <Select 
          {...register(name, { required: true })}
          error={error}
          forminputstypeone={forminputstypeone} 
          forminputstypetwo={forminputstypetwo}
          value={value}
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