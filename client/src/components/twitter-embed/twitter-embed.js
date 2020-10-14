import React from 'react';
import useScript from '../hooks/useScript';

function TwitterEmbed() {
    useScript('https://platform.twitter.com/widgets.js');
    return (
        <a className="twitter-timeline" data-height="600" data-width="400" data-theme="dark" href="https://twitter.com/SeanVr1?ref_src=twsrc%5Etfw">Tweets by SeanVr</a>
    )
}

export default TwitterEmbed;