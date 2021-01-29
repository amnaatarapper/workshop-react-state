import React, { Component } from "react";

class AddPlayerForm extends Component {
  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event.nativeEvent);
        }}
      >
        <input type="text" placeholder="Entre a player's name" />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
