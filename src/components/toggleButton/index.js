import React, { Component } from "react";

// toggle button class m component ko inherit kr rhe h
// iske baad isme changes krenge acoording to our requirement
class ToggleButton extends Component {
  // ye wala props toogleButton ko target kr rha h
  // iss constructor se hum toggleButton k properties jo initialize krni h use initialize kr rhe h
  constructor(props) {
    //react k constructor ko initialize krta h
    // "Component" wale constructor ko jo defualt h react m
    // state just acts a varible but react ka structure aisa h so hum aise hi use krenge.
    super(props);
    this.state = {
      heading: "I am a Toggle button",
      toggle: "ON"
    };
  }

  handleON = () => {
    // to change the value of the state we use this.setState
    this.setState({ heading: "OFF.", toggle: "OFF" });
    console.log("on");
  };
  handleOFF = () => {
    // to change the value of the state we use this.setState
    this.setState({ heading: "ON.", toggle: "ON" });
    console.log("off");
  };

  //jab bhi state change hoga to render function pura dobara chlega..

  // props ek parent se data ko leke aata h jise use kr sakte h sirf.. change ni kr sakte
  render() {
    return (
      <div>
        <h1>{this.state.heading}</h1>
        <h2>{this.props.name}</h2>
        {this.state.toggle == "ON" ? (
          <button onClick={this.handleON}>{this.state.toggle}</button>
        ) : (
          <button onClick={this.handleOFF}>{this.state.toggle}</button>
        )}
      </div>
    );
  }
}

// export krr rhe h jo bhi component humne banaya h...
// say ToggleButton
export default ToggleButton;
