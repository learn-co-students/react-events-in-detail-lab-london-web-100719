// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    constructor(props){
        super(props)
       // this.state = {key: "value"}
      
    }
      
    clickHandler = (event) => {
        //console.log("clicked")
        //console.log(event.screenX)
        let coord = [event.screenX,event.screenY]
        //console.log(coord)
        this.props.onReceiveCoordinates(coord)
    }

    render(){
        return (
            <button
               onClick={this.clickHandler}
            >Coordinates
            </button>
        )
    }

}
