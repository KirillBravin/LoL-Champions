import { SkinDiscounts } from "../skinDiscounts/SkinDiscounts";
import { ChampSearchForm } from "../champSearchForm/ChampSearchForm";
import { Title } from "../Title/Title";

export function Home() {
  return (
    <>
      <SkinDiscounts />
      <Title />
      <ChampSearchForm />
    </>
  );
}
