// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    render() {
        return (
            <div>
                <button onClick = {event => {
                    event.persist()
                    setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
                }}>hello</button>
            </div>
        )
    }
}
