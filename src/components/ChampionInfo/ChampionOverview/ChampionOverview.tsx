import { useState } from "react";
import "./championOverview.css";
import { useChampionInfo } from "../../../services/championInfo";
import { Spinner } from "../../Spinner/Spinner";

import icon from "../../../assets/icons/swift-146-svgrepo-com.svg";
import championIcon from "../../../assets/icons/champion-icon.svg";

import { ChampionInfoDifficulty } from "../championInfoDifficulty/ChampionInfoDifficulty";

export function ChampionOverview({ champion }) {
  const [showMore, setShowMore] = useState(false);
  const championInfo = useChampionInfo(champion?.name);

  if (!champion) {
    return <Spinner />;
  }

  console.log(champion);

  const backgroundStyle = {
    background: `url(${championInfo?.background}) no-repeat center center`,
    backgroundSize: "cover",
  };

  const btnShowMoreClick = () => {
    setShowMore(true);
  };

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
            src={championInfo?.background}
            alt={`${champion?.name} splash art`}
          />
          {/* Short info of champion*/}
          <div className="headers">
            <h1 className="headers__champion-name">{champion?.name}</h1>
            <h2 className="headers__champion-title">{champion?.title}</h2>
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
                <p className="championInfo__roles__specific-role">
                  {champion?.tags[0]}
                </p>
              </div>
              <div className="championInfo__difficulties">
                <ChampionInfoDifficulty
                  difficultyId={championInfo?.difficultyId}
                />
                <p className="championInfo__difficulties__general">
                  Difficulty
                </p>
                <p className="championInfo__difficulties__specific-difficulties">
                  {championInfo?.difficulty}
                </p>
              </div>
            </div>
            <div className="championInfo__dividing-line"></div>
            <div className="championInfo__description-wrapper">
              <div className="championInfo__short-description">
                {showMore
                  ? championInfo?.descriptionText
                  : `${championInfo?.descriptionText.substring(0, 250)}...`}
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
          <a
            href={`https://www.op.gg/champions/${champion?.name}/build?type=ranked`}
            className="website-link"
          >
            op.gg
          </a>
          <a
            href={`https://u.gg/lol/champions/${champion?.name}/build`}
            className="website-link"
          >
            u.gg
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
