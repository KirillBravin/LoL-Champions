import "./championCard.scss";
import { Spinner } from "../Spinner/Spinner";
import { useLeagueService } from "../../Backend/LeagueService";
import { useEffect } from "react";

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
}

interface ChampionCardProps {
  champion: string;
}

export function ChampionCards({
  championList,
  championSelected,
}: ChampionCardsProps) {
  const { loading } = useLeagueService();
  const spinner = loading ? <Spinner /> : null;

  useEffect(() => {
    championSelected;
    console.log(championSelected);
  }, [championSelected]);

  const renderChampions = (arr: SingleChampionData[]) => {
    const items = arr.map((item) => {
      if (item.name === championSelected) {
        return <ChampionCard key={item.id} champion={item.id} />;
      } else if (championSelected === "") {
        return <ChampionCard key={item.id} champion={item.id} />;
      }
    });
    return <div className="cards-style">{items}</div>;
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
      <div className="champion-card">
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
