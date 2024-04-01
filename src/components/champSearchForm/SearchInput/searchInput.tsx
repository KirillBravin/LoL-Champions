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
];

export function SearchInput() {
  const [searchItem, setSearchItem] = useState("");
  const [filteredChamps, setFilteredChamps] = useState(champions);

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

  return (
    <div className="search-bar">
      <div className="search-bar__wrapper">
        <img src={magnifyingGlass} alt="search" className="search-bar__icon" />
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
  );
}
