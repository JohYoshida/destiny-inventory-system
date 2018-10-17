import React, { Component } from 'react';
import Weapon from "./Weapon";

class Weapons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      id: 0,
    };
  }

  enterWeapon = (id) => {
    this.setState({ hover: true, id });
  }

  leaveWeapon = (id) => {
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
          onMouseEnter={this.enterWeapon.bind(this, this.state.id)}
          onMouseLeave={this.leaveWeapon.bind(this, this.state.id)}
        >
          {hiddenItems}
          <div className="row">
            <Weapon />
            <Weapon />
            <Weapon />
          </div>
          <div className="row">
            <Weapon />
            <Weapon />
            <Weapon />
          </div>
          <div className="row">
            <Weapon />
            <Weapon />
            <Weapon />
          </div>
        </div>
      );
    } else {
      itemStorage = <div className="itemStorage hidden"/>
    }

    return (
      <div className="itemsArea">
        {itemStorage}
        <div className="items">
          <div
            id={ids[0]}
            onMouseEnter={this.enterWeapon.bind(this, ids[0])}
            onMouseLeave={this.leaveWeapon.bind(this, ids[0])}
          >
            <Weapon rarity={this.state.rarity}/>
          </div>
          <div
            id={ids[1]}
            onMouseEnter={this.enterWeapon.bind(this, ids[1])}
            onMouseLeave={this.leaveWeapon.bind(this, ids[1])}
          >
            <Weapon rarity={this.state.rarity}/>
          </div>
          <div
            id={ids[2]}
            onMouseEnter={this.enterWeapon.bind(this, ids[2])}
            onMouseLeave={this.leaveWeapon.bind(this, ids[2])}
          >
            <Weapon />
          </div>
          <div
            id={ids[3]}
            onMouseEnter={this.enterWeapon.bind(this, ids[3])}
            onMouseLeave={this.leaveWeapon.bind(this, ids[3])}
          >
            <Weapon />
          </div>
        </div>
      </div>
    )
  }
}

export default Weapons;
