import React from "react";
import NavBar from "../NavBar/NavBar";

function Home() {
    return (<div>
        <NavBar />
        <br></br>
        <div className="imgPrincipal">
            <img src="Sem_titulo.jpeg" alt="Logo do Hotwheels" title="Logo do Hotwheels" />
        </div>
        <h1>Pagina Inicial</h1>
        <p>Bem vindo ao CRUD de Hotweels</p>
    </div>
    )
}
export default Home;