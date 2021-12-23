import React, {useState, useEffect} from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import { Button } from "../../globalStyles";
import {
    Nav,
    NavbCont,
    NavLogo,
    NavIcon,
    SliderIcon,
    NMenu,
    NavItem,
    NavItBtn,
    NLinks,
    NavBtnLink
  } from './Navbar.elements';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const changeMobileMenu = () => setClick(false);

    const sButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        sButton();
    }, []);

    window.addEventListener('resize', sButton);

    return (
        <>
        <IconContext.Provider value={{ color: 'red' }}>
             <Nav>
                <NavbCont>
                    <NavLogo to='/' onClick={changeMobileMenu}>
                        <NavIcon/>
                        Sigma
                    </NavLogo>
                    <SliderIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </SliderIcon>
                    <NMenu onClick={handleClick} click={click}>
                        <NavItem>
                        <NLinks to='/' onClick={changeMobileMenu}>Home</NLinks>
                        </NavItem>
                        <NavItem>
                            <NLinks to='/services'>services</NLinks>
                        </NavItem>
                         <NavItem>
                            <NLinks to='/products'>Products</NLinks>
                        </NavItem>
                        <NavItBtn>
                            {button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/sign-up'>
                                    <Button onClick={changeMobileMenu} fontBig primary>
                                        SIGN UP
                                    </Button> 
                                </NavBtnLink>
                            )}
                        </NavItBtn>
                    </NMenu>
                    
                </NavbCont>
            </Nav>
        </IconContext.Provider>           
            
        </>
    );
}

export default Navbar;