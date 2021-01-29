import React, { Component } from "react";
import AddPlayerForm from "./AddPlayerForm";
import Header from "./Header";
import Player from "./Player";

class App extends Component {
  state = {
    players: [
      {
        name: "Ahmed",
        score: 0,
        id: 1,
      },
      {
        name: "Salima",
        score: 0,
        id: 2,
      },
      {
        name: "Amine",
        score: 0,
        id: 3,
      },
      {
        name: "Achraf",
        score: 0,
        id: 4,
      },
    ],
  };

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      return {
        score: (prevState.players[index].score += delta),
      };
    });
  };

  handleAddPlayer = (new_player) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name: new_player,
            score: 0,
            id: prevState.players.length + 1,
          },
        ],
      };
    });
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((player) => {
          return player.id !== id;
        }),
      };
    });
  };

  getHighScore = () => {
    const scores = this.state.players.map((player) => player.score);
    const highScore = Math.max(...scores);

    if (highScore) return highScore;

    return null;
  };

  render() {
    const highScore = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
        {this.state.players.map((player, index) => (
          <Player
            {...player}
            index={index}
            key={player.id.toString()}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            isHighScore={player.score === highScore}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
