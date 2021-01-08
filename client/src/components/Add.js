import React, { Component } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";

import { addWordToList } from "../actions/vocab";

Modal.setAppElement("#root");
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      word: "",
    };
  }

  handleMondalOpen = () => {
    const { modalIsOpen } = this.state;
    this.setState({
      modalIsOpen: !modalIsOpen,
    });
  };

  handleOnChange = (e) => {
    this.setState({
      word: e.target.value,
    });
  };

  handleAddWord = () => {
    const { word } = this.state;
    this.props.dispatch(addWordToList(word));
  };

  render() {
    const { modalIsOpen } = this.state;
    return (
      <div>
        <button onClick={this.handleMondalOpen}> + </button>
        <Modal isOpen={modalIsOpen}>
          <h2>Add To Dictionary</h2>
          <p>New word</p>
          <input type="text" onChange={this.handleOnChange} />
          <button onClick={this.handleMondalOpen}> Cancel </button>
          <button onClick={this.handleAddWord}> Add </button>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    vocab: state.vocab,
  };
}

export default connect(mapStateToProps)(Add);
