import { useState } from "react";
import "./championOverview.css";

import icon from "../../../assets/icons/swift-146-svgrepo-com.svg";
import championIcon from "../../../assets/icons/champion-icon.svg";

import { ChampionInfoDifficulty } from "../championInfoDifficulty/ChampionInfoDifficulty";

export function ChampionOverview({ champion }) {
  const [showMore, setShowMore] = useState(false);

  const backgroundStyle = {
    background:
      "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg') no-repeat center center ",
    backgroundSize: "cover",
  };

  const btnShowMoreClick = () => {
    setShowMore(true);
  };

  const descriptionText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quos cupiditate, sit numquam suscipit soluta facilis, ad, neque eligendi ipsam accusamus sed saepe maxime quis in labore officiis. Excepturi, asperiores? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus dolor voluptate maiores dolore iusto rerum culpa sint atque? Vero repellat earum facere natus commodi aspernatur consequatur deleniti vel mollitia.";

  return (
    <div className="championInfo">
      <div className="championInfo__background" style={backgroundStyle}></div>
      <div className="championInfo__overview">Overview</div>
      <a
        className="btn btn-dark championInfo__champion-list-wrapper"
        href="http://localhost:5173/"
      >
        <div className="championInfo__champion-list">Champion list</div>
        <img
          className="championInfo__champions-button-icon"
          src={championIcon}
        />
      </a>
      <div className="container">
        <div className="wrapper">
          <img
            className="championInfo__main-picture"
            src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg"
            alt="Ahri splash art"
          />
          {/* Short info of champion*/}
          <div className="headers">
            <h1 className="headers__champion-name">{champion.name}</h1>
            <h2 className="headers__champion-title">the Nine-Tailed Fox</h2>
          </div>
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
            <div className="championInfo__description-wrapper">
              <div className="championInfo__short-description">
                {showMore
                  ? descriptionText
                  : `${descriptionText.substring(0, 250)}...`}
                <p
                  className={`btn__show-more ${showMore ? "hidden" : ""}`}
                  onClick={btnShowMoreClick}
                >
                  See more
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-dividing-line"></div>
        <div className="websites-links-wrapper">
          <p className="websites-links__champion-mastery">Champion mastery</p>
          <a href="#" className="website-link">
            op.gg
          </a>
          <a href="#" className="website-link">
            u.gg
          </a>
          <a href="#" className="website-link">
            probuilds.net
          </a>
        </div>
        <div className="championInfo__bottom-wrapper">
          <div className="championInfo__bottom-line-ending"></div>
          <img
            src={icon}
            className="championInfo__bottom-line-icon"
            alt="icon"
          />
        </div>
      </div>
      <div className="championInfo__black-background"></div>
    </div>
  );
}
