import { ChampionOverview } from "../../ChampionInfo/ChampionOverview/ChampionOverview";
import { ChampionAbilities } from "../../ChampionInfo/ChampionInfoAbilities/ChampionInfoAbilities";

export default function SingleChampionLayout() {
  return (
    <>
      <ChampionOverview />
      <ChampionAbilities />
    </>
  );
}
