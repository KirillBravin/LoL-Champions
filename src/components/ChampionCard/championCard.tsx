import "./championCard.scss";
import "animate.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SingleChampionData {
  id: string;
  name: string;
  key: string;
  title: string;
  tags: {
    [name: number]: string;
  };
  difficulty: number;
}

interface ChampionCardsProps {
  championList: SingleChampionData[];
  championSelected: string;
  roleSelected: string;
  difficultySelected: number[];
}

export function ChampionCards({
  championList,
  championSelected,
  roleSelected,
  difficultySelected,
}: ChampionCardsProps) {
  const [currentRole, setCurrentRole] = useState<string>("");
  const [currentDifficulty, setCurrentDifficulty] = useState<string>("");

  function roleCorrection(role: string) {
    if (role === "Assassins") {
      setCurrentRole("Assassin");
    } else if (role === "Fighters") {
      setCurrentRole("Fighter");
    } else if (role === "Mages") {
      setCurrentRole("Mage");
    } else if (role === "Marksmen") {
      setCurrentRole("Marksman");
    } else if (role === "Supports") {
      setCurrentRole("Support");
    } else if (role === "Tanks") {
      setCurrentRole("Tank");
    } else {
      setCurrentRole("");
    }
  }

  function difficultyTransform(difficulty: number[]) {
    if (difficulty.length != 0) {
      const newDifficulty: number = difficulty.reduce(
        (sum, current) => sum + current
      );
      if (newDifficulty <= 6) {
        setCurrentDifficulty("Easy");
      } else if (newDifficulty <= 22 && newDifficulty > 6) {
        setCurrentDifficulty("Medium");
      } else if (newDifficulty <= 27 && newDifficulty > 22) {
        setCurrentDifficulty("Hard");
      }
    } else {
      setCurrentDifficulty("");
    }
  }

  useEffect(() => {
    roleCorrection(roleSelected);
    difficultyTransform(difficultySelected);
  }, [roleSelected, difficultySelected]);

  const renderChampions = (arr: SingleChampionData[]) => {
    //If no filters are selected
    if (currentRole === "" && currentDifficulty === "") {
      const items = arr.map((item) => {
        if (item.name === championSelected || championSelected === "") {
          return (
            <ChampionCard
              key={`${item.id}-${championSelected}-${currentRole}-${currentDifficulty}`}
              champion={item.id}
            />
          );
        }
        return null;
      });
      return <div className="cards-style">{items}</div>;
    }
    //If role is selected + any champion
    if (currentRole !== "" && currentDifficulty === "") {
      const items = arr.map((item) => {
        if (
          (item.name === championSelected &&
            (item.tags[0] === currentRole || item.tags[1] === currentRole)) ||
          ((item.tags[0] === currentRole || item.tags[1] === currentRole) &&
            championSelected === "")
        ) {
          return (
            <ChampionCard
              key={`${item.id}-${championSelected}-${currentRole}-${currentDifficulty}`}
              champion={item.id}
            />
          );
        }
        return null;
      });
      if (items.every((item) => item === null)) {
        return (
          <div className="cards-empty">
            No champions match the filter criteria.
          </div>
        );
      } else {
        return <div className="cards-style">{items}</div>;
      }
    }
    //If difficulty is selected, but role is not
    if (currentRole === "" && currentDifficulty !== "") {
      const items = arr.map((item) => {
        if (
          (championSelected === "" &&
            currentDifficulty === "Easy" &&
            item.difficulty <= 3) ||
          (item.name === championSelected &&
            currentDifficulty === "Easy" &&
            item.difficulty <= 3) ||
          (championSelected === "" &&
            currentDifficulty === "Medium" &&
            item.difficulty <= 7 &&
            item.difficulty >= 4) ||
          (item.name === championSelected &&
            currentDifficulty === "Medium" &&
            item.difficulty <= 7 &&
            item.difficulty >= 4) ||
          (championSelected === "" &&
            currentDifficulty === "Hard" &&
            item.difficulty <= 10 &&
            item.difficulty >= 8) ||
          (item.name === championSelected &&
            currentDifficulty === "Hard" &&
            item.difficulty <= 10 &&
            item.difficulty >= 8)
        ) {
          return (
            <ChampionCard
              key={`${item.id}-${championSelected}-${currentRole}-${currentDifficulty}`}
              champion={item.id}
            />
          );
        }
        return null;
      });
      if (items.every((item) => item === null)) {
        return (
          <div className="cards-empty">
            No champions match the filter criteria.
          </div>
        );
      } else {
        return <div className="cards-style">{items}</div>;
      }
    }
    if (currentRole !== "" && currentDifficulty !== "") {
      const items = arr.map((item) => {
        if (
          (championSelected === "" &&
            currentDifficulty === "Easy" &&
            item.difficulty <= 3 &&
            (item.tags[0] === currentRole || item.tags[1] === currentRole)) ||
          (item.name === championSelected &&
            currentDifficulty === "Easy" &&
            item.difficulty <= 3 &&
            (item.tags[0] === currentRole || item.tags[1] === currentRole)) ||
          (championSelected === "" &&
            currentDifficulty === "Medium" &&
            item.difficulty <= 7 &&
            item.difficulty >= 4 &&
            (item.tags[0] === currentRole || item.tags[1] === currentRole)) ||
          (item.name === championSelected &&
            currentDifficulty === "Medium" &&
            item.difficulty <= 7 &&
            item.difficulty >= 4 &&
            (item.tags[0] === currentRole || item.tags[1] === currentRole)) ||
          (championSelected === "" &&
            currentDifficulty === "Hard" &&
            item.difficulty <= 10 &&
            item.difficulty >= 8 &&
            (item.tags[0] === currentRole || item.tags[1] === currentRole)) ||
          (item.name === championSelected &&
            currentDifficulty === "Hard" &&
            item.difficulty <= 10 &&
            item.difficulty >= 8 &&
            (item.tags[0] === currentRole || item.tags[1] === currentRole))
        ) {
          return (
            <ChampionCard
              key={`${item.id}-${championSelected}-${currentRole}-${currentDifficulty}`}
              champion={item.id}
            />
          );
        }
        return null;
      });
      if (items.every((item) => item === null)) {
        return (
          <div className="cards-empty">
            No champions match the filter criteria.
          </div>
        );
      } else {
        return <div className="cards-style">{items}</div>;
      }
    }
  };

  const cards = renderChampions(championList);
  return (
    <>
      <div className="champion-cards">
        <div className="container">{cards}</div>
      </div>
    </>
  );
}

