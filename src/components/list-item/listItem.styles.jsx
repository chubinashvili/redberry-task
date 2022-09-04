import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

export const NamesProps = css`
    font-size: 18px;
    line-height: 21px;
    color: #2E2E2E;
`

export const Item = styled.div`
    width: 563px;
    height: 205px;
    background: #EAFAFF;
    border: 1px solid #AED1EA;
    border-radius: 20px;
    display: flex;
    padding: 0 10px;
    align-items: center;
    box-shadow: none;
    @media screen and (max-width: 800px) {
        width: 358px;
        height: 123px;
        border-radius: 10px;
    }
`

export const Info = styled.hgroup`
    margin-left: 25px;
    @media screen and (max-width: 800px) {
        margin-left: 15px;
    }
`

export const Name = styled.h3`
    ${NamesProps};
    font-weight: 500;
    @media screen and (max-width: 800px) {
        font-size: 14px;
    }
`

export const LaptopName = styled.p`
    ${NamesProps};
    margin-top: 20px;
    margin-bottom: 40px;;
    @media screen and (max-width: 800px) {
        margin: 7px 0 10px 0;
    }
`

export const LinkContainer = styled(Link)`
    color: #4386A9;
    font-weight: 400;
    font-size: 16px;
    text-decoration: underline;
    @media screen and (max-width: 800px) {
        font-size: 14px;
        line-height: 21px;
    }
`

export const Image = styled.img`
    width: 266px;
    height: 178px;
    border-radius: 10px;
    background-size: cover;
    @media screen and (max-width: 800px) {
        border-radius: 6px;
        width: 164px;
        height: 110px;
    }
`

