import React from 'react';
import Twitch from './components/twitch-embed';
import Youtube from './components/youtube-embed';
import SocialLink from './components/socials-link';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://seanvr.s3-us-west-2.amazonaws.com/seanVRLogo.png" className="App-logo" alt="logo" />
      </header>
      <div id="socials-large" className="flex-row-evenly">
        <SocialLink link="https://discord.gg/seanvr" image="discord_full.png" alt="discord" />
        <SocialLink link="https://www.instagram.com/seanvrvr/" image="instagram_full.png" alt="instagram" />
        <SocialLink link="https://www.tiktok.com/@sean_vr1" image="tiktok_full.png" alt="tiktok" />
        <SocialLink link="https://www.twitch.tv/sean_vr" image="twitch_full.png" alt="twitchtv" />
        <SocialLink link="https://twitter.com/SeanVr1/" image="twitter_full.png" alt="twitter" />
        <SocialLink link="https://www.youtube.com/channel/UCTXez3yD0FbdgCuYwBlbrnQ" image="youtube_full.png" alt="youtube" />
      </div>
      <div id="socials-mini" className="flex-row-evenly">
        <SocialLink link="https://discord.gg/seanvr" image="discord_logo.png" alt="discord" />
        <SocialLink link="https://www.instagram.com/seanvrvr/" image="instagram_logo.png" alt="instagram" />
        <SocialLink link="https://www.tiktok.com/@sean_vr1" image="tiktok_logo.png" alt="tiktok" />
        <SocialLink link="https://www.twitch.tv/sean_vr" image="twitch_logo.png" alt="twitchtv" />
        <SocialLink link="https://twitter.com/SeanVr1/" image="twitter_logo.png" alt="twitter" />
        <SocialLink link="https://www.youtube.com/channel/UCTXez3yD0FbdgCuYwBlbrnQ" image="youtube_logo.png" alt="youtube" />
      </div>
      <div className="flex-row-evenly">
        <div id="col1" className="two-row-col">
          <Youtube index={0} />
          <Youtube index={1} />
        </div>
        <Twitch channel={'sean_vr'} />
        <div id="col3" className="two-row-col">
          <Youtube index={2} />
          <Youtube index={3} />
        </div>
      </div>
      <div className="socials-embeds">
        <a className="twitter-timeline" data-height="600" data-width="400" href="https://twitter.com/SeanVr1?ref_src=twsrc%5Etfw">Tweets by SeanVr</a>
        <iframe title="discord-embed" src="https://discordapp.com/widget?id=540600422185041936&theme=dark" width="400" height="600" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
    </div>
  );
}

export default App;
