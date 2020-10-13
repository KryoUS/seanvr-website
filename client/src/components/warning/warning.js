import React from 'react';
import Content from '../content';
import './warning.css';

class Warning extends React.Component {
  constructor() {
    super();

    this.state = {
        show: true
    };
  };

  toggleWarning = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    return (
      this.state.show ? <div className="warning-modal">
        <img id="warning-logo" src="https://d3mb8zw3wuinah.cloudfront.net/seanVRAboutMe.png" alt="about SeanVR" />
        <div className="warning-title">WARNING: This website may contain mature content!</div>
        <div id="warning-subtext" className="warning-title">(By clicking "I Understand" you signify that you are at least 18 years of age.)</div>
        <div id="warning-buttons-container" className="flex-row-evenly">
          <div id="button-yes" className="button" onClick={() => this.toggleWarning()}>I Understand</div>
          <a id="button-no" className="button" href="https://www.google.com">No Thanks</a>
        </div>
      </div> : <Content />
    )
  }
}

export default Warning;