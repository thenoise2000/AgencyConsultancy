import React from 'react';
import { Costs, InfoSection } from '../../components';
import { homeObjOne, homeObjThree } from './Store';

function Services() {
  return (
    <>
      <Costs />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Services;