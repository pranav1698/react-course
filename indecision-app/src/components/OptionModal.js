import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
    <Modal
        isOpen={props.selectedOption}
        onRequestClose={props.handleRemoveModal}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleRemoveModal}>Okay</button>
    </Modal>
)

export default OptionModal;