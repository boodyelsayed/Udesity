import React from "react";
import './Player.css'
import video from '../../assets/video-player.mp4'


const Player = () => {
    return (
        <div className="video-player">
            <video src={video} autoPlay muted controls></video> 
            
        </div>
    )
}

export default Player