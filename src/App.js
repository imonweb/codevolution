import React, { Component } from "react"
// import logo from "./logo.svg"
import "./App.css"
import Greet from "./components/Greet"
import Welcome from "./components/Welcome"
import Hello from "./components/Hello"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Jack" heroName="Superman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Jake" heroName="Green Lantern">
          <button>click me</button>
        </Greet>
        <Greet name="Josh" heroName="Aswete Man" />
        <Welcome name="Jack" heroName="Superman" />
        <Welcome name="Jake" heroName="Green Lantern" />
        <Welcome name="Josh" heroName="Aswete Man" name="Josh" heroName="Aswete Man" />
        {/* <Welcome />
        <h1>
          <Hello />
        </h1> */}
      </div>
    )
  }
}

export default App
