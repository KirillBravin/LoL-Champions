import { useState } from "react";
import { Link } from "react-router-dom";

import "./champSearchForm.css";

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
    <>
      <div className="style-wrapper">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="search-bar">
                <img
                  src="public/icons/magnifying-glass.svg"
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
              </div>
            </div>
            <div className="col-8">
              <ul className="roles">
                <li className="roles__all">
                  <button className="roles__button-all">all</button>
                </li>
                <li className="roles__assassins">
                  <button className="roles__button-assassins">assassins</button>
                </li>
                <li className="roles__fighters">
                  <button className="roles__button-fighters">fighters</button>
                </li>
                <li className="roles__mages">
                  <button className="roles__button-mages">mages</button>
                </li>
                <li className="roles__marksmen">
                  <button className="roles__button-marksmen">marksmen</button>
                </li>
                <li className="roles__supports">
                  <button className="roles__button-supports">supports</button>
                </li>
                <li className="roles__tanks">
                  <button className="roles__button-tanks">tanks</button>
                </li>
              </ul>
            </div>
            <div className="col">
              <div className="difficulties">all difficulties</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
