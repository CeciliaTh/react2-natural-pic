import Galeria from "../components/Galeria";
import { useContext } from "react";
import MiContexto from "../contexto/contexto.jsx";

export default function Home() {
  
  const { hola } = useContext(MiContexto)
  return (
    <div id="Home">
      <h1>Natural Pic</h1>
          
      <Galeria />
    </div>
  );
}
