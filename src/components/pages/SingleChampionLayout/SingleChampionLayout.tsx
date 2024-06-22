import { useCallback, useEffect, useState } from "react";
import { ChampionOverview } from "../../ChampionInfo/ChampionOverview/ChampionOverview";
import { ChampionAbilities } from "../../ChampionInfo/ChampionInfoAbilities/ChampionInfoAbilities";
import { ChampionSkins } from "../../ChampionInfo/ChampionSkins/ChampionSkins";
import { Footer } from "../../Footer/Footer";
import { useLeagueService } from "../../../Backend/LeagueService";

interface ChampionName {
  champName: string;
}

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

export default function SingleChampionLayout({ champName }: ChampionName) {
  const [champion, setChampion] = useState<SingleChampionBody | null>(null);
  const { getChampion } = useLeagueService();

  /*   useEffect(() => {
    const fetchChampion = async () => {
      const champData = await getChampion("Ahri");
      console.log(champData);
      setChampion(champData);
    };

    fetchChampion();
  }, [champName, getChampion]); */

  const fetchChampion = useCallback(async () => {
    try {
      const champData = await getChampion("Ahri");
      setChampion(champData);
    } catch (error) {
      console.log("Failed to fetch champion:", error);
    }
  }, [getChampion]);

  useEffect(() => {
    fetchChampion();
  }, [fetchChampion]);

  console.log(champion);

  return (
    <>
      <ChampionOverview />
      <ChampionAbilities />
      <ChampionSkins />
      <Footer />
    </>
  );
}
