import { ChampionOverview } from "../../ChampionInfo/ChampionOverview/ChampionOverview";
import { ChampionAbilities } from "../../ChampionInfo/ChampionInfoAbilities/ChampionInfoAbilities";
import { ChampionSkins } from "../../ChampionInfo/ChampionSkins/ChampionSkins";
import { Footer } from "../../Footer/Footer";

export default function SingleChampionLayout() {
  return (
    <>
      <ChampionOverview />
      <ChampionAbilities />
      <ChampionSkins />
      <Footer />
    </>
  );
}
