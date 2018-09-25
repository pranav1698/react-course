class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App'
        const subtitle = 'Put your life in the hands of a computer!!'
        const options = ['one', 'two', 'three', 'four']

        return <div>
            <Header title={title} subtitle={subtitle}/>
            <Action />
            <Options options={options}/>
            <AddOption />
        </div>
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
    handlePick(){
        alert('handlePick')
    }
    render() {
        return <div>
                    <button onClick={this.handlePick}>What should I do?</button>
                </div>;
    }
};

class Options extends React.Component {
    removeAll(){
        alert('remove');
    }
    render() {
        return <div>
                <button onClick={this.removeAll}>Remove All</button>
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
    onFormSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value;
        if(option) alert(option)
    }
    render() {
        return <div>
            <form onSubmit={this.onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>   
        </div>
    }
}

/*class Form extends React.Component {
    render() {
        return <form>
            <input type='text' name='option'/>
            <button>Add Option</button>
        </form>
    }
}*/


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));