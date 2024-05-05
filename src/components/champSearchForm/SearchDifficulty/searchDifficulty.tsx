import { useEffect, useState } from "react";
import "./searchDifficulty.scss";

export function SearchDifficulty() {
  const [difficulty, setDifficulty] = useState("default");
  const [lineHeight, setLineHeight] = useState<boolean>(false);

  interface difficultyObj {
    id: number;
    name: string;
    render: () => JSX.Element;
  }

  const difficultyObj: difficultyObj[] = [
    {
      id: 1,
      name: "Easy",
      render: function () {
        return (
          <a className="dropdown-item style" href="#">
            <span className="parallelogramFilled"></span>
            <span className="parallelogramEmpty"></span>
            <span className="parallelogramEmpty"></span>
          </a>
        );
      },
    },
    {
      id: 2,
      name: "Medium",
      render: function () {
        return (
          <a className="dropdown-item style" href="#">
            <span className="parallelogramFilled"></span>
            <span className="parallelogramFilled"></span>
            <span className="parallelogramEmpty"></span>
          </a>
        );
      },
    },
    {
      id: 3,
      name: "Hard",
      render: function () {
        return (
          <a className="dropdown-item style" href="#">
            <span className="parallelogramFilled"></span>
            <span className="parallelogramFilled"></span>
            <span className="parallelogramFilled"></span>
          </a>
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
