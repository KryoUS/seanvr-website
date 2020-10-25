import React from 'react';
import Nav from './nav/nav';
import Twitch from './twitch-embed';
import Youtube from './youtube-embed';
import Twitter from './twitter-embed/twitter-embed';
import Gallery from './gallery/gallery';
import StreamGoals from './stream-goals/stream-goals';
import ScrollArrow from './scroll-top/scroll-top';

class Content extends React.Component {
  constructor() {
    super();

    this.goalsRef = React.createRef();
    this.aboutRef = React.createRef();
    this.galleryRef = React.createRef();
  }

  refScroll = (ref) => {
    setTimeout(() => { this[ref].current.scrollIntoView({ block: 'start', behavior: 'smooth' }) }, 250);
  }

  render() {
    return (
      <div>
        <Nav refScroll={this.refScroll} />
        <div className="flex-row-evenly app-section main-embeds">
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
        <div className="flex-row-evenly app-section">
          <div className="section-title" ref={this.aboutRef}>About Me</div>
          <img id="about-image" src="https://d3mb8zw3wuinah.cloudfront.net/seanVRAboutMe.png" alt="about SeanVR" />
          <div id="about-text-container">
            <p id="about-text">
              Hello! I'm Sean, the small sassy Scottish Fox who goes on crazy adventures, always says the wrong thing, and gets in trouble with his friends.
              I'm a full time streamer on Twitch.tv, a content creator on Youtube and TikTok, and am part of a wonderful community ran by my friends on Discord.
              <br /><br />
              Come, join me as I adventure through VRChat with my friends as we explore crazy worlds and push the limits on Terms of Service.
            </p>
          </div>
        </div>
        <div className="gradient-line-black" />
        <StreamGoals goalsRef={this.goalsRef} />
        <div className="gradient-line-black" />
        <Gallery galleryRef={this.galleryRef} />
        <div className="gradient-line-black" />
        <div className="socials-embeds app-section">
          <Twitter />
          <iframe title="discord-embed" src="https://discordapp.com/widget?id=540600422185041936&theme=dark" width="400" height="600" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
        <div className="flex-row-evenly">
          <div className="credits">Created with love by <a href="https://taurussho89.wixsite.com/portfolio">KryoUS</a> |
          Artwork by <a href="https://lilyth.art/">Lilyth.Art</a> | Coloring by <a href="https://tanksi.art/">Tanksi</a></div>
        </div>
        <ScrollArrow />
      </div>
    );
  }
}

export default Content;
