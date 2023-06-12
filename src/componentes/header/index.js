import { Link } from "react-router-dom";
import './style.css'; 
import logo from './img/Logo.png'
function header(){
    return(
        <header className="cabeca">
            <h1 className="titulo"> Oráculo automotivo</h1>
            <div className="cabecalho__links">
                <Link to= "/">Home </Link>
                <Link to= "/veiculos">Veiculos </Link>
                <Link to= "/sobre">Nossa História </Link>
                <Link to= "/Login">Login </Link>
            </div>
        </header>
    )
}
export default header;
