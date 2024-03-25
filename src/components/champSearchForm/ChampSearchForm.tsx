import { MouseEventHandler, useState, useRef } from "react";
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

const roles = [
  "all",
  "assassins",
  "fighters",
  "mages",
  "marksmen",
  "supports",
  "tanks",
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
          tabIndex={0}
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
    return <ul className="roles">{items}</ul>;
  }

  const items = renderRoles(roles);

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
                    <div className="search-bar__line-right"></div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="roles__wrapper">{items}</div>
              </div>
              <div className="col">
                <div className="difficulties">
                  <div className="difficulties__wrapper">
                    <select className="difficulties__form form-select">
                      <option className="difficulties__default" selected>
                        all dificulties
                      </option>
                      <option
                        className="difficulties__easy"
                        arial-label="easy-difficulty"
                      >
                        <span className="difficulties__filled-bar"></span>
                        <span className="difficulties__empty-bar"></span>
                        <span className="difficulties__empty-bar"></span>
                      </option>
                      <option
                        className="difficulties__medium"
                        arial-label="medium-difficulty"
                      >
                        <span className="difficulties__filled-bar"></span>
                        <span className="difficulties__filled-bar"></span>
                        <span className="difficulties__empty-bar"></span>
                      </option>
                      <option
                        className="difficulties__hard"
                        arial-label="hard-difficulty"
                      >
                        <span className="difficulties__filled-bar"></span>
                        <span className="difficulties__filled-bar"></span>
                        <span className="difficulties__filled-bar"></span>
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
