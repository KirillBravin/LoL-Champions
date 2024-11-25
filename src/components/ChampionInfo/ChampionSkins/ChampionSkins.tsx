import "@splidejs/react-splide/css";
import "../../../style/style.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState, useRef } from "react";
import { useChampionInfo } from "../../../services/championInfo";

interface Skin {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}

interface SingleChampionBody {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  skins: {
    [name: string]: {
      id: string;
      num: number;
      name: string;
      chromas: boolean;
    };
  };
  lore: string;
  blurb: string;
  allytips: {
    [name: string]: string;
  };
  enemytips: {
    [name: string]: string;
  };
  tags: {
    [name: string]: string;
  };
  partype: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  };
  spells: {
    [name: string]: {
      id: string;
      name: string;
      description: string;
      tooltip: string;
      leveltip: {
        label: {
          [name: string]: string;
        };
        effect: {
          [name: string]: string;
        };
      };
      maxrank: number;
      cooldown: {
        [name: string]: number;
      };
      cooldownBurn: string;
      cost: {
        [name: string]: number;
      };
      costBurn: string;
      datavalues: object;
      effect: {
        [name: string]: number | null;
      };
      effectBurn: {
        [name: string]: number | null;
      };
      vars: [];
      costType: string;
      maxammo: string;
      range: {
        [name: string]: number;
      };
      rangeBurn: number;
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
      resource: string;
    };
  };
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
      sprite: string;
      group: string;
      x: number;
      y: number;
      w: number;
      h: number;
    };
    recommend: [];
  };
}

interface ChampionInfo {
  background: string;
  descriptionText: string;
  difficulty: string;
  difficultyId: number;
  abilityPassiveDescription: string;
  videoPaths?: {
    name: string;
    path_1: string;
    path_2: string;
  }[];
  skinPath: string[];
}

export function ChampionSkins({
  champion,
}: {
  champion: SingleChampionBody | null;
}) {
  const championInfo = useChampionInfo(
    champion?.name ?? ""
  ) as ChampionInfo | null;
  const [skinSelected, setSkinSelected] = useState<string>("");
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (
      isInitialRender.current &&
      championInfo?.skinPath &&
      championInfo.skinPath.length > 0
    ) {
      setSkinSelected(championInfo.skinPath[0]);
      isInitialRender.current = false; // Mark as not the first render anymore
    }
  }, [championInfo]);

  if (!champion || !championInfo) {
    return null;
  }

  const champSkinsMap = (skins: Skin[]) => {
    return skins.map((item) => {
      return item.name === "default" ? champion.name : item.name;
    });
  };

  const champSkinNames = champSkinsMap(Object.values(champion?.skins ?? {}));

  const skinsCounter = (skinNames: string[]) => {
    const items = skinNames.map((_, i) => {
      return (
        <SplideSlide key={i}>
          <img
            onClick={() => {
              setSkinSelected(championInfo?.skinPath[i] ?? "");
            }}
            className="championSkins__slider__skin-image"
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championInfo?.skinPath[i]}`}
            alt={champSkinNames[i]}
          />
          <div className="championSkins__slider__skin-blinder">
            <div className="championSkins__slider__skin-name">
              {champSkinNames[i]}
            </div>
          </div>
        </SplideSlide>
      );
    });
    return items;
  };

  const getSliderHeight = () => {
    if (window.innerWidth <= 820) return "35vh"; // iPad Air iPadsAI
    if (window.innerWidth <= 1440) return "77vh"; // Laptop
    return "115vh"; // Default
  };

  return (
    <div className="championSkins">
      <div className="championSkins__skins__sideText">Available skins</div>
      <div className="championSkins__slider">
        <div className="championSkins__slider-wrapper">
          <img
            className="championSkins__slider-background"
            style={{ transition: "background-image 0.5s ease-in-out" }}
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${skinSelected}`}
            alt="champion skin"
          />
          <div className="championSkins__slider-cover">
            <h2 className="championSkins__slider-header">Available skins</h2>
            <Splide
              aria-label="Skin slider"
              className="championSkins__slider-slides"
              options={{
                direction: "ttb",
                height: getSliderHeight(),
                wheel: true,
                arrows: false,
                pagination: false,
                perPage: 3,
                gap: `20px`,
                speed: 2000,
                easing: "ease",
              }}
            >
              {skinsCounter(champSkinNames)}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}
