import "./championAbilityPreview.scss";
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

type ChampionAbilityPreviewProps = {
  abilitySelected: string | null;
  champion: SingleChampionBody | null;
};

export function ChampionAbilityPreview({
  abilitySelected,
  champion,
}: ChampionAbilityPreviewProps) {
  const championInfo = useChampionInfo(champion?.name ?? "");

  const whichAbility = function (abilitySelected: string | null) {
    const selectedAbility = championInfo?.videoPaths?.find(
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
    if (championInfo?.videoPaths && championInfo.videoPaths[0].path_1) {
      return (
        <video className="championAbilities-style__videos" autoPlay loop muted>
          <source src={championInfo.videoPaths[0].path_1} type="video/mp4" />
          <source src={championInfo.videoPaths[0].path_2} type="video/webm" />
          <p>Your browser doesn't support HTML video.</p>
        </video>
      );
    } else {
      return null;
    }
  };

  return <>{whichAbility(abilitySelected)}</>;
}
