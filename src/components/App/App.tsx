import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";

const Home = lazy(() => import("../pages/homePage/Home"));
const SingleChampionLayout = lazy(
  () => import("../pages/SingleChampionLayout/SingleChampionLayout")
);
const Page404 = lazy(() => import("../pages/Page404/Page404"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path={`/champion/Ahri`}
        element={
          <Suspense fallback={<Spinner />}>
            <SingleChampionLayout />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Spinner />}>
            <Page404 />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
