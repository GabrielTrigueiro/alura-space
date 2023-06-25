import { useState } from "react";
import Tags from "../Tags"
import Cards from "./Cards";
import styles from "./Galeria.module.scss"
import fotos from "./fotos.json"

export default function Galeria() {

  const [itens, setItens] = useState(fotos)
  const tags = [...new Set(fotos.map((foto) => {return foto.tag}))]

  const filtrarFotos = (tag) => {
    const novasFotos = fotos.filter(
      (foto) => {
        return foto.tag === tag
      }
    )
    setItens(novasFotos)
  }

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags setItens={setItens} filtrarFotos={filtrarFotos} tags={tags} />
      <Cards itens={itens} styles={styles} />
    </section>
  );
}