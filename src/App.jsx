import { Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/util/ScrollToHash.jsx";
import Home from "./pages/Home.jsx";
import DetalleProyecto from "./pages/DetalleProyecto.jsx";

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyecto/:slug" element={<DetalleProyecto />} />
      </Routes>
    </>
  );
}
