import React from "react";
import  AddOption from "./AddOption";
import Header from "./Header";
import Options from "./Options";
import Action from "./Action"

export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options
    }
    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNumber]);
    }
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}))
    }
    handleDeleteOption = (optionToRemove) => {
       this.setState((prevState) => ({
           options: prevState.options.filter((option) => {
                return optionToRemove != option;
           })
       }))
    }
    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value!!'
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer!!'

        return <div>
            <Header  subtitle={subtitle}/>
            <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
            <Options handleDeleteOptions={this.handleDeleteOptions} options={this.state.options} handleDeleteOption={this.handleDeleteOption}/>
            <AddOption handleAddOption={this.handleAddOption} />
        </div>
    }
    componentDidMount() {
        try{
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        
        if(options) {
            this.setState(() => ({options: options}))
        }
        } catch(e) {

        }   
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.length !==  this.state.options.length) localStorage.setItem('options', JSON.stringify(this.state.options))
    }
    componentWillUnmount() { 
        console.log('component will unmount')
    }
   
}
IndecisionApp.defaultProps = {
    options: []
}