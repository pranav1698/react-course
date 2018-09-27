class Visible extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisiblity = this.toggleVisiblity.bind(this);
        this.state ={
            visiblity: false,
        }
    }

    toggleVisiblity(){
        this.setState((prevState) => {
            return {
                visiblity: !prevState.visiblity
            }
        })
    }
    render(){
        return <div>
            <h1>Visiblity Toggle!!</h1>
            <button onClick={this.toggleVisiblity}>{this.state.visiblity ? 'Hide Details' : 'Show Details'}</button>
            {this.state.visiblity && <p>These are the details!</p>}
        </div>
    }
}

ReactDOM.render(<Visible />, document.getElementById('app'));

/*var app = {
    title: 'Visiblity Toggle!!',
    state: false
}
const toggleVisiblity = () => {
    app.state = !app.state;
    renderApp();
}


const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = 
    <div>
        <h1>{app.title}</h1>
        <button onClick={toggleVisiblity}>{app.state ? 'Hide Details' :'Show Details'}</button>
        {app.state && <p>Here are the details!!</p>}
    </div>;
    ReactDOM.render(template, appRoot);
}

renderApp();*/