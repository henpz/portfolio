import React from "react";
import { Link } from "react-router-dom";
import './aboutme.css';
import selfieMinha from './insta.PNG';

function About (){

    return(
        <div  className="me">
          <div className="fotominha" > <img id="ft"src={selfieMinha} /> </div>
          <div className="resumo"><h1 >Olá meu nome é Carlos Henrique Pizzi, nascido em 31 de maio de 2000 no interior de São Paulo. Atualmente com 22 anos de idade, tenho uma forte ligação com a tecnologia, tendo sido influenciado  desde criança por meu primo e amigos. Eu sou uma pessoa curiosa e apaixonada por aprender, consequência disso aos meus 11 anos eu já tinha um conhecimento em informática,
             hardwares, redes etc. E escolhi essa área para me profissionalizar por ser sempre muito próximo a tecnologia e por influência de várias pessoas.
             
             </h1> 
             <div className="buton-me">
                <div className="butaome">
               <Link to='./Sobre'><span>LER MAIS</span></Link> 
                </div>
             </div>


             </div>

        </div>
    )
}

export default About