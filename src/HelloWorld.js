import React, { Component } from 'react'
import './HelloWorld.css'

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello', isEnglish: true }
    this.frenchify = this.frenchify.bind(this);
    this.anglicise = this.anglicise.bind(this);
    this.beepBoop = this.beepBoop.bind(this);
  }

  frenchify() {
    this.setState({ greeting: "Bonjour", isEnglish: false });
  }

  anglicise() {
    this.setState({ greeting: "Hello", isEnglish: true });
  }

  beepBoop() {
    this.setState({ greeting: "01001000 01100101 01101100 01101100 01101111 " });
  }

  render() {
    return (
      <div className="HelloWorld">
        <p 
          title="Secret button-thing! Press to communicate with a robot!"
          onClick={this.beepBoop}>
          {this.state.greeting}, {this.props.name}!
        </p>
        <br />
        { this.state.isEnglish
          ? <button onClick={this.frenchify}>Frenchify!</button>
          : <button onClick={this.anglicise}>Conquer!</button>
        }
      </div>
    );
  }
}

export default HelloWorld;
