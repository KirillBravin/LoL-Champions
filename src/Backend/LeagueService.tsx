import { useHttp } from "./http.hook";

interface IChampion {
  id: string;
  name: string;
  key: string;
  title: string;
  role: string;
  difficulty: string;
  descriptionLong: string;
  descriptionShort: string;
  abilityPassive: TPassive[];
  abilityActive: TSpells[];
}

/* interface IAllChampions {
  name: string;
  id: string;
} */

type TSpells = {
  id: string;
  name: string;
  description: string;
};

type TPassive = {
  name: string;
  description: string;
};

/* type TSkins = {
  id: string;
  name: string;
}; */

type TChampionData = {
  id: string;
  name: string;
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

/* type TAllChampionData = {
  name: string;
  id: string;
}; */

export const useLeagueService = () => {
  const { request, loading, error, process, clearError } = useHttp();

  // Base paths
  const version: string = "14.7.1";
  const _apiBase: string = "https://ddragon.leagueoflegends.com/cdn/";
  //img
  const _skinLoading: string = "img/champion/loading/";
  // const _splashLoading: string = "img/champion/splash/";
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
    const res = await request("http://localhost:5000/champions");
    return Object.values(res).map((champ) => ({
      id: champ.id,
      name: champ.name,
      key: champ.key,
      title: champ.title,
      role: champ.tags[0],
      difficulty: champ.info.difficulty,
      descriptionLong: champ.lore ? champ.lore : "There is no description",
      descriptionShort: champ.blurb ? champ.blurb : "There is no description",
      // Abilities
      abilityPassive: champ.passive,
      abilityActive: champ.spells,
    }));
  };

  const _transformChampion = (champ: TChampionData): IChampion => {
    return {
      // General
      id: champ.id,
      name: champ.name,
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
    };
  };

  /*   const allChampions = (data: TAllChampionData): IAllChampions => {
    return {
      name: data.name,
      id: data.id,
    };
  }; */

  return {
    getChampionLoading,
    getChampion,
    getAllChampions,
    loading,
    error,
    process,
    clearError,
  };
};
