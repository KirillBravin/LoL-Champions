import "./championAbilityPreview.scss";

interface AbilitySelected {
  abilitySelected: string | null;
}

export function ChampionAbilityPreview({ abilitySelected }: AbilitySelected) {
  const videoPaths = [
    {
      name: "Passive",
      path_1:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.mp4",
      path_2:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.webm",
    },
    {
      name: "SpellQ",
      path_1:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_Q1.mp4",
      path_2:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.webm",
    },
    {
      name: "SpellW",
      path_1:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_W1.mp4",
      path_2:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.webm",
    },
    {
      name: "SpellE",
      path_1:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_E1.mp4",
      path_2:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.webm",
    },
    {
      name: "SpellR",
      path_1:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_R1.mp4",
      path_2:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.webm",
    },
  ];

  const whichAbility = function (abilitySelected: string | null) {
    const selectedAbility = videoPaths.find(
      (ability) => ability.name === abilitySelected
    );

    if (selectedAbility) {
      return (
        <video
          key={selectedAbility.name}
          className="championAbilities-style__videos"
          autoPlay
          loop
          muted
        >
          <source src={selectedAbility.path_1} type="video/mp4" />
          <source src={selectedAbility.path_2} type="video/webm" />
          <p>Your browser doesn't support HTML video.</p>
        </video>
      );
    }
    return (
      <video className="championAbilities-style__videos" autoPlay loop muted>
        <source src={videoPaths[0].path_1} type="video/mp4" />
        <source src={videoPaths[0].path_2} type="video/webm" />
        <p>Your browser doesn't support HTML video.</p>
      </video>
    );
  };

  return <>{whichAbility(abilitySelected)}</>;
}
