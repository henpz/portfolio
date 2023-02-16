import React from "react";
import './footer.css';
import logoTt from './twitter.png'
import logoFace from './face.png' 
import logoInsta from './instag.png' 



function Footer(){
    return(
    <footer>
        <div className="fundo1">
            
             <div id="logos">
                
             <a href="https://twitter.com/kaikkz" target ="_blank"> <img id="editar" src={logoTt} /></a>
                

                <a href="https://www.facebook.com/henpizzi/" target ="_blank"> <img id="editar" src={logoFace} /></a>

               <a href="https://www.instagram.com/hxnrique.pizzi/" target ="_blank"> <img id="editar" src={logoInsta} /></a>
        </div>
            
        <div className="assinatura">
        <span>CARLOS HENRIQUE PIZZI</span> 
        </div>

        <div className="direitos">
        <span>© 2023 Todos os direitos reservados. feito por: carlos henrique pizzi</span>
        </div>




            </div>
    </footer>

    )
}

export default Footer;
