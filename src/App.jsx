import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Informacion from "./pages/Informacion/Informacion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/informacion" element={<Informacion />} />
    </Routes>
  );
}

export default App;
