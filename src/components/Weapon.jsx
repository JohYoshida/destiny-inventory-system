import React, { Component } from "react";

class Weapon extends Component {
  render() {
    if (this.props.weapon) {
      const weapon = this.props.weapon;
      const rarity = setRarity(weapon);
      const damage = setDamage(weapon);
      return (
        <div className={rarity}>
          <div className={damage}></div>
          <span className="level">{weapon.level}</span>
        </div>
      );
    } else {
      return <div className="Weapon item" />;
    }
  }
}

function setRarity(weapon) {
  let className = "";
  switch (weapon.rarity) {
    case "common":
      className = "Weapon item common";
      break;
    case "uncommon":
      className = "Weapon item uncommon";
      break;
    case "rare":
      className = "Weapon item rare";
      break;
    case "legendary":
      className = "Weapon item legendary";
      break;
    case "exotic":
      className = "Weapon item exotic";
      break;
    default:
      className = "Weapon item";
  }
  return className;
}

function setDamage(weapon) {
  let className = "";
  switch (weapon.damage) {
    case "kinetic":
      className = "kinetic";
      break;
    case "solar":
      className = "solar";
      break;
    case "arc":
      className = "arc";
      break;
    case "void":
      className = "void";
      break;
    default:
      className = "kinetic";
  }
  return className;
}

export default Weapon;
