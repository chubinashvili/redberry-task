import styled from "styled-components";

import { ReactComponent as Vector } from '../../assets/Vector.svg';

export const SelectContainer = styled.p`
    margin-top: 17px;
    ${({forminputstypetwo}) => forminputstypetwo && {
        marginRight: '9px',
    }}; 
    ${({forminputstypethree}) => forminputstypethree && {
        marginTop: '0px',
    }}; 
    @media screen and (max-width: 800px) {
        width: 358px;
        ${({forminputstypetwo}) => forminputstypetwo && {
            marginRight: '0;',
        }}; 
    }
`

export const Select = styled.select`
    color: #454545;
    width: 878px;
    ${({forminputstypeone}) => forminputstypeone && {
        width: '408px'
    }}; 
    ${({forminputstypetwo}) => forminputstypetwo && {
        width: '277px'
    }}; 
    height: 60px;
    padding-left: 12px;
    border-radius: 8px;
    appearance: none;
    border: none;
    background: #EBEBEB;
    font-size: 14px;
    cursor: pointer;
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    option {
        background: #FFFFFF;
    }
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
    }
`

export const DisabledOption = styled.option`
    display: none;
`

export const VectorContainer = styled(Vector)`
    position: relative;
    bottom: 40px;
    ${({forminputstypeone}) => forminputstypeone && {
        left: '370px;'
    }}; 
    ${({forminputstypetwo}) => forminputstypetwo && {
        left: '245px;'
    }}; 
    ${({forminputstypethree}) => forminputstypethree && {
        left: '843px;'
    }};     
    pointer-events: none;
    @media screen and (max-width: 800px) {
        bottom: 40px;
        left: 325px;
    }
`