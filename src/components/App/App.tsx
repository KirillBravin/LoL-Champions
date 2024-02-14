import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "../pages/Home";
import { SingleChampionLayout } from "../pages/SingleChampionLayout";
import { Page404 } from "../pages/Page404";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/championName`} element={<SingleChampionLayout />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Container>
  );
}

export default App;
