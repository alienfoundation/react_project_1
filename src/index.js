import React from "react";
import ReactDOM from "react-dom";

import ToggleButton from "./components/toggleButton";
import InputField from "./components/inputField";

import "./styles.css";

function App() {
  //Toggle button ko as a tag use krna h..
  // jo bhi export krte h use as a tag use krna h
  return (
    <div className="App">
      <InputField />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
