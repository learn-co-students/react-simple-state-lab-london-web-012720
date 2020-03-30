import React, { Component } from "react";
import Cell from "./Cell.js";

export default class Matrix extends Component {
  genRow = vals => {
    const hi = vals.map((val, index) => {
      return <Cell value={val} key={index} />;
    });
    return hi;
  };

  genMatrix = () => {
    let count = 0;
    return this.props.values.map(rowVals => {
      count++;
      return (
        <div className="row" key={count}>
          {this.genRow(rowVals)}
        </div>
      );
    });
  };

  render() {
    return <div id="matrix">{this.genMatrix()}</div>;
  }
}
Matrix.defaultProps = {
  values: (() => {
    const defRow = [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00"
    ];
    return new Array(10).fill(defRow);
  })()
};
