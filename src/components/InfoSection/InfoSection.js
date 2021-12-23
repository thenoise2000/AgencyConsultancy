import React from 'react';
import { Link } from 'react-router-dom';
import { Cont, Button } from '../../globalStyles';
import '../../index.css';
import {
  InfoSec,
  IRow,
  IColumn,
  TextW,
  TopLn,
  Headn,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSection.elements';

const InfoSection = ({
  primary,
  lBkground,
  topLine,
  TopLinel,
  lightTxt,
  lightTxtDs,
  headline,
  desc,
  buttonLbl,
  img,
  alt,
  startImage,
  start
}) => {
  return (
    <>
      <InfoSec lBkground={lBkground}>
        <Cont>
          <IRow startImage={startImage}>
            <IColumn>
              <TextW>
                <TopLn TopLinel={TopLinel}>{topLine}</TopLn>
                <Headn lightTxt={lightTxt}>{headline}</Headn>
                <Subtitle lightTxtDs={lightTxtDs}>{desc}</Subtitle>
                <Link to='/sign-up'>
                  <Button big fontBig primary={primary}>
                    {buttonLbl}
                  </Button>
                </Link>
              </TextW>
            </IColumn>
            <IColumn>
              <ImgWrapper start={start}>
                <Img className="animated" src={img} alt={alt} />
              </ImgWrapper>
            </IColumn>
          </IRow>
        </Cont>
      </InfoSec>
    </>
  );
}

export default InfoSection;