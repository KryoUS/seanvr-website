import React from 'react';

class YoutubeEmbed extends React.Component {
    render() {
        return (
            <iframe title={`LatestYoutube${this.props.index}`} id="youtube" className="video-frame"
                src={`https://www.youtube.com/embed?listType=playList&list=UUTXez3yD0FbdgCuYwBlbrnQ&index=${this.props.index}&modestbranding=1&origin=https://seanvr.net`} 
            />
        )
    }
}

export default YoutubeEmbed;