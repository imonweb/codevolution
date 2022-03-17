import React, { Component } from "react"

export class Welcome extends Component {
  render(props) {
    return (
      <h1>
        Welcome {this.props.name} a.k.a {this.props.heroName}
      </h1>
    )
  }
}

export default Welcome
