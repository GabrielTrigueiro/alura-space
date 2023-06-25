import Tags from "../Tags"
import Cards from "./Cards";
import styles from "./Galeria.module.scss"

const Galeria = () => {
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards styles={styles}/>
    </section>
  );
}

export default Galeria;