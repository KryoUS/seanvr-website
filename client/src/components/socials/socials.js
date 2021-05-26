import React from 'react';
import './socials.css';
import {ReactComponent as DiscordIcon} from '../../icons/discord.svg';
import {ReactComponent as InstagramIcon} from '../../icons/instagram.svg';
import {ReactComponent as TikTokIcon} from '../../icons/tiktok.svg';
import {ReactComponent as TwitchIcon} from '../../icons/twitch.svg';
import {ReactComponent as TwitterIcon} from '../../icons/twitter.svg';
import {ReactComponent as YoutubeIcon} from '../../icons/youtube.svg';

function Socials() {
    return (
        <div className="socials-container">
            <a href="https://discord.gg/seanvr" className="socials-icon" ><DiscordIcon className="icon" /></a>
            <a href="https://www.instagram.com/seanvrvr/" className="socials-icon" ><InstagramIcon className="icon" /></a>
            <a href="https://www.tiktok.com/@sean_vr1" className="socials-icon" ><TikTokIcon className="icon" /></a>
            <a href="https://www.twitch.tv/seanvr" className="socials-icon" ><TwitchIcon className="icon" /></a>
            <a href="https://twitter.com/SeanVr1/" className="socials-icon" ><TwitterIcon className="icon" /></a>
            <a href="https://www.youtube.com/channel/UCTXez3yD0FbdgCuYwBlbrnQ" className="socials-icon" ><YoutubeIcon className="icon" /></a>
        </div>
    )
}

export default Socials;