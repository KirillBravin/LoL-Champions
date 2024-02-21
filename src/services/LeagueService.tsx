export const useLeagueService = () => {
  // Base paths
  const _apiBase: string = "https://ddragon.leagueoflegends.com/cdn/";
  const _skinLoading: string = "img/champion/loading/";

  const getChampionLoading = (name: string) => {
    return `${_apiBase + _skinLoading + name}`;
  };

  return {
    getChampionLoading,
  };
};
