// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

    displayProps = () =>{
        console.log(this.props)
    }

    handleClick = (event) => {
        event.persist()
        setTimeout(()=>{
            this.props.onDelayedClick(event)},
            this.props.delay)
    }


    render(){
        this.displayProps()
        return (
            <button onClick={this.handleClick}>Delay</button>
        )
    }

}
