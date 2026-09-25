import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { seo } from "./data/site.js";
import ScrollToHash from "./components/util/ScrollToHash.jsx";
import Home from "./pages/Home.jsx";
import DetalleProyecto from "./pages/DetalleProyecto.jsx";

export default function App() {
  useEffect(() => {
    document.title = seo.titulo;
    document.querySelector('meta[name="description"]')?.setAttribute("content", seo.descripcion);
  }, []);
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
