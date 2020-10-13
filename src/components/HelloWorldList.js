import React, { Component } from 'react';
import './HelloWorldList.css';
import HelloWorld from './HelloWorld';
import AddGreeter from './components/AddGreeter';

class HelloWorldList extends Component {
    constructor(props) {
        super(props);
        this.state = { greetings: ['Jim', 'Sally', 'Bob'] };
        this.addGreeting = this.addGreeting.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    renderGreetings() {
        return this.state.greetings.map(name => {
            return <HelloWorld 
                key={name} 
                name={name}     
                removeGreeting={this.removeGreeting}/>
        });
    }

    addGreeting(newName) {
        this.setState({ greetings: [...this.state.greetings, newName] })
    }

    removeGreeting(removeName) {
        const filteredGreetings = this.state.greetings.filter(name => {
            return name !== removeName;
        });
        this.setState({ greetings: filteredGreetings })
    }

    render() {
        return (
            <div className="HelloWorldList">
                <AddGreeter addGreeting={this.addGreeting} />
                {this.renderGreetings()}
            </div>
        );
    }
}

export default HelloWorldList;