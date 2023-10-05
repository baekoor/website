import Navbar from "./Navbar.tsx";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import Proj from "./pages/Proj.tsx";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/proj" element={<Proj />} />
        </Routes>
      </div>
    </>
  );
}
