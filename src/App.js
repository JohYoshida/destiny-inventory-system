import React, { Component } from 'react';
import Weapons from "./components/Weapons";
import Armors from "./components/Armors";
import { weapons, armors } from "./inventory";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weapons,
      armors,
      hoveredItem: "",
    };
  }

  render() {
    const itemStats = this.makeItemStats(this.state.hoveredItem);

    return (
      <div className="character">
        <div className="inventory">
          <Weapons
            weapons={this.state.weapons}
            hoveredItem={this.state.hoveredItem}
            setHoveredItem={this.setHoveredItem.bind(this)}
          />
          <div className="player-model">
            <p>Player Model</p>
            {itemStats}
          </div>
          <Armors
            armors={this.state.armors}
            hoveredItem={this.state.hoveredItem}
            setHoveredItem={this.setHoveredItem.bind(this)}
          />
        </div>
      </div>
    );
  }

  setHoveredItem = (id) => {
    let item;
    const { weapons, armors } = this.state;
    switch (id) {
      case "kinetic":
        item = weapons.kinetic.equipped;
        break;
      case "energy":
        item = weapons.energy.equipped;
        break;
      case "power":
        item = weapons.power.equipped;
        break;
      case "special":
        item = weapons.special.equipped;
        break;
      case "helmet":
        item = armors.helmets.equipped;
        break;
      case "gauntlets":
        item = armors.gauntlets.equipped;
        break;
      case "chest":
        item = armors.chests.equipped;
        break;
      case "boots":
        item = armors.boots.equipped;
        break;
      default:
        item = "";
    }
    this.setState({ hoveredItem: item });
    return item;
  }

  makeItemStats = (item) => {
    if (this.state.item !== "") {
      return (
        <div className="itemStats">
          <p>{item.name}</p>
          <p>{item.type}</p>
          <p>{item.damage}</p>
          <p>{item.rarity}</p>
        </div>
      )
    } else {
      return <div className="itemStats" />
    }
  }
}

export default App;
