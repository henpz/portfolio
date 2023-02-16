import React from "react";
import './header.css';
import Menuresp from './iconemenu.png'
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
function Header (){
    
    const [open, setOpen] = useState(false);
    const menuMobile = useRef(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleWindowResize = () => {
        setScreenWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
  
    const handleClick = event => {
      setOpen(!open);
      event.stopPropagation();
    };
  
    useEffect(() => {
      const handleWindowClick = event => {
        if (!menuMobile.current.contains(event.target)) {
          setOpen(false);
        }
      };
      window.addEventListener('click', handleWindowClick);
      return () => {
        window.removeEventListener('click', handleWindowClick);
      };
    }, []);

    return(
        <div>
           <header>
            <nav className="navbar">
                <div className="name"><Link to='../'>CARLOS HENRIQUE PIZZI</Link></div>
                    <ul id="menu-h" >
                        
                    <Link to='../'><li className="navitem">HOME</li></Link>
                        
                    <a href="#02"><li className="navitem">PROJETOS</li></a>

                    <a href="#01"><li className="navitem">SOBRE</li></a>

                    <a href="#03"><li className="navitem">CONTATOS</li></a>
                    <div className="iconemobile"  style={{ display: screenWidth < 768 ? 'block' : 'none' }}>
                        
                       <button className="butonmenuresp" onClick={handleClick}><img id="menuresp" src={Menuresp} /></button>
                    </div>
                    </ul>
                    
            </nav>

            <div className="mobilemenu" ref={menuMobile} style={{ display: open ? 'block' : 'none' }}>  
                
                <ul id="menu-h" >
                        
                <Link to='../'><li >HOME</li></Link>
                            
                        <a href="#02"><li >PROJETOS</li></a>
    
                        <a href="#01"><li >SOBRE</li></a>
    
                        <a href="#03"><li >CONTATOS</li></a>
    
                </ul>
            </div>

           </header>

        </div>
    )
}

export default Header