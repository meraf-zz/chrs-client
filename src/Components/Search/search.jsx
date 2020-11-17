import React, { Component } from 'react';

class search extends Component {
    render() {
        return (
            <div>
            <input type='text' placeholder="Location"></input>
            <input type='date' placeholder="Check-in Check-out"></input>
            <input type='text' placeholder="Room Type"></input>
            <input type='Button' value='Search'></input>
            </div>
        );
    }
}

export default search;