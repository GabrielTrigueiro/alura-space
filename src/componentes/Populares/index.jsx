import React from 'react'

import styles from "./Populares.module.scss"
import fotosPopulares from "./populares.json"

export default function Populares() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {fotosPopulares.map((item) => (
          <li key={item.id}>
            <img
              src={item.path}
              alt={item.alt}
            />
          </li>
        ))}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  )
}
