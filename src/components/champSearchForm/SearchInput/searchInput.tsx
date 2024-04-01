import { useState } from "react";

import magnifyingGlass from "../../../../public/icons/magnifying-glass.svg";
import "./searchInput.scss";

const champions = [
  { champion: "Ahri", id: 1 },
  { champion: "Aatrox", id: 2 },
  { champion: "Jax", id: 3 },
  { champion: "Caitlyn", id: 4 },
  { champion: "Jinx", id: 5 },
  { champion: "Vi", id: 6 },
  { champion: "Pantheon", id: 7 },
  { champion: "Zoe", id: 8 },
  { champion: "Ekko", id: 9 },
  { champion: "Zac", id: 10 },
  { champion: "Amumu", id: 11 },
  { champion: "Rammus", id: 12 },
  { champion: "Rammus", id: 12 },
  { champion: "Rammus", id: 12 },
  { champion: "Rammus", id: 12 },
  { champion: "Rammus", id: 12 },
  { champion: "Rammus", id: 12 },
  { champion: "Rammus", id: 12 },
  { champion: "Rammus", id: 12 },
  { champion: "Rammus", id: 12 },
  { champion: "Rammus", id: 12 },
  { champion: "Rammus", id: 12 },
];

interface Champions {
  champion: string;
  id: number;
}

export function SearchInput() {
  const [searchItem, setSearchItem] = useState(champions);

  function renderChampions(arr: Champions[]) {
    const items = arr.map((item) => {
      return (
        <a href="#" className="dropdown-item search-bar__dropdown-item">
          <li>{item.champion}</li>
        </a>
      );
    });
    return <ul className="dropdown-menu search-bar__dropdown-menu">{items}</ul>;
  }

  const championItems = renderChampions(searchItem);

  return (
    <div className="search-bar">
      <div className="search-bar__wrapper">
        <div className="dropdown search-bar__dropdown">
          <img
            src={magnifyingGlass}
            alt="search"
            className="search-bar__icon"
          />
          <button
            className="btn btn-secondary dropdown-toggle search-bar__btn-input"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            search
          </button>
          {championItems}
        </div>
        <div className="search-bar__line-left"></div>
      </div>
    </div>
  );
}
