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
    };
    this.intervalId = null;
  }

  changeNextImg = () => {
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: (currentIndex + 1 + imagesDB.length) % imagesDB.length,
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

  render() {
    const { currentIndex } = this.state;
    const { images } = this.state;
    const currentSlide = images[currentIndex];
    return (
      <article className={styles.carousel}>
        <Slide
          key={currentSlide.id}
          src={currentSlide.URL}
          alt="image"
          changeNextImg={this.changeNextImg}
          changePrevImg={this.changePrevImg}
          start={this.start}
          stop={this.stop}
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
