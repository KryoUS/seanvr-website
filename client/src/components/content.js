import React from 'react';
import useScript from './hooks/useScript'
import Twitch from './twitch-embed';
import Youtube from './youtube-embed';
import SocialLink from './socials-link';
import Gallery from './gallery/gallery';

function Content() {
  useScript('https://platform.twitter.com/widgets.js');
  return (
    <div>
      <header className="App-header">
        <img src="https://d3mb8zw3wuinah.cloudfront.net/seanVRLogo.png" className="App-logo" alt="logo" />
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <SocialLink link="https://cuddlyoctopus.com/product/sean/" image="cuddly_Octopus_full.png" alt="cuddly octopus" />
              <SocialLink link="https://discord.gg/seanvr" image="discord_full.png" alt="discord" />
              <SocialLink link="https://www.instagram.com/seanvrvr/" image="instagram_full.png" alt="instagram" />
              <SocialLink link="https://www.tiktok.com/@sean_vr1" image="tiktok_full.png" alt="tiktok" />
              <SocialLink link="https://www.twitch.tv/sean_vr" image="twitch_full.png" alt="twitchtv" />
              <SocialLink link="https://twitter.com/SeanVr1/" image="twitter_full.png" alt="twitter" />
              <SocialLink link="https://www.youtube.com/channel/UCTXez3yD0FbdgCuYwBlbrnQ" image="youtube_full.png" alt="youtube" />
            </ul>
          </div>
        </nav>
      </header>
      <div id="socials-large" className="flex-row-evenly">
        <SocialLink link="https://cuddlyoctopus.com/product/sean/" image="cuddly_Octopus_full.png" alt="cuddly octopus" />
        <SocialLink link="https://discord.gg/seanvr" image="discord_full.png" alt="discord" />
        <SocialLink link="https://www.instagram.com/seanvrvr/" image="instagram_full.png" alt="instagram" />
        <SocialLink link="https://www.tiktok.com/@sean_vr1" image="tiktok_full.png" alt="tiktok" />
        <SocialLink link="https://www.twitch.tv/sean_vr" image="twitch_full.png" alt="twitchtv" />
        <SocialLink link="https://twitter.com/SeanVr1/" image="twitter_full.png" alt="twitter" />
        <SocialLink link="https://www.youtube.com/channel/UCTXez3yD0FbdgCuYwBlbrnQ" image="youtube_full.png" alt="youtube" />
      </div>
      <div id="socials-mini" className="flex-row-evenly">
        <SocialLink link="https://cuddlyoctopus.com/product/sean/" image="cuddly_Octopus_logo.png" alt="cuddly octopus" />
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
      <div className="gradient-line-black" />
      <div className="flex-row-evenly">
        <div id="section-title">About Me</div>
        <img id="about-image" src="https://d3mb8zw3wuinah.cloudfront.net/seanVRAboutMe.png" alt="about SeanVR" />
        <div id="about-text-container">
          <p id="about-text">
            Hello! Im Sean, the small sassy Scottish Fox who goes on crazy adventures, always says the wrong thing, and gets in trouble with his friends.
            Im a full time streamer on Twitch.tv, a content creator on Youtube and TikTok, and am part of a wonderful community ran by my friends on Discord.
            <br/><br/>
            Come, join me as I adventure through VRChat with my friends as we explore crazy worlds and push the limits on Terms of Service.
          </p>
        </div>
      </div>
      <div className="gradient-line-black" />
      <Gallery />
      <div className="gradient-line-black" />
      <div className="socials-embeds">
        <a className="twitter-timeline" data-height="600" data-width="400" data-theme="dark" href="https://twitter.com/SeanVr1?ref_src=twsrc%5Etfw">Tweets by SeanVr</a>
        <iframe title="discord-embed" src="https://discordapp.com/widget?id=540600422185041936&theme=dark" width="400" height="600" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
      <div className="flex-row-evenly">
        <div className="credits">Created with love by <a href="https://taurussho89.wixsite.com/portfolio">KryoUS</a> | 
        Artwork by <a href="https://lilyth.art/">Lilyth.Art</a> | Coloring by <a href="https://tanksi.art/">Tanksi</a></div>
      </div>
    </div>
  );
}

export default Content;