interface ChampionCardProps {
  champion: string;
}

function ChampionCard({ champion }: ChampionCardProps) {
  let championNameImage: string = champion;
  let championDisplayName: string = champion;

  const navigate = useNavigate();

  const submitChampion = (championName: string) => {
    navigate(`/champion/${championName}`);
  };

  if (championNameImage === "Fiddlesticks") {
    championNameImage = "FiddleSticks";
  }

  const championNameMap = {
    MonkeyKing: "Wukong",
    Nunu: "Nunu & Willump",
    Belveth: "Bel'Veth",
    Chogath: "Cho'Gath",
    DrMundo: "Dr. Mundo",
    JarvanIV: "Jarvan IV",
    Kaisa: "Kai'Sa",
    Khazix: "Kha'Zix",
    KogMaw: "Kog'Maw",
    KSante: "K'Sante",
    Leblanc: "LeBlanc",
    LeeSin: "Lee Sin",
    MasterYi: "Master Yi",
    RekSai: "Rek'Sai",
    Renata: "Renata Glasc",
    TahmKench: "Tahm Kench",
    TwistedFate: "Twisted Fate",
    Velkoz: "Vel'Koz",
    XinZhao: "Xin Zhao",
  };

  championDisplayName = championNameMap[championNameImage] || championNameImage;

  return (
    <div
      className="champion-card animate__animated animate__fadeIn animate__slow"
      onClick={() => {
        submitChampion(champion);
      }}
    >
      <div className="champion-card__wrapper">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/centered/${championNameImage}_0.jpg`}
          alt=""
          className="champion-card__thumbnail"
        />
        <div className="champion-card__label">
          <span>{championDisplayName}</span>
        </div>
      </div>
    </div>
  );
}
