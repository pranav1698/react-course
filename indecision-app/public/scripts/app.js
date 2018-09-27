'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleAdd = _this.handleAdd.bind(_this);
        _this.handleSubtract = _this.handleSubtract.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        _this.state = {
            count: 0

        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState(function () {
                return { count: parseInt(localStorage.getItem('count'), 10) };
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevDrops, prevState) {
            if (prevState.count != this.state.count) localStorage.setItem('count', this.state.count);
        }
    }, {
        key: 'handleAdd',
        value: function handleAdd() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'handleSubtract',
        value: function handleSubtract() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleAdd },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleSubtract },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleReset },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

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
