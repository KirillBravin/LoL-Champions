import { useState } from "react";
import "./championInfoAbilities.scss";

import { ChampionInfoAbilityDescriptions } from "../ChampionInfoAbilityDescriptions/ChampionInfoAbilityDescriptions";
import { ChampionAbilityPreview } from "../ChampionAbilityPreview/ChampionAbilityPreview";

interface Abilities {
  abilityType: string;
  name: string;
}

export function ChampionAbilities() {
  const [iconIsActive, setIconIsActive] = useState<number | null>(null);
  const [abilitySelected, setAbilitySelected] = useState<string | null>(null);

  const iconClicked = (i: number) => {
    setIconIsActive(i === iconIsActive ? null : i);
    if (i === 0) {
      setAbilitySelected("Passive");
    } else if (i === 1) {
      setAbilitySelected("SpellQ");
    } else if (i === 2) {
      setAbilitySelected("SpellW");
    } else if (i === 3) {
      setAbilitySelected("SpellE");
    } else if (i === 4) {
      setAbilitySelected("SpellR");
    }
  };

  const abilities: Abilities[] = [
    { abilityType: "passive", name: "Ahri_SoulEater2" },
    { abilityType: "spell", name: "AhriQ" },
    { abilityType: "spell", name: "AhriW" },
    { abilityType: "spell", name: "AhriE" },
    { abilityType: "spell", name: "AhriR" },
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
            )}/${item.name}.png`}
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
            />
          </div>
          <div className="championAbilities-style__abilities-preview">
            <ChampionAbilityPreview abilitySelected={abilitySelected} />
          </div>
        </div>
      </div>
    </div>
  );
}
