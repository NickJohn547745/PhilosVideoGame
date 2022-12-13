import React from 'react'
import ReactPlayer from 'react-player'

export function PhilVideoPlayer(props){
    return ( 
        <ReactPlayer id="videoPlayer" 
            url={props.url} 
            ref={props.playerRef} 
            onProgress={props.onProgress}
            controls={true}
            playing={props.playing}
            onPlay={props.play}
            onPause={props.pause}
        />
    )
}
