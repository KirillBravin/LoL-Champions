import { SkinDiscounts } from "../../skinDiscounts/SkinDiscounts";
import { ChampSearchForm } from "../../champSearchForm/ChampSearchForm";

import "./home.sass";

export function Home() {
  return (
    <>
      <SkinDiscounts />
      <h1 className="title">
        <span className="title__intro">choose your</span>
        <strong className="title__main">champion</strong>
        <span className="title__subtitle">
          With more than 140 champions, you’ll find the perfect match for your
          playstyle. Master one, or master them all.
        </span>
      </h1>
      <body>
        <ChampSearchForm />
      </body>
    </>
  );
}
