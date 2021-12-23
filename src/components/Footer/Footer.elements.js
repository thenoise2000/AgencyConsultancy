import { FaSlideshare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterC = styled.div`
    background-color: black;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterSub = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;
`;

export const FooterSHead= styled.p`
font-family: "Architects Daughter";
 font-size: 24px;
    margin-bottom: 24px;
    font-size: 24px;
`;

export const FooSubText = styled.p`
    margin-bottom: 24px;
    font-family: 'Caveat', sans-serif;  
    font-size: 24px;    
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }`;

export const FInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: mone;
    font-family: "Architects Daughter"; 
    font-size: 14px; 
    border: 1px solid #fff;
    
    &::placeholder {
        color: #242424;
    }

    @media screen and (max-width: 820px){
        width: 100%;
        margin: 0 0 16px 0;
    }`;

    export const FooLnksCont = styled.div`
        width: 100%;
        max-width: 1000px;
        display: flex;
        justify-content: center;

        @media screen and (max-width: 820px) {
            padding-top: 32px;
        }`;

    export const FooLnksWrap = styled.div`
        display: flex;

        @media screen and (max-width: 820px){
            flex-direction: column;
        }`;

    export const FooterLnksIts = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 16px;
        text-align: left;
        width: 160px;
        box-sizing: border-box;
        color: #fff;

        @media screen and (max-width: 420px) {
            margin: 0;
            padding: 10px;
            width: 100%;
        }`;

    export const FooLink = styled(Link)`
        color: #fff;
        text-decoration: none;
        margin-bottom: 0.5rem;
        font-family: 'Caveat', sans-serif;  
        font-size: 24px; 

        &:hover {
            color: #0467fb;
            transition: 0.3s ease-out;
        }
    `;

    export const FooLTitle = styled.h2`
        margin-bottom: 16px;
        font-family: "Architects Daughter";
         font-size: 24px;
    `;

    export const SocialsNetworks = styled.section`
        max-width: 1000px;
        width: 100%;
    `;

    export const SocialsNetWrap = styled.div`
       display: flex;
       justify-content: space-between;
       align-items: center;
       width: 90%;
       max-width: 1000px;
       margin: 40px auto auto;

       @media screen and (max-width: 820px) {
           flex-direction: column;
       }`;

    export const SocialIcons = styled.div`
       display: flex;
       justify-content: space-between;
       align-items: center;
       width: 240px;
        
    `;

    export const SIconLnk= styled.a`
        color: #fff;
        font-size: 24px;
        
    `;

    export const WsRights = styled.small`
        color: #fff;
        margin-bottom: 16px;    
        font-family: 'Caveat', sans-serif;  
        font-size: 16px;      
    `;

    export const SLogo = styled(Link)`
       color: #fff;
       justify-self: start;
       cursor: pointer;
       text-decoration: none;
       font-family: "Architects Daughter";
       font-size: 24px;
       display: flex;
       align-items: center;
       margin-bottom: 16px;
    `;

    export const SIcon = styled(FaSlideshare)`
        margin-right: 10px;        
    `;