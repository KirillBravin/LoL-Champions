import { useCallback } from "react";
import { useHttp } from "./http.hook";

// Single Champion descr short
interface SingleChampionData {
  id: string;
  name: string;
  key: string;
  title: string;
  tags: {
    [name: string]: string;
  };
  difficulty: number;
}

interface AllChampionsBody {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: {
    [name: string]: string;
  };
  partype: string;
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
}

// Single champion description full

interface SingleChampionDataLong {
  id: string;
  name: string;
  title: string;
  skins: {
    [name: string]: {
      num: number;
      name: string;
    };
  };
  lore: string;
  tags: {
    [name: string]: string;
  };
  info: {
    difficulty: number;
  };
  spells: {
    [name: string]: {
      id: string;
      name: string;
      description: string;
    };
  };
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
    };
  };
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

interface Champions {
  [key: string]: AllChampionsBody;
}

export const useLeagueService = () => {
  const { request, loading, error, process } = useHttp();

  const _apiBase: string = "https://ddragon.leagueoflegends.com/cdn/";
  const _skinLoading: string = "img/champion/loading/";

  const getChampionLoading = useCallback(
    (name: string) => {
      return `${_apiBase}${_skinLoading}${name}`;
    },
    [_apiBase, _skinLoading]
  );

  const getAllChampions = useCallback(async (): Promise<
    SingleChampionData[]
  > => {
    const res: Champions = await request("http://localhost:5000/champions");
    return Object.values(res).map((champ: AllChampionsBody) => ({
      id: champ.id,
      name: champ.name,
      key: champ.key,
      title: champ.title,
      tags: champ.tags,
      difficulty: champ.info.difficulty,
    }));
  }, [request]);

  const getChampion = useCallback(
    async (name: string): Promise<SingleChampionBody> => {
      const res: SingleChampionBody = await request(
        `http://localhost:5000/champion/${name}`
      );
      return res;
    },
    [request]
  );

  return {
    getChampionLoading,
    getAllChampions,
    getChampion,
    loading,
    error,
    process,
  };
};
