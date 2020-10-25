import React from 'react';
import './nav.css';

class Nav extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className="flex-row-center">
                <ul>
                    <li><div onClick={() => {this.props.refScroll('aboutRef')}}>About</div></li>
                    <li><div onClick={() => {this.props.refScroll('galleryRef')}}>Gallery</div></li>
                    <li><div onClick={() => {this.props.refScroll('goalsRef')}}>Goals</div></li>
                    <li className="dropdown">
                        <div className="dropbtn">Merch</div>
                        <div className="dropdown-content">
                            <a href="https://cuddlyoctopus.com/product/sean/" >Cuddly Octopus</a>
                            <a href="https://merch.streamelements.com/sean_vr">Streamlabs Merch</a>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;