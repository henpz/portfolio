import React from "react";
import './specifications.css';
import fotoHtml from './html.png'
import fotoJs from './js.png'

import fotoTs from './ts.png'
import fotoNode from './node.png'
import fotoReact from './react.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState, useEffect } from "react";
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

function Especificacoes () {

  const [slidesPerView, setSlidesPerView] = useState(window.innerWidth > 500 ? 3 : 1.5);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSlidesPerView(window.innerWidth > 699 ? 3 : 1.5);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setSlidesPerView(window.innerWidth > 699 ? 3 : 1.5);
      });
    };
  }, []);

    return(
        <div className="container">
       
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          
          loop={true}
         slidesPerView={window.innerWidth > 500 ? '3' : '1.5'}
          
          spaceBetween={50} 
          coverflowEffect={{
            rotate: -4,
            stretch: 30,
            depth: 90,
            modifier: 2.5,
            observe: true,
            
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"

          
        >
          <SwiperSlide>
            <img className="slidess" src={fotoHtml} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slidess"src={fotoJs} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slidess" src={fotoTs} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slidess" src={fotoReact} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slidess" src={fotoNode} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slidess" src={fotoHtml} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slidess" src={fotoJs} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slidess" src={fotoTs} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slidess" src={fotoReact} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slidess" src={fotoNode} alt="slide_image" />
          </SwiperSlide>
        
        
  
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    )
}

export default Especificacoes


// @media (max-width: 500px){

//   .swiper-slide {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     }
    
//     .slidess {
//     max-width: 100%;
//     max-height: 100%;
//     object-fit: contain;
//     }
// } 