import { useCallback } from "react";
import { useHttp } from "./http.hook";

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

interface SingleChampionBody {
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
    full: string;
  };
}

interface Champions {
  [key: string]: AllChampionsBody;
}

export const useLeagueService = () => {
  const { request } = useHttp();

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
    async (name: string): Promise<SingleChampionData> => {
      const res: SingleChampionData = await request(
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
  };
};
