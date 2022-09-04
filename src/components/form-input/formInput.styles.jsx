import styled, { css } from "styled-components";

import { ReactComponent as LSign } from '../../assets/LariSign.svg';

const MessageProperties = css`
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    text-align: left;  
`

export const InputContainer = styled.div`
    display: block;
    ${({forminputstypeone}) => forminputstypeone && {
        width: '455px'
    }}; 
    ${({forminputstypetwo}) => forminputstypetwo && {
        width: '100px',
        marginLeft: '15px'
    }}; 
    ${({dateInput}) => dateInput && {
        marginBottom: '18px'
    }}; 
    ${({laptoppriceinput}) => laptoppriceinput && {
        marginLeft: '55px',
    }}; 
    ${({surnameInput}) => surnameInput && {
        marginLeft: '55px'
    }}; 
    width: 878px;
    @media screen and (max-width: 800px) {
        margin-bottom: 8px;
        width: 390px;
        height: 134px;
        margin: 0;
        padding: 10px 15px;
    }
`

export const Label = styled.label`
    color: #000000;
    size: 18px;
    line-height: 21px;
    display: block;
    font-weight: 500;
    text-align: left;
    ${({error}) => error && {
        color: '#E52F2F'
    }}; 
`

export const Input = styled.input`
    width: 878px;
    ${({forminputstypeone}) => forminputstypeone && {
        width: '407px'
    }}; 
    ${({forminputstypetwo}) => forminputstypetwo && {
        width: '277px'
    }}; 
    height: 60px;
    padding: 5px 20px;
    border: 1.8px solid #8AC0E2;
    border-radius: 8px;    
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    font-size: 17px;
    margin: 4px 0;
    line-height: 21px;
    ${({error}) => error  && {
        border: '1.8px solid #E52F2F',
        background: '#FFFFFF',
    }};
    
    &:focus {
        border: 1.8px solid #6499FF;
        outline: 0;
        background: rgba(43, 75, 242, 0.06);
        ${({error}) => error  && {
            border: '1.8px solid #E52F2F',
            background: '#FFFFFF',
        }};
    }
    @media screen and (max-width: 800px) {
        width: 358px;
        margin: 3px 0;
        padding: 8px 18px;
    }
`

export const GuideMessage = styled.p`
    color: #2E2E2E;      
    ${MessageProperties}; 
`

export const ErrorMessage = styled.p`
    color: #E52F2F;
    ${MessageProperties}; 
`

export const LariSign = styled(LSign)`
    display: none;
    position: absolute;
    right: 28.2%;
    ${({laptoppriceinput}) => laptoppriceinput  && {
        display: 'inline-block',
    }};
    @media screen and (max-width: 800px) {
        width: 13px;
        height: 15.17px;
        right: 9%;
        top: 174.8%;
    }
`

