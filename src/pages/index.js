import React from "react";
import Header from '../components/header/header';
import Photo from '../components/photo/photo';
import Especificacoes from '../components/specifications/specifications';
import Projetos from '../components/projects/projects';
import Title1 from '../components/specifications/title1';
import About from '../components/aboutme/aboutme';
import Title2 from '../components/projects/title2';
import Title3 from '../components/aboutme/title3';
import Title4 from '../components/contato/title4';
import Contato from '../components/contato/contato';
import Footer from '../components/footer/footer';

function Home (){
    return(<div>
    <Header />
     <Photo />
     <Title1 />
     <Especificacoes /> 
     <Title2 />
     <Projetos />
     <Title3 />
     <About />
     <Title4 />
     <Contato />
     <Footer />
     </div>
    )
}

export default Home