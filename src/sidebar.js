import React from 'react';
import './sidebar.css';
import SidebarRow from './SidebarRow.js';
import Sidebar_subs from './Sidebar_subs.js';
import Home from '@material-ui/icons/Home';
import Explore from '@material-ui/icons/Explore';
import Subscriptions from '@material-ui/icons/Subscriptions'; 
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import WatchLater from '@material-ui/icons/WatchLater';
import ThumbUp from '@material-ui/icons/ThumbUp';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ApnaCollege from './apnacollege.jpg';
import Neso from './neso.jpg';
import LPU from './lpu.png';
import DropDown from './dropdown.png';
import Settings from '@material-ui/icons/Settings';
import Flag from '@material-ui/icons/Flag';
import Help from '@material-ui/icons/Help';
import Feedback from '@material-ui/icons/Feedback';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={Home} title="Home"/>
            <SidebarRow Icon={Explore} title="Explore"/>
            <SidebarRow Icon={Subscriptions} title="Subscriptions"/>
            <hr className="hr_style" />
            <SidebarRow Icon={VideoLibrary} title="Library"/>
            <SidebarRow Icon={History} title="History"/>
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos"/>
            <SidebarRow Icon={WatchLater} title="Watch later"/>
            <SidebarRow Icon={ThumbUp} title="Liked Videos"/>
            <hr className="hr_style" />
            <h2 className="heading">SUBSCRIPTIONS</h2>
            <Sidebar_subs title="Apna College" img={ApnaCollege}/>
            <Sidebar_subs title="School of CSE" img={LPU}/>
            <Sidebar_subs title="Neso Academy" img={Neso}/>
            <Sidebar_subs title="Show more" img={DropDown}/>
            <hr className="hr_style" />
            <SidebarRow Icon={Settings} title="Settings"/>
            <SidebarRow Icon={Flag} title="Report History"/>
            <SidebarRow Icon={Help} title="Help"/>
            <SidebarRow Icon={Feedback} title="Send feedback"/>
        </div>
    );
}

export default Sidebar;