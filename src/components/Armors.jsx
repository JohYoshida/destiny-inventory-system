import React, { Component } from 'react';
import Armor from "./Armor";

class Armors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      id: 0,
    };
  }

  enterArmor = (id) => {
    this.setState({ hover: true, id });
  }

  leaveArmor = (id) => {
    this.setState({ hover: false });
  }

  render() {
    const ids = [0, 1, 2, 3];
    let hiddenItems = [];
    for (var i = this.state.id; i > 0; i--) {
      hiddenItems.push(<div className="hiddenItem" />);
    }
    let itemStorage;
    if (this.state.hover) {
      itemStorage = (
        <div className="itemStorage"
          onMouseEnter={this.enterArmor.bind(this, this.state.id)}
          onMouseLeave={this.leaveArmor.bind(this, this.state.id)}
        >
          {hiddenItems}
          <div className="row">
            <Armor />
            <Armor />
            <Armor />
          </div>
          <div className="row">
            <Armor />
            <Armor />
            <Armor />
          </div>
          <div className="row">
            <Armor />
            <Armor />
            <Armor />
          </div>
        </div>
      );
    } else {
      itemStorage = <div className="itemStorage hidden"/>
    }

    return (
      <div className="itemsArea">
        <div className="items">
          <div
            id={ids[0]}
            onMouseEnter={this.enterArmor.bind(this, ids[0])}
            onMouseLeave={this.leaveArmor.bind(this, ids[0])}
          >
            <Armor />
          </div>
          <div
            id={ids[1]}
            onMouseEnter={this.enterArmor.bind(this, ids[1])}
            onMouseLeave={this.leaveArmor.bind(this, ids[1])}
          >
            <Armor />
          </div>
          <div
            id={ids[2]}
            onMouseEnter={this.enterArmor.bind(this, ids[2])}
            onMouseLeave={this.leaveArmor.bind(this, ids[2])}
          >
            <Armor />
          </div>
          <div
            id={ids[3]}
            onMouseEnter={this.enterArmor.bind(this, ids[3])}
            onMouseLeave={this.leaveArmor.bind(this, ids[3])}
          >
            <Armor />
          </div>
        </div>
        {itemStorage}
      </div>
    );
  }
}

export default Armors;
