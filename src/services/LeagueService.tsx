import { useHttp } from "./http.hook";

interface IChampion {
  id: string;
  key: string;
  title: string;
  role: string;
  difficulty: string;
  descriptionLong: string;
  descriptionShort: string;
  abilityPassive: TPassive[];
  abilityActive: TSpells[];
  skins: string;
}

interface IAllChampions {
  name: string;
}

type TSpells = {
  id: string;
  name: string;
  description: string;
};

type TPassive = {
  name: string;
  description: string;
};

type TSkins = {
  id: string;
  name: string;
};

type TChampionData = {
  id: string;
  key: string;
  title: string;
  tags: string[];
  info: {
    difficulty: string;
  };
  lore: string;
  blurb: string;
  passive: TPassive[];
  spells: TSpells[];
  skins: TSkins[];
};

type TAllChampionData = {
  name: string;
};

export const useLeagueService = () => {
  const { request } = useHttp();

  // Base paths
  const version: string = "14.7.1";
  const _apiBase: string = "https://ddragon.leagueoflegends.com/cdn/";
  //img
  const _skinLoading: string = "img/champion/loading/";
  const _splashLoading: string = "img/champion/splash/";
  //champs data
  const _champion: string = "/data/en_US/champion";

  const getChampionLoading = (name: string) => {
    return `${_apiBase + _skinLoading + name}`;
  };

  const getChampion = async (name = "Ahri") => {
    const res = await request(`${_apiBase + version + _champion}/${name}.json`);
    return _transformChampion(res.data.name);
  };

  const getAllChampions = async () => {
    const res = await request(`${_apiBase + version + _champion}.json`);
    return res.data.map(allChampions);
  };

  const _transformChampion = (
    champ: TChampionData,
    skinNumber: number = 0
  ): IChampion => {
    return {
      // General
      id: champ.id,
      key: champ.key,
      title: champ.title,
      role: champ.tags[0],
      difficulty: champ.info.difficulty,
      descriptionLong: champ.lore ? champ.lore : "There is no description",
      descriptionShort: champ.blurb ? champ.blurb : "There is no description",
      // Abilities
      abilityPassive: champ.passive,
      abilityActive: champ.spells,
      // Skins
      skins: champ.skins[skinNumber].name,
    };
  };

  const allChampions = (data: TAllChampionData): IAllChampions => {
    return {
      name: data.name,
    };
  };

  return {
    getChampionLoading,
    getChampion,
    getAllChampions,
  };
};
