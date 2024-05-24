import "./championInfo.css";

import { ChampionInfoDifficulty } from "./championInfoDifficulty/ChampionInfoDifficulty";

export function ChampionInfo() {
  const backgroundStyle = {
    background:
      "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg') no-repeat center center ",
    backgroundSize: "cover",
  };

  return (
    <div className="championInfo">
      <div className="championInfo__background" style={backgroundStyle}></div>
      <div className="container">
        <div className="wrapper">
          <img
            className="championInfo__main-picture"
            src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg"
            alt="Ahri splash art"
          />
          {/* Short info of champion*/}
          <div className="championInfo__short-info">
            <div className="championInfo__short-info__wrapper">
              <div className="championInfo__roles">
                <img
                  src="https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg"
                  alt="Role Icon"
                  className="championInfo__roles__icon"
                />
                <p className="championInfo__roles__general">Role</p>
                <p className="championInfo__roles__specific-role">Mage</p>
              </div>
              <div className="championInfo__difficulties">
                <ChampionInfoDifficulty />
                <p className="championInfo__difficulties__general">
                  Difficulty
                </p>
                <p className="championInfo__difficulties__specific-difficulties">
                  Moderate
                </p>
              </div>
            </div>
            <div className="championInfo__dividing-line"></div>
            <div className="championInfo__short-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quos
              cupiditate, sit numquam suscipit soluta facilis, ad, neque
              eligendi ipsam accusamus sed saepe maxime quis in labore officiis.
              Excepturi, asperiores?
            </div>
          </div>
        </div>
      </div>
      <div className="championInfo__black-background"></div>
    </div>
  );
}
