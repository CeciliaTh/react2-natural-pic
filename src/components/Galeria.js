import MiContexto from "../contexto/contexto.jsx";
import { useContext } from "react";
import Foto from "./Foto.jsx";


export default function Galeria() {
  const { fotos } = useContext(MiContexto)

  return (
    <div className="galeria grid-columns-5 p-3">
        {fotos.map((f) => 
         <Foto key={f.id} id={f.id} img={f.src.tiny} alt={f.alt} liked={f.liked} /> )
        }
    </div>
  );
}


//return props.lstColab.map((colab) => <p key={colab.id}>{colab.id}- {colab.nombre} - {colab.correo}