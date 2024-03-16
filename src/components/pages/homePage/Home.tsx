import { SkinDiscounts } from "../../skinDiscounts/SkinDiscounts";
import { ChampSearchForm } from "../../champSearchForm/ChampSearchForm";

import "animate.css";
import "./home.sass";

export function Home() {
  return (
    <>
      <SkinDiscounts />
      <h1 className="title">
        <span className="animate__animated title__intro animate__fadeIn">
          choose your
        </span>
        <strong className="animate__animated title__main animate__fadeIn">
          champion
        </strong>
        <span className="animate__animated title__subtitle animate__fadeIn">
          With more than 140 champions, you'll find the perfect match for your
          playstyle. Master one, or master them all.
        </span>
      </h1>
      <ChampSearchForm />
    </>
  );
}
