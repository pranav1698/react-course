import React from"react";
import Option from "./Option";

const Options = (props) => 
    (<div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length == 0 && <p>Please add some options!!</p>}
        {props.options.map((option, index) => <Option handleDeleteOption={props.handleDeleteOption} key={index} optionText={option}/>)}
    </div>)

export default Options;