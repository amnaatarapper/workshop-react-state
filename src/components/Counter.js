import React from "react";
import PropTypes from "prop-types";

export default function Counter(props) {
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => props.changeScore(props.index, -1)}
      >
        -
      </button>
      <span className="counter-score">{props.score}</span>
      <button
        className="counter-action increment"
        onClick={() => props.changeScore(props.index, +1)}
      >
        +
      </button>
    </div>
  );
}

Counter.propTypes = {
  score: PropTypes.number,
  index: PropTypes.number,
  changeScore: PropTypes.func,
};
