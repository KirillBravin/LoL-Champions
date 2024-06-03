import "@splidejs/react-splide/css";
import "./ChampionSkins.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";

export function ChampionSkins() {
  const ahriSkins = [
    {
      name: "Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_0.jpg",
    },
    {
      name: "Dynasty Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_1.jpg",
    },
    {
      name: "Midnight Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_2.jpg",
    },
    {
      name: "Foxfire Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_3.jpg",
    },
    {
      name: "Popstar Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_4.jpg",
    },
    {
      name: "Challenger Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_5.jpg",
    },
    {
      name: "Academy Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_6.jpg",
    },
    {
      name: "Arcade Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_7.jpg",
    },
    {
      name: "Star Guardian Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_14.jpg",
    },
    {
      name: "K/DA Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_15.jpg",
    },
    {
      name: "Prestige K/DA Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_16.jpg",
    },
    {
      name: "Elderwood Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_17.jpg",
    },
    {
      name: "Spirit Blossom Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_27.jpg",
    },
    {
      name: "K/DA ALL OUT Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_28.jpg",
    },
    {
      name: "Coven Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_42.jpg",
    },
    {
      name: "Prestige K/DA Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_65.jpg",
    },
    {
      name: "Arcana Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_66.jpg",
    },
    {
      name: "Snow Moon Ahri",
      path: "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ahri_76.jpg",
    },
  ];

  const skinsCounter = (ahriSkins) => {
    const items = ahriSkins.map((item, i) => {
      return (
        <SplideSlide key={i}>
          <img
            className="championSkins__slider__skin-image"
            src={item.path}
            alt={item.name}
          />
        </SplideSlide>
      );
    });
    return items;
  };

  return (
    <div className="championSkins">
      <div className="championSkins__skins__sideText">Available skins</div>
      <div className="championSkins__slider">
        <div className="championSkins__slider-wrapper">
          <img
            className="championSkins__slider-background"
            src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg"
            alt="champion skin"
          />
          <div className="championSkins__slider-cover">
            <h2 className="championSkins__slider-header">Available skins</h2>
            <Splide
              aria-label="Skin slider"
              options={{
                direction: "ttb",
                height: `47.1rem`,
                wheel: true,
                arrows: false,
                /* pagination: false, */
                perPage: 3,
                gap: `10px`,
                speed: 1000,
                easing: "ease",
              }}
            >
              {skinsCounter(ahriSkins)}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}
