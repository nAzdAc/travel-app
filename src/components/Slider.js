import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../src/slider.css";

export const SimpleSlider = ({ attractions }) => {
  // console.log(attractions)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    }
    const listItems = attractions.map((item,index) =>
      <Slide key={index} attraction={item.attraction} img={item.img} text={item.text}></Slide>
    );

    return (
      <ul>
        <Slider {...settings}>
          {listItems}
        </Slider>
      </ul>
    );
  }

const Slide = ({ img,attraction,text}) => {
  return(
    <li className="sliderItemConteiner">
    <div className="sliderItem">
      <img className="sliderImg" src={img} alt="img"></img>
      <h3 className="sliderTitle">{attraction}</h3>
      <p className="sliderDescription">{text}</p>
    </div>
  </li>
  )
};