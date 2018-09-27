class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = 
        {
            count: 0
            
        }
    }
    componentDidMount(){        
        this.setState(() => ({count: parseInt(localStorage.getItem('count'), 10)}))
    }
    componentDidUpdate(prevDrops, prevState){
        if(prevState.count != this.state.count) localStorage.setItem('count', this.state.count);
    }   
    handleAdd(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    handleSubtract() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    handleReset(){
       this.setState(() => {
           return {
               count: 0
           }
       })
    }
    
    render(){
        return <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAdd}>+1</button>
            <button onClick={this.handleSubtract}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
        </div>
    }
}


ReactDOM.render(<Counter/>, document.getElementById('app'));



/*let count = 5;
    const someId = 'myIdHere';
            
    const minusOne = () => {
        count--;
        
        renderCounterApp();
    }
    const template2 = 
            <div>
                <h1>Count: {count}</h1>
                <button>+1</button>
                <button onClick={minusOne}>-1</button>
                <button>Reset</button> 
            </div>;

    console.log(template2);

const appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);



const renderCounterApp = () => {
    const template2 = 
            <div>
                <h1>Count: {count}</h1>
                <button>+1</button>
                <button onClick={minusOne}>-1</button>
                <button>Reset</button> 
            </div>;
        ReactDOM.render(template2, appRoot);
    }*/

