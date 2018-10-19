import React, { Component } from "react";
import Weapon from "./Weapon";

class Weapons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      id: 0,
      weapon: "",
    };
  }

  render() {
    const itemStorage = this.makeItemStorage(this.state, this.props.weapons);
    return (
      <div className="itemsArea">
        {itemStorage}
        <div className="items">
          <div
            className="kinetic"
            id={"kinetic"}
            onMouseEnter={this.enterWeapon.bind(this, "kinetic")}
            onMouseLeave={this.leaveWeapon.bind(this)}
          >
            <Weapon weapon={this.props.weapons.kinetic.equipped} />
          </div>
          <div
            className="energy"
            id={"energy"}
            onMouseEnter={this.enterWeapon.bind(this, "energy")}
            onMouseLeave={this.leaveWeapon.bind(this)}
          >
            <Weapon weapon={this.props.weapons.energy.equipped} />
          </div>
          <div
            className="power"
            id={"power"}
            onMouseEnter={this.enterWeapon.bind(this, "power")}
            onMouseLeave={this.leaveWeapon.bind(this)}
          >
            <Weapon weapon={this.props.weapons.power.equipped} />
          </div>
          <div
            className="special"
            id={"special"}
            onMouseEnter={this.enterWeapon.bind(this, "special")}
            onMouseLeave={this.leaveWeapon.bind(this)}
          >
            <Weapon weapon={this.props.weapons.special.equipped} />
          </div>
        </div>
      </div>
    );
  }

  enterWeapon = id => {
    const weapon = this.props.setHoveredItem(id);
    this.setState({ hover: true, id, weapon });
  };

  leaveWeapon = () => {
    const weapon = this.props.setHoveredItem();
    this.setState({ hover: false, weapon });
  };

  makeItemStorage = (state, weapons) => {
    const hiddenItems = makeHiddenItems(state.id);
    let itemStorage;
    if (state.hover) {
      const inventory = setHoveredInventory(weapons, state.id);
      let items = [];
      for (var item in inventory) {
        items.push(<Weapon weapon={inventory[item]} />);
      }
      if (inventory.length < 7) {
        items.push(<div className="hiddenItem" />);
      }
      itemStorage = (
        <div
          className="itemStorage"
          onMouseEnter={this.enterWeapon.bind(this, this.state.id)}
          onMouseLeave={this.leaveWeapon.bind(this, this.state.id)}
        >
          {hiddenItems}
          {items}
        </div>
      );
    } else {
      itemStorage = <div className="itemStorage hidden" />;
    }
    return itemStorage;
  };
}

function setHoveredInventory(weapons, id) {
  let inventory;
  switch (id) {
    case "kinetic":
      inventory = weapons.kinetic.carrying;
      break;
    case "energy":
      inventory = weapons.energy.carrying;
      break;
    case "power":
      inventory = weapons.power.carrying;
      break;
    case "special":
      inventory = weapons.special.carrying;
      break;
    default:
      inventory = [];
  }
  return inventory;
}

function makeHiddenItems(id) {
  const hiddenItems = [];
  for (var i = id; i > 0; i--) {
    hiddenItems.push(<div className="hiddenItem" />);
  }
  return hiddenItems;
}

export default Weapons;
