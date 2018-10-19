import React, { Component } from "react";
import Weapon from "./Weapon";

class Weapons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      type: 0,
      weapon: ""
    };
  }

  render() {
    const itemStorage = this.makeWeaponStorage(this.state, this.props.weapons);
    return (
      <div className="itemsArea">
        {itemStorage}
        <div className="items">
          <div
            onMouseEnter={this.enterWeapon.bind(this, "kinetic")}
            onMouseLeave={this.leaveWeapon.bind(this)}
          >
            <Weapon
              id={"kinetic"}
              weapon={this.props.weapons.kinetic.equipped}
            />
          </div>
          <div
            className="energy"
            onMouseEnter={this.enterWeapon.bind(this, "energy")}
            onMouseLeave={this.leaveWeapon.bind(this)}
          >
            <Weapon id={"energy"} weapon={this.props.weapons.energy.equipped} />
          </div>
          <div
            onMouseEnter={this.enterWeapon.bind(this, "power")}
            onMouseLeave={this.leaveWeapon.bind(this)}
          >
            <Weapon id={"power"} weapon={this.props.weapons.power.equipped} />
          </div>
          <div
            onMouseEnter={this.enterWeapon.bind(this, "special")}
            onMouseLeave={this.leaveWeapon.bind(this)}
          >
            <Weapon
              id={"special"}
              weapon={this.props.weapons.special.equipped}
            />
          </div>
        </div>
      </div>
    );
  }

  enterWeapon = type => {
    const weapon = this.props.getHoveredItems(type);
    this.setState({ hover: true, type, weapon });
  };

  leaveWeapon = () => {
    const weapon = this.props.getHoveredItems();
    this.setState({ hover: false, weapon });
  };

  makeWeaponStorage = (state, weapons) => {
    let itemStorage;
    if (state.hover) {
      const inventory = setHoveredInventory(weapons, state.type);
      const id = inventory.shift();
      const hiddenItems = makeHiddenItems(inventory, id);
      let items = [];
      let count = 0;
      for (var item in inventory) {
        items.push(
          <div
            onClick={this.props.switchWeapon.bind(
              this,
              weapons,
              state.type,
              count
            )}
          >
            <Weapon id={count} weapon={inventory[item]} />
          </div>
        );
        count++;
      }
      if (inventory.length < 7) {
        items.push(<div className="hiddenItem" />);
      }
      itemStorage = (
        <div
          className="itemStorage"
          onMouseEnter={this.enterWeapon.bind(this, state.type)}
          onMouseLeave={this.leaveWeapon.bind(this, state.type)}
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

function setHoveredInventory(weapons, type) {
  let inventory;
  switch (type) {
    case "kinetic":
      inventory = weapons.kinetic.carrying;
      inventory.unshift(0);
      break;
    case "energy":
      inventory = weapons.energy.carrying;
      inventory.unshift(1);
      break;
    case "power":
      inventory = weapons.power.carrying;
      inventory.unshift(2);
      break;
    case "special":
      inventory = weapons.special.carrying;
      inventory.unshift(3);
      break;
    default:
      inventory = [0];
  }
  return inventory;
}

function makeHiddenItems(inventory, id) {
  const hiddenItems = [];
  for (var i = id; i > 0; i--) {
    hiddenItems.push(<div className="hiddenItem" />);
  }
  return hiddenItems;
}

export default Weapons;
