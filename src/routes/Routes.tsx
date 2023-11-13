import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home title="Home page" />} />
      </Routes>
    </>
  );
}

export default App;