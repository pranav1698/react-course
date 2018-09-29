class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption =  this.handleDeleteOption.bind(this);
        this.state ={
            options: props.options
        }
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
    render() {
        const subtitle = 'Put your life in the hands of a computer!!'

        return <div>
            <Header  subtitle={subtitle}/>
            <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
            <Options handleDeleteOptions={this.handleDeleteOptions} options={this.state.options} handleDeleteOption={this.handleDeleteOption}/>
            <AddOption handleAddOption={this.handleAddOption} />
        </div>
    }
    handlePick(){
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNumber]);
    }
    handleDeleteOptions(){
        this.setState(() => ({options: []}))
    }
    handleDeleteOption(optionToRemove){
       this.setState((prevState) => ({
           options: prevState.options.filter((option) => {
                return optionToRemove != option;
           })
       }))
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value!!'
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
   
}
IndecisionApp.defaultProps = {
    options: []
}

/* class Header extends React.Component {
    render(){
        return <div>
                    <h1>{this.props.title}</h1> 
                    <h2>{this.props.subtitle}</h2>
                </div>;            
    }
}
 */

const Header = (props) => {
    return <div>
                <h1>{props.title}</h1> 
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>;
}

Header.defaultProps = {
    title: 'Indecision App!'
}
/* class Action extends React.Component {
    render() {
        return <div>
                    <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
                </div>;
    }
};
 */

const Action = (props) => {
    return <div>
                <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
            </div>;
}
/* class Options extends React.Component {
    render() {
        return <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                { this.props.options.map((option, index) => <Option key={index} optionText={option}/>)}
            </div> 
    }
} */
const Options = (props) => {
    return <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length == 0 && <p>Please add some options!!</p>}
        {props.options.map((option, index) => <Option handleDeleteOption={props.handleDeleteOption} key={index} optionText={option}/>)}
    </div>
}
/* class Option extends React.Component {
    render() {
        return <div>
            {
                `Option: ${this.props.optionText}`
            }
        </div>
    }
} */
const Option = (props) => {
    return <div>
    {
        `Option: ${props.optionText}`
    }
    <button onClick={(e) => {
        props.handleDeleteOption(props.optionText)
    }}>
        remove
    </button>
</div>
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
        
        this.setState(() => ({error: error}))

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

/* const User = (props) => {
    return <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
    </div>
};
 */
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));