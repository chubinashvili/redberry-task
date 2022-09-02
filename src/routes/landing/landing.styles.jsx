import styled from "styled-components";

import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { ReactComponent as Layer } from '../../assets/Layer.svg';
import { ReactComponent as Group } from '../../assets/Group.svg';

export const LandingContainer = styled.section`
    width: 1920px;
    height: 1080px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 800px) {
        width: 390px;
        height: 844px;
    }
`

export const LogoContainer = styled(Logo)`
    margin-top: 7rem;
    @media screen and (max-width: 800px) {
        margin-top: 3.5rem;
    }
`

export const LayerContainer = styled(Layer)`
    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const GroupContainer = styled(Group)`
    @media screen and (min-width: 801px) {
        display: none;
    }

`

export const LinksContainer = styled.p`
    display: flex;
    flex-direction: column; 
    margin-bottom: 9rem;
    button {
        min-width: 358px;
        width: auto;
        height: 50px;
        letter-spacing: 0.5px;
        line-height: 24.42px;
        font-size: 20px;
        background-color: #62A1EB;
        color: #fff;
        font-weight: 500;
        cursor: pointer;
        padding: 20px, 60px;
        border-radius: 8px; 
        border: none;
    }
    button:first-child {
        margin-bottom: 20px;
    }
    @media screen and (max-width: 800px) {
        margin-bottom: 1rem;
    }
`