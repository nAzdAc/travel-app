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
      <Slide key={index} attraction={item.name} img={item.preview? item.preview.source: 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/57/Ukraina.JPG/300px-Ukraina.JPG'} text={item.wikipedia_extracts.text? item.wikipedia_extracts.text : 'Kiesler and Goldberg analyzed a variety of response measures that were typically utilized as measures of attraction and extracted two factors: the first, characterized as primarily socioemotional, included variables such as liking, the desirability of the persons inclusion in social clubs and parties, seating choices, and lunching together. The second factor included variables such as voting for, admiration and respect for, and also seeking the opinion of the target.[1] Another widely used measurement technique scales verbal responses expressed as subjective ratings or judgments of the person of interes'}></Slide>
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