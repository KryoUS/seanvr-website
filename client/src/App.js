import React from 'react';
import Twitch from './components/twitch-embed';
import Youtube from './components/youtube-embed';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://res.cloudinary.com/complexityguild/image/upload/v1600567287/seanVR/seanVRLogo.png" className="App-logo" alt="logo" />
      </header>
      <div id="socials-large" className="flex-row-evenly">
        <a href="https://discord.gg/seanvr">
          <img src="https://res.cloudinary.com/complexityguild/image/upload/v1600638077/seanVR/discord_full.png" alt="discord" />
        </a>
        <a href="https://www.instagram.com/seanvrvr/">
          <img src="https://res.cloudinary.com/complexityguild/image/upload/v1600629584/seanVR/instagram_full.png" alt="instagram" />
        </a>
        <a href="https://www.tiktok.com/@sean_vr1">
          <img src="https://res.cloudinary.com/complexityguild/image/upload/v1600633516/seanVR/tiktok_full.png" alt="tiktok" />
        </a>
        <a href="https://www.twitch.tv/sean_vr">
          <img src="https://res.cloudinary.com/complexityguild/image/upload/v1600635993/seanVR/twitch_full.png" alt="twitchtv" />
        </a>
        <a href="https://twitter.com/SeanVr1/">
          <img src="https://res.cloudinary.com/complexityguild/image/upload/v1600636524/seanVR/twitter_full.png" alt="twitter" />
        </a>
        <a href="https://www.youtube.com/channel/UCTXez3yD0FbdgCuYwBlbrnQ">
          <img src="https://res.cloudinary.com/complexityguild/image/upload/v1600636873/seanVR/youtube_full.png" alt="youtube" />
        </a>
      </div>
      <div id="socials-mini" className="flex-row-evenly">
        <a href="https://discord.gg/seanvr">
          <img src="https://res.cloudinary.com/complexityguild/image/upload/v1600638077/seanVR/discord_logo.png" alt="discord" />
        </a>
        <a href="https://www.instagram.com/seanvrvr/">
          <img src="https://res.cloudinary.com/complexityguild/image/upload/v1600630356/seanVR/instagram_logo.png" alt="instagram" />
        </a>
        <a href="https://www.tiktok.com/@sean_vr1">
          <img src="https://res.cloudinary.com/complexityguild/image/upload/v1600633516/seanVR/tiktok_logo.png" alt="tiktok" />
        </a>
        <a href="https://www.twitch.tv/sean_vr">
          <img src="https://res.cloudinary.com/complexityguild/image/upload/v1600635737/seanVR/twitch_logo.png" alt="twitchtv" />
        </a>
        <a href="https://twitter.com/SeanVr1/">
          <img src="https://res.cloudinary.com/complexityguild/image/upload/v1600636524/seanVR/twitter_logo.png" alt="twitter" />
        </a>
        <a href="https://www.youtube.com/channel/UCTXez3yD0FbdgCuYwBlbrnQ">
          <img src="https://res.cloudinary.com/complexityguild/image/upload/v1600636873/seanVR/youtube_logo.png" alt="youtube" />
        </a>
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
