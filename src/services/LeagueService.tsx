import { useHttp } from "./http.hook";

export const useLeagueService = () => {
  // Base paths
  const _apiBase: string = "https://ddragon.leagueoflegends.com/cdn/";
  //img
  const _skinLoading: string = "img/champion/loading/";
  const _splashLoading: string = "img/champion/splash/";
  //champs data

  const getChampionLoading = (name: string) => {
    return `${_apiBase + _skinLoading + name}`;
  };

  const getChampionAhri = (name: "Ahri") => {
    const championSplashArt_0 = `${_apiBase + _splashLoading}Ahri_0.jpg`;
  };

  return {
    getChampionLoading,
  };
};
