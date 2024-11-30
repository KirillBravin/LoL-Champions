import { useRouteError } from "react-router-dom";
import Page404 from "../components/pages/Page404/Page404";

export default function ErrorBoundary() {
  const error = useRouteError();

  return (
    <section>
      <small>{error?.message}</small>
      <Page404 />
    </section>
  );
}
