import React, { Component } from "react";

class AddPlayerForm extends Component {
  state = {
    new_player: "",
  };

  handleValueChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.new_player) {
      this.props.addPlayer(this.state.new_player);
      this.setState({ new_player: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="new_player"
          type="text"
          placeholder="Entre a player's name"
          onChange={this.handleValueChange}
          value={this.state.new_player}
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
