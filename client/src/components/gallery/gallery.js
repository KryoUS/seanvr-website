import React from 'react';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import './gallery.css';
import 'react-image-gallery/styles/css/image-gallery.css';

class Gallery extends React.Component {
    constructor() {
        super();

        this.state = {
            gallery: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/gallery').then(res => {
            this.setState({ gallery: res.data });
        }).catch(err => {
            console.log('Server API Error!');
        });
    }

    render() {
        return <div className="flex-row-evenly">
            <div id="section-title">Gallery</div>
            <div id="gallery-container" className="flex-row-center">
                {this.state.gallery.length > 1 ? 
                    <ImageGallery items={this.state.gallery} lazyLoad={true} showBullets={true} /> : 
                    <div>Pictures are loading...</div>}
            </div>
        </div>
    }
}

export default Gallery;