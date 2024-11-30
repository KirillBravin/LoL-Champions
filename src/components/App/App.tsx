import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import ErrorBoundary from "../../errorBoundary/errorBoundary";

const Home = lazy(() => import("../pages/homePage/Home"));
const SingleChampionLayout = lazy(
  () => import("../pages/SingleChampionLayout/SingleChampionLayout")
);
const Page404 = lazy(() => import("../pages/Page404/Page404"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          }
          errorElement={<ErrorBoundary />}
        />
        <Route
          path={`/champion/:championName`}
          element={
            <Suspense fallback={<Spinner />}>
              <SingleChampionLayout />
            </Suspense>
          }
          errorElement={<ErrorBoundary />}
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
