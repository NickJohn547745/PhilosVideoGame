import React, { useRef } from 'react'
import ReactPlayer from './react-player'

export function PhilVideoPlayer(props) {
    const playerRef = useRef(null);

    const [playing, setPlaying] = React.useState(false)
    const play = () => setPlaying(true)
    const pause = () => setPlaying(false)

    const onProgress = (state) => {
        if (state.playedSeconds >= props.endTime) {
            setPlaying(false);

            var videoDiv = document.getElementById(props.videoId);
            var quiz = document.getElementById(props.quizId);

            videoDiv.style.display = 'none';
            quiz.style.display = 'block';
        }
    }

    return (
        <ReactPlayer id="videoPlayer"
            url={props.url}
            ref={playerRef}
            onProgress={onProgress}
            controls={true}
            playing={playing}
            onPlay={play}
            onPause={pause}
            stopTime={props.stopTime}
            quizId={props.quizId}
            config={{
                youtube: {
                    playerVars: {
                        start: props.startTime
                    }
                }
            }}
        />
    )
}
