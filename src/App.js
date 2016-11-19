import React, { Component } from 'react';
import logo from './logo.svg';
import MegaRandom from './MegaRandom'
import './App.css';

class App extends Component {

    onSomeEvent = (e) => {
        console.log('something happens ' + e);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <MegaRandom
                    value="42"
                    range="9000"
                    interval="750"
                    handler={this.onSomeEvent}
                />
                <MegaRandom
                    value="666"
                    range="10"
                    interval="500"
                    handler={this.onSomeEvent}
                />
            </div>
        );

    }
}

export default App;
