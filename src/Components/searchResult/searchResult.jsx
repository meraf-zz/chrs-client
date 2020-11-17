import React, { Component } from 'react';

class searchResult extends Component {
    render() {
        return (
        <div>
            <div>
            <input type='text' placeholder="Location"></input>
            <input type='date' placeholder="Check-in Check-out"></input>
            <input type='text' placeholder="Room Type"></input>
            <input type='Button' value='Search'></input>
            </div>
            <div>

            </div>
        </div>
        );
    }
}

export default searchResult;