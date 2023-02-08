import { useContext } from "react";
import MiContexto from "../contexto/contexto.jsx";
import Foto from "../components/Foto.jsx";

export default function Favoritos() {
  const { favoritos } = useContext(MiContexto)
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="galeria grid-columns-5 p-3">
      {favoritos.map((f) => 
               <Foto key={f.id} id={f.id} img={f.src.tiny} alt={f.alt} liked={f.liked} />)
        }
      </div>
    </div>
  );
}
