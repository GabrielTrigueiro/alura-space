import logo from "../../assets/logo.png"
import search from "../../assets/search.png"
import styles from "./Cabecalho.module.scss"

export default function Cabecalho(){
  return(
    <header className={styles.cabecalho}>
      <img src={logo} alt="logo alura space"/>
      <div className={styles.cabecalho__container}>
        <input className={styles.cabecalho__input} placeholder="O que você procura?" type="text"/>
        <img src={search} alt="lupa"/>
      </div>
    </header>
  )
}