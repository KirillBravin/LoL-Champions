import { useHttp } from "./http.hook";

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

  const getChampionLoading = (name: string) => {
    return `${_apiBase + _skinLoading + name}`;
  };

  const getChampion = (name: "Ahri") => {
    const res = await request(`${_apiBase}`);
  };

  return {
    getChampionLoading,
  };
};
