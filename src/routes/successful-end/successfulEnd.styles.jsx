import styled from "styled-components";

import { Link } from "react-router-dom";

export const SuccessfulEndContainer = styled.section`
    width: 1920px;
    height: 1080px;
    background: #4A4A4A;
    @media screen and (max-width: 800px) {
        width: 390px;
        height: 844px;
        background: #FFFFFF;
    }
`

export const Main = styled.main`
    width: 847px;
    height: 537px;
    background: #FFFFFF;
    border-radius: 8px;
    border: none;
    position: relative;
    left: 536px;
    top: 271px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (max-width: 800px) {
        width: 390px;
        height: 844px;
        left: 0;
        top: 0;
        justify-content: center;
    }
`

export const HeadersContainer = styled.div`
    text-align: center;
    @media screen and (max-width: 800px) {
        margin-bottom: 30px;
    }
`

export const Header = styled.h2`
    font-weight: 700;
    font-size: 25px;
    line-height: 31px;
    color: #292929;
    @media screen and (max-width: 800px) {
        width: 164px;
        font-size: 22px;
        text-align: center;
        line-height: 39px;
        margin-left: 30px;
    }
`

export const GoToListBtn = styled(Link)`
    padding: 18px 60px;
    width: 297px;
    height: 60px;
    background: #62A1EB;
    border-radius: 8px;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    margin-top: 40px;
    @media screen and (max-width: 800px) {
        margin-top: 190px;
    }
`

export const GoToMainLink = styled(Link)`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #0089A7;
    margin-bottom: 20px;
    @media screen and (max-width: 800px) {
        margin-bottom: 0;
        margin-top: 30px;
    }
`