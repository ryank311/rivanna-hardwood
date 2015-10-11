import React from 'react';
import Slider from 'react-slick';
import './Carousel.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

export default class Carousel extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            {
              this.props.children.map((child) => {
                return (<div>{child}</div>);
              })
            }
        </Slider>
    );
  }
}

Carousel.propTypes = {
  children: React.PropTypes.node,
  'children.map': React.PropTypes.func
};

