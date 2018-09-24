var app = {
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

renderApp();