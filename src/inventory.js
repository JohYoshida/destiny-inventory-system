const items = {
  weapons: {
    autoRifles: {
      kinetic: {
        CuboidARu: {
          name: "Cuboid ARu",
          type: "Auto Rifle",
          damage: "kinetic",
          rarity: "uncommon",
          level: 326
        }
      },
      energy: {
        Refrain23: {
          name: "Refrain-23",
          type: "Auto Rifle",
          damage: "void",
          rarity: "legendary",
          level: 328
        }
      }
    },
    bows: {
      kinetic: {},
      energy: {}
    },
    fusionRifles: {
      energy: {
        ElathaFR4: {
          name: "Elatha FR4",
          type: "Fusion Rifle",
          damage: "solar",
          rarity: "legendary",
          level: 310
        }
      }
    },
    grenadeLaunchers: {
      kinetic: {},
      energy: {},
      supers: {}
    },
    handCannons: {
      kinetic: {
        GusevaC: {
          name: "Guseva-C",
          type: "Hand Cannon",
          damage: "kinetic",
          rarity: "rare",
          level: 317
        }
      },
      energy: {}
    },
    linearFusionRifles: {
      supers: {}
    },
    pulseRifles: {
      kinetic: {
        BattleScar: {
          name: "Battle Scar",
          type: "Pulse Rifle",
          damage: "kinetic",
          rarity: "legendary",
          level: 288
        }
      },
      energy: {
        Agenda5: {
          name: "Agenda 5",
          type: "Pulse Rifle",
          damage: "solar",
          rarity: "legendary",
          level: 336
        }
      }
    },
    rocketLaunchers: {
      supers: {}
    },
    sidearms: {
      kinetic: {},
      energy: {
        RequiemSI2: {
          name: "Requiem SI2",
          type: "Sidearm",
          damage: "solar",
          rarity: "rare",
          level: 322
        }
      }
    },
    scoutRifles: {
      kinetic: {
        NamelessMidnight: {
          name: "Nameless Midnight",
          type: "Scout Rifle",
          damage: "kinetic",
          rarity: "legendary",
          level: 268
        }
      },
      energy: {
        EternalBlazon: {
          name: "Eternal Blazon",
          type: "Scout Rifle",
          damage: "arc",
          rarity: "legendary",
          level: 293
        }
      }
    },
    shotguns: {
      kinetic: {
        HawthornesShotgun: {
          name: "Hawthorne's Field-Forged Shotgun",
          type: "Shotgun",
          damage: "kinetic",
          rarity: "legendary",
          level: 260
        }
      },
      energy: {
        Requiem43: {
          name: "Requiem-43",
          type: "Shotgun",
          damage: "arc",
          rarity: "rare",
          level: 309
        }
      },
      supers: {}
    },
    sniperRifles: {
      kinetic: {
        LongShadow: {
          name: "Long Shadow",
          type: "Sniper Rifle",
          damage: "kinetic",
          rarity: "legendary",
          level: 260
        }
      },
      energy: {
        TongerenLR3: {
          name: "Tongeren-LR3",
          type: "Sniper Rifle",
          damage: "solar",
          rarity: "rare",
          level: 310
        }
      }
    },
    submachineGuns: {
      kinetic: {
        ProtostarCSu: {
          name: "Protostar CSu",
          type: "Submachine Gun",
          damage: "kinetic",
          rarity: "rare",
          level: 304
        }
      },
      energy: {
        Harmony21: {
          name: "Harmony-21",
          type: "Submachine Gun",
          damage: "void",
          rarity: "rare",
          level: 305
        }
      }
    },
    swords: {
      kinetic: {},
      energy: {},
      supers: {}
    }
  },
  armor: {
    hunter: {
      helmets: {},
      gauntlets: {},
      chests: {},
      boots: {}
    },
    titan: {
      helmets: {},
      gauntlets: {},
      chests: {},
      boots: {}
    },
    warlock: {
      helmets: {
        ProphetSnowHelmet: {
          name: "Prophet Snow",
          type: "Helmet",
          rarity: "rare",
          level: 335
        },
        EyeOfAnotherWorld: {
          name: "Eye of Another World",
          type: "Helmet",
          rarity: "exotic",
          level: 100
        },
        SkullOfDireAhamkara: {
          name: "Skull of Dire Ahamkara",
          type: "Helmet",
          rarity: "exotic",
          level: 265
        },
        WingTheoremHelmet: {
          name: "Wing Theorem",
          type: "Helmet",
          rarity: "legendary",
          level: 260
        }
      },
      gauntlets: {
        LostPacificGloves: {
          name: "Lost Pacific Gloves",
          type: "gauntlets",
          rarity: "legendary",
          level: 336
        },
        AeonSoul: {
          name: "Aeon Soul",
          type: "gauntlets",
          rarity: "exotic",
          level: 303
        },
        KarnsteinArmlets: {
          name: "Karnmstein Armlets",
          type: "gauntlets",
          rarity: "exotic",
          level: 276
        },
        VigilOfHeroesGauntlets: {
          name: "Vigil of Heroes",
          type: "gauntlets",
          rarity: "legendary",
          level: 272
        }
      },
      chests: {
        ProphetSnowChest: {
          name: "Prophet Snow",
          type: "chest",
          rarity: "rare",
          level: 335
        },
        WingTheoremChest: {
          name: "Wing Theorem",
          type: "chest",
          rarity: "legendary",
          level: 270
        }
      },
      boots: {
        VigilOfHeroesBoots: {
          name: "Vigil of Heroes",
          type: "boots",
          rarity: "legendary",
          level: 341
        }
      }
    }
  }
};

