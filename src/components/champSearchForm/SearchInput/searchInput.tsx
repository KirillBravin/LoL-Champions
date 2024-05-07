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
  const [filter, setFilter] = useState("");

  const handleWrapperClick = () => {
    setWrapperActive(!wrapperActive);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest(".search-bar__wrapper")) {
      setWrapperActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const alphabeticalChampionNames = (arr: SingleChampionData[]) => {
    const names: string[] = arr.map((item) => {
      return item.name;
    });

    const sortedNames: string[] = names.sort();
    return sortedNames;
  };

  const sortedChampionNames = alphabeticalChampionNames(championList);

  const renderChampions = (arr: string[]) => {
    const items = arr
      .filter((f) => f.toLocaleLowerCase().includes(filter) || filter === "")
      .map((item, id) => {
        return (
          <a
            href="#"
            key={id}
            className="dropdown-item search-bar__dropdown-item"
          >
            <li>{item}</li>
          </a>
        );
      });
    return <ul className="dropdown-menu search-bar__dropdown-menu">{items}</ul>;
  };

  const champions = renderChampions(sortedChampionNames);

  const inputToLowerCase = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    return input.toLowerCase();
  };

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
            type="text"
            name="search-filter"
            id="search-filter"
            className="btn btn-secondary dropdown-toggle search-bar__input"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            placeholder="search"
            value={filter}
            onChange={(event) => setFilter(inputToLowerCase(event))}
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
