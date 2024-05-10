import "./championCard.scss";
import "animate.css";
import { Spinner } from "../Spinner/Spinner";
import { useLeagueService } from "../../Backend/LeagueService";
import { useEffect, useState } from "react";

interface SingleChampionData {
  id: string;
  name: string;
  key: string;
  title: string;
  tags: string;
  difficulty: number;
}

interface ChampionCardsProps {
  championList: SingleChampionData[];
  championSelected: string;
  roleSelected: string;
}

interface ChampionCardProps {
  champion: string;
}

export function ChampionCards({
  championList,
  championSelected,
  roleSelected,
}: ChampionCardsProps) {
  const [currentRole, setCurrentRole] = useState<string>("");

  const { loading } = useLeagueService();
  const spinner = loading ? <Spinner /> : null;

  function roleCorrection(role: string) {
    if (role === "Assassins") {
      setCurrentRole("Assassin");
    } else if (role === "Fighters") {
      setCurrentRole("Fighter");
    } else if (role === "Mages") {
      setCurrentRole("Mage");
    } else if (role === "Marksmen") {
      setCurrentRole("Marksman");
    } else if (role === "Supports") {
      setCurrentRole("Support");
    } else if (role === "Tanks") {
      setCurrentRole("Tank");
    } else {
      setCurrentRole("");
    }
  }

  useEffect(() => {
    roleCorrection(roleSelected);
  }, [roleSelected]);

  const renderChampions = (arr: SingleChampionData[]) => {
    if (currentRole === "") {
      const items = arr.map((item) => {
        if (item.name === championSelected || championSelected === "") {
          return (
            <ChampionCard
              key={`${item.id}-${championSelected}`}
              champion={item.id}
            />
          );
        }
        return null;
      });
      return <div className="cards-style">{items}</div>;
    } else if (currentRole !== "") {
      const items = arr.map((item) => {
        if (item.tags[0] === currentRole || item.tags[1] === currentRole) {
          return (
            <ChampionCard
              key={`${item.id}-${championSelected}`}
              champion={item.id}
            />
          );
        }
        return null;
      });
      return <div className="cards-style">{items}</div>;
    }
  };

  const cards = renderChampions(championList);

  return (
    <>
      <div className="champion-cards">
        <div className="container">
          {spinner}
          {cards}
        </div>
      </div>
    </>
  );
}

function ChampionCard(championList: ChampionCardProps) {
  let championId: string = championList.champion;
  let championName: string = championId;

  if (championId === "Fiddlesticks") {
    championId = "FiddleSticks";
  }

  if (championName === "MonkeyKing") {
    championName = "Wukong";
  }
  if (championName === "Nunu") {
    championName = "Nunu & Willump";
  }
  return (
    <>
      <div className="champion-card animate__animated animate__fadeIn animate__slow">
        <div className="champion-card__wrapper">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/centered/${championId}_0.jpg`}
            alt=""
            className="champion-card__thumbnail"
          />
          <div className="champion-card__label">
            <span>{championName}</span>
          </div>
        </div>
      </div>
    </>
  );
}
