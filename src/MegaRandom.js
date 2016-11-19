import React, { Component } from 'react';
import './MegaRandom.css';

class MegaRandom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            this.props.interval
        );
    }

    tick() {
        var randomValue = (Math.random() * this.props.range);
        var value = parseInt(randomValue + 1, 10)
        this.setState({
            value: value
        });
    }

    // this is never used
    componentWillUnmount() {
        console.log('unmount header');
    }

    render() {
        return (
            <div className="MegaRandom">
                <h1>random value {this.state.value}</h1>
            </div>
        );
    }
}

export default MegaRandom;
