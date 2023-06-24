import home from '../../assets/icones/home-ativo.png'
import curtidas from '../../assets/icones/mais-curtidas-inativo.png'
import vistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import suspresa from '../../assets/icones/surpreenda-me-inativo.png'

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={home} alt="home"/>
          <a href="/">Início</a>
        </li>
        <li>
          <img src={curtidas} alt="curtidas"/>
          <a href="/">Mais curtidas</a>
        </li>
        <li>
          <img src={vistas} alt="vistas"/>
          <a href="/">Mais vistas</a>
        </li>
        <li>
          <img src={novas} alt="novas"/>
          <a href="/">Mais novas</a>
        </li>
        <li>
          <img src={suspresa} alt="supresa"/>
          <a href="/">Surpresa</a>
        </li>
      </ul>
    </nav>
  );
}
 
export default Menu;