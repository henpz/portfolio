import React from "react";
import './projects.css';
import modeloFoto from './modelo.jpg';

function Projetos () {
    return(
        <div className="principal">

            <div className="projeto"> <img id="modelo" src={modeloFoto} />

            </div>

            <div className="text"><h1 id="texto"> <br />PROJETO I</h1>  
            <h2 id="textodois">Esse projeto na verdade é uma resolução de um teste de Front-End no REACT.JS, onde devemos resolver alguns problemas. esse teste tambem temos uma
            simulação de API onde devemos pegar algumas informações. Nele você poderá ver qual linha de raciocínio usei para resolve-lo</h2>

            <div className="buton-projects">
                <div className="butaoprojects">
                <a href="https://github.com/" target ="_blank"> <span>VER PROJETO</span></a>
                </div>
            </div>

            </div>
            

        </div>
    )
}

export default Projetos