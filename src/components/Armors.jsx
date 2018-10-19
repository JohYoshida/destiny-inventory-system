import React, { Component } from "react";
import Armor from "./Armor";

class Armors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      id: 0,
      armor: "",
    };
  }

  render() {
    const itemStorage = this.makeItemStorage(this.state, this.props.armors);
    return (
      <div className="itemsArea">
        <div className="items">
          <div
            id={"helmet"}
            onMouseEnter={this.enterArmor.bind(this, "helmet")}
            onMouseLeave={this.leaveArmor.bind(this)}
          >
            <Armor armor={this.props.armors.helmets.equipped} />
          </div>
          <div
            id={"gauntlets"}
            onMouseEnter={this.enterArmor.bind(this, "gauntlets")}
            onMouseLeave={this.leaveArmor.bind(this)}
          >
            <Armor armor={this.props.armors.gauntlets.equipped} />
          </div>
          <div
            id={"chest"}
            onMouseEnter={this.enterArmor.bind(this, "chest")}
            onMouseLeave={this.leaveArmor.bind(this)}
          >
            <Armor armor={this.props.armors.chests.equipped} />
          </div>
          <div
            id={"boots"}
            onMouseEnter={this.enterArmor.bind(this, "boots")}
            onMouseLeave={this.leaveArmor.bind(this)}
          >
            <Armor armor={this.props.armors.boots.equipped} />
          </div>
        </div>
        {itemStorage}
      </div>
    );
  }

  enterArmor = id => {
    const armor = this.props.setHoveredItem(id);
    this.setState({ hover: true, id, armor });
  };

  leaveArmor = () => {
    const armor = this.props.setHoveredItem();
    this.setState({ hover: false, armor });
  };

  makeItemStorage = (state, armors) => {
    const hiddenItems = makeHiddenItems(state.id);
    let itemStorage;
    if (state.hover) {
      const inventory = setHoveredInventory(armors, state.id);
      let items = [];
      for (var item in inventory) {
        items.push(<Armor armor={inventory[item]} />);
      }
      if (inventory.length < 7) {
        items.push(<div className="hiddenItem" />);
      }
      itemStorage = (
        <div
          className="itemStorage"
          onMouseEnter={this.enterArmor.bind(this, this.state.id)}
          onMouseLeave={this.enterArmor.bind(this, this.state.id)}
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

function setHoveredInventory(armors, id) {
  let inventory;
  switch (id) {
    case "helmet":
      inventory = armors.helmets.carrying;
      break;
    case "gauntlets":
      inventory = armors.gauntlets.carrying;
      break;
    case "chest":
      inventory = armors.chests.carrying;
      break;
    case "boots":
      inventory = armors.boots.carrying;
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

export default Armors;
