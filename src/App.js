import React, { Component } from 'react';
import logo from './logo.svg';
import MegaRandom from './MegaRandom'
import ListKeysComponent from './ListKeysComponent'
import './App.css';

class Title extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    handleClick (event) {
        console.log(this.state.counter);

        this.setState((prevState, props) => ({
            counter: prevState.counter + 1
        }));
    }

    render() {
        return (
            <h1 onClick={(event) => {this.handleClick(event)}}>Title</h1>
        );
    }

}

class App extends Component {

    onSomeEvent = (e) => {
        //console.log('something happens ' + e);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <Title value="42" />
                <ListKeysComponent />
                <MegaRandom handler={this.onSomeEvent} />
                <MegaRandom handler={this.onSomeEvent} />
                <MegaRandom handler={this.onSomeEvent} />
                <MegaRandom handler={this.onSomeEvent} />
                <MegaRandom handler={this.onSomeEvent} />
                <MegaRandom handler={this.onSomeEvent} />
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
