import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Store';

function Products() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Products;