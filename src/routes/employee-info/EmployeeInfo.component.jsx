import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { UserContext } from '../../contexts/user.context';

import FormInput from '../../components/form-input/FormInput.component';
import FormSelect from '../../components/form-select/FormSelect.component';

import { ReactComponent as GoBackGroup } from '../../assets/GoBackGroup.svg';
import { ReactComponent as GoBackGroupMobile } from '../../assets/MobileVersionGroup.svg'

import { 
  EmployeeInfoContainer, 
  HeadersContainer, 
  MainHeader,
  HeaderLine,
  FormContainer,
  Inputs, 
  ButtonContainer,
  SubmitButton,
  RedberryLogo,
  LinkContainer,
  LinkContainerMobile,
} from './employeeInfo.styles';

const EmployeeInfo = () => {
  const { data, setData } = useContext(UserContext);
  const [ teams, setTeams ] = useState([]);
  const [ positions, setPositions ] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: data || {},
  })

  useFormPersist("data", {
    watch, 
    setValue,
    storage: window.localStorage,
  });

  useEffect(() => {
    const fetchData = async () => {
      const teamsResponse = await fetch('https://pcfy.redberryinternship.ge/api/teams')
      const { data: teamsData } = await teamsResponse.json();
      const positionsResponse = await fetch('https://pcfy.redberryinternship.ge/api/positions')
      const { data: positionsData } = await positionsResponse.json();
      setTeams(teamsData);
      setPositions(positionsData.filter((position) => {
        return position.team_id === watch().team_id.id * 1
      }))
    }
    fetchData();
  }, [watch().team_id])
  const onSubmit = () => {
    setData({
      ...data,
      name: watch().name,
      surname: watch().surname,
      team_id: watch().team_id,
      position_id: watch().position_id,
      email: watch().email,
      phone_number: watch().phone_number,
    })
    navigate('/laptop-info');
  }
    return (
    <EmployeeInfoContainer>
      <HeadersContainer>
        <MainHeader>
          <h2>???????????????????????????????????? ????????????</h2>
          <p>1/2</p>
          <HeaderLine />
        </MainHeader>
        <h2 className='laptop-info--header'>???????????????????????? ??????????????????????????????????????????</h2>
      </HeadersContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Inputs>
          <FormInput 
            register={register} 
            label='??????????????????' 
            name='name' 
            type='text' 
            errors={errors}
            forminputstypeone={true}
            guideMessage='????????????????????? 2 ?????????????????????, ????????????????????? ??????????????????'
            placeholder='???????????????'
            validation={{
              required: { value: true, message: '????????????????????? 2 ?????????????????????, ????????????????????? ??????????????????' },
              minLength: {
                value: 2,
                message: '??????????????????????????? ????????????????????? 2 ?????????????????????',
              },
              pattern: {
                value: /^[???-???]+$/,
                message: '??????????????????????????? ????????????????????? ??????????????????',
              },
            }}
          />
          <FormInput 
            register={register} 
            label='???????????????' 
            name='surname' 
            type='text' 
            errors={errors}
            forminputstypeone={true}
            surnameInput={true}
            placeholder='??????????????????????????????'
            guideMessage='????????????????????? 2 ?????????????????????, ????????????????????? ??????????????????'
            validation={{
              required: { value: true, message: '????????????????????? 2 ?????????????????????, ????????????????????? ??????????????????' },
              minLength: {
                value: 2,
                message: '??????????????????????????? ????????????????????? 2 ?????????????????????',
              },
              pattern: {
                value: /^[???-???]+$/,
                message: '??????????????????????????? ????????????????????? ??????????????????',
              },
            }}
          />
        </Inputs>
        <FormSelect 
          register={register} 
          selectName='team_id'
          error={errors?.team_id ? true : false}
          value={watch().team_id}
          forminputstypethree={true}
          forminputstypefour={true}
          disabledOptionText='????????????'
          teamsArray={teams}
          setValue={setValue}
        />
        <FormSelect 
          register={register} 
          selectName='position_id'
          error={errors?.position_id ? true : false}
          value={watch().position_id}
          forminputstypethree={true}
          disabledOptionText='?????????????????????'
          positionsArray={positions}
          setValue={setValue}
          disabled={!watch().team_id ? true : false}
        />
        <FormInput 
          register={register} 
          label='???????????????' 
          name='email' 
          type='email' 
          placeholder='grish666@redberry.ge'
          errors={errors}
          guideMessage='???????????? ???????????????????????????????????? @redberry.ge-??????'
          validation={{
            required: { value: true, message: '???????????? ???????????????????????????????????? @redberry.ge-??????' },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@redberry\.ge$/,
              message: '???????????? ???????????????????????????????????? @redberry.ge-??????',
            },
          }}
        />
        <FormInput 
          register={register} 
          label='????????????????????????'  
          name='phone_number' 
          type='tel' 
          placeholder='+995 598 00 07 01'
          errors={errors} 
          guideMessage='???????????? ?????????????????????????????????????????? ????????????????????? ?????????-?????????????????? ?????????????????????'
          validation={{
            required: { value: true, message: '???????????? ?????????????????????????????????????????? ????????????????????? ?????????-?????????????????? ?????????????????????' },
            pattern: {
              value: /[+]\s?[9][9][5]\s?[5]\d{2}\s?\d\d\s?\d\s?\d\s?\d\d$/,
              message: '???????????? ?????????????????????????????????????????? ????????????????????? ?????????-?????????????????? ?????????????????????'    
            },
          }}
        />
        <ButtonContainer>
          <SubmitButton type='submit' value='?????????????????????' />
        </ButtonContainer>
      </FormContainer>
      <div>
        <LinkContainer to='/'>
          <GoBackGroup />
        </LinkContainer>          
        <LinkContainerMobile to='/'>
          <GoBackGroupMobile />
        </LinkContainerMobile>
        <RedberryLogo />
      </div>
    </EmployeeInfoContainer>
  )
}

export default EmployeeInfo