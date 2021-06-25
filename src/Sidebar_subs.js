import React from 'react';
import './Sidebar_subs.css';
import Avatar from '@material-ui/core/Avatar';


function Sidebar_subs({title,img})
{
    return(
        <div className="sidebar_subs">
            <Avatar src={img} />
            <h2 className="sidebar_subs__title">{title}</h2>
        </div>
    );
}

export default Sidebar_subs;