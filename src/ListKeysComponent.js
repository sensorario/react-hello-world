import React, { Component } from 'react';

class ListKeysComponent extends Component {
    constructor(props) {
        super(props);

        const numbers = [1, 2, 3, 5, 8, 13];
        const doubled = numbers.map((number) => number * 2);

        this.state = {
            numbers: numbers,
            doubled: doubled
        };
    }

    buildList() {
        return this.state.numbers.map((number) => {
            return (
                <li key={number}>{number * 2}</li>
            );
        });
    }


    render() {
        if (this.state.value > 2000) {
            return null;
        }

        return (
            <div>
                <ul>
                    {this.buildList()}
                </ul>
            </div>
        );
    }
}

export default ListKeysComponent;
