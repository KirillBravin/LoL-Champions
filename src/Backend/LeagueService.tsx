import { useHttp } from "./http.hook";

interface SingleChampionData {
  id: string;
  name: string;
  key: string;
  title: string;
  tags: string;
  info: number;
}

interface AllChampionsBody {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: {
    0: string;
    1: string;
  };
  partype: string;
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
}

interface Champions {
  map(
    arg0: (
      item: AllChampionsBody,
      id: number
    ) => import("react/jsx-runtime").JSX.Element
  ): unknown;
  Aatrox: AllChampionsBody;
  Ahri: AllChampionsBody;
  Akali: AllChampionsBody;
  Akshan: AllChampionsBody;
  Alistar: AllChampionsBody;
  Amumu: AllChampionsBody;
  Anivia: AllChampionsBody;
  Annie: AllChampionsBody;
  Aphelios: AllChampionsBody;
  Ashe: AllChampionsBody;
  AurelionSol: AllChampionsBody;
  Azir: AllChampionsBody;
  Bard: AllChampionsBody;
  Belveth: AllChampionsBody;
  Blitzcrank: AllChampionsBody;
  Brand: AllChampionsBody;
  Braum: AllChampionsBody;
  Briar: AllChampionsBody;
  Caitlyn: AllChampionsBody;
  Camille: AllChampionsBody;
  Cassiopeia: AllChampionsBody;
  Chogath: AllChampionsBody;
  Corki: AllChampionsBody;
  Darius: AllChampionsBody;
  Diana: AllChampionsBody;
  Draven: AllChampionsBody;
  DrMundo: AllChampionsBody;
  Ekko: AllChampionsBody;
  Elise: AllChampionsBody;
  Evelynn: AllChampionsBody;
  Ezreal: AllChampionsBody;
  Fiddlesticks: AllChampionsBody;
  Fiora: AllChampionsBody;
  Fizz: AllChampionsBody;
  Galio: AllChampionsBody;
  Gangplank: AllChampionsBody;
  Garen: AllChampionsBody;
  Gnar: AllChampionsBody;
  Gragas: AllChampionsBody;
  Graves: AllChampionsBody;
  Gwen: AllChampionsBody;
  Hecarim: AllChampionsBody;
  Heimerdinger: AllChampionsBody;
  Hwei: AllChampionsBody;
  Illao: AllChampionsBody;
  Irelia: AllChampionsBody;
  Ivern: AllChampionsBody;
  Janna: AllChampionsBody;
  JarvanIV: AllChampionsBody;
  Jax: AllChampionsBody;
  Jayce: AllChampionsBody;
  Jhin: AllChampionsBody;
  Jinx: AllChampionsBody;
  Kaisa: AllChampionsBody;
  Kalista: AllChampionsBody;
  Karma: AllChampionsBody;
  Karthus: AllChampionsBody;
  Kassadin: AllChampionsBody;
  Katarina: AllChampionsBody;
  Kayle: AllChampionsBody;
  Kayn: AllChampionsBody;
  Kennen: AllChampionsBody;
  Khazix: AllChampionsBody;
  Kindred: AllChampionsBody;
  Kled: AllChampionsBody;
  KogMaw: AllChampionsBody;
  KSante: AllChampionsBody;
  Leblanc: AllChampionsBody;
  LeeSin: AllChampionsBody;
  Leona: AllChampionsBody;
  Lillia: AllChampionsBody;
  Lissandra: AllChampionsBody;
  Lucian: AllChampionsBody;
  Lulu: AllChampionsBody;
  Lux: AllChampionsBody;
  Malphite: AllChampionsBody;
  Malzahar: AllChampionsBody;
  Maokai: AllChampionsBody;
  MasterYi: AllChampionsBody;
  Milio: AllChampionsBody;
  MissFortune: AllChampionsBody;
  MonkeyKing: AllChampionsBody;
  Mordekaiser: AllChampionsBody;
  Morgana: AllChampionsBody;
  Naafiri: AllChampionsBody;
  Nami: AllChampionsBody;
  Nasus: AllChampionsBody;
  Nautilus: AllChampionsBody;
  Neeko: AllChampionsBody;
  Nidalee: AllChampionsBody;
  Nilah: AllChampionsBody;
  Nocturne: AllChampionsBody;
  Nunu: AllChampionsBody;
  Olaf: AllChampionsBody;
  Orianna: AllChampionsBody;
  Ornn: AllChampionsBody;
  Pantheon: AllChampionsBody;
  Poppy: AllChampionsBody;
  Pyke: AllChampionsBody;
  Qiyana: AllChampionsBody;
  Quinn: AllChampionsBody;
  Rakan: AllChampionsBody;
  Rammus: AllChampionsBody;
  RekSai: AllChampionsBody;
  Rell: AllChampionsBody;
  Renata: AllChampionsBody;
  Renekton: AllChampionsBody;
  Rengar: AllChampionsBody;
  Riven: AllChampionsBody;
  Rumble: AllChampionsBody;
  Ryze: AllChampionsBody;
  Samira: AllChampionsBody;
  Sejuani: AllChampionsBody;
  Senna: AllChampionsBody;
  Seraphine: AllChampionsBody;
  Sett: AllChampionsBody;
  Shaco: AllChampionsBody;
  Shen: AllChampionsBody;
  Shyvana: AllChampionsBody;
  Singed: AllChampionsBody;
  Sion: AllChampionsBody;
  Sivir: AllChampionsBody;
  Skarner: AllChampionsBody;
  Smolder: AllChampionsBody;
  Sona: AllChampionsBody;
  Soraka: AllChampionsBody;
  Swain: AllChampionsBody;
  Sylas: AllChampionsBody;
  Syndra: AllChampionsBody;
  TahmKench: AllChampionsBody;
  Taliyah: AllChampionsBody;
  Talon: AllChampionsBody;
  Taric: AllChampionsBody;
  Teemo: AllChampionsBody;
  Thresh: AllChampionsBody;
  Tristana: AllChampionsBody;
  Trundle: AllChampionsBody;
  Tryndamere: AllChampionsBody;
  TwistedFate: AllChampionsBody;
  Twitch: AllChampionsBody;
  Udyr: AllChampionsBody;
  Urgot: AllChampionsBody;
  Varus: AllChampionsBody;
  Vayne: AllChampionsBody;
  Veigar: AllChampionsBody;
  Velkoz: AllChampionsBody;
  Vex: AllChampionsBody;
  Vi: AllChampionsBody;
  Viego: AllChampionsBody;
  Viktor: AllChampionsBody;
  Vladimir: AllChampionsBody;
  Volibear: AllChampionsBody;
  Warwick: AllChampionsBody;
  Xayah: AllChampionsBody;
  Xerath: AllChampionsBody;
  XinZhao: AllChampionsBody;
  Yasuo: AllChampionsBody;
  Yone: AllChampionsBody;
  Yorick: AllChampionsBody;
  Yuumi: AllChampionsBody;
  Zac: AllChampionsBody;
  Zed: AllChampionsBody;
  Zeri: AllChampionsBody;
  Ziggs: AllChampionsBody;
  Zilean: AllChampionsBody;
  Zoe: AllChampionsBody;
  Zyra: AllChampionsBody;
}

