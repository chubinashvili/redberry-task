import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

import { ReactComponent as LSign } from '../../assets/LariSign.svg';

export const DescriptionListProps = css`
    width: 400px;
    dt, dd {
        display: inline-block;
    }
    dt {
        font-weight: 500;
        font-size: 22px;
        line-height: 27px;
        color: #2E2E2E;
    }
    dd {
        font-weight: 400;
        font-size: 22px;
        line-height: 27px;
        color: #797979;
    }
    p {
        display: grid;
        grid-template-columns: 270px 230px;
    }
`

export const ListItemPageContainer = styled.section`
    width: 1920px;
    height: 1207px;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 800px) {
        width: 390px;
        height: 844px;
    }
`

export const ListItemPageHeader = styled.h2`
    font-weight: 700;
    font-size: 34px;
    line-height: 21px;
    color: #000000;
    margin: 94px 0 80px 0;
    @media screen and (max-width: 800px) {
        font-size: 16px;
        line-height: 20px;
        padding: 20px 0 40px 0;
        margin: 0;  
    }
`

export const ListItem = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    @media screen and (max-width: 800px) {
        grid-template-columns: 358px;
        gap: 40px;
    }
`

export const ListItemPart = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    padding-bottom: 70px;
    border-bottom: 1px solid #A5A5A5;
    ${({noBorder}) => noBorder && {
        padding: '0;',
        border: 'none;',
    }}
    @media screen and (max-width: 800px) {
        grid-template-columns: 358px;
        gap: 20px;
        padding-bottom: 40px;
        ${({noGap}) => noGap && {
            gap: '0;'
        }}
    }
`

export const DescriptionList = styled.dl`
    ${DescriptionListProps};
    p {
        margin-top: 30px;
    }
    .purchase-date {
        display: none;
    }
    @media screen and (max-width: 800px) {
        width: 358px;
        dt {
            font-size: 14px;
        }
        dd {
            font-size: 14px;
            line-height: 25px;
        }
        p {
            grid-template-columns: 210px 148px;
            margin-top: 0;
        }
        .purchase-date {
            display: block;
            dd {
                margin-left: 104px;
            }
        }
    }
`

export const DateDescriptionList = styled.dl`
    margin-top: 30px;
    ${DescriptionListProps};
    dd {
        margin-left: 100px;
    }
    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const Image = styled.img`
    width: 577px;
    height: 342px;
    background-size: cover;
    @media screen and (max-width: 800px) {
        width: 358px;
        height: 191px;
    }
`   

export const ListItemLinkContainer = styled(Link)`
    position: relative;
    right: 860px;
    bottom: 1000px;
    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const ListItemLinkContainerMobile = styled(Link)`
    display: none;
    @media screen and (max-width: 800px) {
        display: inline-block;
        position: relative;
        right: 170px;
        top: 40px;
    }
`

export const LSignContainer = styled(LSign)`
    width: 16px;
    height: 14px;
    @media screen and (max-width: 800px) {
        width: 18px;
        height: 18px;
        padding-top:7px;
    }
`