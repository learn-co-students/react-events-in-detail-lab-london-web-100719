import React, { Component } from "react";

class CoordinatesButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleButton = event => {
    const array = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(array);
  };
  render() {
    return <button onClick={this.handleButton} />;
  }
}

export default CoordinatesButton;
