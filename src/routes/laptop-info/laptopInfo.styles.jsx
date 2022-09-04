import styled from "styled-components";

import { Link } from "react-router-dom";

import { ReactComponent as LineTwo } from '../../assets/LineTwo.svg';

import { 
    MainContainerProps, 
    HeaderLineProperties,
    FormContainerProperties,
} from "../employee-info/employeeInfo.styles";

export const LaptopInfoContainer = styled.section`
    height: 1921px;
    ${MainContainerProps};
    @media screen and (max-width: 800px) {
        height: 1811px;
    }
`

export const LaptopHeaderLine = styled(LineTwo)`
    ${HeaderLineProperties};
`

export const LaptopFormContainer = styled.form`
    width: 1226px;
    height: 1540px;
    display: flex;
    ${FormContainerProperties};
    @media screen and (max-width: 800px) {
        height: 1600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const LaptopFormPartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`

export const LaptopButtonContainer = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 800px) {
        width: 390px;
        padding-top: 40px;
        padding-left: 15px;
        padding-right: 15px;
    }
`

export const BackLink = styled(Link)`
    letter-spacing: 0.08em;
    color: #62A1EB;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    width: 45px;
    height: 21px;
`

export const LaptopLinkContainer = styled(Link)`
    position: relative;
    right: 815px;
    bottom: 1800px;
    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const LaptopLinkContainerMobile = styled(Link)`
    display: none;
    @media screen and (max-width: 800px) {
        display: inline-block;
        position: relative;
        right: 170px;
        bottom: 1710px;
    }
`


