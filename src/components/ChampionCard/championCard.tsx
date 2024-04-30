import "./championCard.scss";
import { Spinner } from "../Spinner/Spinner";
import { useLeagueService } from "../../Backend/LeagueService";

interface SingleChampionData {
  id: string;
  name: string;
  key: string;
  title: string;
  role: string;
  difficulty: string;
}

interface Champions {
  map(
    arg0: (
      item: SingleChampionData,
      id: number
    ) => import("react/jsx-runtime").JSX.Element
  ): unknown;
  Aatrox: SingleChampionData;
  Ahri: SingleChampionData;
  Akali: SingleChampionData;
  Akshan: SingleChampionData;
  Alistar: SingleChampionData;
  Amumu: SingleChampionData;
  Anivia: SingleChampionData;
  Annie: SingleChampionData;
  Aphelios: SingleChampionData;
  Ashe: SingleChampionData;
  AurelionSol: SingleChampionData;
  Azir: SingleChampionData;
  Bard: SingleChampionData;
  Belveth: SingleChampionData;
  Blitzcrank: SingleChampionData;
  Brand: SingleChampionData;
  Braum: SingleChampionData;
  Briar: SingleChampionData;
  Caitlyn: SingleChampionData;
  Camille: SingleChampionData;
  Cassiopeia: SingleChampionData;
  Chogath: SingleChampionData;
  Corki: SingleChampionData;
  Darius: SingleChampionData;
  Diana: SingleChampionData;
  Draven: SingleChampionData;
  DrMundo: SingleChampionData;
  Ekko: SingleChampionData;
  Elise: SingleChampionData;
  Evelynn: SingleChampionData;
  Ezreal: SingleChampionData;
  Fiddlesticks: SingleChampionData;
  Fiora: SingleChampionData;
  Fizz: SingleChampionData;
  Galio: SingleChampionData;
  Gangplank: SingleChampionData;
  Garen: SingleChampionData;
  Gnar: SingleChampionData;
  Gragas: SingleChampionData;
  Graves: SingleChampionData;
  Gwen: SingleChampionData;
  Hecarim: SingleChampionData;
  Heimerdinger: SingleChampionData;
  Hwei: SingleChampionData;
  Illao: SingleChampionData;
  Irelia: SingleChampionData;
  Ivern: SingleChampionData;
  Janna: SingleChampionData;
  JarvanIV: SingleChampionData;
  Jax: SingleChampionData;
  Jayce: SingleChampionData;
  Jhin: SingleChampionData;
  Jinx: SingleChampionData;
  Kaisa: SingleChampionData;
  Kalista: SingleChampionData;
  Karma: SingleChampionData;
  Karthus: SingleChampionData;
  Kassadin: SingleChampionData;
  Katarina: SingleChampionData;
  Kayle: SingleChampionData;
  Kayn: SingleChampionData;
  Kennen: SingleChampionData;
  Khazix: SingleChampionData;
  Kindred: SingleChampionData;
  Kled: SingleChampionData;
  KogMaw: SingleChampionData;
  KSante: SingleChampionData;
  Leblanc: SingleChampionData;
  LeeSin: SingleChampionData;
  Leona: SingleChampionData;
  Lillia: SingleChampionData;
  Lissandra: SingleChampionData;
  Lucian: SingleChampionData;
  Lulu: SingleChampionData;
  Lux: SingleChampionData;
  Malphite: SingleChampionData;
  Malzahar: SingleChampionData;
  Maokai: SingleChampionData;
  MasterYi: SingleChampionData;
  Milio: SingleChampionData;
  MissFortune: SingleChampionData;
  MonkeyKing: SingleChampionData;
  Mordekaiser: SingleChampionData;
  Morgana: SingleChampionData;
  Naafiri: SingleChampionData;
  Nami: SingleChampionData;
  Nasus: SingleChampionData;
  Nautilus: SingleChampionData;
  Neeko: SingleChampionData;
  Nidalee: SingleChampionData;
  Nilah: SingleChampionData;
  Nocturne: SingleChampionData;
  Nunu: SingleChampionData;
  Olaf: SingleChampionData;
  Orianna: SingleChampionData;
  Ornn: SingleChampionData;
  Pantheon: SingleChampionData;
  Poppy: SingleChampionData;
  Pyke: SingleChampionData;
  Qiyana: SingleChampionData;
  Quinn: SingleChampionData;
  Rakan: SingleChampionData;
  Rammus: SingleChampionData;
  RekSai: SingleChampionData;
  Rell: SingleChampionData;
  Renata: SingleChampionData;
  Renekton: SingleChampionData;
  Rengar: SingleChampionData;
  Riven: SingleChampionData;
  Rumble: SingleChampionData;
  Ryze: SingleChampionData;
  Samira: SingleChampionData;
  Sejuani: SingleChampionData;
  Senna: SingleChampionData;
  Seraphine: SingleChampionData;
  Sett: SingleChampionData;
  Shaco: SingleChampionData;
  Shen: SingleChampionData;
  Shyvana: SingleChampionData;
  Singed: SingleChampionData;
  Sion: SingleChampionData;
  Sivir: SingleChampionData;
  Skarner: SingleChampionData;
  Smolder: SingleChampionData;
  Sona: SingleChampionData;
  Soraka: SingleChampionData;
  Swain: SingleChampionData;
  Sylas: SingleChampionData;
  Syndra: SingleChampionData;
  TahmKench: SingleChampionData;
  Taliyah: SingleChampionData;
  Talon: SingleChampionData;
  Taric: SingleChampionData;
  Teemo: SingleChampionData;
  Thresh: SingleChampionData;
  Tristana: SingleChampionData;
  Trundle: SingleChampionData;
  Tryndamere: SingleChampionData;
  TwistedFate: SingleChampionData;
  Twitch: SingleChampionData;
  Udyr: SingleChampionData;
  Urgot: SingleChampionData;
  Varus: SingleChampionData;
  Vayne: SingleChampionData;
  Veigar: SingleChampionData;
  Velkoz: SingleChampionData;
  Vex: SingleChampionData;
  Vi: SingleChampionData;
  Viego: SingleChampionData;
  Viktor: SingleChampionData;
  Vladimir: SingleChampionData;
  Volibear: SingleChampionData;
  Warwick: SingleChampionData;
  Xayah: SingleChampionData;
  Xerath: SingleChampionData;
  XinZhao: SingleChampionData;
  Yasuo: SingleChampionData;
  Yone: SingleChampionData;
  Yorick: SingleChampionData;
  Yuumi: SingleChampionData;
  Zac: SingleChampionData;
  Zed: SingleChampionData;
  Zeri: SingleChampionData;
  Ziggs: SingleChampionData;
  Zilean: SingleChampionData;
  Zoe: SingleChampionData;
  Zyra: SingleChampionData;
}

function ChampionCard({ championList }) {
  let SingleChampionData: string = championList;
  if (championList === "Fiddlesticks") {
    championList = "FiddleSticks";
  }
  if (SingleChampionData === "MonkeyKing") {
    SingleChampionData = "Wukong";
  }
  return (
    <>
      <div className="champion-card">
        <div className="champion-card__wrapper">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/centered/${championList}_0.jpg`}
            alt=""
            className="champion-card__thumbnail"
          />
          <div className="champion-card__label">
            <span>{SingleChampionData}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export function ChampionCards({ championList }) {
  const { loading } = useLeagueService();
  const spinner = loading ? <Spinner /> : null;

  const renderChampions = (arr: Champions) => {
    const items = arr.map((item: SingleChampionData) => {
      return <ChampionCard championList={item.id} />;
    });
    return <div className="cards-style">{items}</div>;
  };

  const cards = renderChampions(championList);

  return (
    <>
      <div className="champion-cards">
        <div className="container">
          {spinner}
          {cards}
        </div>
      </div>
    </>
  );
}
