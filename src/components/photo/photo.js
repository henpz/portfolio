import React from "react";
import './photo.css';
import minhaFoto from './foto.jpg';

function Photo(){
    return(
        <div className="itsme">
            <img className="foto" src={minhaFoto} alt="minhaFoto" />
            <div id="textos" ><span id="one">BEM VINDO,</span> <p/><span id="two"> MEU NOME É</span> <span id="three">CARLOS H. PIZZI</span></div>
        </div>
    )
}

export default Photo;
