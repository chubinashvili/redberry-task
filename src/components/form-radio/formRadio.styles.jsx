import styled from "styled-components";

import { ReactComponent as Vector } from '../../assets/RadioVector.svg';


export const RadioContainer = styled.div`
    width: 800px;
    height: 110px;
    @media screen and (max-width: 800px) {
        width: 358px;
        margin-top: 8px;
    }
`

export const Header = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin-bottom: 20px;
    ${({error}) => error && {
        color: '#E52F2F',
    }}; 
`

export const RadioGroup = styled.p`
    display: inline-block;
    margin-left: 40px; 
`
export const RadioLabel = styled.label`
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
    margin: 0 15px;
`

export const RadioRequiredVector = styled(Vector)`
    margin-left: 15px;
    display: none;
    ${({error}) => error && {
        display: 'inline-block',
    }}; 
`

export const RadioInput = styled.input`
    border: 2px solid #4D9AC3;
    width: 20px;
    height: 20px;
    
`
