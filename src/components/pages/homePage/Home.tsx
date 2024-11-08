import { ChampSearchForm } from "../../champSearchForm/ChampSearchForm";
import { ChampionCards } from "../../ChampionCard/championCard";
import { Footer } from "../../Footer/Footer";
import { LeagueOfLegendsIntro } from "../../LeagueOfLegendsIntro/LeagueOfLegendsIntro";

import "animate.css";
import "../../../style/style.css";

import { useCallback, useEffect, useState } from "react";
import { useLeagueService } from "../../../Backend/LeagueService";

interface SingleChampionData {
  id: string;
  name: string;
  key: string;
  title: string;
  tags: {
    [name: number]: string;
  };
  difficulty: number;
}

export default function Home() {
  const [championList, setChampionList] = useState<SingleChampionData[]>([]);
  const [championSelected, setChampionSelected] = useState<string>("");
  const [roleSelected, setRoleSelected] = useState<string>("");
  const [difficultySelected, setDifficultySelected] = useState<number[]>([]);

  const { getAllChampions } = useLeagueService();

  const fetchChampions = useCallback(async () => {
    try {
      const data = await getAllChampions();
      setChampionList(data);
    } catch (error) {
      console.error("Failed to fetch champions:", error);
    }
  }, [getAllChampions]);

  useEffect(() => {
    console.log("home - effect render");
    fetchChampions();
  }, [fetchChampions]);

  console.log("Home render");

  function handleChampionSelected(data: string): void {
    setChampionSelected(data);
  }

  function handleRoleSelected(data: string): void {
    setRoleSelected(data);
  }

  function handleDifficulty(data: number[]): void {
    setDifficultySelected(data);
  }

  return (
    <>
      {<LeagueOfLegendsIntro />}
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
      <ChampSearchForm
        championList={championList}
        getChampionSelected={handleChampionSelected}
        getRoleSelected={handleRoleSelected}
        getDifficulty={handleDifficulty}
      />
      <ChampionCards
        championList={championList}
        championSelected={championSelected}
        roleSelected={roleSelected}
        difficultySelected={difficultySelected}
      />
      <Footer />
    </>
  );
}
