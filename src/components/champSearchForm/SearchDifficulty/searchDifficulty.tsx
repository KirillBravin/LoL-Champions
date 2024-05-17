import { useEffect, useState } from "react";
import "./searchDifficulty.scss";

interface difficultyObj {
  id: number;
  difficulty: number[];
  render: () => JSX.Element;
}

interface ChampionDifficultyProps {
  getDifficulty: (data: number[]) => void;
}

export function SearchDifficulty({ getDifficulty }: ChampionDifficultyProps) {
  const [lineHeight, setLineHeight] = useState<boolean>(false);
  const [difficultySelected, setDifficultySelected] = useState<boolean>(false);
  const [difficultyId, setDifficultyId] = useState<number>(0);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleDifficultyClick = (arg: number[], i: number) => {
    getDifficulty(arg);
    setDifficultyId(i);
    setDifficultySelected(true);
  };

  const resetButton = () => {
    setDifficultyId(0);
    setDifficultySelected(false);
  };

  const difficultyObj: difficultyObj[] = [
    {
      id: 1,
      difficulty: [0, 1, 2, 3],
      render: function () {
        return (
          <div
            className="dropdown-item style"
            onClick={handleDifficultyClick.bind(null, this.difficulty, this.id)}
          >
            <span className="parallelogramFilled"></span>
            <span className="parallelogramEmpty"></span>
            <span className="parallelogramEmpty"></span>
          </div>
        );
      },
    },
    {
      id: 2,
      difficulty: [4, 5, 6, 7],
      render: function () {
        return (
          <div
            className="dropdown-item style"
            onClick={handleDifficultyClick.bind(null, this.difficulty, this.id)}
          >
            <span className="parallelogramFilled"></span>
            <span className="parallelogramFilled"></span>
            <span className="parallelogramEmpty"></span>
          </div>
        );
      },
    },
    {
      id: 3,
      difficulty: [8, 9, 10],
      render: function () {
        return (
          <div
            className="dropdown-item style"
            onClick={handleDifficultyClick.bind(null, this.difficulty, this.id)}
          >
            <span className="parallelogramFilled"></span>
            <span className="parallelogramFilled"></span>
            <span className="parallelogramFilled"></span>
          </div>
        );
      },
    },
  ];

  const handleWrapperClick = () => {
    setLineHeight(!lineHeight);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest(".difficulties__wrapper")) {
      setLineHeight(false);
    }
  };

  function renderDifficulties(arr: difficultyObj[]) {
    const items = arr.map((item, i) => {
      return <li key={i}>{item.render()}</li>;
    });

    const displayDifficulties = () => {
      if (difficultyId === 1) {
        return items[0];
      } else if (difficultyId === 2) {
        return items[1];
      } else if (difficultyId === 3) {
        return items[2];
      } else return "All difficulties";
    };

    return (
      <div className="dropdown difficulties">
        <div
          className={`difficulties__wrapper ${
            difficultyId !== 0 ? "difficulties__wrapper-active" : ""
          }`}
          onClick={handleWrapperClick}
        >
          <div
            className={`difficulties__line-right ${
              lineHeight ? "line-full-height" : ""
            }`}
          ></div>
          <button
            className={`btn btn-secondary dropdown-toggle difficulties__btn-main ${
              difficultySelected ? "difficulties__btn-main-active" : ""
            }`}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {displayDifficulties()}
          </button>
          <button
            type="button"
            className={`btn-close ${
              difficultySelected ? "" : "button__hidden"
            }`}
            aria-label="Close"
            onClick={resetButton}
          ></button>
          <ul className="dropdown-menu">{items}</ul>
        </div>
      </div>
    );
  }

  const difficultieItems = renderDifficulties(difficultyObj);

  return <>{difficultieItems}</>;
}
