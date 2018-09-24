'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of the computer',
    options: []
};

//const numbers = [100, 201, 1000];


var onFormSubmit = function onFormSubmit(e) {
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    renderOption();
    e.preventDefault();
};

var removeAll = function removeAll() {
    if (app.options.length > 0) {
        app.options = [];
    }
    renderOption();
};

var appRoot = document.getElementById('app');

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var renderOption = function renderOption() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'button',
            { disabled: app.options.length == 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        app.options.length > 0 ? React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Here are your options: '
            ),
            React.createElement(
                'button',
                { onClick: removeAll },
                'Remove All'
            ),
            React.createElement(
                'ol',
                null,
                app.options.map(function (option, index) {
                    return React.createElement(
                        'li',
                        { key: index },
                        option
                    );
                })
            )
        ) : React.createElement(
            'p',
            null,
            'No options'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderOption();
