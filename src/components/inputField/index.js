import React, { Component } from "react";

import OutputTag from "../ouputTag";

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "..."
    };
  }

  valueUpdate = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.valueUpdate} />
        <h2 style={{ color: "blue" }}>
          Ouput Same File: {this.state.inputValue}
        </h2>
        <OutputTag output={this.state.inputValue} />
      </div>
    );
  }
}

export default InputField;
