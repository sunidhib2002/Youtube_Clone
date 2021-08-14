import React from 'react';
import './Searchpage.css';
import TuneIcon from '@material-ui/icons/Tune';

function SearchPage(){
    return (
        <div className = "SearchPage">
            <div className="searchPage_filter"> 
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
        </div>
    )
}

export default SearchPage