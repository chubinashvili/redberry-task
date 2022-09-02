import styled from "styled-components";

import { Link } from "react-router-dom";

import { ReactComponent as LineTwo } from '../../assets/LineTwo.svg';
import { ReactComponent as Logo } from '../../assets/LOGO-10-2.svg';
// import { ReactComponent as BorderLine } from '../../assets/FormBorderLine.svg';

import { 
    MainContainerProps, 
    HeaderLineProperties,
    FormContainerProperties,
} from "../employee-info/employeeInfo.styles";

export const LaptopInfoContainer = styled.section`
    height: 1921px;
    ${MainContainerProps};
    @media screen and (max-width: 800px) {
        width: 390px;
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
        margin-top: 850px;
        width: 100%;
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
`

// export const FormBorderLine = styled(BorderLine)`

// `

export const LaptopButtonContainer = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    bottom: 1765px;
`
