import React, { Component } from "react";

class Weapon extends Component {
  render() {
    let weapon;
    if (this.props.weapon) {
      switch (this.props.weapon.rarity) {
        case "common":
          weapon = <div className="Weapon item common" />;
          break;
        case "uncommon":
          weapon = <div className="Weapon item uncommon" />;
          break;
        case "rare":
          weapon = <div className="Weapon item rare" />;
          break;
        case "legendary":
          weapon = <div className="Weapon item legendary" />;
          break;
        case "exotic":
          weapon = <div className="Weapon item exotic" />;
          break;
        default:
          weapon = <div className="Weapon item" />;
      }
    } else {
      weapon = <div className="Weapon item" />;
    }
    return weapon;
  }
}

export default Weapon;
