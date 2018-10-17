import React, { Component } from "react";
import Weapon from "./Weapon";

class Weapons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      id: 0,
      name: "",
      type: "",
      damage: "",
      rarity: ""
    };
  }

  enterWeapon = id => {
    let weapon;
    switch (id) {
      case 0:
        weapon = this.props.weapons.kinetic.equipped;
        break;
      case 1:
        weapon = this.props.weapons.energy.equipped;
        break;
      case 2:
        weapon = this.props.weapons.power.equipped;
        break;
      case 3:
        weapon = this.props.weapons.special.equipped;
        break;
      default:
    }
    this.setState({
      id,
      hover: true,
      weapon,
      name: weapon.name,
      type: weapon.type,
      damage: weapon.damage,
      rarity: weapon.rarity
    });
  };

  leaveWeapon = id => {
    this.setState({
      hover: false,
      name: "",
      type: "",
      damage: "",
      rarity: ""
    });
  };

  render() {
    const ids = [0, 1, 2, 3];
    let hiddenItems = [];
    for (var i = this.state.id; i > 0; i--) {
      hiddenItems.push(<div className="hiddenItem" />);
    }

    let itemStorage;
    if (this.state.hover) {
      let inventory;
      switch (this.state.id) {
        case 0:
          inventory = this.props.weapons.kinetic.carrying;
          break;
        case 1:
          inventory = this.props.weapons.energy.carrying;
          break;
        case 2:
          inventory = this.props.weapons.power.carrying;
          break;
        case 3:
          inventory = this.props.weapons.special.carrying;
          break;
        default:
          inventory = this.props.weapons.kinetic.carrying;
      }
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
          <div className="weaponStats">
            <p>{this.state.name}</p>
            <p>{this.state.type}</p>
            <p>{this.state.damage}</p>
            <p>{this.state.rarity}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Weapons;
