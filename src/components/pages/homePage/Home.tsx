import { SkinDiscounts } from "../../skinDiscounts/SkinDiscounts";
import { ChampSearchForm } from "../../champSearchForm/ChampSearchForm";
import { ChampionCards } from "../../ChampionCard/championCard";

import "animate.css";
import "./home.scss";

import { useEffect, useState } from "react";
import { useLeagueService } from "../../../Backend/LeagueService";

type JSONValue =
  | string
  | number
  | boolean
  | null
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

export default function Home() {
  const [championList, setChampionList] = useState<JSONValue>([]);

  const { getAllChampions } = useLeagueService();

  useEffect(() => {
    getAllChampions().then((res) => {
      setChampionList(res);
    });
  }, []);

  return (
    <>
      <SkinDiscounts />
      <h1 className="title">
        <span className="animate__animated title__intro animate__fadeIn">
          choose your
        </span>
        <strong className="animate__animated title__main animate__fadeIn">
          champion
        </strong>
        <span className="animate__animated title__subtitle animate__fadeIn">
          With more than 140 champions, you'll find the perfect match for your
          playstyle. Master one, or master them all.
        </span>
      </h1>
      <ChampSearchForm championList={championList} />
      <ChampionCards championList={championList} />
    </>
  );
}
