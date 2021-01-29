import React, { Component } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";

class Player extends Component {
  static propTypes = {
    name: PropTypes.string,
    score: PropTypes.number,
  };

  render() {
    const { name, score } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player">✖</button>
          {name}
        </span>
        <Counter score={score} />
      </div>
    );
  }
}

export default Player;
