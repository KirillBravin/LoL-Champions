import "./championCard.scss";
import { Spinner } from "../Spinner/Spinner";
import { useLeagueService } from "../../Backend/LeagueService";

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
}

interface ChampionCardProps {
  champion: string;
}

export function ChampionCards(props: ChampionCardsProps) {
  const { loading } = useLeagueService();
  const spinner = loading ? <Spinner /> : null;

  const renderChampions = (arr: SingleChampionData[]) => {
    const items = arr.map((item) => {
      return <ChampionCard key={item.id} champion={item.id} />;
    });
    return <div className="cards-style">{items}</div>;
  };

  const cards = renderChampions(props.championList);

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

function ChampionCard(props: ChampionCardProps) {
  let championId: string = props.champion;
  let championName: string = championId;

  if (championId === "Fiddlesticks") {
    championId = "FiddleSticks";
  }

  if (championName === "MonkeyKing") {
    championName = "Wukong";
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
