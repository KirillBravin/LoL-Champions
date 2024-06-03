import "@splidejs/react-splide/css";
import "./ChampionSkins.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";

export function ChampionSkins() {
  const [skinSelected, setSkinSelected] = useState("Ahri_0.jpg");

  const ahriSkins = [
    {
      name: "Ahri",
      path: "Ahri_0.jpg",
    },
    {
      name: "Dynasty Ahri",
      path: "Ahri_1.jpg",
    },
    {
      name: "Midnight Ahri",
      path: "Ahri_2.jpg",
    },
    {
      name: "Foxfire Ahri",
      path: "Ahri_3.jpg",
    },
    {
      name: "Popstar Ahri",
      path: "Ahri_4.jpg",
    },
    {
      name: "Challenger Ahri",
      path: "Ahri_5.jpg",
    },
    {
      name: "Academy Ahri",
      path: "Ahri_6.jpg",
    },
    {
      name: "Arcade Ahri",
      path: "Ahri_7.jpg",
    },
    {
      name: "Star Guardian Ahri",
      path: "Ahri_14.jpg",
    },
    {
      name: "K/DA Ahri",
      path: "Ahri_15.jpg",
    },
    {
      name: "Prestige K/DA Ahri",
      path: "Ahri_16.jpg",
    },
    {
      name: "Elderwood Ahri",
      path: "Ahri_17.jpg",
    },
    {
      name: "Spirit Blossom Ahri",
      path: "Ahri_27.jpg",
    },
    {
      name: "K/DA ALL OUT Ahri",
      path: "Ahri_28.jpg",
    },
    {
      name: "Coven Ahri",
      path: "Ahri_42.jpg",
    },
    {
      name: "Prestige K/DA Ahri",
      path: "Ahri_65.jpg",
    },
    {
      name: "Arcana Ahri",
      path: "Ahri_66.jpg",
    },
    {
      name: "Snow Moon Ahri",
      path: "Ahri_76.jpg",
    },
  ];

  const skinsCounter = (ahriSkins) => {
    const items = ahriSkins.map((item, i) => {
      return (
        <SplideSlide key={i}>
          <img
            onClick={() => {
              setSkinSelected(item.path);
            }}
            className="championSkins__slider__skin-image"
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${item.path}`}
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
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${skinSelected}`}
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
                pagination: false,
                perPage: 3,
                gap: `10px`,
                speed: 2000,
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
