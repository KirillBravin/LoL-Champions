import { useEffect, useState } from "react";
import { ChampionOverview } from "../../ChampionInfo/ChampionOverview/ChampionOverview";
import { ChampionAbilities } from "../../ChampionInfo/ChampionInfoAbilities/ChampionInfoAbilities";
import { ChampionSkins } from "../../ChampionInfo/ChampionSkins/ChampionSkins";
import { Footer } from "../../Footer/Footer";
import { useLeagueService } from "../../../Backend/LeagueService";

interface ChampionName {
  champName: string;
}

interface SingleChampionBody {
  id: string;
  name: string;
  title: string;
  skins: {
    [name: string]: {
      num: number;
      name: string;
    };
  };
  lore: string;
  tags: {
    [name: string]: string;
  };
  info: {
    difficulty: number;
  };
  spells: {
    [name: string]: {
      id: string;
      name: string;
      description: string;
    };
  };
  passive: {
    name: string;
    description: string;
    full: string;
  };
}

export default function SingleChampionLayout({ champName }: ChampionName) {
  const [champion, setChampion] = useState<SingleChampionBody | null>(null);
  const { getChampion } = useLeagueService();

  useEffect(() => {
    const fetchChampion = async () => {
      const champData = await getChampion(champName);
      setChampion(champData);
    };

    fetchChampion();
  }, [champName, getChampion]);

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
