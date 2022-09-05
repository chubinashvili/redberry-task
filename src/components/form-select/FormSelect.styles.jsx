import styled from "styled-components";

import { ReactComponent as Vector } from '../../assets/Vector.svg';

export const CustomSelect = styled.div`
    position: relative;
`

export const SelectContainer = styled.p`
    ${({forminputstypetwo}) => forminputstypetwo && {
        marginRight: '9px',
    }}; 
    color: #454545;
    width: 878px;
    ${({forminputstypeone}) => forminputstypeone && {
        width: '408px'
    }}; 
    ${({forminputstypetwo}) => forminputstypetwo && {
        width: '277px'
    }}; 
    height: 60px;
    padding: 0 15px;
    align-items: center;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    border: none;
    background: #EBEBEB;
    font-size: 14px;
    cursor: pointer;
    ${({error}) => error  && {
       border: '1.8px solid #E52F2F',
    }};
    ${({disabled}) => disabled && {
        opacity: '0.5',
        cursor: 'not-allowed'
    }}; 
    &:focus {
        border: none;
        outline: 0;
        ${({error}) => error  && {
            border: '1.8px solid #E52F2F',
        }};
    }
    ${({error}) => error  && {
        border: '1.8px solid #E52F2F',
    }};
    @media screen and (max-width: 800px) {
        width: 358px;
        margin-top: 17px;
        ${({forminputstypetwo}) => forminputstypetwo && {
            marginRight: '0;',
        }}; 
    }
`

export const Select = styled.div`
    color: #454545;
    width: 878px;
    position: absolute;
    top: 100%;    
    ${({forminputstypeone}) => forminputstypeone && {
        width: '408px'
    }}; 
    ${({forminputstypetwo}) => forminputstypetwo && {
        width: '277px'
    }}; 
    ${({forminputstypefour}) => forminputstypefour && {
        zIndex: '1;'
    }}; 
    border-radius: 8px;
    border: none;
    background: #FFFFFF;
    cursor: pointer;
    @media screen and (max-width: 800px) {
        width: 358px;
    }
`

export const DisabledOption = styled.p`
`

export const Option = styled.div`
   ${({forminputstypethree}) => forminputstypethree && {
        width: '878px'
    }}; 
    ${({forminputstypeone}) => forminputstypeone && {
        width: '408px'
    }}; 
    ${({forminputstypetwo}) => forminputstypetwo && {
        width: '277px'
    }}; 
    height: 41px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000; 
    padding: 8px 15px;
    text-align: left;
    position: relative;
    &:hover {
        background: #E7F0F8;
    }
    @media screen and (max-width: 800px) {
        width: 358px;
    }
`

export const VectorContainer = styled(Vector)`
    pointer-events: none;
    @media screen and (max-width: 800px) {
        bottom: 40px;
        left: 325px;
    }
`