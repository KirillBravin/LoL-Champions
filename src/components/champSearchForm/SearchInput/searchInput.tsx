import { useEffect, useState } from "react";
import magnifyingGlass from "../../../assets/icons/magnifying-glass.svg";
import "./searchInput.scss";

interface SingleChampionData {
  id: string;
  name: string;
  key: string;
  title: string;
  tags: string;
  difficulty: number;
}

interface ChampionInputProps {
  championList: SingleChampionData[];
}

export function SearchInput({ championList }: ChampionInputProps) {
  const [wrapperActive, setWrapperActive] = useState(false);

  const handleWrapperClick = () => {
    setWrapperActive(!wrapperActive);
  };

  const handleDocumentClick = (event) => {
    if (!event.target.closest(".search-bar__wrapper")) {
      setWrapperActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const renderChampions = (arr: SingleChampionData[]) => {
    const items = arr.map((item, id) => {
      return (
        <a
          href="#"
          key={id}
          className="dropdown-item search-bar__dropdown-item"
        >
          <li>{item.name}</li>
        </a>
      );
    });
    return <ul className="dropdown-menu search-bar__dropdown-menu">{items}</ul>;
  };

  const champions = renderChampions(championList);

  return (
    <div className="search-bar">
      <div className="search-bar__wrapper" onClick={handleWrapperClick}>
        <div className="dropdown search-bar__dropdown">
          <img
            src={magnifyingGlass}
            alt="search"
            className={`search-bar__icon ${wrapperActive ? "img__active" : ""}`}
          />
          <input
            type="search"
            className="btn btn-secondary dropdown-toggle search-bar__input"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            placeholder="search"
          />
          {champions}
        </div>
        <div
          className={`search-bar__line-left ${
            wrapperActive ? "search-bar__active" : ""
          }`}
        ></div>
      </div>
    </div>
  );
}
