import React from 'react';
import './Toggle.css';

function Toggle({selected,title}) {
    return (
        <div className={`toggle ${selected ? 'selected' : ' '}`}>
            <button className="toggle__button">{title}</button>
        </div>
    );
}

export default Toggle;