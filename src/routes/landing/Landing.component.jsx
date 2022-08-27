import React from 'react';

import { Link } from 'react-router-dom';

import { LandingContainer, LogoContainer, LayerContainer, GroupContainer, LinksContainer } from './landing.styles';

const Landing = () => {
  return (
    <LandingContainer>
        <LogoContainer />
        <LayerContainer />
        <GroupContainer />
        <LinksContainer>
          <Link to='/employee-info'>
            <button>ჩანაწერის დამატება</button>
          </Link>
          <Link to='/list'>
            <button>ჩანაწერების სია</button>
          </Link>
        </LinksContainer>
    </LandingContainer>
  )
}

export default Landing