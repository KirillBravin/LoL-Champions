import "./championCard.scss";

function ChampionCard() {
  return (
    <>
      <div className="champion-card">
        <div className="champion-card__wrapper">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_0.jpg`}
            alt=""
            className="champion-card__thumbnail"
          />
          <div className="champion-card__label">
            <span>Ahri</span>
          </div>
        </div>
      </div>
    </>
  );
}

export function ChampionCards() {
  return (
    <>
      <div className="champion-card__section">
        <div className="container">
          <ChampionCard />
        </div>
      </div>
    </>
  );
}
