import { useState } from "react";
import "./championInfoAbilities.scss";

interface Abilities {
  abilityType: string;
  name: string;
}

export function ChampionAbilities() {
  const [iconIsActive, setIconIsActive] = useState<number | null>(null);

  const iconClicked = (i: number) => {
    setIconIsActive(i === iconIsActive ? null : i);
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
    const items = arg.map((item, index) => {
      return (
        <img
          key={index}
          onClick={() => {
            iconClicked(index);
          }}
          className={`championAbilities-style__ability-icon ${
            index === iconIsActive ? "ability-icon_active" : ""
          }`}
          src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/${getImagePath(
            item
          )}/${item.name}.png`}
          alt=""
        />
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
    <div className="championAbilities">
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
          </div>
          <div className="championAbilities-style__abilities-preview"></div>
        </div>
      </div>
    </div>
  );
}