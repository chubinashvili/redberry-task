import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { ReactComponent as GoBackGroup } from '../../assets/GoBackGroup.svg';
import { ReactComponent as GoBackGroupMobile } from '../../assets/MobileVersionGroup.svg';

import { 
  ListItemPageContainer, 
  DescriptionList, 
  Image, 
  ListItem, 
  ListItemPart,
  ListItemPageHeader,
  DateDescriptionList,
  ListItemLinkContainer,
  ListItemLinkContainerMobile,
  LSignContainer,
} from './listItemPage.styles';

const ListItemPage = () => {
  const { id } = useParams();
  const [ laptopData, setLaptopData ] = useState();
  const [ position, setPosition ] = useState('');
  const [ team, setTeam ] = useState('');
  const [ brand, setBrand ] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pcfy.redberryinternship.ge/api/laptop/${id}?token=578212f0cdba6e42b56f90a34e71f75d`)
      const { data } = await response.json();
      const positionsResponse = await fetch('https://pcfy.redberryinternship.ge/api/positions')
      const { data: positionsData } = await positionsResponse.json();
      const teamsResponse = await fetch('https://pcfy.redberryinternship.ge/api/teams')
      const { data: teamsData } = await teamsResponse.json();
      const brandsResponse = await fetch('https://pcfy.redberryinternship.ge/api/brands')
      const { data: brandsData } = await brandsResponse.json();
      setLaptopData(data);
      setPosition(positionsData.find((position) => {
        return position.id === data.user.position_id
      }).name);
      setTeam(teamsData.find((team) => {
        return team.id === data.user.team_id
      }).name);
      setBrand(brandsData.find((brand) => {
        return brand.id === data.laptop.brand_id
      }).name);
    }
    fetchData();
  }, [id])

  return (
    <ListItemPageContainer>
      <ListItemLinkContainerMobile to='/list'>
          <GoBackGroupMobile />
      </ListItemLinkContainerMobile>  
      <ListItemPageHeader>ლეპტოპის ინფო</ListItemPageHeader>
      <ListItem>
        <ListItemPart>
          {laptopData?.laptop.image && (
            <Image src={`https://pcfy.redberryinternship.ge/${laptopData.laptop.image}`}/>
          )}
          <DescriptionList>
            <p>
              <dt>სახელი:</dt>
              <dd>{laptopData?.user.name} {laptopData?.user?.surname}</dd>
            </p>
            <p>
              <dt>თიმი:</dt>
              <dd>{team}</dd>
            </p>
            <p>
              <dt>პოზიცია:</dt> 
              <dd>{position}</dd> 
            </p>
            <p>
              <dt>ტელ. ნომერი:</dt>
              <dd>{laptopData?.user.phone_number}</dd>
            </p>
          </DescriptionList>
          </ListItemPart>
          <ListItemPart noGap={true}>
          <DescriptionList>
            <p>
              <dt>ლეპტოპის სახელი:</dt>
              <dd>{laptopData?.laptop.name}</dd>
            </p>
            <p>
              <dt>ლეპტოპის ბრენდი:</dt>
              <dd>{brand}</dd>
            </p>
            <p>
              <dt>RAM:</dt> 
              <dd>{laptopData?.laptop.ram}</dd> 
            </p>
            <p>
              <dt>მეხსიერების ტიპი:</dt>
              <dd>{laptopData?.laptop.hard_drive_type}</dd>
            </p>
          </DescriptionList>
          <DescriptionList>
            <p>
              <dt>CPU:</dt>
              <dd>{laptopData?.laptop.cpu.name}</dd>
            </p>
            <p>
              <dt>CPU-ს ბირთვი:</dt> 
              <dd>{laptopData?.laptop.cpu.cores}</dd> 
            </p>
            <p>
              <dt>CPU-ს ნაკადი:</dt>
              <dd>{laptopData?.laptop.cpu.threads}</dd>
            </p>
          </DescriptionList>
          </ListItemPart>
        <ListItemPart noBorder={true}>
          <DescriptionList>
            <p>
              <dt>ლეპტოპის მდგომარეობა:</dt>
              <dd>{laptopData?.laptop.state === 'new' ? 'ახალი' : 'მეორადი'}</dd>
            </p>
            <p>
              <dt>ლეპტოპის ფასი:</dt> 
              <dd>{laptopData?.laptop.price} <LSignContainer /></dd> 
            </p>
            {(laptopData?.laptop?.purchase_date !== null && laptopData?.laptop?.purchase_date.length > 1 ) && (
              <p className='purchase-date'>
                <dt>შეძენის რიცხვი:</dt>
                <dd>{laptopData.laptop.purchase_date}</dd>
              </p>
            )}
          </DescriptionList>
          {(laptopData?.laptop?.purchase_date !== null && laptopData?.laptop?.purchase_date.length > 1 ) && (
            <DateDescriptionList>
              <dt>შეძენის რიცხვი:</dt>
              <dd>{laptopData.laptop.purchase_date}</dd>
            </DateDescriptionList>
          )}
        </ListItemPart>
      </ListItem>
      <ListItemLinkContainerMobile to='/list'>
          <GoBackGroupMobile />
      </ListItemLinkContainerMobile>  
      <ListItemLinkContainer to='/list'>
        <GoBackGroup />
      </ListItemLinkContainer>  
    </ListItemPageContainer>
  )
}

export default ListItemPage