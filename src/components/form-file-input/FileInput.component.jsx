import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import { ReactComponent as UploadImgVector } from '../../assets/UploadImgVector.svg';

import { 
  FileInputContainer, 
  Image, 
  ImgRequiredVector,
  GuideText, 
  UploadBtn, 
  Details, 
  ImageInfo,
  ImgName,
  ImgSize,
} from './fileInput.styles';


const FileInput = ({ register, errors, setValue, watch }) => {
    const {
      getRootProps,
      getInputProps,
    } = useDropzone({
      onDrop: files => {
        setValue("file", files);
      },
      accept: {
        'image/png': ['.png'],
        'image/jpeg': ['.jpeg'],
        'image/svg': ['.svg']
      }
    });
    const file = watch().file;
  
    return (
      <>
          {!(file && file[0] instanceof File) && (
            <>
              <FileInputContainer
                error={errors?.['file'] ? true : false}
                {...getRootProps({ onClick: e => e.preventDefault() })}
              >
                <ImgRequiredVector 
                  error={errors?.['file'] ? true : false}
                />
                <GuideText
                  error={errors?.['file'] ? true : false}
                >ჩააგდე ან ატვირთე ლეპტოპის ფოტო</GuideText>
                <input
                  type="file"
                  {...register('file', { required: true })}
                  {...getInputProps()}
                />
                <UploadBtn>ატვირთე</UploadBtn>
              </FileInputContainer>
            </>
          )}
          {(file && file[0] instanceof File) && (
            <div
              {...getRootProps({ onClick: e => e.preventDefault() })}
            >
              {(watch().file && watch().file[0] instanceof File) && (
                <Image
                  src={URL.createObjectURL(watch().file[0])}
                />
              )} 
              <input
                type="file"
                {...register('file', { required: true })}
                {...getInputProps()}
              />
              <Details>
                <ImageInfo>
                  <UploadImgVector />
                  <ImgName>{watch().file[0].name}</ImgName>
                  <ImgSize>{watch().file[0].size / 1024 } mb</ImgSize>
                </ImageInfo>
                <UploadBtn>თავიდან ატვირთე</UploadBtn>
              </Details>
            </div>
          )}
      </>
    );
}

export default FileInput;
