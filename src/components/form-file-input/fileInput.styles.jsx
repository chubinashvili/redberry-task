import styled from "styled-components";

import { ReactComponent as Vector} from '../../assets/ImgRequiredVector.svg'

export const FileInputContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    height: 423px;
    width: 878px;
    background: #F7F7F7;
    border: 2px dashed #4386A9;
    border-radius: 18px;
    ${({link}) => link && {
        backgroundImage: 'url(link)',
        backgroundSize: 'cover',
    }}; 
    ${({error}) => error && {
        background: '#FFF1F1',
        border: '2px dashed #E52F2F'
    }}; 
`

export const ImgRequiredVector = styled(Vector)`
    margin-bottom: 20px;
    display: none;
    ${({error}) => error && {
        display: 'block',
    }}; 
`

export const Image = styled.img`
    height: 423px;
    width: 878px;
    border-radius: 18px;
    border: none;
    background-size: cover;
`

export const GuideText = styled.p`
    width: 195px;
    height: 76px;
    font-weight: 500;
    font-size: 20px;
    line-height: 38px;
    color: #4386A9;
    margin-bottom: 20px;
    text-align: center;
    ${({error}) => error && {
        color: '#E52F2F',
    }}; 
`

export const UploadBtn = styled.button`
    width: 233px;
    height: 60px;
    background: #62A1EB;
    border-radius: 8px;
    border: none;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    cursor: pointer;
    margin-top 30px;
`

export const Details = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    align-items: center;
`

export const ImageInfo = styled.div`
    display: flex;
`

export const ImgName = styled.p`
    margin: 0 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #202020;
`

export const ImgSize = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #5F5F5F;
`