import React, { Component } from 'react';
import './HelloWorldList.css';
import HelloWorld from './HelloWorld';

class HelloWorldList extends Component {
    constructor(props) {
        super(props);
        this.state = { greetings: ['Jim', 'Sally', 'Bob'] };
    }

    renderGreetings() {
        return this.state.greetings.map(name => {
            return <HelloWorld key={name} name={name} />
        });
    }

    render() {
        return (
            <div className="HelloWorldList">
                {this.renderGreetings()}
            </div>
        );
    }
}

export default HelloWorldList;