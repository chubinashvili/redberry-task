import styled from "styled-components";

import { ReactComponent as Vector} from '../../assets/ImgRequiredVector.svg'
import { ReactComponent as MobileVector } from '../../assets/MobileUploadVector.svg';
import { ReactComponent as RequiredVectorMobile } from '../../assets/ImgRequiredVectorMobile.svg';


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
    @media screen and (max-width: 800px) {
        border-radius: 8px;
        width: 358px;
        height: 540px;
        padding: 50px 0 35px;
        margin-bottom: 20px;
    }
`

export const FilledFileInputContainer = styled.div`
    margin-bottom: 20px;
    @media screen and (max-width: 800px) {
        height: 540px;
        margin: 0;
    }
`

export const ImgRequiredVector = styled(Vector)`
    margin-bottom: 20px;
    display: none;
    ${({error}) => error && {
        display: 'block',
    }}; 
    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const ImgRequiredVectorMobile = styled(RequiredVectorMobile)`
    margin-top: 10px;
    display: none;
    @media screen and (max-width: 800px) {
        ${({error}) => error && {
            display: 'block',
        }}; 
    }
`

export const MobileUploadVector = styled(MobileVector)`
    display: none;
    @media screen and (max-width: 800px) {
        display: inline-block;
    }
`

export const Image = styled.img`
    height: 423px;
    width: 878px;
    border-radius: 18px;
    border: none;
    background-size: cover;
    @media screen and (max-width: 800px) {
        border-radius: 8px;
        width: 358px;
        height: 181px;
    }
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
    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const MobileGuideText = styled.p`
    width: 146px;
    height: 52px;    
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    display: none;
    text-align: center;
    color: #4386A9;
    margin-top: 20px;
    ${({error}) => error && {
        color: '#E52F2F',
    }}; 
    @media screen and (max-width: 800px) {
        display: inline-block;
    }
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
    margin-top: 30px;
    @media screen and (max-width: 800px) {
        ${({btnOne}) => btnOne && {
            display: 'none',
        }}; 
        ${({btnOne}) => !btnOne && {
            fontSize: '18px',
            lineHeight: '22px',
            width: '187px',
            height: '46px',
        }}; 
        font-size: 18px;
        line-height: 22px;
        margin-top: 0;
    }
`

export const Details = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    align-items: center;
`


export const ImageInfo = styled.div`
    display: flex;
    align-items: center;
    padding-top: 16px;
    @media screen and (max-width: 800px) {
        padding: 0;
    }
`

export const Info = styled.div`
    display: flex;
    padding-left: 25px;
    @media screen and (max-width: 800px) {
        padding-left: 10px;
        flex-direction: column;
    }
`

export const ImgName = styled.p`
    margin-right: 20px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #202020;
    @media screen and (max-width: 800px) {
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 3px;
    }
`

export const ImgSize = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #5F5F5F;
    @media screen and (max-width: 800px) {
        font-size: 12px;
        line-height: 14px;
    }
`