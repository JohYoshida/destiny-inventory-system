import React, { Component } from 'react';
import Weapons from "./components/Weapons";
import Armors from "./components/Armors";

class App extends Component {
  render() {
    return (
      <div className="character">
        <div className="inventory">
          <Weapons />
          <div className="player-model">
            <p>Player Model</p>
          </div>
          <Armors />
        </div>
      </div>
    );
  }
}

export default App;
