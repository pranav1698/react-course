import React from "react";

class AddOption extends React.Component {
    state = {
        error: undefined
    };
    
    onFormSubmit = (e) => {
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

export default AddOption;