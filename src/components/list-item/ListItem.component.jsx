import React from 'react';

import { Item, Image, Info, Name, LaptopName, LinkContainer } from './listItem.styles';

const ListItem = ({ data }) => {
  const { image, name: laptopName, id } = data.laptop;
  const { name, surname } = data.user;
  return (
    <Item>
      {image && (
        <Image src={`https://pcfy.redberryinternship.ge/${image}`}/>
      )}
      <Info>
        <Name>{name} {surname}</Name>
        <LaptopName>{laptopName}</LaptopName>
        <LinkContainer to={`/list/${id}`}>მეტის ნახვა</LinkContainer>
      </Info>
    </Item>
  )
}

export default ListItem