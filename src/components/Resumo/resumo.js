import React from "react";
import './resumo.css'
import { saveAs } from "file-saver";
import cv from './curriculo.pdf'

function Resumo (){

    
    return(
        <div className="main-conteiner">

            
                <div className="titulosobre"><h1 id="sobremim">SOBRE MIM</h1></div>

            

                <div className="sub-conteiner">
                
                    <div className="text-conteiner"><h1>
                    Olá meu nome é Carlos Henrique Pizzi, nascido em 31 de maio de 2000 no interior de São Paulo. Atualmente com 22 anos de idade, tenho uma forte ligação com a tecnologia, tendo sido influenciado  desde criança por meu primo e amigos. Eu sou uma pessoa curiosa e apaixonada por 
                    aprender, consequência disso aos meus 11 anos eu já tinha conhecimento em informática,
                    hardwares, redes etc. E escolhi essa área para me profissionalizar por ser sempre muito próximo a tecnologia e por influência de várias pessoas.
                    No meu primeiro emprego, consegui realizar meus sonhos em alguns meses, comprando um computador melhor e montando um setup completo, com mesa, monitores e cadeira ergonômica. Foi lá também que tive meu primeir
                    o contato com programação, graças a um colega de trabalho que me mostrou como era o mercado profissional e me incentivou a estudar desenvolvimento web. Atualmente, possuo conhecimentos em HTML/CSS, JavaScript/TypeScript, React e Node.js, e planejo expandir minha habilidades com outros frameworks, como Vue, Angular e React Native, e também aprender outras linguagens, como Java, C+, adoraria também aprender mais sobre framework Flutter.
                    Meu sonho atual é encontrar um emprego na á
                    rea de TI, seja um estágio, trainee ou qualquer outra oportunidade que me permita aprender e ganhar experiência. Estou disposto a começar com um salário baixo, pois meu objetivo principal é adquirir conhecimento prático e aprender a lidar com situações reais. Sou altamente motivado e curioso para aprender coisas novas.
                    </h1></div>

                </div>

                <div className="buton-conteiner">
                    <div className="butaob">
                    <a target="_blank" href={cv}><span>BAIXAR CV</span></a>
                </div>
            </div>
        
        </div>
    )
}

export default Resumo