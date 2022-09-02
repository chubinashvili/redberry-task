import styled, { css} from "styled-components";

import { Link } from "react-router-dom";

import { ReactComponent as LineOne } from '../../assets/LineOne.svg';
import { ReactComponent as Logo } from '../../assets/LOGO-10-2.svg';

export const MainContainerProps = css`
    width: 1920px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly; 
    align-items: center;
    background: #F7F7F7;
`

export const HeaderLineProperties = css`
    display: block;
    margin-top: 8px; 
    margin-left: 64px;
    @media screen and (max-width: 800px) {
        display: none; 
    }
`

export const FormContainerProperties = css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #FFF;    
    padding: 10px 174px;
`

export const EmployeeInfoContainer = styled.section`
    height: 1327px;
    ${MainContainerProps};
    @media screen and (max-width: 800px) {
        width: 390px;
    }
`

export const HeadersContainer = styled.div`
        h2 {
            display: inline-block;
            padding: 0 30px;
        }  
        p {
            display: none;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #898989;
        }
        width: 46%;
        text-align: center;
        color: #232323;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        margin: 91px 0px 50px 0px;
        @media screen and (max-width: 800px) {
        & {
            margin-bottom: 0; 
            margin-top: 27px;
        }
        .another-form--header {
            display: none;
        }   
        h2:first-child {
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 6px;
        }
        p {
            display: block;
        }
    }
`

export const MainHeader = styled.div`
    display: inline-block;
`

export const HeaderLine = styled(LineOne)`
    ${HeaderLineProperties};
`

export const FormContainer = styled.form`
    height: 973px;
    width: 1226px;
    ${FormContainerProperties};
    @media screen and (max-width: 800px) {
        margin-top: 850px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const Inputs = styled.div`
    display: flex;
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`

export const ButtonContainer = styled.p`
    text-align: right;
`

export const SubmitButton = styled.input`
    background: #62A1EB;
    border-radius: 8px;
    width: 176px;
    height: 60px;
    border: none;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;
    color: #FFFFFF;
    margin-top: 20px;
`

export const LinkContainer = styled(Link)`
    position: relative;
    right: 815px;
    bottom: 1180px;
`

export const RedberryLogo = styled(Logo)`
    margin: 15px 0 20px 0;
`

