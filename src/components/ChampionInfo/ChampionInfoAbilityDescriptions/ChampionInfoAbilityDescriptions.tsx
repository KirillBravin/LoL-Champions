import "../../../style/style.css";

interface SingleChampionBody {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  skins: {
    [name: string]: {
      id: string;
      num: number;
      name: string;
      chromas: boolean;
    };
  };
  lore: string;
  blurb: string;
  allytips: {
    [name: string]: string;
  };
  enemytips: {
    [name: string]: string;
  };
  tags: {
    [name: string]: string;
  };
  partype: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  };
  spells: {
    [name: string]: {
      id: string;
      name: string;
      description: string;
      tooltip: string;
      leveltip: {
        label: {
          [name: string]: string;
        };
        effect: {
          [name: string]: string;
        };
      };
      maxrank: number;
      cooldown: {
        [name: string]: number;
      };
      cooldownBurn: string;
      cost: {
        [name: string]: number;
      };
      costBurn: string;
      datavalues: object;
      effect: {
        [name: string]: number | null;
      };
      effectBurn: {
        [name: string]: number | null;
      };
      vars: [];
      costType: string;
      maxammo: string;
      range: {
        [name: string]: number;
      };
      rangeBurn: number;
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
      resource: string;
    };
  };
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
      sprite: string;
      group: string;
      x: number;
      y: number;
      w: number;
      h: number;
    };
    recommend: [];
  };
}

type ChampionInfoAbilityDescriptionsProps = {
  abilitySelected: string | null;
  champion: SingleChampionBody | null;
};

export function ChampionInfoAbilityDescriptions({
  abilitySelected,
  champion,
}: ChampionInfoAbilityDescriptionsProps) {
  if (!champion) {
    return null;
  }

  const { spells, passive } = champion;

  const filteredPassive = passive.description.replace(/<[^>]*>/g, "");
  const filteredSpellQ = spells[0].description.replace(/<[^>]*>/g, "");
  const filteredSpellW = spells[1].description.replace(/<[^>]*>/g, "");
  const filteredSpellE = spells[2].description.replace(/<[^>]*>/g, "");
  const filteredSpellR = spells[3].description.replace(/<[^>]*>/g, "");

  const abilityMap: {
    [key: string]: { type: string; name: string; description: string };
  } = {
    Passive: {
      type: passive.image.group,
      name: passive.name,
      description: filteredPassive ?? "",
    },
    SpellQ: {
      type: "Q",
      name: spells[0].name,
      description: filteredSpellQ,
    },
    SpellW: {
      type: "W",
      name: spells[1].name,
      description: filteredSpellW,
    },
    SpellE: {
      type: "E",
      name: spells[2].name,
      description: filteredSpellE,
    },
    SpellR: {
      type: "R",
      name: spells[3].name,
      description: filteredSpellR,
    },
  };

  // Default to "SpellQ" if no ability is selected
  const selectedAbility = abilityMap[abilitySelected || "Passive"];

  return (
    <div className="championAbilities-style__description-wrapper">
      <div className="championAbilities-style__description-ability-type">
        {selectedAbility.type}
      </div>
      <div className="championAbilities-style__description-ability-name">
        {selectedAbility.name}
      </div>
      <div className="championAbilities-style__description-ability">
        {selectedAbility.description}
      </div>
    </div>
  );
}
