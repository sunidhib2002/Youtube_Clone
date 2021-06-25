import React from 'react';
import './Recommendedvideos.css';
import VideoCard from './VideoCard';
import Channel_1 from './cleverpro.jpg';
import Avatar_1 from './image_1.jpg';

function RecommendedVideos() {
    return(
       <div className="RecommendedVideos">
           <h2>Recommended</h2>
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