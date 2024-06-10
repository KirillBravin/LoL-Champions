import "./leagueoflegendsintro.scss";
import wallpaper from "../../assets/images/Main_page_wallpaper.webp";

export function LeagueOfLegendsIntro() {
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
              <button className="leagueIntro__btn-play">Play now</button>
            </div>
            <div className="leagueIntro__game-modes">
              <div className="leagueIntro__arena-mode">
                <img
                  className="leagueIntro__mode-img"
                  src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9a2e5b06fa890d3ec0719c25e973d5ca433ac82f-440x440.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                  alt="arena"
                />
                <div className="leagueIntro__mode-name">Arena</div>
              </div>
              <div className="leagueIntro__summoners-rift-mode">
                <img
                  className="leagueIntro__mode-img"
                  src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e50f5eb867949248d81b3c4a1dcb3e7d7cf187de-440x440.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                  alt="summoner's rift"
                />
                <div className="leagueIntro__mode-name">Summoner's Rift</div>
              </div>
              <div className="leagueIntro__aram-mode">
                <img
                  className="leagueIntro__mode-img"
                  src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/88a013a106668103aedbceb8f174bd4cbc06568b-440x440.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                  alt="ARAM"
                />
                <div className="leagueIntro__mode-name">Aram</div>
              </div>
              <div className="leagueIntro__tft-mode">
                <img
                  className="leagueIntro__mode-img"
                  src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d1df552539dd70a8ffd38b6e93d1e751fb980ea6-440x440.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                  alt="Teamfight Tactics"
                />
                <div className="leagueIntro__mode-name">Teamfight Tactics</div>
              </div>
            </div>
          </div>
          <div className="leagueIntro__preview"></div>
        </div>
      </div>
    </section>
  );
}
