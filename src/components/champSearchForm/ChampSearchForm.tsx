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
      <nav className="nav-wrapper">
        <section className="nav">
          <div className="nav__search-bar">
            <input
              type="text"
              value={searchItem}
              onChange={handleInputChange}
              placeholder="Search"
            />
          </div>
          {/*         {filteredChamps.map((champ) => (
          <li key={champ.id}>{champ.champion}</li>
        ))} */}
          <ul className="nav__roles">
            <li className="roles">
              <button className="roles__button__all"></button>
            </li>
            <li className="roles__assassins">assassins</li>
            <li className="roles__fighters">fighters</li>
            <li className="roles__mages">mages</li>
            <li className="roles__marksmen">marksmen</li>
            <li className="roles__supports">supports</li>
            <li className="roles__tanks">tanks</li>
          </ul>
          <div className="nav__difficulties">all difficulties</div>
        </section>
      </nav>
    </>
  );
}
