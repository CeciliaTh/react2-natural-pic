import React from 'react'
import MiContexto from "../contexto/contexto.jsx";
import { useContext } from "react";
import Heart from "./Heart";


const Foto = ({img, alt, id, liked }) => {

    const { fotos, setFotos, setFavoritos } = useContext(MiContexto)

    const guardarFavoritos = id => {
        const indexFoto = fotos.findIndex(f => f.id === id) 
        fotos[indexFoto].liked = !fotos[indexFoto].liked
        setFotos([...fotos])
        const fotosFavoritas = fotos.filter(foto => foto.liked)
        setFavoritos([...fotosFavoritas])
      }

  return (
    <div className="boxFoto" style={{backgroundImage: `url(${img})`}}> 
              <button className='btnFav' onClick={() => guardarFavoritos(id)}> <Heart liked={liked}/></button>
              <p className="textAlt">{alt}</p>
    </div>
  )
}

export default Foto