module.exports = {
  weapons: {
    kinetic: {
      equipped: items.weapons.autoRifles.kinetic.CuboidARu,
      carrying: [
        items.weapons.handCannons.kinetic.GusevaC,
        items.weapons.submachineGuns.kinetic.ProtostarCSu,
        items.weapons.pulseRifles.kinetic.BattleScar,
        items.weapons.scoutRifles.kinetic.NamelessMidnight,
        items.weapons.shotguns.kinetic.HawthornesShotgun,
        items.weapons.sniperRifles.kinetic.LongShadow
      ]
    },
    energy: {
      equipped: items.weapons.pulseRifles.energy.Agenda5,
      carrying: [
        items.weapons.autoRifles.energy.Refrain23,
        items.weapons.sidearms.energy.RequiemSI2,
        items.weapons.sniperRifles.energy.TongerenLR3,
        items.weapons.shotguns.energy.Requiem43,
        items.weapons.fusionRifles.energy.ElathaFR4,
        items.weapons.submachineGuns.energy.Harmony21,
        items.weapons.scoutRifles.energy.EternalBlazon
      ]
    },
    power: {
      equipped: items.weapons.fusionRifles.energy.ElathaFR4,
      carrying: []
    },
    special: {
      equipped: items.weapons.scoutRifles.energy.EternalBlazon,
      carrying: []
    }
  },
  armors: {
    helmets: {
      equipped: items.armor.warlock.helmets.ProphetSnowHelmet,
      carrying: [
        items.armor.warlock.helmets.EyeOfAnotherWorld,
        items.armor.warlock.helmets.SkullOfDireAhamkara,
        items.armor.warlock.helmets.WingTheoremHelmet
      ]
    },
    gauntlets: {
      equipped: items.armor.warlock.gauntlets.LostPacificGloves,
      carrying: [
        items.armor.warlock.gauntlets.AeonSoul,
        items.armor.warlock.gauntlets.KarnsteinArmlets,
        items.armor.warlock.gauntlets.VigilOfHeroesGauntlets
      ]
    },
    chests: {
      equipped: items.armor.warlock.chests.ProphetSnowChest,
      carrying: [items.armor.warlock.chests.WingTheoremChest]
    },
    boots: {
      equipped: items.armor.warlock.boots.VigilOfHeroesBoots,
      carrying: []
    }
  }
};
