import React, { Component } from "react";
import Weapon from "./Weapon";

class Weapons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      id: 0,
      weapon: {
        name: "",
        type: "",
        damage: "",
        rarity: ""
      }
    };
  }

  render() {
    const ids = [0, 1, 2, 3];
    const itemStorage = this.makeItemStorage(this.state, this.props.weapons);
    const weaponStats = this.makeWeaponStats(this.state.weapon);
    return (
      <div className="itemsArea">
        {itemStorage}
        <div className="items">
          <div
            className="kinetic"
            id={ids[0]}
            onMouseEnter={this.enterWeapon.bind(this, ids[0])}
            onMouseLeave={this.leaveWeapon.bind(this, ids[0])}
          >
            <Weapon weapon={this.props.weapons.kinetic.equipped} />
          </div>
          <div
            className="energy"
            id={ids[1]}
            onMouseEnter={this.enterWeapon.bind(this, ids[1])}
            onMouseLeave={this.leaveWeapon.bind(this, ids[1])}
          >
            <Weapon weapon={this.props.weapons.energy.equipped} />
          </div>
          <div
            className="power"
            id={ids[2]}
            onMouseEnter={this.enterWeapon.bind(this, ids[2])}
            onMouseLeave={this.leaveWeapon.bind(this, ids[2])}
          >
            <Weapon weapon={this.props.weapons.power.equipped} />
          </div>
          <div
            className="special"
            id={ids[3]}
            onMouseEnter={this.enterWeapon.bind(this, ids[3])}
            onMouseLeave={this.leaveWeapon.bind(this, ids[3])}
          >
            <Weapon weapon={this.props.weapons.special.equipped} />
          </div>
          {weaponStats}
        </div>
      </div>
    );
  }

  enterWeapon = id => {
    const weapon = setHoveredWeapon(this.props.weapons, id);
    this.setState({ hover: true, id, weapon });
  };

  leaveWeapon = id => {
    this.setState({ hover: false, weapon: "" });
  };

  makeWeaponStats = (weapon) => {
    if (this.state.weapon !== "") {
      return (
        <div className="weaponStats">
          <p>{weapon.name}</p>
          <p>{weapon.type}</p>
          <p>{weapon.damage}</p>
          <p>{weapon.rarity}</p>
        </div>
      )
    } else {
        return <div className="weaponStats" />
    }
  }

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

function setHoveredWeapon(weapons, id) {
  let weapon;
  switch (id) {
    case 0:
      weapon = weapons.kinetic.equipped;
      break;
    case 1:
      weapon = weapons.energy.equipped;
      break;
    case 2:
      weapon = weapons.power.equipped;
      break;
    case 3:
      weapon = weapons.special.equipped;
      break;
    default:
      weapon = "";
  }
  return weapon;
}

function setHoveredInventory(weapons, id) {
  let inventory;
  switch (id) {
    case 0:
      inventory = weapons.kinetic.carrying;
      break;
    case 1:
      inventory = weapons.energy.carrying;
      break;
    case 2:
      inventory = weapons.power.carrying;
      break;
    case 3:
      inventory = weapons.special.carrying;
      break;
    default:
      inventory = weapons.kinetic.carrying;
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
