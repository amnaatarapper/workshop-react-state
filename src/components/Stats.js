import React from "react";
import PropTypes from "prop-types";

export default function Stats(props) {
  const { players } = props;

  const totalPlayers = players.length;
  const totalPoints = players.reduce((total, player) => {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
}

Stats.propTypes = {
  totalPlayers: PropTypes.array,
  totalPoints: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number,
    })
  ),
};
