let count = 5;
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
    }