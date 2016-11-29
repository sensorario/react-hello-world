import React, { Component } from 'react';
import './MegaRandom.css';

class MegaRandom extends Component {

    // here we define the initial state
    constructor(props) {
        super(props);
        this.state = {
            value: props.valuel || 0,
            range: props.range ? props.range : 10000,
            interval: props.interval ? props.interval : 1000,
        };
    }

    // what happens after output is rendered
    // here we start to call tick
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            this.state.interval
        );
    }

    // component removed
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // tick is called every second
    tick() {

        // manage status change
        this.setState((prevState, props) => ({
            value: parseInt((Math.random() * prevState.range) + 1, 10)
        }));

        // handle father events
        this.props.handler(this.state.value);

    }

    // render the component 
    render() {
        if (this.state.value > 2000) {
            return null;
        }

        return (
            <div className="MegaRandom">
                <h1>random value {this.state.value}</h1>
            </div>
        );
    }
}

export default MegaRandom;
