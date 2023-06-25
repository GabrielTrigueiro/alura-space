import React from 'react'

import open from "../../../assets/open.png"
import fav from "../../../assets/favorito.png"

export default function Card({foto, styles}) {
  return (
    <li key={foto.id} className={styles.galeria__card}>
      <img
        className={styles.galeria__imagem}
        src={foto.imagem}
        alt={foto.titulo}
      />
      <p className={styles.galeria__descricao}>{foto.titulo}</p>
      <div>
        <p>{foto.creditos}</p>
        <span>
          <img src={fav} alt="coração" />
          <img src={open} alt="abrir" />
        </span>
      </div>
    </li>
  )
}
