import React, { Component } from "react";

class OutputTag extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Output Child: {this.props.output}</h2>
      </div>
    );
  }
}

export default OutputTag;
