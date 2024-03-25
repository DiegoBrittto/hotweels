import NavBar from "../NavBar/NavBar";
import '../About/About.css';

function About() {
    return (<div>
        <NavBar />
        <div className="principal">
            <div className="Titulo">
                <h1>Sobre</h1><br />
            </div>
            <div className="textoPrincipal">
                <h5>Essa é uma aplicação para um CRUD de carros Hotweels<br />
                    Elaborada na Disciplina de Desenvolvimento de Sistema Front-End<br />
                    Do curso de Graduação Online da PUCRS</h5>
            </div>
        </div>
    </div>
    )

}

export default About;