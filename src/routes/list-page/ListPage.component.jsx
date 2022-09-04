import React, { useState, useEffect } from 'react'

import ListItem from '../../components/list-item/ListItem.component';

import { ReactComponent as GoBackGroup } from '../../assets/GoBackGroup.svg';
import { ReactComponent as GoBackGroupMobile } from '../../assets/MobileVersionGroup.svg'

import { 
  ListContainer, 
  ListPageContainer, 
  ListPageHeader, 
  ListLinkContainer,
  ListLinkContainerMobile,
} from './listPage.styles';

const ListPage = () => {
  const [displayData, setDisplayData] = useState()
  useEffect(() => {
    fetch(
      'https://pcfy.redberryinternship.ge/api/laptops?token=3540551112233cd277a4f6ece7e6aa19',
    )
      .then(response => response.json())
      .then(responseData => setDisplayData(responseData.data.reverse()))
  }, [])
  return (
    <ListPageContainer>
      <ListLinkContainerMobile to='/'>
          <GoBackGroupMobile />
      </ListLinkContainerMobile>  
      <ListLinkContainer to='/'>
        <GoBackGroup />
      </ListLinkContainer>    
      <ListPageHeader>ჩანაწერების სია</ListPageHeader>
      <ListContainer>
        {displayData?.map((data, index) => (
          <ListItem data={data} key={index} />
        ))}
      </ListContainer>
    </ListPageContainer>
  )
}

export default ListPage;