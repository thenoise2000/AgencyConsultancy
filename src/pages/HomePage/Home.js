import React from 'react';
import Costs from '../../components/Costs/Costs';

import InfoSection  from '../../components/InfoSection/InfoSection';

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Store';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjTwo}/>
             <Costs/>
            <InfoSection {...homeObjFour}/>
        </>
    );
}

export default Home;