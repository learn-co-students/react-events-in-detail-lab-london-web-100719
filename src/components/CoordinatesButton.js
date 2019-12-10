import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

	logCoords = (event) => {

		this.coords = [event.clientX, event.clientY]
		this.props.onReceiveCoordinates(this.coords)

	}
	
	render() {
		return (
			<button onClick={this.logCoords}>
				oof
			</button>
		);
	}
}