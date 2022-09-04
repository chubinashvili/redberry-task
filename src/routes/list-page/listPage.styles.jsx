import styled from "styled-components";

import { Link } from "react-router-dom";

export const ListPageContainer = styled.section`
    width: 1920px;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 800px) {
        width: 390px;
        height: 1003px;
        justify-content: space-between;
    }
`

export const ListPageHeader = styled.h2`
    font-weight: 700;
    font-size: 34px;
    line-height: 21px;
    color: #000000;
    margin: 40px 0 90px 0; 
    @media screen and (max-width: 800px) {
        font-size: 16px;
        line-height: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`

export const ListContainer = styled.div`
    width: 1240px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 50px;
    padding-bottom: 40px;
    @media screen and (max-width: 800px) {
        width: 390px;
        height: 930px;
        grid-template-columns: 1fr;
        row-gap: 20px;
        padding: 20px 15px 0 15px;
    }
    
`

export const ListPageLink = styled(Link)`
    position: relative;
    right: 900px;
    bottom: 1155px;
`

export const ListLinkContainer = styled(Link)`
    position: relative;
    right: 860px;
    top: 80px;
    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const ListLinkContainerMobile = styled(Link)`
    display: none;
    @media screen and (max-width: 800px) {
        display: inline-block;
        position: relative;
        right: 170px;
        top: 40px;
    }
`