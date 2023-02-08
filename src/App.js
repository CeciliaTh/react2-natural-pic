import "./styles.css";
import "./assets/css/galeria.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import MiContexto from "./contexto/contexto.jsx";

export default function App() {

  const [fotos, setFotos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  

  const endpoint = "/fotos.json";
  

  async function getFotos() {
    const res = await fetch(endpoint);
    const data = await res.json();
    setFotos([...data.photos])
    console.log(fotos)
  }

  useEffect(() => {
    getFotos();
  },[]);
 
  const estadoGlobal = { fotos, setFotos, favoritos, setFavoritos }
  return (
    <div className="App">

      <MiContexto.Provider value={estadoGlobal}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>

      </MiContexto.Provider>
    </div>
  );
}