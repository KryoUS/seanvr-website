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
            console.log(res.data);
        }).catch(err => {
            this.setState({ showError: true });
        });
    }

    buildTable = (obj) => {

    }

    render() {
        return (
            <div className="stream-goals">
                <div id="stream-goals-title" className="section-title">Stream Goals</div>
                <div id="stream-goals-container" className="flex-row-center">
                    <div className="stream-goals-header flex-row-center">
                        <div id="stream-goals-cell" className="stream-goals-cell">Subs</div>
                        <div id="stream-goals-big-cell" className="stream-goals-cell">Description</div>
                        <div id="stream-goals-cell" className="stream-goals-cell">Mods</div>
                    </div>
                    {this.state.sheetData.length > 0 ?
                        this.state.sheetData.map(obj => {
                            return <div style={{ textDecoration: obj.goalReached && 'line-through' }} className="stream-goals-row flex-row-center">
                                <div id="stream-goals-cell" className="stream-goals-cell">{obj.amount}</div>
                                <div id="stream-goals-big-cell" className="stream-goals-cell">{obj.description}</div>
                                <div id="stream-goals-cell" className="stream-goals-cell">{obj.forMods ? 'Yes' : 'No'}</div>
                            </div>
                        })
                        :
                        <Loader />}
                    {this.state.showError && <div>ERROR MODAL GOES HERE</div>}
                </div>
            </div>
        )
    }
}

export default StreamGoals;