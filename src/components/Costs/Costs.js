import React from 'react';
import { IconContext } from 'react-icons/lib';

import {  DiAtom } from 'react-icons/di';
import { GiCrystalBars, GiCutDiamond } from 'react-icons/gi';
import { Button, ButtonS } from '../../globalStyles';
import { PrCard, PrCardC, PrCardF, PrCardFs, PrCardL, PrCardP, PrCardPlan, PrCCost, PrCIcon, PrCInfo, PrCont, PrHead, PrSection, PrWrap } from './Costs.elements';

function Costs() {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64}}>
            <PrSection>
                <PrWrap>
                    <PrHead>Services Section</PrHead>
                    <PrCont>
                        <PrCard to='/sign-up'>
                            <PrCInfo>
                                <PrCIcon>
                                    <DiAtom/>
                                </PrCIcon>
                                <PrCardP>Choice Options</PrCardP>
                                <PrCardC>$9.99</PrCardC>
                                <PrCardL>C/Month</PrCardL>
                                <PrCardFs>
                                    <PrCardF>
                                        1000 new members
                                    </PrCardF>
                                    <PrCardF>
                                        Analytics
                                    </PrCardF>
                                </PrCardFs>
                                <ButtonS secondary>Choose your Plans</ButtonS>
                            </PrCInfo>
                        </PrCard>
                        <PrCard to='/sign-up'>
                            <PrCInfo>
                                <PrCIcon>
                                    <GiCrystalBars/>
                                </PrCIcon>
                                <PrCardPlan>Gold Plan</PrCardPlan>
                                <PrCCost>$69</PrCCost>
                                <PrCardL>C/Month</PrCardL>
                                <PrCardFs>
                                    <PrCardF>2000 new Members</PrCardF>
                                    <PrCardF>5/7 Support Online</PrCardF>                                   
                                </PrCardFs>
                                <ButtonS secondary>Choose your Plans</ButtonS>
                            </PrCInfo>
                        </PrCard>
                        <PrCard to='/sign-up'>
                            <PrCInfo>
                                <PrCIcon>
                                    <GiCutDiamond/>
                                </PrCIcon>
                                <PrCardPlan>Diamong Plan</PrCardPlan>
                                <PrCCost>$99</PrCCost>
                                <PrCardL>C/Month</PrCardL>
                                <PrCardFs>
                                    <PrCardF>Unlimited Members</PrCardF>
                                    <PrCardF>24/7 Support Online</PrCardF>                                   
                                </PrCardFs>
                                <ButtonS secondary>Choose your Plans</ButtonS>
                            </PrCInfo>
                        </PrCard>
                    </PrCont>
                </PrWrap>
            </PrSection>
        </IconContext.Provider>
    );
}

export default Costs;