import React from 'react';

class SocialLink extends React.Component {

    render() {
        return <a href={this.props.link}>
            <img src={`https://assets.seanvr.net/${this.props.image}`} alt={this.props.alt} />
        </a>
    }
}

export default SocialLink;