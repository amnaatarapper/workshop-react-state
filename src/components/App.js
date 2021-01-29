import React, { Component } from "react";
import AddPlayerForm from "./AddPlayerForm";
import Header from "./Header";
import Player from "./Player";

const players = [
  {
    name: "Ahmed",
    score: 20,
    id: 1,
  },
  {
    name: "Salima",
    score: 45,
    id: 2,
  },
  {
    name: "Amine",
    score: 112,
    id: 3,
  },
  {
    name: "Achraf",
    score: 99,
    id: 4,
  },
];

class App extends Component {
  render() {
    return (
      <div className="scoreboard">
        <Header players={players} />
        {players.map((player, index) => (
          <Player {...player} index={index} key={player.id.toString()} />
        ))}
        <AddPlayerForm />
      </div>
    );
  }
}

export default App;
