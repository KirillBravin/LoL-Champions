import { ReactNode, useEffect, useState } from "react";

import magnifyingGlass from "../../../assets/icons/magnifying-glass.svg";
import { useLeagueService } from "../../../Backend/LeagueService";
import "./searchInput.scss";

interface ChampionName {
  name: string;
  title: string;
  id: string;
}

interface Champions {
  map(
    arg0: (
      item: ChampionName,
      id: number
    ) => import("react/jsx-runtime").JSX.Element
  ): unknown;
  Aatrox: ChampionName;
  Ahri: ChampionName;
  Akali: ChampionName;
  Akshan: ChampionName;
  Alistar: ChampionName;
  Amumu: ChampionName;
  Anivia: ChampionName;
  Annie: ChampionName;
  Aphelios: ChampionName;
  Ashe: ChampionName;
  AurelionSol: ChampionName;
  Azir: ChampionName;
  Bard: ChampionName;
  Belveth: ChampionName;
  Blitzcrank: ChampionName;
  Brand: ChampionName;
  Braum: ChampionName;
  Briar: ChampionName;
  Caitlyn: ChampionName;
  Camille: ChampionName;
  Cassiopeia: ChampionName;
  Chogath: ChampionName;
  Corki: ChampionName;
  Darius: ChampionName;
  Diana: ChampionName;
  Draven: ChampionName;
  DrMundo: ChampionName;
  Ekko: ChampionName;
  Elise: ChampionName;
  Evelynn: ChampionName;
  Ezreal: ChampionName;
  Fiddlesticks: ChampionName;
  Fiora: ChampionName;
  Fizz: ChampionName;
  Galio: ChampionName;
  Gangplank: ChampionName;
  Garen: ChampionName;
  Gnar: ChampionName;
  Gragas: ChampionName;
  Graves: ChampionName;
  Gwen: ChampionName;
  Hecarim: ChampionName;
  Heimerdinger: ChampionName;
  Hwei: ChampionName;
  Illao: ChampionName;
  Irelia: ChampionName;
  Ivern: ChampionName;
  Janna: ChampionName;
  JarvanIV: ChampionName;
  Jax: ChampionName;
  Jayce: ChampionName;
  Jhin: ChampionName;
  Jinx: ChampionName;
  Kaisa: ChampionName;
  Kalista: ChampionName;
  Karma: ChampionName;
  Karthus: ChampionName;
  Kassadin: ChampionName;
  Katarina: ChampionName;
  Kayle: ChampionName;
  Kayn: ChampionName;
  Kennen: ChampionName;
  Khazix: ChampionName;
  Kindred: ChampionName;
  Kled: ChampionName;
  KogMaw: ChampionName;
  KSante: ChampionName;
  Leblanc: ChampionName;
  LeeSin: ChampionName;
  Leona: ChampionName;
  Lillia: ChampionName;
  Lissandra: ChampionName;
  Lucian: ChampionName;
  Lulu: ChampionName;
  Lux: ChampionName;
  Malphite: ChampionName;
  Malzahar: ChampionName;
  Maokai: ChampionName;
  MasterYi: ChampionName;
  Milio: ChampionName;
  MissFortune: ChampionName;
  MonkeyKing: ChampionName;
  Mordekaiser: ChampionName;
  Morgana: ChampionName;
  Naafiri: ChampionName;
  Nami: ChampionName;
  Nasus: ChampionName;
  Nautilus: ChampionName;
  Neeko: ChampionName;
  Nidalee: ChampionName;
  Nilah: ChampionName;
  Nocturne: ChampionName;
  Nunu: ChampionName;
  Olaf: ChampionName;
  Orianna: ChampionName;
  Ornn: ChampionName;
  Pantheon: ChampionName;
  Poppy: ChampionName;
  Pyke: ChampionName;
  Qiyana: ChampionName;
  Quinn: ChampionName;
  Rakan: ChampionName;
  Rammus: ChampionName;
  RekSai: ChampionName;
  Rell: ChampionName;
  Renata: ChampionName;
  Renekton: ChampionName;
  Rengar: ChampionName;
  Riven: ChampionName;
  Rumble: ChampionName;
  Ryze: ChampionName;
  Samira: ChampionName;
  Sejuani: ChampionName;
  Senna: ChampionName;
  Seraphine: ChampionName;
  Sett: ChampionName;
  Shaco: ChampionName;
  Shen: ChampionName;
  Shyvana: ChampionName;
  Singed: ChampionName;
  Sion: ChampionName;
  Sivir: ChampionName;
  Skarner: ChampionName;
  Smolder: ChampionName;
  Sona: ChampionName;
  Soraka: ChampionName;
  Swain: ChampionName;
  Sylas: ChampionName;
  Syndra: ChampionName;
  TahmKench: ChampionName;
  Taliyah: ChampionName;
  Talon: ChampionName;
  Taric: ChampionName;
  Teemo: ChampionName;
  Thresh: ChampionName;
  Tristana: ChampionName;
  Trundle: ChampionName;
  Tryndamere: ChampionName;
  TwistedFate: ChampionName;
  Twitch: ChampionName;
  Udyr: ChampionName;
  Urgot: ChampionName;
  Varus: ChampionName;
  Vayne: ChampionName;
  Veigar: ChampionName;
  Velkoz: ChampionName;
  Vex: ChampionName;
  Vi: ChampionName;
  Viego: ChampionName;
  Viktor: ChampionName;
  Vladimir: ChampionName;
  Volibear: ChampionName;
  Warwick: ChampionName;
  Xayah: ChampionName;
  Xerath: ChampionName;
  XinZhao: ChampionName;
  Yasuo: ChampionName;
  Yone: ChampionName;
  Yorick: ChampionName;
  Yuumi: ChampionName;
  Zac: ChampionName;
  Zed: ChampionName;
  Zeri: ChampionName;
  Ziggs: ChampionName;
  Zilean: ChampionName;
  Zoe: ChampionName;
  Zyra: ChampionName;
}

export function SearchInput() {
  const [championList, setChampionList] = useState([]);

  const { getChampionNames } = useLeagueService();

  useEffect(() => {
    getChampionNames().then((res) => {
      setChampionList(res);
      console.log("championList: ", championList);
    });
  }, []);

  const renderChampions = (arr: Champions) => {
    const items: ReactNode[] = arr.map((item: ChampionName, id: number) => {
      return (
        <a
          href="#"
          key={id}
          className="dropdown-item search-bar__dropdown-item"
        >
          <li>{item}</li>
        </a>
      );
    });
    return <ul className="dropdown-menu search-bar__dropdown-menu">{items}</ul>;
  };

  const champions = renderChampions(championList);

  return (
    <div className="search-bar">
      <div className="search-bar__wrapper">
        <div className="dropdown search-bar__dropdown">
          <img
            src={magnifyingGlass}
            alt="search"
            className="search-bar__icon"
          />
          <input
            type="search"
            className="btn btn-secondary dropdown-toggle search-bar__input"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            placeholder="search"
          />
          {champions}
        </div>
        <div className="search-bar__line-left"></div>
      </div>
    </div>
  );
}
