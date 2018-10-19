import React, { Component } from "react";
import Armor from "./Armor";

class Armors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      type: 0,
      armor: "",
    };
  }

  render() {
    const itemStorage = this.makeArmorStorage(this.state, this.props.armors);
    return (
      <div className="itemsArea">
        <div className="items">
          <div
            onMouseEnter={this.enterArmor.bind(this, "helmets")}
            onMouseLeave={this.leaveArmor.bind(this)}
          >
            <Armor
              id={"helmets"}
              armor={this.props.armors.helmets.equipped}
            />
          </div>
          <div
            onMouseEnter={this.enterArmor.bind(this, "gauntlets")}
            onMouseLeave={this.leaveArmor.bind(this)}
          >
            <Armor
              id={"gauntlets"}
              armor={this.props.armors.gauntlets.equipped}
            />
          </div>
          <div
            onMouseEnter={this.enterArmor.bind(this, "chests")}
            onMouseLeave={this.leaveArmor.bind(this)}
          >
            <Armor
              id={"chests"}
              armor={this.props.armors.chests.equipped}
            />
          </div>
          <div
            onMouseEnter={this.enterArmor.bind(this, "boots")}
            onMouseLeave={this.leaveArmor.bind(this)}
          >
            <Armor
              id={"boots"}
              armor={this.props.armors.boots.equipped}
            />
          </div>
        </div>
        {itemStorage}
      </div>
    );
  }

  enterArmor = type => {
    const armor = this.props.setHoveredItem(type);
    this.setState({ hover: true, type, armor });
  };

  leaveArmor = () => {
    const armor = this.props.setHoveredItem();
    this.setState({ hover: false, armor });
  };

  makeArmorStorage = (state, armors) => {
    let itemStorage;
    if (state.hover) {
      const inventory = setHoveredInventory(armors, state.type);
      const id = inventory.shift();
      const hiddenItems = makeHiddenItems(inventory, id);
      let items = [];
      let count = 0;
      for (var item in inventory) {
        items.push(
          <div onClick={this.props.switchArmor.bind(this, armors, state.type, count)}>
            <Armor
              id={count}
              armor={inventory[item]}
              />
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
          onMouseEnter={this.enterArmor.bind(this, state.type)}
          onMouseLeave={this.enterArmor.bind(this, state.type)}
        >
          {hiddenItems}
          {items}
        </div>
      );
    } else {
      itemStorage = <div className="itemStorage hidden" />;
    }
    return itemStorage;
  }
}

function setHoveredInventory(armors, type) {
  let inventory;
  switch (type) {
    case "helmets":
      inventory = armors.helmets.carrying;
      inventory.unshift(0);
      break;
    case "gauntlets":
      inventory = armors.gauntlets.carrying;
      inventory.unshift(1);
      break;
    case "chests":
      inventory = armors.chests.carrying;
      inventory.unshift(2);
      break;
    case "boots":
      inventory = armors.boots.carrying;
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

export default Armors;
