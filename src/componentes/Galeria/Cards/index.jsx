import React from 'react'
import fotos from "../fotos.json"
import Card from '../Card'

export default function Cards({styles}) {
  return (
    <ul className={styles.galeria__cards}>
      {fotos.map((foto) => (
        <Card foto={foto} styles={styles}/>
      ))}
    </ul>
  )
}
