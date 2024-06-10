import "./leagueoflegendsintro.scss";
import wallpaper from "../../assets/images/Main_page_wallpaper.webp";

//Mode icons
const arenaIcon =
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9a2e5b06fa890d3ec0719c25e973d5ca433ac82f-440x440.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center";
const summonersRiftIcon =
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e50f5eb867949248d81b3c4a1dcb3e7d7cf187de-440x440.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center";
const aramIcon =
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/88a013a106668103aedbceb8f174bd4cbc06568b-440x440.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center";
const tftIcon =
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d1df552539dd70a8ffd38b6e93d1e751fb980ea6-440x440.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center";

//Mode previews
import arenaVideo from "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/3dc01ace5cb488af854ce527e03999215633da79.mp4";
import summonersRiftVideo from "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/bbc27473157462adacf0de441a8796268eb2d0ac.mp4";
import aramVideo from "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/0a9b9f8dacb54086c58c1af8aa880d7cf6d7fea6.mp4";
import tftVideo from "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/e5791dbc0787a96e83b82df20d44375f09f4d861.mp4";
import { useState } from "react";

interface ModeInfo {
  modeName: string;
  modeIcon: string;
  alt: string;
}

export function LeagueOfLegendsIntro() {
  const [modeSelected, setModeSelected] = useState<string>("arena");

  const modeInfo: ModeInfo[] = [
    { modeName: "arena-mode", modeIcon: arenaIcon, alt: "Arena" },
    {
      modeName: "summoners-rift-mode",
      modeIcon: summonersRiftIcon,
      alt: "Summoner's Rift",
    },
    { modeName: "aram-mode", modeIcon: aramIcon, alt: "ARAM" },
    { modeName: "tft-mode", modeIcon: tftIcon, alt: "Teamfight Tactics" },
  ];

  const modeInfoRender = (modeInfo: ModeInfo[]) => {
    const items = modeInfo.map((item, index) => {
      return (
        <div key={index} className={`leagueIntro__${item.modeName}`}>
          <img
            className="leagueIntro__mode-img"
            src={item.modeIcon}
            alt={item.alt}
          />
          <div className="leagueIntro__mode-name">Arena</div>
        </div>
      );
    });
    return <div className="leagueIntro__game-modes">{items}</div>;
  };

  const modeInfoView = modeInfoRender(modeInfo);

  return (
    <section className="leagueIntro">
      <img
        className="leagueIntro__background"
        src={wallpaper}
        alt="background wallpaper"
      />
      <div className="container">
        <div className="leagueIntro__wrapper">
          <div className="leagueIntro__description-wrapper">
            <div className="leagueIntro__description">
              <h2 className="leagueIntro__header-info-first">
                Multiple ways to
              </h2>
              <h2 className="leagueIntro__header-info-second">Play</h2>
              <h1 className="leagueIntro__header-info-game">
                League of Legends
              </h1>
              <h2 className="leagueIntro__description-text">
                Whether you like to dive straight into the fray, support your
                teammates, or something in between, there’s a spot for you on
                the Rift.
              </h2>
              <a
                className="leagueIntro__link-btn-play"
                href="https://authenticate.riotgames.com/?client_id=prod-xsso-leagueoflegends&code_challenge=pYWSQNVZqcG78DUvJszpPLbC-LXuO6wmwo2UgdLAJpU&method=riot_identity_signup&platform=web&redirect_uri=https%3A%2F%2Fauth.riotgames.com%2Fauthorize%3Fclient_id%3Dprod-xsso-leagueoflegends%26code_challenge%3DpYWSQNVZqcG78DUvJszpPLbC-LXuO6wmwo2UgdLAJpU%26code_challenge_method%3DS256%26prompt%3Dsignup%26redirect_uri%3Dhttps%253A%252F%252Fxsso.leagueoflegends.com%252Fredirect%26response_type%3Dcode%26scope%3Dopenid%2520account%2520email%2520offline_access%26state%3Df5e04bd23a9141a38cc95119a6%26uri%3Dhttps%253A%252F%252Fsignup.leagueoflegends.com%252Fen-gb%252Fsignup%252Fredownload"
              >
                <button className="leagueIntro__btn-play">Play now</button>
              </a>
            </div>
            {modeInfoView}
          </div>
          <div className="leagueIntro__preview">
            <div className="leagueIntro__video-preview">
              <video className="leagueIntro__video" autoPlay loop muted>
                <source
                  src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/3dc01ace5cb488af854ce527e03999215633da79.mp4"
                  type="video/mp4"
                />
                <p>Your browser doesn't support HTML video.</p>
              </video>
              <div className="video-border"></div>
            </div>
            <p className="leagueIntro__video-short-description">
              Calling all dynamic duos
            </p>
            <p className="leagueIntro__video-long-description">
              Throw down across a series of maps, draft augments and items, and
              climb to the top with your partner in this 2v2v2v2v2v2v2v2
              tournament.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
