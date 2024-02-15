import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { SingleChampionLayout } from "../pages/SingleChampionLayout";
import { Page404 } from "../pages/Page404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`/championName`} element={<SingleChampionLayout />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
