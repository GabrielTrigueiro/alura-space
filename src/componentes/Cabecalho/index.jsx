import logo from "../../assets/logo.png"
import search from "../../assets/search.png"

export default function Cabecalho(){
  return(
    <header>
      <img src={logo} alt="logo alura space"/>
      <div>
        <input placeholder="O que você procura?" type="text"/>
        <img src={search} alt="lupa"/>
      </div>
    </header>
  )
}