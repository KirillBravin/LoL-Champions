import { useState } from "react";
import "./searchDifficulty.scss";

export function SearchDifficulty() {
  const [difficulty, setDifficulty] = useState("default");

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

  function renderDifficulties(arr: difficultyObj[]) {
    const items = arr.map((item) => {
      return <li>{item.render()}</li>;
    });
    return (
      <div className="dropdown difficulties">
        <div className="difficulties__line-right"></div>
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
    );
  }

  const difficultieItems = renderDifficulties(difficultyObj);

  return <>{difficultieItems}</>;
}
