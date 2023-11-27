import { Routes, Route } from "react-router-dom";
import Menu from "../pages/components/Menu/Menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu title="RitoFlix"/>} />
      </Routes>
    </>
  );
}

export default App;