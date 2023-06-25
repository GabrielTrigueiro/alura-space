import styles from "./Tags.module.scss"
import fotos from "../Galeria/fotos.json"

const Tags = ({tags, filtrarFotos, setItens}) => {
  return (
    <div  className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((item) => (
          <li onClick={()=>filtrarFotos(item)}>{item}</li>
        ))}
        <li onClick={()=>setItens(fotos)}>Todas</li>
      </ul>
    </div>
  );
}
 
export default Tags;