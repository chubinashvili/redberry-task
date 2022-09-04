import { useDropzone } from "react-dropzone";

import { ReactComponent as UploadImgVector } from '../../assets/UploadImgVector.svg';

import { 
  FileInputContainer, 
  FilledFileInputContainer,
  Image, 
  ImgRequiredVector,
  GuideText, 
  UploadBtn, 
  Details, 
  ImageInfo,
  ImgName,
  ImgSize,
  MobileUploadVector,
  MobileGuideText,
  ImgRequiredVectorMobile,
  Info,
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
                <MobileUploadVector />
                <GuideText
                  error={errors?.['file'] ? true : false}
                >ჩააგდე ან ატვირთე ლეპტოპის ფოტო</GuideText>
                 <MobileGuideText
                  error={errors?.['file'] ? true : false}
                >ლეპტოპის ფოტოს ატვირთვა</MobileGuideText>
                <ImgRequiredVectorMobile 
                  error={errors?.['file'] ? true : false}
                />
                <input
                  type="file"
                  {...register('file', { required: true })}
                  {...getInputProps()}
                />
                <UploadBtn btnOne={true}>ატვირთე</UploadBtn>
              </FileInputContainer>
            </>
          )}
          {(file && file[0] instanceof File) && (
            <FilledFileInputContainer
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
                  <Info>
                    <ImgName>
                      {watch().file[0].name.substring(0, 18)}
                    </ImgName>
                    <ImgSize>{(watch().file[0].size / 1024 / 1042).toFixed(2)} mb</ImgSize>
                  </Info>
                </ImageInfo>
                <UploadBtn>თავიდან ატვირთე</UploadBtn>
              </Details>
            </FilledFileInputContainer>
          )}
      </>
    );
}

export default FileInput;
