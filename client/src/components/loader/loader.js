import React, { Component } from 'react';
import './loader.css';

class Loader extends Component {

    render() {
        return (
            <div className="lds-roller" style={{transform: `scale(${this.props.scale})`, margin: this.props.margin}} >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}

export default Loader;