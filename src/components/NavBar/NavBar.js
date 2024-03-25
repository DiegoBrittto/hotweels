import react from "react";
import { Link } from "react-router-dom";
import '../NavBar/NavBar.module.css';

const NavBar = () => {
    return (<nav>
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>Sobre</Link></li>
            <li><Link to='/carform'>Adicionar Carros</Link></li>
            <li><Link to='/carlist'>Listar Carros</Link></li>
        </ul>
      </nav>     
    )
}
export default NavBar;