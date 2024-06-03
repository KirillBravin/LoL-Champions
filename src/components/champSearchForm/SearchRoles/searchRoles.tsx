import { useState } from "react";

import "./searchRoles.scss";

interface ChampionRoleProps {
  getRoleSelected: (data: string) => void;
}

export function SearchRoles({ getRoleSelected }: ChampionRoleProps) {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const roles = [
    "All",
    "Assassins",
    "Fighters",
    "Mages",
    "Marksmen",
    "Supports",
    "Tanks",
  ];

  const roleButton = (arg: string, i: number) => {
    setActiveButton(i === activeButton ? null : i);
    if (arg === "All") {
      getRoleSelected("");
    } else {
      getRoleSelected(arg);
    }
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
              roleButton(item, i);
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

  return <>{roleItems}</>;
}
