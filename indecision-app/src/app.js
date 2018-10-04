import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from "./components/IndecisonApp"
import 'normalize.css/normalize.css';
import './styles/styles.scss';

/* class Header extends React.Component {
    render(){
        return <div>
                    <h1>{this.props.title}</h1> 
                    <h2>{this.props.subtitle}</h2>
                </div>;            
    }
}
 */


/* class Action extends React.Component {
    render() {
        return <div>
                    <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
                </div>;
    }
};
 */


/* class Options extends React.Component {
    render() {
        return <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                { this.props.options.map((option, index) => <Option key={index} optionText={option}/>)}
            </div> 
    }
} */

/* class Option extends React.Component {
    render() {
        return <div>
            {
                `Option: ${this.props.optionText}`
            }
        </div>
    }
} */



/* const User = (props) => {
    return <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
    </div>
};
 */

 
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

/* class OldSyntax {
    
    constructor() {
        this.name = "Pranav Kulshrestha";
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi, my name is ${this.name}`;
    }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

class NewSyntax{
    name = "Joe"
    getGreeting = () => {
        return `Hi, my name is ${this.name}`;
    } 

}
const newSyntax = new NewSyntax;
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting()); */