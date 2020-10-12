import React, { Component } from 'react'
import './HelloWorld.css'

class HelloWorld extends Component {
  render() {
    return (
      <div className="HelloWorld">
        <p>Hello, {this.props.name}!</p>
      </div>
    );
  }
}

export default HelloWorld;
