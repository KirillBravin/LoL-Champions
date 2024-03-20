import { useState } from "react";
import { Link } from "react-router-dom";

import "./champSearchForm.css";

const buttons = document.querySelectorAll(".button") as NodeListOf<HTMLElement>;

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

  const buttonActive = (e) => {
    buttons.forEach((button) => {
      button.style.color = "#cacaca";
    });
    e.target.style.color = "black";
  };

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
                    <div className="search-bar__line-right"></div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="roles__wrapper">
                  <ul className="roles">
                    <li className="roles__general">
                      <button
                        onClick={buttonActive}
                        className="button button_all"
                      >
                        all
                      </button>
                      <div className="roles__general-bottom-line"></div>
                    </li>
                    <li className="roles__general">
                      <button
                        onClick={buttonActive}
                        className="button button_assassins"
                      >
                        assassins
                      </button>
                      <div className="roles__general-bottom-line"></div>
                    </li>
                    <li className="roles__general">
                      <button
                        onClick={buttonActive}
                        className="button button_fighters"
                      >
                        fighters
                      </button>
                      <div className="roles__general-bottom-line"></div>
                    </li>
                    <li className="roles__general">
                      <button
                        onClick={buttonActive}
                        className="button button_mages"
                      >
                        mages
                      </button>
                      <div className="roles__general-bottom-line"></div>
                    </li>
                    <li className="roles__general">
                      <button
                        onClick={buttonActive}
                        className="button button_marksmen"
                      >
                        marksmen
                      </button>
                      <div className="roles__general-bottom-line"></div>
                    </li>
                    <li className="roles__general">
                      <button
                        onClick={buttonActive}
                        className="button button_supports"
                      >
                        supports
                      </button>
                      <div className="roles__general-bottom-line"></div>
                    </li>
                    <li className="roles__general">
                      <button
                        onClick={buttonActive}
                        className="button button_tanks"
                      >
                        tanks
                      </button>
                      <div className="roles__general-bottom-line"></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="difficulties">all difficulties</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
