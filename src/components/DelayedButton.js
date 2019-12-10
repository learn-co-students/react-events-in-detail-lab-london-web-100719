import React, { Component } from "react";

class DelayButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleButton = event => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };
  render() {
    return <button onClick={this.handleButton} />;
  }
}

export default DelayButton;
