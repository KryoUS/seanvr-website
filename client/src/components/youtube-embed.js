import React from 'react';

class YoutubeEmbed extends React.Component {
    render() {
        return (
            <iframe title={`LatestYoutube${this.props.index}`} id="youtube" className="video-frame"
                src={`https://www.youtube.com/embed/videoseries?list=UUTXez3yD0FbdgCuYwBlbrnQ&index=${this.props.index}&modestbranding=1`} 
            />
        )
    }
}

export default YoutubeEmbed;