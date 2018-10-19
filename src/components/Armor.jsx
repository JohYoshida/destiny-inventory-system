import React, { Component } from "react";

class Armor extends Component {
  render() {
    if (this.props.armor) {
      const armor = this.props.armor;
      const rarity = setRarity(armor);
      return (
        <div className={rarity}>
          <span className="level">{armor.level}</span>
        </div>
      );
    } else {
      return <div className="Armor item" />;
    }
  }
}

function setRarity(armor) {
  let className = "";
  switch (armor.rarity) {
    case "common":
      className = "Armor item common";
      break;
    case "uncommon":
      className = "Armor item uncommon";
      break;
    case "rare":
      className = "Armor item rare";
      break;
    case "legendary":
      className = "Armor item legendary";
      break;
    case "exotic":
      className = "Armor item exotic";
      break;
    default:
      className = "Armor item";
  }
  return className;
}

export default Armor;
