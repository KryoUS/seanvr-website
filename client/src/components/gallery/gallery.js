import React from 'react';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import Loader from '../loader/loader';
import './gallery.css';
import 'react-image-gallery/styles/css/image-gallery.css';

class Gallery extends React.Component {
    constructor() {
        super();

        this.state = {
            gallery: [],
            videoSrc: '',
            showVideo: false,
            showError: false,
        }
    }

    componentDidMount = () => {
        axios.get('/api/gallery').then(res => {

            let data = res.data;

            data.push({
                original: "https://clips-media-assets2.twitch.tv/AT-cm%7C859314223-preview.jpg",
                thumbnail: "https://clips-media-assets2.twitch.tv/AT-cm%7C859314223-preview.jpg",
                embedUrl: 'https://clips.twitch.tv/embed?clip=HedonisticTangentialGazelleFrankerZ&parent=localhost',
                description: "Lone is definitely trying to seduce chat",
                renderItem: this._renderVideo.bind(this)
            });
            this.setState({ gallery: data });

        }).catch(err => {
            this.setState({ showError: true });
        });
    }

    _onSlide(index) {
        this._resetVideo();
    }

    _handleInputChange(state, event) {
        this.setState({ [state]: event.target.value });
    }

    _handleCheckboxChange(state, event) {
        this.setState({ [state]: event.target.checked });
    }

    _handleThumbnailPositionChange(event) {
        this.setState({ thumbnailPosition: event.target.value });
    }

    _resetVideo() {
        this.setState({ showVideo: false, videoSrc: '' });
    }

    _toggleShowVideo(url) {
        this.setState(prevState => ({
            showVideo: !prevState.check, videoSrc: url
          }));
    }

    _renderVideo(item) {
        return (
            <div>
                {
                    this.state.showVideo ?
                        <div className='video-wrapper'>
                            <div
                                className='close-video'
                                onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                            >
                            </div>
                            <iframe
                                width='100%'
                                height='100%'
                                src={item.embedUrl}
                                frameBorder='0'
                                allowFullScreen
                                preload="metadata"
                            >
                            </iframe>
                        </div>
                        :
                        <div className='video-wrapper' onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
                            <div className='play-button'></div>
                            <img className='image-gallery-image' src={item.original} />
                            {
                                item.description &&
                                <span
                                    className='image-gallery-description'
                                    style={{ right: '0', left: 'initial', marginRight: '20px' }}
                                >
                                    {item.description}
                                </span>
                            }
                        </div>
                }
            </div>
        );
    }

    render() {
        return <div className="flex-row-evenly">
            <div id="section-title">Gallery</div>
            <div id="gallery-container" className="flex-row-center">
                {this.state.gallery.length > 1 ?
                    <ImageGallery
                        items={this.state.gallery}
                        lazyLoad={true}
                        onSlide={this._onSlide.bind(this)}
                        showBullets={true}
                        additionalClass="app-image-gallery"
                    /> :
                    <Loader />}
                {this.state.showError && <div>ERROR MODAL GOES HERE</div>}
            </div>
        </div>
    }
}

export default Gallery;