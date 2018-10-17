import React, { Component } from 'react';
import Weapons from "./components/Weapons";
import Armors from "./components/Armors";
import { weapons, armor } from "./inventory";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weapons,
      armor,
    };
  }

  render() {
    return (
      <div className="character">
        <div className="inventory">
          <Weapons weapons={this.state.weapons} />
          <div className="player-model">
            <p>Player Model</p>
          </div>
          <Armors armor={this.state.armor} />
        </div>
      </div>
    );
  }
}

export default App;
