export const useChampionInfo = (championName: string) => {
  switch (championName) {
    case "Ahri":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
        descriptionText:
          "Innately connected to the magic of the spirit realm, Ahri is a fox-like vastaya who can manipulate her prey's emotions and consume their essence—receiving flashes of their memory and insight from each soul she consumes. Once a powerful yet wayward predator, Ahri is now traveling the world in search of remnants of her ancestors while also trying to replace her stolen memories with ones of her own making.",
        difficulty: "Medium",
        difficultyId: 1,
      };
    default:
      return null;
  }
};