export const useLeagueService = () => {
  const { request, loading, error, process, clearError } = useHttp();

  // Base paths
  const _apiBase: string = "https://ddragon.leagueoflegends.com/cdn/";
  //img
  const _skinLoading: string = "img/champion/loading/";
  // const _splashLoading: string = "img/champion/splash/";

  const getChampionLoading = (name: string) => {
    return `${_apiBase + _skinLoading + name}`;
  };

  /*   const getChampion = async (name = "Ahri") => {
    const res = await request(`${_apiBase + version + _champion}/${name}.json`);
    return _transformChampion(res.data.name);
  }; */

  const getAllChampions = async (): Promise<SingleChampionData[]> => {
    const res: Champions = await request("http://localhost:5000/champions");

    return Object.values(res).map((champ: AllChampionsBody) => ({
      id: champ.id,
      name: champ.name,
      key: champ.key,
      title: champ.title,
      tags: champ.tags[0],
      info: champ.info.difficulty,
    }));
  };

  /*   const _transformChampion = (champ: TChampionData): AllChampionsBody => {
    return {
      // General
      id: champ.id,
      name: champ.name,
      key: champ.key,
      title: champ.title,
      role: champ.tags[0],
      difficulty: champ.info.difficulty,
      descriptionLong: champ.lore ? champ.lore : "There is no description",
      descriptionShort: champ.blurb ? champ.blurb : "There is no description",
      // Abilities
      abilityPassive: champ.passive,
      abilityActive: champ.spells,
      // Skins
    };
  }; */

  return {
    getChampionLoading,
    getAllChampions,
    loading,
    error,
    process,
    clearError,
  };
};
