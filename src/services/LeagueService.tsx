import { useHttp } from "./http.hook";

interface iChampion {
  id?: string;
  key?: number;
  title?: string;
  role?: string;
  difficulty?: number;
  descriptionLong?: string;
  descriptionShort?: string;
  abilityPassiveName?: string;
  abilityPassiveDescr?: string;
  abilityQName?: string;
  abilityQDescr?: string;
  abilityWName?: string;
  abilityWDescr?: string;
  abilityEName?: string;
  abilityEDescr?: string;
  abilityRName?: string;
  abilityRDescr?: string;
  skinsArray?: string;
}

export const useLeagueService = () => {
  const { loading, request, error, clearError, process, setProcess } =
    useHttp();

  // Base paths
  const version: string = "14.4.1";
  const _apiBase: string = "https://ddragon.leagueoflegends.com/cdn/";
  //img
  const _skinLoading: string = "img/champion/loading/";
  const _splashLoading: string = "img/champion/splash/";
  //champs data
  const _champion: string = "/data/en_US/champion/";

  const getChampionLoading = (name: string) => {
    return `${_apiBase + _skinLoading + name}`;
  };

  const getChampion = async (name: "Ahri") => {
    const res = await request(`${_apiBase}${version}${_champion}${name}.json`);
    return _transformChampion(res, name);
  };

  const _transformChampion = (
    champ: any,
    champName: string,
    skinNumber: number = 0
  ): iChampion => {
    console.log(champ);
    return {
      // General
      id: champ.data.champName.id,
      key: champ.data.name.key,
      title: champ.data.champName.title,
      role: champ.data.champName.tags[0],
      difficulty: champ.data.champName.info.difficulty,
      descriptionLong: champ.data.champName.lore
        ? champ.data.champName.lore
        : "There is no description",
      descriptionShort: champ.data.champName.blurb
        ? champ.data.champName.blurb
        : "There is no description",
      // Abilities
      abilityPassiveName: champ.data.champName.passive.name,
      abilityPassiveDescr: champ.data.champName.passive.description,
      abilityQName: champ.data.champName.spells[0].name,
      abilityQDescr: champ.data.champName.spells[0].description,
      abilityWName: champ.data.champName.spells[1].name,
      abilityWDescr: champ.data.champName.spells[1].description,
      abilityEName: champ.data.champName.spells[2].name,
      abilityEDescr: champ.data.champName.spells[2].description,
      abilityRName: champ.data.champName.spells[3].name,
      abilityRDescr: champ.data.champName.spells[3].description,
      // Skins
      skinsArray: champ.data.champName.skins[skinNumber].name,
    };
  };

  return {
    getChampionLoading,
    getChampion,
  };
};
