class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state ={
            options: []
        }
    }
    render() {
        const title = 'Indecision App'
        const subtitle = 'Put your life in the hands of a computer!!'

        return <div>
            <Header title={title} subtitle={subtitle}/>
            <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
            <Options handleDeleteOptions={this.handleDeleteOptions} options={this.state.options}/>
            <AddOption handleAddOption={this.handleAddOption} />
        </div>
    }
    handlePick(){
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNumber]);
    }
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: [] 
            }
        })
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value!!'
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option),
            }
        })
    }
   
}

class Header extends React.Component {
    render(){
        return <div>
                    <h1>{this.props.title}</h1> 
                    <h2>{this.props.subtitle}</h2>
                </div>;            
    }
}

class Action extends React.Component {
    render() {
        return <div>
                    <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
                </div>;
    }
};

class Options extends React.Component {
    render() {
        return <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                { this.props.options.map((option, index) => <Option key={index} optionText={option}/>)}
            </div> 
    }
}

class Option extends React.Component {
    render() {
        return <div>
            {
                `Option: ${this.props.optionText}`
            }
        </div>
    }
}
class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }
    
    onFormSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value;
        e.target.elements.option.value = '';
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return {
                error: error
            }
        })
    }
    render() {
        return <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            
            </form>   
        </div>
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));