import React, { useState } from 'react';

import { ReactComponent as Logo } from '../../assets/asb_logo.svg';
import home from '../../assets/home.svg';
import entries from '../../assets/entries.svg';
import divisions from '../../assets/divisions.svg';
import searchIcon from '../../assets/search_icon.svg';
import notificationBell from '../../assets/notification_bell.svg';
import person from '../../assets/person.svg';
import caretDown from '../../assets/caret_down.svg';
import './header.styles.scss';

const Header = () => {

    const [ open, setOpen ] = useState(false);
    // const [ searchQuery, setSearchQuery ] = useState('');
    // const [ searchResults, setSearchResults ] = useState([]);
    // const [ totalResults, setTotalResults ] = useState('');

    const toggleMenu = () => setOpen(!open);

    const handleChange = () => {
        // code goes here
    }

    return (
        <header className='header'>
            <div className="header-inner-div">
                <div className="logo-div">
                    <Logo className='logo' />
                    <span className="logo-text">FE Engineer Test 1</span>
                </div>
                <div className="menu-btn" onClick={toggleMenu}>
                    <span className={` ${ open ? 'open' : '' }  menu-btn__burger`}></span>
                </div>
                <nav className={` ${ open ? 'open' : '' } nav`}>                
                    <ul className={` ${ open ? 'open' : '' } menu-nav`}>
                        <li className={` ${ open ? 'open' : '' } activeItem menu-nav-item`}>
                            <img src={home} alt="home icon" className="menu-nav-link-icon"/>
                            <span className="menu-nav-link" onClick={toggleMenu}>Home</span>
                        </li>
                        <li className={` ${ open ? 'open' : '' } activeItem menu-nav-item`}>
                            <img src={entries} alt="entry icon" className="menu-nav-link-icon"/>
                            <span className="menu-nav-link" onClick={toggleMenu}>Entries</span>
                        </li>
                        <li className={` ${ open ? 'open' : '' } activeItem menu-nav-item`}>
                            <img src={divisions} alt="division icon" className="menu-nav-link-icon"/>
                            <span className="menu-nav-link" onClick={toggleMenu}>Divisions</span>
                        </li>
                    </ul>
                </nav>
                <div className="search-bell-person-div">
                    <div className='search-input-div'>
                        <input 
                            type='text' 
                            value=""
                            className='search-input'
                            onChange={handleChange}
                        />
                        <img src={searchIcon} alt="search-icon" className="search-icon"/>
                        {/* <i className="fas fa-search"></i> */}
                    </div>
                    <div className="notification-div">
                        <img src={notificationBell} alt="notification bell"/>
                    </div>
                    <div className="person-div">
                        <img className="person-icon" src={person} alt="person"/>
                        <img className="caret-icon" src={caretDown} alt="caret down icon"/>
                    </div>
                </div>              
            </div>
        </header>
    )
}

export default Header;