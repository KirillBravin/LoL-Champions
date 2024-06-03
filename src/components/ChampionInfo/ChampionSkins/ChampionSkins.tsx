import "./ChampionSkins.scss";

export function ChampionSkins() {
  return (
    <div className="championSkins">
      <div className="championSkins__skins-sideText">Available skins</div>
      <div className="championSkins__slider">
        <div className="championSkins__slider-wrapper">
          <img
            className="championSkins__slider-background"
            src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg"
            alt="champion skin"
          />
          <div className="championSkins__slider-cover">
            <h2 className="championSkins__slider-header">Available skins</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
