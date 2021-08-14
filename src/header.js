import React,{ useState } from 'react';
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
import { Link } from "react-router-dom";

function Header(){
    const [inputSearch,setinputSearch] = useState("");

    return (
        <div className="header">
            <div className="header__left">
                <Menu />
                <Link to="/"> 
                    <img className="header__logo" src={logo} alt="Youtube_logo"/>
                </Link>
                {/* <img className="header__logo" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt="Youtube_logo"/> */}
            </div>
            <div className="header-middle">
            <div className="header__input">
                <input 
                onChange = {(e => setinputSearch(e.target.value))} 
                value={inputSearch}
                type="text" 
                placeholder="Search" 
                className="input_style"/>
                <Link to={`/search/${inputSearch}`}>
                    <Search className="header__inputButton" />
                </Link>
                
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


