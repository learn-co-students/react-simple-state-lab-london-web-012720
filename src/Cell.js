import React, { Component } from "react";

class Cell extends Component {
  constructor(props) {
    super();
    this.state = {
      color: props.value,
      index: props.index
    };
  }
  changeColor = () => {
    this.setState({
      color: "#333"
    });
  };

  render() {
    return (
      <div
        className="cell"
        onClick={this.changeColor}
        style={{ backgroundColor: this.state.color }}
        key={this.state.index}
      ></div>
    );
  }
}

export default Cell;
