import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PrSection = styled.div`
    padding: 100px 0 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #00bf8f;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #001510, #00bf8f);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #001510, #00bf8f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
`;

export const PrWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    @media screen and (max-width: 960px){
        margin: 0 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }`;

export const PrHead = styled.div`
    color: gray;
    font-family: 'Caveat', sans-serif;  
    font-family: "Architects Daughter";
    font-size: 24px; 
    margin-bottom: 24px;
`;

export const PrCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }`;

export const PrCard = styled(Link)`
background: #0f0c29;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
    width: 280px;
    height: 500px;
    text-decoration: none;
    border-radius: 4px;
    &:nth-child(2) {
        margin: 24px;
    }

    &:hover {
        transform: scale(1.06);
        transition: all 0.3s ease-out;
        color: #1c2237;
    }

    @media screen and (max-width: 960px){
        width: 90%;
        &:hover {
            transform: none;
        }
    }`;

export const PrCInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    padding: 24px;
    align-items: center;
    color: #fff;
`;

export const PrCIcon = styled.div`
margin: 24px 0;
`;

export const PrCardP = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const PrCardC = styled.h4`
  font-size: 40px;
  color: green;
`;

export const PrCardL = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
  color: yellow;
`;

export const PrCardFs = styled.ul`
    margin: 16px 0 32px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #a9b3c1;
`;

export const PrCardF = styled.li`

margin-bottom: 10px;
`;

export const PrCardPlan = styled.h3`
    margin-bottom: 5px;
    font-size: 24px;
`;

export const PrCCost = styled.h4`
    font-size: 40px;
    color: cyan;
`;

