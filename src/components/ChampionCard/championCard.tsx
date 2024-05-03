import "./championCard.scss";
import { Spinner } from "../Spinner/Spinner";
import { useLeagueService } from "../../Backend/LeagueService";

interface SingleChampionData {
  id: string;
  name: string;
  key: string;
  title: string;
  tags: string;
  info: number;
}

export function ChampionCards(props) {
  const { loading } = useLeagueService();
  const spinner = loading ? <Spinner /> : null;

  const renderChampions = (arr) => {
    const items = arr.map((item) => {
      return <ChampionCard championList={item.id} />;
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

function ChampionCard(props) {
  let championId: string = props.championList;
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
