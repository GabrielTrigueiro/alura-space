import React from 'react'
import Card from '../Card'

export default function Cards({styles, itens}) {
  return (
    <ul className={styles.galeria__cards}>
      {itens.map((item) => (
        <Card foto={item} styles={styles}/>
      ))}
    </ul>
  )
}
