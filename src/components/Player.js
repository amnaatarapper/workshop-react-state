import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

class Player extends PureComponent {
  static propTypes = {
    id: PropTypes.number,
    index: PropTypes.number,
    name: PropTypes.string,
    score: PropTypes.number,
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
  };

  componentDidMount() {
    console.log(`PLAYER ${this.props.id} MOUNTED`);
  }

  componentDidUpdate() {
    console.log(`PLAYER ${this.props.id} UPDATED!!!!`);
  }

  render() {
    const {
      id,
      index,
      name,
      score,
      changeScore,
      removePlayer,
      isHighScore,
    } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          <Icon isHighScore={isHighScore} />
          {name}
        </span>
        <Counter index={index} score={score} changeScore={changeScore} />
      </div>
    );
  }
}

export default Player;
