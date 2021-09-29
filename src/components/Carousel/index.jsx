import React, { Component } from "react";
import Slide from "../Slide";
import Description from "../Description";
import styles from "./Carousel.module.scss";
import imagesDB from "./../../images";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      images: imagesDB,
      isFullScreen: false,
    };
    this.intervalId = null;
  }

  changeNextImg = () => {
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: (currentIndex + 1) % imagesDB.length,
    });
  };

  changePrevImg = () => {
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: (currentIndex - 1 + imagesDB.length) % imagesDB.length,
    });
  };

  start = () => {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.changeNextImg();
      }, 1000);
    }
  };

  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
    console.log(this.intervalId);
  };

  fullscreen = () => {
    const { isFullScreen } = this.state;
    this.setState({
      isFullScreen: !isFullScreen,
    });
  };

  render() {
    const { currentIndex } = this.state;
    const { images, isFullScreen } = this.state;
    const currentSlide = images[currentIndex];

    return (
      <article
        className={!isFullScreen ? styles.carousel : styles.carouselFullScreen}
      >
        <Slide
          key={currentSlide.id}
          src={currentSlide.URL}
          alt={currentSlide.name}
          changePrevImg={this.changePrevImg}
          changeNextImg={this.changeNextImg}
          start={this.start}
          stop={this.stop}
          fullscreen={this.fullscreen}
        />
        <Description
          text={currentSlide.name}
          description={currentSlide.description}
          href="#"
        />
      </article>
    );
  }
}

export default Carousel;
