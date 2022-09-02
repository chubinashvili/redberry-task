import React from 'react';

import { ReactComponent as Frame } from '../../assets/Frame.svg'

import { 
  SuccessfulEndContainer, 
  Main, 
  HeadersContainer, 
  Header, 
  GoToListBtn, 
  GoToMainLink 
} from './successfulEnd.styles';

const SuccessfulEnd = () => {
  return (
    <SuccessfulEndContainer>
      <Main>
        <HeadersContainer>
          <Frame />
          <Header>ჩანაწერი დამატებულია!</Header>
        </HeadersContainer>
        <GoToListBtn to='/list'>სიაში გადაყვანა</GoToListBtn>
        <GoToMainLink to='/'>მთავარი</GoToMainLink>
      </Main>
    </SuccessfulEndContainer>
  )
}

export default SuccessfulEnd