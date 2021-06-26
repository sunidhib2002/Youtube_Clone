import React from 'react';
import './Recommendedvideos.css';
import VideoCard from './VideoCard';
import Channel_1 from './cleverpro.jpg';
import Avatar_1 from './image_1.jpg';
import Toggle from './Toggle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function RecommendedVideos() {
    return(
       <div className="RecommendedVideos">
           {/* <hr /> */}
           <div className="videos__header">
                <Toggle title="All" selected />
                <Toggle title="JavaScript"/>
                <Toggle title="HTML"/>
                <Toggle title="Computer Programming"/>
                <Toggle title="Courses"/>
                <Toggle title="Geometry"/>
                <Toggle title="React"/>
                <Toggle title="Music"/>
                <Toggle title="Acoustic guitar"/>
                <Toggle title="Watched"/>
                <ArrowForwardIosIcon />
           </div>
           {/* <hr /> */}
           {/* <h2>Recommended</h2> */}
           <div className="recommendedVideos__videos">
                <VideoCard 
                title="React Js tutorial 2021|Full Course for beginners" 
                channel="Clever Programmer" 
                views="3.3M views" 
                timestamp="10 months ago"
                channelImage={Channel_1}
                image={Avatar_1} />
                <VideoCard 
                title="React Js tutorial 2021|Full Course for beginners" 
                channel="Clever Programmer" 
                views="3.3M views" 
                timestamp="10 months ago"
                channelImage={Channel_1}
                image={Avatar_1} />
                <VideoCard 
                title="React Js tutorial 2021|Full Course for beginners" 
                channel="Clever Programmer" 
                views="3.3M views" 
                timestamp="10 months ago"
                channelImage={Channel_1}
                image={Avatar_1} />
                <VideoCard 
                title="React Js tutorial 2021|Full Course for beginners" 
                channel="Clever Programmer" 
                views="3.3M views" 
                timestamp="10 months ago"
                channelImage={Channel_1}
                image={Avatar_1} />
                <VideoCard 
                title="React Js tutorial 2021|Full Course for beginners" 
                channel="Clever Programmer" 
                views="3.3M views" 
                timestamp="10 months ago"
                channelImage={Channel_1}
                image={Avatar_1} />
                 <VideoCard 
                title="React Js tutorial 2021|Full Course for beginners" 
                channel="Clever Programmer" 
                views="3.3M views" 
                timestamp="10 months ago"
                channelImage={Channel_1}
                image={Avatar_1} />
                <VideoCard 
                title="React Js tutorial 2021|Full Course for beginners" 
                channel="Clever Programmer" 
                views="3.3M views" 
                timestamp="10 months ago"
                channelImage={Channel_1}
                image={Avatar_1} />
                <VideoCard 
                title="React Js tutorial 2021|Full Course for beginners" 
                channel="Clever Programmer" 
                views="3.3M views" 
                timestamp="10 months ago"
                channelImage={Channel_1}
                image={Avatar_1} />
                <VideoCard 
                title="React Js tutorial 2021|Full Course for beginners" 
                channel="Clever Programmer" 
                views="3.3M views" 
                timestamp="10 months ago"
                channelImage={Channel_1}
                image={Avatar_1} />
                 <VideoCard 
                title="React Js tutorial 2021|Full Course for beginners" 
                channel="Clever Programmer" 
                views="3.3M views" 
                timestamp="10 months ago"
                channelImage={Channel_1}
                image={Avatar_1} />
                <VideoCard 
                title="React Js tutorial 2021|Full Course for beginners" 
                channel="Clever Programmer" 
                views="3.3M views" 
                timestamp="10 months ago"
                channelImage={Channel_1}
                image={Avatar_1} />
                <VideoCard 
                title="React Js tutorial 2021|Full Course for beginners" 
                channel="Clever Programmer" 
                views="3.3M views" 
                timestamp="10 months ago"
                channelImage={Channel_1}
                image={Avatar_1} />
           </div>
       </div> 
    );
}

export default RecommendedVideos;