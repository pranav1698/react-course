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
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
            <form className="add-option" onSubmit={this.onFormSubmit}>
                <input className="add-option__input" type='text' name='option'/>
                <button className="button">Add Option</button>
            
            </form>   
        </div>
    }
}

export default AddOption;