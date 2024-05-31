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

  const description = [
    {
      name: "Essence Theft",
      type: "Passive",
      descr:
        "After killing 9 minions or monsters, Ahri heals.<br>After taking down an enemy champion, Ahri heals for a greater amount.",
    },
    {
      name: "Orb of Deception",
      type: "Q",
      descr:
        "Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back.",
    },
    {
      name: "Fox-Fire",
      type: "W",
      descrp:
        "Ahri gains a brief burst of Move Speed and releases three fox-fires, that lock onto and attack nearby enemies.",
    },
    {
      name: "Charm",
      type: "E",
      descr:
        "Ahri blows a kiss that damages and charms an enemy it encounters, instantly stopping movement abilities and causing them to walk harmlessly towards her.",
    },
    {
      name: "Spirit Rush",
      type: "R",
      descr:
        "Ahri dashes forward and fires essence bolts, damaging nearby enemies. Spirit Rush can be cast up to three times before going on cooldown, and gains additional recasts when taking down enemy champions.",
    },
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
            key={index}
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
          ></div>
          {index === iconIsActive ? <div className="active-circle"></div> : ""}
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
            <div className="championAbilities-style__description-wrapper">
              <div className="championAbilities-style__description-ability-type">
                Passive
              </div>
              <div className="championAbilities-style__description-ability-name">
                Essence Theft
              </div>
              <div className="championAbilities-style__description-ability">
                After killing 9 minions or monsters, Ahri heals. After taking
                down an enemy champion, Ahri heals for a greater amount.
              </div>
            </div>
          </div>
          <div className="championAbilities-style__abilities-preview"></div>
        </div>
      </div>
    </div>
  );
}
