import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../src/slider.css";
import { Rating } from '../components/Rating';

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
      <Slide 
      key={index} attraction={item.name} 
      img={item.preview? item.preview.source: 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/57/Ukraina.JPG/300px-Ukraina.JPG'} 
      text={item.wikipedia_extracts? item.wikipedia_extracts.text? item.wikipedia_extracts.text: 'some text':"Within the study of social psychology, interpersonal attraction is related to how much one likes, dislikes, or hates someone. It can be viewed as a force acting between two people that tends to draw them together and to resist their separation"}></Slide>
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
        <Rating attraction={attraction}></Rating>
        <h3 className="sliderTitle">{attraction}</h3>
        <p className="sliderDescription">{text}</p>
      </div>
    </li>
  )
};