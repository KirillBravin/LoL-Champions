import "../../style/style.css";

import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/facebook.svg";
import youtube from "../../assets/icons/youtube.svg";
import reddit from "../../assets/icons/reddit.svg";
import instagram from "../../assets/icons/instagram.svg";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__icons">
            <a href="https://x.com/LoLUKN">
              <img className="footer__icon" src={twitter} alt="twitter" />
            </a>
            <a href="https://www.youtube.com/c/UKLeagueofLegends">
              <img className="footer__icon" src={youtube} alt="youtube" />
            </a>
            <a href="https://www.facebook.com/leagueoflegends/?brand_redir=1998961430419532">
              <img className="footer__icon" src={facebook} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/ukleagueoflegends/">
              <img className="footer__icon" src={instagram} alt="instagram" />
            </a>
            <a href="https://www.reddit.com/r/leagueoflegends/">
              <img className="footer__icon" src={reddit} alt="reddit" />
            </a>
          </div>
          <div className="footer__riot-copyright">
            <p className="footer__riot-copyright-text">
              ™ & © 2024 Riot Games, Inc. League of Legends and all related
              logos, characters, names and distinctive likenesses thereof are
              exclusive property of Riot Games, Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
