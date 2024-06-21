import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";

const Home = lazy(() => import("../pages/homePage/Home"));
const SingleChampionLayout = lazy(
  () => import("../pages/SingleChampionLayout/SingleChampionLayout")
);
const Page404 = lazy(() => import("../pages/Page404/Page404"));

function App() {
  const [champName, setChampName] = useState<string>("");

  useEffect(() => {
    console.log(champName);
  }, [champName]);

  function handleChampionName(data: string): void {
    setChampName(data);
  }

  console.log(champName);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              <Home handleChampionName={handleChampionName} />
            </Suspense>
          }
        />
        <Route
          path={`/champion/:champName`}
          element={
            <Suspense fallback={<Spinner />}>
              <SingleChampionLayout champName={champName} />
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
    </div>
  );
}

export default App;
