// Kinetic
const CuboidARu = {
  name: "Cuboid ARu",
  type: "Auto Rifle",
  damage: "kinetic",
  rarity: "uncommon",
  level: 326,
}
const GusevaC = {
  name: "Guseva-C",
  type: "Hand Cannon",
  damage: "kinetic",
  rarity: "rare",
  level: 317,
}
const ProtostarCSu = {
  name: "Protostar CSu",
  type: "Submachine Gun",
  damage: "kinetic",
  rarity: "rare",
  level: 304,
}
const BattleScar = {
  name: "Battle Scar",
  type: "Pulse Rifle",
  damage: "kinetic",
  rarity: "legendary",
  level: 288,
}
const NamelessMidnight = {
  name: "NamelessMidnight",
  type: "Scout Rifle",
  damage: "kinetic",
  rarity: "legendary",
  level: 268,
}
const HawthornesShotgun = {
  name: "Hawthorne's Field-Forged Shotgun",
  type: "Shotgun",
  damage: "kinetic",
  rarity: "legendary",
  level: 260,
}
const LongShadow = {
  name: "Long Shadow",
  type: "Sniper Rifle",
  damage: "kinetic",
  rarity: "legendary",
  level: 260,
}

// Energy
const Agenda5 = {
  name: "Agenda 5",
  type: "Pulse Rifle",
  damage: "solar",
  rarity: "legendary",
  level: 336,
}
const Refrain23 = {
  name: "Refrain-23",
  type: "Auto Rifle",
  damage: "void",
  rarity: "legendary",
  level: 328,
}
const RequiemSI2 = {
  name: "Requiem SI2",
  type: "Sidearm",
  damage: "solar",
  rarity: "rare",
  level: 322,
}
const TongerenLR3 = {
  name: "Tongeren-LR3",
  type: "Sniper Rifle",
  damage: "solar",
  rarity: "rare",
  level: 310,
}
const Requiem43 = {
  name: "Requiem-43",
  type: "Shotgun",
  damage: "arc",
  rarity: "rare",
  level: 309,
}
const ElathaFR4 = {
  name: "Elatha FR4",
  type: "Fusion Rifle",
  damage: "solar",
  rarity: "legendary",
  level: 310,
}
const Harmony21 = {
  name: "Harmony-21",
  type: "Submachine Gun",
  damage: "void",
  rarity: "rare",
  level: 305,
}
const EternalBlazon = {
  name: "Eternal Blazon",
  type: "Scout Rifle",
  damage: "arc",
  rarity: "legendary",
  level: 293,
}





module.exports = {
  weapons: {
    kinetic: {
      equipped: CuboidARu,
      carrying: [GusevaC, ProtostarCSu, BattleScar, NamelessMidnight, HawthornesShotgun, LongShadow, LongShadow],
    },
    energy: {
      equipped: Agenda5,
      carrying: [Refrain23, RequiemSI2, TongerenLR3, Requiem43, ElathaFR4, Harmony21, EternalBlazon],
    },
    power: {
      equipped: ElathaFR4,
      carrying: [],
    },
    special: {
      equipped: EternalBlazon,
      carrying: [],
    },
  },
  armor: {
    helmet: {
      equipped: "",
      carrying: [],
    },
    gauntlets: {
      equipped: "",
      carrying: [],
    },
    chest: {
      equipped: "",
      carrying: [],
    },
    boots: {
      equipped: "",
      carrying: [],
    },
  }
}
