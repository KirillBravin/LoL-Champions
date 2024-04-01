import { useState } from "react";

import "./searchRoles.scss";

export function SearchRoles() {
  const [activeButton, setActiveButton] = useState<number | null>(null);

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

  return <>{roleItems}</>;
}
