import "./ChampionInfoAbilityDescriptions.scss";
import { useChampionInfo } from "../../../services/championInfo";

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
  const championInfo = useChampionInfo(champion?.name ?? "");

  if (!champion) {
    return null;
  }

  const { spells, passive } = champion;

  const abilityDescriptionRender = function (abilitySelected: string | null) {
    if (abilitySelected === "Passive") {
      return (
        <>
          <div className="championAbilities-style__description-ability-type">
            {passive.image.group}
          </div>
          <div className="championAbilities-style__description-ability-name">
            {passive.name}
          </div>
          <div className="championAbilities-style__description-ability">
            {championInfo?.abilityPassiveDescription}
          </div>
        </>
      );
    } else if (abilitySelected === "SpellQ") {
      return (
        <>
          <div className="championAbilities-style__description-ability-type">
            Q
          </div>
          <div className="championAbilities-style__description-ability-name">
            {spells[0].name}
          </div>
          <div className="championAbilities-style__description-ability">
            {spells[0].description}
          </div>
        </>
      );
    } else if (abilitySelected === "SpellW") {
      return (
        <>
          <div className="championAbilities-style__description-ability-type">
            W
          </div>
          <div className="championAbilities-style__description-ability-name">
            {spells[1].name}
          </div>
          <div className="championAbilities-style__description-ability">
            {spells[1].description}
          </div>
        </>
      );
    } else if (abilitySelected === "SpellE") {
      return (
        <>
          <div className="championAbilities-style__description-ability-type">
            E
          </div>
          <div className="championAbilities-style__description-ability-name">
            {spells[2].name}
          </div>
          <div className="championAbilities-style__description-ability">
            {spells[2].description}
          </div>
        </>
      );
    } else if (abilitySelected === "SpellR") {
      return (
        <>
          <div className="championAbilities-style__description-ability-type">
            R
          </div>
          <div className="championAbilities-style__description-ability-name">
            {spells[3].name}
          </div>
          <div className="championAbilities-style__description-ability">
            {spells[3].description}
          </div>
        </>
      );
    } else
      return (
        <>
          <div className="championAbilities-style__description-ability-type">
            Q
          </div>
          <div className="championAbilities-style__description-ability-name">
            {spells[0].name}
          </div>
          <div className="championAbilities-style__description-ability">
            {spells[0].description}
          </div>
        </>
      );
  };

  return (
    <div className="championAbilities-style__description-wrapper">
      {abilityDescriptionRender(abilitySelected)}
    </div>
  );
}
