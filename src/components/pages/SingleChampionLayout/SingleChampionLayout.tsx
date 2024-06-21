import { ChampionOverview } from "../../ChampionInfo/ChampionOverview/ChampionOverview";
import { ChampionAbilities } from "../../ChampionInfo/ChampionInfoAbilities/ChampionInfoAbilities";
import { ChampionSkins } from "../../ChampionInfo/ChampionSkins/ChampionSkins";
import { Footer } from "../../Footer/Footer";

interface ChampionName {
  champName: string;
}

export default function SingleChampionLayout({ champName }: ChampionName) {
  console.log(champName);
  return (
    <>
      <ChampionOverview />
      <ChampionAbilities />
      <ChampionSkins />
      <Footer />
    </>
  );
}
