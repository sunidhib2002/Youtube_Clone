import React from 'react';
import Menu from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/Search';
import VideoCallSharp from '@material-ui/icons/VideoCallSharp';
import AppsSharp from '@material-ui/icons/AppsSharp';
import Notifications from '@material-ui/icons/Notifications';
//import Avatar from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import './header.css';
import Mic from '@material-ui/icons/Mic';
import logo from './logo_1.PNG';

function Header(){
    return (
        <div className="header">
            <div className="header__left">
                <Menu />
                {/* <img className="header__logo" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt="Youtube_logo"/> */}
                <img className="header__logo" src={logo} alt="Youtube_logo"/>
            </div>
            <div className="header-middle">
            <div className="header__input">
                <input type="text" placeholder="Search" className="input_style"/>
                <Search className="header__inputButton" />
            </div>
            <Mic className="header__mic"/>
            </div>

            <div className="header__icons">
                <VideoCallSharp className="header__icon" />
                <AppsSharp className="header__icon"/>
                <Notifications className="header__icon"/>
                <Avatar className="header__icon">S</Avatar>
            </div>
        </div>
    );
}

export default Header


