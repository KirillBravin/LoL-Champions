import { useEffect, useState } from "react";
import "./searchDifficulty.scss";

interface difficultyObj {
  id: number;
  difficulty: number[];
  render: () => JSX.Element;
}

interface SingleChampionData {
  id: string;
  name: string;
  key: string;
  title: string;
  tags: string;
  difficulty: number[];
}

interface ChampionDifficultyProps {
  getDifficulty: SingleChampionData[];
}

export function SearchDifficulty({ getDifficulty }) {
  const [lineHeight, setLineHeight] = useState<boolean>(false);

  const difficultyObj: difficultyObj[] = [
    {
      id: 1,
      difficulty: [0, 1, 2, 3],
      render: function () {
        return (
          <div
            className="dropdown-item style"
            onClick={() => {
              getDifficulty(this.difficulty);
            }}
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
            onClick={() => {
              getDifficulty(this.difficulty);
            }}
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
            onClick={() => {
              getDifficulty(this.difficulty);
            }}
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

  const handleDocumentClick = (event) => {
    if (!event.target.closest(".difficulties__wrapper")) {
      setLineHeight(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  function renderDifficulties(arr: difficultyObj[]) {
    const items = arr.map((item, i) => {
      return <li key={i}>{item.render()}</li>;
    });

    return (
      <div className="dropdown difficulties">
        <div className="difficulties__wrapper" onClick={handleWrapperClick}>
          <div
            className={`difficulties__line-right ${
              lineHeight ? "line-full-height" : ""
            }`}
          ></div>
          <button
            className="btn btn-secondary dropdown-toggle difficulties__btn-main"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            all difficulties
          </button>
          <ul className="dropdown-menu">{items}</ul>
        </div>
      </div>
    );
  }

  const difficultieItems = renderDifficulties(difficultyObj);

  return <>{difficultieItems}</>;
}
