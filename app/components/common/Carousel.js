import React from 'react';
import Slider from 'react-slick';
import './Carousel.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';


const Carousel = function Carousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const sliderChildren = props.children.map((child) => {
    return (
      <div>{child}</div>
    );
  });
  return (
    <Slider {...settings}>
      {sliderChildren}
    </Slider>
  );
};

Carousel.propTypes = {
  children: React.PropTypes.node,
  'children.map': React.PropTypes.func
};

export default Carousel;
