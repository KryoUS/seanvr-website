import React from 'react';
import Loader from '../loader/loader';
import axios from 'axios';
import './stream-goals.css';

class StreamGoals extends React.Component {
    constructor() {
        super();

        this.state = {
            sheetData: [],
            showError: false
        }
    }

    componentDidMount = () => {
        axios.get('/api/stream/goals').then(res => {
            this.setState({ sheetData: res.data});
        }).catch(err => {
            this.setState({ showError: true });
        });
    }

    buildTable = (obj) => {

    }

    render() {
        return (
            <div className="stream-goals" ref={this.props.goalsRef}>
                <div id="stream-goals-title" className="section-title">Stream Goals</div>
                {!this.state.showError && <div id="stream-goals-subtitle" className="section-title">New Subs, Gifted Subs, and Resubs Count Towards Goal</div>}
                {!this.state.showError && <div id="stream-goals-subtitle" className="section-title">Goals in White Pay Moderators!</div>}
                <br />
                <div id="stream-goals-container" className="flex-row-center">
                    <div className="stream-goals-header flex-row-center">
                        {!this.state.showError && <div id="stream-goals-cell" className="stream-goals-cell">Subs</div>}
                        {!this.state.showError && <div id="stream-goals-big-cell" className="stream-goals-cell">Description</div>}
                    </div>
                    {this.state.sheetData.length > 0 ?
                        this.state.sheetData.map(obj => {
                            return <div key={'goals'+obj.amount} style={{ textDecoration: obj.goalReached && 'line-through' }} className="stream-goals-row flex-row-center">
                                <div style={{ 
                                    color: obj.forMods && 'white', 
                                    textShadow: obj.forMods && '2px 2px 10px black' 
                                }} id="stream-goals-cell" className="stream-goals-cell">{obj.amount}</div>
                                <div style={{ 
                                    color: obj.forMods && 'white', 
                                    textShadow: obj.forMods && '2px 2px 10px black' 
                                }} id="stream-goals-big-cell" className="stream-goals-cell">{obj.description}</div>
                            </div>
                        })
                        :
                        this.state.showError ? 
                            <div style={{color: 'yellow', fontSize: '1.5rem'}} id="stream-goals-subtitle" className="section-title">There was an error loading the stream goals!<br/>Please try again later...</div> 
                            : 
                            <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default StreamGoals;