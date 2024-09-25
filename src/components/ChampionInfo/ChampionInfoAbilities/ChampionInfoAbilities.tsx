import { useState } from "react";
import "./championInfoAbilities.scss";

import { ChampionInfoAbilityDescriptions } from "../ChampionInfoAbilityDescriptions/ChampionInfoAbilityDescriptions";
import { ChampionAbilityPreview } from "../ChampionAbilityPreview/ChampionAbilityPreview";
import { Spinner } from "../../Spinner/Spinner";

interface Abilities {
  abilityType: string;
  name: string;
}

type ChampionAbilitiesProps = {
  champion: SingleChampionBody | null; // Add proper typing
};

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

export function ChampionAbilities({ champion }: ChampionAbilitiesProps) {
  const [iconIsActive, setIconIsActive] = useState<number | null>(null);
  const [abilitySelected, setAbilitySelected] = useState<string | null>(null);

  if (!champion) {
    return <Spinner />;
  }

  const abilityMap: { [key: number]: string } = {
    0: "Passive",
    1: "SpellQ",
    2: "SpellW",
    3: "SpellE",
    4: "SpellR",
  };

  const iconClicked = (i: number) => {
    setIconIsActive(i === iconIsActive ? null : i);
    setAbilitySelected(abilityMap[i] || null);
  };

  const abilities: Abilities[] = [
    { abilityType: "passive", name: champion?.passive?.image?.full },
    { abilityType: "spell", name: champion?.spells[0]?.image?.full },
    { abilityType: "spell", name: champion?.spells[1]?.image?.full },
    { abilityType: "spell", name: champion?.spells[2]?.image?.full },
    { abilityType: "spell", name: champion?.spells[3]?.image?.full },
  ];

  const getImagePath = (ability: Abilities) => {
    if (ability.abilityType === "spell") {
      return "spell";
    } else return "passive";
  };

  const abilityIcons = (arg: Abilities[]) => {
    const handleDrag = (event: React.DragEvent<HTMLImageElement>) => {
      event.preventDefault();
    };

    const items = arg.map((item, index) => {
      return (
        <div className="icon-wrapper">
          <img
            key={`${item.name}-${index}`}
            onClick={() => {
              iconClicked(index);
            }}
            className={`championAbilities-style__ability-icon ${
              index === iconIsActive ? "ability-icon-active" : ""
            }`}
            src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/${getImagePath(
              item
            )}/${item.name}`}
            alt={item.name}
            draggable="false"
            onDragStart={handleDrag}
          />
          <div
            className={`icon-wrapper__style-dot ${
              index === iconIsActive ? "dot-active" : ""
            }`}
          >
            {index === iconIsActive ? (
              <div className="active-circle"></div>
            ) : (
              ""
            )}
          </div>
        </div>
      );
    });
    return (
      <div className="championAbilities-style__ability-icons-wrapper">
        {items}
      </div>
    );
  };

  const iconsRender = abilityIcons(abilities);

  return (
    <div className="championAbilities-style">
      <div className="championAbilities-style__background">
        <img
          className="championAbilities-style__icon"
          src="https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg"
          alt="Mage"
        />
      </div>
      <div className="championAbilities-style__abilities-sideText">
        Abilities
      </div>
      <div className="container">
        <div className="championAbilities-style__wrapper">
          <div className="championAbilities-style__abilities-info">
            <h2 className="championAbilities-style__header">Abilities</h2>
            {iconsRender}
            <div className="championAbilities-style__diving-line"></div>
            <ChampionInfoAbilityDescriptions
              abilitySelected={abilitySelected}
              champion={champion}
            />
          </div>
          <div className="championAbilities-style__abilities-preview">
            <ChampionAbilityPreview
              abilitySelected={abilitySelected}
              champion={champion}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
