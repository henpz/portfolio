import React from "react";
import './contato.css';
import fotoWpp from './wpz.png';
import fotoEmail from './eml.png';
import fotoInsta from './inst.png';
import { useEffect, useState } from 'react';



function Contato (){
    return(
        
        <div id="parent" className="principaldiv">

        <div id="child" className="wpp"> 
        <a href="https://wa.me/qr/GMXY2NDMPPROI1" target ="_blank"><div className="foto1"><img id="wpp" src={fotoWpp}/></div></a>
            <div className="texto"> <h1 id="ctt">Whatssap <br/>  +55 19 9 7104-2034 </h1></div>
        </div>

        <div id="child" className="email"> 
            <div className="foto1"><img id="wpp" src={fotoEmail}/></div>
            <div className="texto"> <h1 id="ctt">Email <br/>  kaikkzw@gmail.com </h1></div>
        </div>

        <div id="child" className="linkdin"> 
        <a href="https://www.linkedin.com/in/henriquepizzi/" target ="_blank"><div className="foto1"><img id="wpp" src={fotoInsta}/></div></a>
            <div className="texto"> <h1 id="ctt">LinkedIn <br/>  in/henriquepizzi </h1></div>
        </div>

            
        </div>
        
    )
}

export default Contato

