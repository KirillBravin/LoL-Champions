import "./ChampionInfoAbilityDescriptions.scss";

interface AbilitySelected {
  abilitySelected: string | null;
}

export function ChampionInfoAbilityDescriptions({
  abilitySelected,
}: AbilitySelected) {
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
      descr:
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

  const abilityDescriptionRender = function (abilitySelected: string) {
    if (abilitySelected === "Passive") {
      return (
        <>
          <div className="championAbilities-style__description-ability-type">
            {description[0].type}
          </div>
          <div className="championAbilities-style__description-ability-name">
            {description[0].name}
          </div>
          <div className="championAbilities-style__description-ability">
            {description[0].descr}
          </div>
        </>
      );
    } else if (abilitySelected === "SpellQ") {
      return (
        <>
          <div className="championAbilities-style__description-ability-type">
            {description[1].type}
          </div>
          <div className="championAbilities-style__description-ability-name">
            {description[1].name}
          </div>
          <div className="championAbilities-style__description-ability">
            {description[1].descr}
          </div>
        </>
      );
    } else if (abilitySelected === "SpellW") {
      return (
        <>
          <div className="championAbilities-style__description-ability-type">
            {description[2].type}
          </div>
          <div className="championAbilities-style__description-ability-name">
            {description[2].name}
          </div>
          <div className="championAbilities-style__description-ability">
            {description[2].descr}
          </div>
        </>
      );
    } else if (abilitySelected === "SpellE") {
      return (
        <>
          <div className="championAbilities-style__description-ability-type">
            {description[3].type}
          </div>
          <div className="championAbilities-style__description-ability-name">
            {description[3].name}
          </div>
          <div className="championAbilities-style__description-ability">
            {description[3].descr}
          </div>
        </>
      );
    } else if (abilitySelected === "SpellR") {
      return (
        <>
          <div className="championAbilities-style__description-ability-type">
            {description[4].type}
          </div>
          <div className="championAbilities-style__description-ability-name">
            {description[4].name}
          </div>
          <div className="championAbilities-style__description-ability">
            {description[4].descr}
          </div>
        </>
      );
    } else return null;
  };

  return (
    <div className="championAbilities-style__description-wrapper">
      {abilityDescriptionRender(abilitySelected)}
    </div>
  );
}
