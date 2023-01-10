import React, { Component } from 'react'

export default class Value extends Component {
    constructor(props) {
        super(props);
        this.state = {value:0}
    }
    incrementValue = () => {
        this.setState({value : this.state.value + 1})
    }
    decrementValue = () => {
        this.setState({value : this.state.value - 1})
    }
    render() {
        return (
            <>
                <div>{this.state.value}</div>
                <button type="button" onClick={this.incrementValue}>+</button>
                <button type="button" onClick={this.decrementValue}>-</button>
            </>
        )
    }
}