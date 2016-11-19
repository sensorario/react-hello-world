import React, { Component } from 'react';
import logo from './logo.svg';
import MegaRandom from './MegaRandom'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <MegaRandom
                    value="42"
                    range="9000"
                    interval="1000"
                />
                <MegaRandom
                    value="666"
                    range="10"
                    interval="500"
                />
            </div>
        );
    }
}

export default App;
