import React, { useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { UserContext } from '../../contexts/user.context';

import FileInput from '../../components/form-file-input/FileInput.component';
import FormInput from '../../components/form-input/FormInput.component';
import FormSelect from '../../components/form-select/FormSelect.component';
import FormRadio from '../../components/form-radio/FormRadio.component';

import { ReactComponent as GoBackGroup } from '../../assets/GoBackGroup.svg';
import { ReactComponent as GoBackGroupMobile } from '../../assets/MobileVersionGroup.svg'

import { 
  LaptopInfoContainer, 
  LaptopHeaderLine,
  LaptopFormContainer, 
  LaptopFormPartContainer,
  LaptopButtonContainer,
  LaptopLinkContainer,
  BackLink,
  LaptopLinkContainerMobile,
} from '../laptop-info/laptopInfo.styles';

import { 
  HeadersContainer,
  MainHeader,
  SubmitButton,
  RedberryLogo,
} from '../employee-info/employeeInfo.styles';

const LaptopInfo = () => {
  const { data, setData } = useContext(UserContext);
  const [ brands, setBrands ] = useState([]);
  const [ cpus, setCpus ] = useState([]);
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
    fetch('https://pcfy.redberryinternship.ge/api/brands')
      .then(response => response.json())
      .then(responseData => setBrands(responseData.data))
  }, [])

  useEffect(() => {
    fetch('https://pcfy.redberryinternship.ge/api/cpus')
      .then(response => response.json())
      .then(responseData => setCpus(responseData.data));
  }, []);

  const onSubmit = () => {
    const sendData = JSON.parse(localStorage.getItem('data'));
    
    const date = new Date(sendData?.laptop_purchase_date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })

    const formData = new FormData();
    formData.append('token', '3540551112233cd277a4f6ece7e6aa19');
    formData.append('name', sendData.name);
    formData.append('surname', sendData.surname);
    formData.append('email', sendData.email);
    formData.append('phone_number', sendData.phone_number);
    formData.append('team_id', sendData.team_id.id);
    formData.append('position_id', sendData.position_id.id);
    formData.append('laptop_name', sendData.laptop_name);
    formData.append('laptop_brand_id', sendData.laptop_brand_id.id);
    formData.append('laptop_cpu', sendData.laptop_cpu.name);
    formData.append('laptop_cpu_cores', sendData.laptop_cpu_cores);
    formData.append('laptop_cpu_threads', sendData.laptop_cpu_threads);
    formData.append('laptop_ram', sendData.laptop_ram);
    formData.append('laptop_hard_drive_type', sendData.laptop_hard_drive_type);
    formData.append('laptop_purchase_date', sendData.laptop_purchase_date.length > 1 ? date : '');
    formData.append('laptop_price', sendData.laptop_price);
    formData.append('laptop_state', sendData.laptop_state);
    formData.append('laptop_image', watch().file[0]);
    fetch('https://pcfy.redberryinternship.ge/api/laptop/create', {
        method: 'POST',
        body: formData,
          })
          .then(response => response.json())
          .then(data => {
              console.log('Success:', data)
          })
          .catch(error => {
            console.error('Error:', error)
          });
    setTimeout(() => {
      setData({})
      localStorage.removeItem('data')
      navigate('/successful-end');
    }, 500)
  }
    return (
    <LaptopInfoContainer>
      <HeadersContainer>
        <h2 className='another-form--header'>თანამშრომლის ინფო</h2>
        <MainHeader>
          <h2>ლეპტოპის მახასიათებლები</h2>
          <p>1/2</p>
          <LaptopHeaderLine />
        </MainHeader>
      </HeadersContainer>
      <LaptopFormContainer onSubmit={handleSubmit(onSubmit)}>
        <FileInput 
          register={register}
          errors={errors}
          setValue={setValue}
          watch={watch}
        />
        <LaptopFormPartContainer>
          <FormInput 
            register={register} 
            label='ლეპტოპის სახელი' 
            name='laptop_name' 
            type='text' 
            placeholder='HP'
            errors={errors}
            forminputstypeone={true}
            guideMessage='ლათინური ასოები, ციფრები, !@#$%^&*()_+='
            validation={{
              required: { value: true, message: 'ლათინური ასოები, ციფრები, !@#$%^&*()_+=' },
              pattern: {
                value: /^[a-zA-Z0-9!@#$%^&*()_+\-=]*$/,
                message: 'გამოიყენე მხოლოდ ლათინური ასოები, ციფრები, !@#$%^&*()_+=',
              },
            }}
          />
          <FormSelect 
            register={register}
            selectName='laptop_brand_id'
            error={errors?.laptop_brand_id ? true : false}
            forminputstypeone={true}
            forminputstypefour={true}
            value={watch().laptop_brand_id}
            disabledOptionText='ლეპტოპის ბრენდი'
            brandsArray={brands}
            setValue={setValue}
          />
        </LaptopFormPartContainer>
        <LaptopFormPartContainer>
          <FormSelect 
            register={register}
            selectName='laptop_cpu'
            error={errors?.laptop_cpu ? true : false}
            forminputstypetwo={true}
            value={watch().laptop_cpu}
            disabledOptionText='CPU'
            cpusArray={cpus}
            setValue={setValue}
          />
          <FormInput 
            register={register} 
            label='CPU-ს ბირთვი' 
            name='laptop_cpu_cores' 
            type='text' 
            placeholder='14'
            errors={errors}
            forminputstypetwo={true}
            guideMessage='მხოლოდ ციფრები'
            validation={{
              required: { value: true, message: 'მხოლოდ ციფრები' },
              pattern: {
                value: /^[0-9]+$/,
                message: 'გამოიყენე მხოლოდ ციფრები',
              },
            }}  
          />
          <FormInput 
            register={register} 
            label='CPU-ს ნაკადი' 
            name='laptop_cpu_threads' 
            type='text' 
            placeholder='365'
            errors={errors}
            forminputstypetwo={true}
            guideMessage='მხოლოდ ციფრები'
            validation={{
              required: { value: true, message: 'მხოლოდ ციფრები' },
              pattern: {
                value: /^[0-9]+$/,
                message: 'გამოიყენე მხოლოდ ციფრები',
              },
            }}
          />
        </LaptopFormPartContainer>
        <LaptopFormPartContainer>
          <FormInput 
            register={register} 
            label='ლეპტოპის RAM (GB)'  
            name='laptop_ram' 
            type='text' 
            placeholder='16'
            errors={errors} 
            forminputstypeone={true}
            guideMessage='მხოლოდ ციფრები'
            validation={{
              required: { value: true, message: 'მხოლოდ ციფრები' },
              pattern: {
                value: /^[0-9]+$/,
                message: 'გამოიყენე მხოლოდ ციფრები'    
              },
            }}
          />
          <FormRadio 
            register={register}
            question='მეხსიერების ტიპი'
            name='laptop_hard_drive_type'
            errors={errors}
            labelOne='SSD'
            labelTwo='HDD'
            valueOne='SSD'
            valueTwo='HDD'
          />
        </LaptopFormPartContainer>
        <LaptopFormPartContainer>
          <FormInput 
            register={register} 
            label='შეძენის რიცხვი (არჩევითი)'  
            name='laptop_purchase_date' 
            type='date' 
            dateInput={true}
            forminputstypeone={true}
          />
          <FormInput 
            register={register} 
            label='ლეპტოპის ფასი'  
            name='laptop_price' 
            type='text' 
            placeholder='0000'
            errors={errors} 
            forminputstypeone={true}
            laptoppriceinput={true}
            guideMessage='მხოლოდ ციფრები'
            validation={{
              required: { value: true, message: 'მხოლოდ ციფრები' },
              pattern: {
                value: /^[0-9]+$/,
                message: 'გამოიყენე მხოლოდ ციფრები'    
              },
            }}
          />
        </LaptopFormPartContainer>
        <FormRadio 
          register={register}
          question='ლეპტოპის მდგომარეობა'
          name='laptop_state'
          errors={errors}
          labelOne='ახალი'
          labelTwo='ძველი'
          valueOne='new'
          valueTwo='used'
          />
        <LaptopButtonContainer>
          <BackLink to='/employee-info'>უკან</BackLink>
          <SubmitButton laptopInfo={true} type='submit' value='დამახსოვრება' />
        </LaptopButtonContainer>
      </LaptopFormContainer>
      <div>
        <LaptopLinkContainer to='/employee-info'>
          <GoBackGroup />
        </LaptopLinkContainer>    
        <LaptopLinkContainerMobile to='/employee-info'>
          <GoBackGroupMobile />
        </LaptopLinkContainerMobile>      
        <RedberryLogo />
      </div>
    </LaptopInfoContainer>
  )
}

export default LaptopInfo;