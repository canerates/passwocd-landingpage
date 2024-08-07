import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import React, {useState} from 'react';
import logo from '../assets/webpage-logo.png';

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';

function NavigationBar() {
    const [navStatus, setNavStatus] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNavStatus(true);
        }
        else {
            setNavStatus(false);
        }
    }

    const { t, i18n } = useTranslation();
  
    useEffect(() => {
      const lng = navigator.language;
      i18n.changeLanguage(lng);
    }, []);

    window.addEventListener('scroll', changeBackground);

    return(
            <Navbar expand='xs' fixed='top' container='md' className={navStatus ? 'navbar-active' : ''}>
                <NavbarBrand href='/'>
                    <div className='logo'>
                        <img src={logo} alt=''/>
                    </div>
                </NavbarBrand>
                <Nav className='nav-opened ms-auto' navbar>
                    <NavItem>
                        <a className='nav-link' activeClass='active' target='_blank' rel='noopener noreferrer' href='https://apps.apple.com/app/passwocd-password-generator/id6529549759'>{t('translations:download')}</a>
                    </NavItem>
                </Nav> 
            </Navbar>
    );
}

export default NavigationBar;
