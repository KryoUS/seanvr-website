import React from 'react';

class SocialLink extends React.Component {

    render() {
        return <a href={this.props.link}>
            <img src={`https://seanvr.s3-us-west-2.amazonaws.com/${this.props.image}`} alt={this.props.alt} />
        </a>
    }
}

export default SocialLink;