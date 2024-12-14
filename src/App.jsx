import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Mision from "./pages/Mision/Mision";
import Vision from "./pages/Vision/Vision";
import Clases from "./pages/Clases/Clases";

// // Import Images
// const imageModules = import.meta.glob("./assets/img/models/*.jpg", {
//   eager: true,
// });
// const images = Object.values(imageModules).map((module) => module.default);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mision" element={<Mision />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/clases" element={<Clases />} />
    </Routes>
  );
}

export default App;
