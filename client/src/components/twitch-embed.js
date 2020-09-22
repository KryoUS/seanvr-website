import React from 'react';

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class TwitchEmbed extends React.Component {
    componentDidMount() {
        // eslint-disable-next-line
        let embed;
        const script = document.createElement('script');
        script.setAttribute(
            'src',
            EMBED_URL
        );
        
        script.addEventListener('load', () => {
            embed = new window.Twitch.Embed(this.props.targetID, { ...this.props });
        });
        
        document.body.appendChild(script);
    }

    render() {
        return (
            <div id={this.props.targetID} className="video-frame"/>
        )
    }
}

TwitchEmbed.defaultProps = {
    targetID: 'twitch-embed',
    width: '100%',
    height: '100%',
    layout: 'video',
}

export default TwitchEmbed;