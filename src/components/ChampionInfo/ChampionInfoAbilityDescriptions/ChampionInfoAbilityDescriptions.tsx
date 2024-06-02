import "./ChampionInfoAbilityDescriptions.scss";

import { useState } from "react";

export function ChampionInfoAbilityDescriptions() {
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

  return (
    <div className="championAbilities-style__description-wrapper">
      <div className="championAbilities-style__description-ability-type">
        Passive
      </div>
      <div className="championAbilities-style__description-ability-name">
        Essence Theft
      </div>
      <div className="championAbilities-style__description-ability">
        After killing 9 minions or monsters, Ahri heals. After taking down an
        enemy champion, Ahri heals for a greater amount.
      </div>
    </div>
  );
}
