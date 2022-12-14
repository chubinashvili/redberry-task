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
      const response = await fetch(`https://pcfy.redberryinternship.ge/api/laptop/${id}?token=3540551112233cd277a4f6ece7e6aa19`)
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
      <ListItemPageHeader>???????????????????????? ????????????</ListItemPageHeader>
      <ListItem>
        <ListItemPart>
          {laptopData?.laptop.image && (
            <Image src={`https://pcfy.redberryinternship.ge/${laptopData.laptop.image}`}/>
          )}
          <DescriptionList>
            <p>
              <dt>??????????????????:</dt>
              <dd>{laptopData?.user.name} {laptopData?.user?.surname}</dd>
            </p>
            <p>
              <dt>????????????:</dt>
              <dd>{team}</dd>
            </p>
            <p>
              <dt>?????????????????????:</dt> 
              <dd>{position}</dd> 
            </p>
            <p>
              <dt>?????????. ??????????????????:</dt>
              <dd>{laptopData?.user.phone_number}</dd>
            </p>
          </DescriptionList>
          </ListItemPart>
          <ListItemPart noGap={true}>
          <DescriptionList>
            <p>
              <dt>???????????????????????? ??????????????????:</dt>
              <dd>{laptopData?.laptop.name}</dd>
            </p>
            <p>
              <dt>???????????????????????? ??????????????????:</dt>
              <dd>{brand}</dd>
            </p>
            <p>
              <dt>RAM:</dt> 
              <dd>{laptopData?.laptop.ram}</dd> 
            </p>
            <p>
              <dt>????????????????????????????????? ????????????:</dt>
              <dd>{laptopData?.laptop.hard_drive_type}</dd>
            </p>
          </DescriptionList>
          <DescriptionList>
            <p>
              <dt>CPU:</dt>
              <dd>{laptopData?.laptop.cpu.name}</dd>
            </p>
            <p>
              <dt>CPU-??? ??????????????????:</dt> 
              <dd>{laptopData?.laptop.cpu.cores}</dd> 
            </p>
            <p>
              <dt>CPU-??? ??????????????????:</dt>
              <dd>{laptopData?.laptop.cpu.threads}</dd>
            </p>
          </DescriptionList>
          </ListItemPart>
        <ListItemPart noBorder={true}>
          <DescriptionList>
            <p>
              <dt>???????????????????????? ?????????????????????????????????:</dt>
              <dd>{laptopData?.laptop.state === 'new' ? '???????????????' : '?????????????????????'}</dd>
            </p>
            <p>
              <dt>???????????????????????? ????????????:</dt> 
              <dd>{laptopData?.laptop.price} <LSignContainer /></dd> 
            </p>
            {(laptopData?.laptop?.purchase_date !== null && laptopData?.laptop?.purchase_date.length > 1 ) && (
              <p className='purchase-date'>
                <dt>????????????????????? ??????????????????:</dt>
                <dd>{laptopData.laptop.purchase_date}</dd>
              </p>
            )}
          </DescriptionList>
          {(laptopData?.laptop?.purchase_date !== null && laptopData?.laptop?.purchase_date.length > 1 ) && (
            <DateDescriptionList>
              <dt>????????????????????? ??????????????????:</dt>
              <dd>{laptopData.laptop.purchase_date}</dd>
            </DateDescriptionList>
          )}
        </ListItemPart>
      </ListItem>
      <ListItemLinkContainer to='/list'>
        <GoBackGroup />
      </ListItemLinkContainer>  
    </ListItemPageContainer>
  )
}

export default ListItemPage