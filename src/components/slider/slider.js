
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productImage from '../../assets/product_image.png';
import './sliderStyles.scss';

const ProductSlider = ({ id, image }) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
  
    useEffect(() => {
      setNav1(slider1);
      setNav2(slider2);
    });
  
    const settingsMain = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    };
  
    const settingsThumbs = {
      slidesToShow: 7,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: false,
      swipeToSlide: true,
      focusOnSelect: true,
      centerPadding: '10px',
      responsive: [
        {
          breakpoint: 700,
          settings: {
            arrows: false,
            slidesToShow: 5
          }
        },
      ]
    };
  
    return (
        <div className="slider-wrapper">
          <Slider
            {...settingsMain}
            asNavFor={nav2}
            ref={slider => (setSlider1(slider))}
          >
            <div className="slick-slide-main-item">
                <img className="slick-slide-image" src={image} />
            </div>

          </Slider>

          <div className="thumbnail-slider-wrap">
            <Slider
              {...settingsThumbs}
              asNavFor={nav1}
              ref={slider => (setSlider2(slider))}>
  
                <div className="slick-slide-item">
                    <img className="slick-slide-image" src={image} />
                </div>

            </Slider>
          </div>

        </div>
    );
}

export default ProductSlider;