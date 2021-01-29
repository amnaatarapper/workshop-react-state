import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    isRunning: false,
    previousTime: 0,
    elapsedTime: 0,
  };

  handleStopwatch = () => {
    this.setState((prevState) => {
      return {
        isRunning: !prevState.isRunning,
      };
    });

    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() });
    }
  };

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState((prevState) => {
        return {
          previousTime: now,
          elapsedTime: prevState.elapsedTime + (now - this.state.previousTime),
        };
      });
    }
  };

  handleReset = () => {
    this.setState({
      elapsedTime: 0,
    });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentDidUpdate() {
    const seconds = Math.floor(this.state.elapsedTime / 1000);
    console.log("STOPWATCH TIME UPDATED", seconds);
  }

  UNSAFE_componentWillMount() {
    clearInterval(this.inverval);
  }

  render() {
    const seconds = Math.floor(this.state.elapsedTime / 1000);

    return (
      <div className="stopwatch">
        <h2>stopwatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
