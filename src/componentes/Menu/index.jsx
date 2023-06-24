import home from '../../assets/icones/home-ativo.png'
import curtidas from '../../assets/icones/mais-curtidas-inativo.png'
import vistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import suspresa from '../../assets/icones/surpreenda-me-inativo.png'

import styles from './Menu.module.scss'

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt="home"/>
          <a href="/">Início</a>
        </li>
        <li className={styles.menu__item}>
          <img src={curtidas} alt="curtidas"/>
          <a href="/">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={vistas} alt="vistas"/>
          <a href="/">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas} alt="novas"/>
          <a href="/">Mais novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={suspresa} alt="supresa"/>
          <a href="/">Surpresa</a>
        </li>
      </ul>
    </nav>
  );
}
 
export default Menu;