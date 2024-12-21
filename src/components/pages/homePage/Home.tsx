import { ChampSearchForm } from "../../champSearchForm/ChampSearchForm";
import { ChampionCards } from "../../ChampionCard/championCard";
import { Footer } from "../../Footer/Footer";
import { LeagueOfLegendsIntro } from "../../LeagueOfLegendsIntro/LeagueOfLegendsIntro";
import { Spinner } from "../../Spinner/Spinner";

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
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { getAllChampions } = useLeagueService();

  const fetchChampions = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getAllChampions();
      setChampionList(data);
      setIsLoading(false);
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
    <div className="page-container">
      <div className="content-wrap">
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
        {isLoading ? (
          <div className="spinner-container">
            <Spinner />
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
