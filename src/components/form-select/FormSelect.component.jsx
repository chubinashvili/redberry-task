import React, { useState, useRef } from 'react';

import { CustomSelect, SelectContainer, Select, DisabledOption, Option, VectorContainer } from './FormSelect.styles';

import useOnOutsideClick from '../../hooks/useOnOutsideClick';

const FormSelect = ({
  error, 
  value, 
  disabledOptionText, 
  teamsArray,
  positionsArray,   
  cpusArray,
  brandsArray,
  forminputstypeone, 
  forminputstypetwo,
  forminputstypethree,
  forminputstypefour,
  disabled,
  setValue,
  selectName,
  register,
}) => {
  const [ open, setIsOpen ] = useState(false);
  const ref = useRef()
  useOnOutsideClick(ref, () => setIsOpen(false))
  return (
    <CustomSelect
      ref={ref} 
      >
      <SelectContainer
        forminputstypetwo={forminputstypetwo}
        forminputstypeone={forminputstypeone} 
        forminputstypethree={forminputstypethree}
        onClick={() => setIsOpen(!open)}
        error={error}
        {...register(selectName, { required: true })} 
        value={value}
        disabled={disabled}
      >
        <DisabledOption>{value ? value.name : disabledOptionText}</DisabledOption>
        <VectorContainer 
          forminputstypeone={forminputstypeone} 
          forminputstypetwo={forminputstypetwo}
          forminputstypethree={forminputstypethree}
        />
      </SelectContainer> 
      {open && (
        <Select
          forminputstypeone={forminputstypeone} 
          forminputstypetwo={forminputstypetwo}
          forminputstypefour={forminputstypefour}
        >
          {teamsArray?.map(({id, name}) => (
            <Option key={name} onClick={() => {
              setValue(selectName, { id, name})
              setIsOpen(false);
            }}>{name}</Option>
          ))}
          {positionsArray?.map(({id, name, team_id}) => (
            <Option key={name} onClick={() => {
              setValue(selectName, { id, name, team_id})
              setIsOpen(false);
            }}>{name}</Option>
          ))}
          {cpusArray?.map(({id, name}) => (
            <Option key={name} onClick={() => {
              setValue(selectName, { id, name})
              setIsOpen(false);
            }}>{name}</Option>
          ))}
          {brandsArray?.map(({id, name}) => (
            <Option key={name} onClick={() => {
              setValue(selectName, { id, name})
              setIsOpen(false);
            }}>{name}</Option>
          ))}
        </Select>
      )}
    </CustomSelect>
  )
}

export default FormSelect