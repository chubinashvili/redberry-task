import styled from "styled-components";

import { ReactComponent as Vector } from '../../assets/Vector.svg';

export const SelectContainer = styled.p`
    // align-self: center;
    margin-top: 17px;
    ${({forminputstypetwo}) => forminputstypetwo && {
        marginRight: '9px'
    }}; 
    ${({forminputstypethree}) => forminputstypethree && {
        marginTop: '0px'
    }}; 
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
    border-radius: 1.8px;
    appearance: none;
    border: none;
    background: #EBEBEB;
    font-size: 14px;
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
        left: 0px;
        bottom: 0px;
    }
`