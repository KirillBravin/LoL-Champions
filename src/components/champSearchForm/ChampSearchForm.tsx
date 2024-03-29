import { MouseEventHandler, useState } from "react";
import { Link } from "react-router-dom";

import "./champSearchForm.css";

import magnifyingGlass from "/icons/magnifying-glass.svg";

const champions = [
  { champion: "Ahri", id: 1 },
  { champion: "Aatrox", id: 2 },
  { champion: "Jax", id: 3 },
  { champion: "Caitlyn", id: 4 },
  { champion: "Jinx", id: 5 },
  { champion: "Vi", id: 6 },
];

export function ChampSearchForm() {
  const [searchItem, setSearchItem] = useState("");
  const [filteredChamps, setFilteredChamps] = useState(champions);
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = champions.filter((champ) =>
      champ.champion
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );

    setFilteredChamps(filteredItems);
  };

  //Roles

  const roles = [
    "all",
    "assassins",
    "fighters",
    "mages",
    "marksmen",
    "supports",
    "tanks",
  ];

  const roleButton = (i: number) => {
    setActiveButton(i === activeButton ? null : i);
  };

  function renderRoles(arr: string[]) {
    const items = arr.map((item: string, i: number) => {
      return (
        <li
          className={
            i === activeButton ? "roles__general active" : "roles__general"
          }
          key={i}
        >
          <button
            className="button"
            onClick={() => {
              roleButton(i);
            }}
          >
            {item}
          </button>
          <div className="roles__general-bottom-line"></div>
        </li>
      );
    });
    return (
      <div className="roles__wrapper">
        <ul className="roles">{items}</ul>
      </div>
    );
  }

  const roleItems = renderRoles(roles);

  // Difficulties
  const difficulties = ["easy", "medium", "hard"];

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

  return (
    <>
      <div className="search-section">
        <div className="container">
          <div className="row">
            <div className="style-wrapper">
              <div className="col">
                <div className="search-bar">
                  <div className="search-bar__wrapper">
                    <img
                      src={magnifyingGlass}
                      alt="search"
                      className="search-bar__icon"
                    />
                    <input
                      type="text"
                      value={searchItem}
                      onChange={handleInputChange}
                      className="search-bar__input"
                    />
                    <label className="search-bar__placeholder">search</label>
                    <div className="search-bar__line-left"></div>
                  </div>
                </div>
              </div>
              <div className="col-8">{roleItems}</div>
              <div className="col">{difficultieItems}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
