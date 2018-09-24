
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of the computer',
    options: []
};

//const numbers = [100, 201, 1000];


const onFormSubmit = (e) => {
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    renderOption();
    e.preventDefault();
    
};

const removeAll = () => {
    if(app.options.length > 0){
        app.options = [];
    }
    renderOption();
};

        
const appRoot = document.getElementById('app');

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]; 
    alert(option);
};

const renderOption = () => {
    const template = <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
        {app.options.length > 0 ?  <div>
                                    <p>Here are your options: </p>
                                    <button onClick={removeAll}>Remove All</button>
                                    <ol>
                                        {
                                            app.options.map((option, index) => <li key={index}>{option}</li>)
                                        }

                                    </ol>
                                </div>: <p>No options</p>}
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
       {
        /*
            numbers.map((number, index) => <p key={index}>Number: {number}</p>)
        */
       }
        
    </div>;

    ReactDOM.render(template, appRoot);
}

renderOption();