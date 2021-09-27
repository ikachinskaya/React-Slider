import React, { Component } from "react";
import Slide from "../Slide";
import Description from "../Description";
import styles from "./Carousel.module.css";
import images from "./../../images";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  changeNextImg = () => {
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: currentIndex + 1,
    });
  };

  changePrevImg = () => {
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: currentIndex - 1,
    });
  };
  render() {
    //const src =
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg";
    const text = "Lorem ipsum";
    const description =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper, tellus eget gravida dignissim, ex justo porttitor ante, sit amet luctus erat ante a eros.";
    const { currentIndex } = this.state;

    return (
      <article className={styles.carousel}>
        <Slide
          src={images[currentIndex]}
          alt="image"
          changeNextImg={this.changeNextImg}
          changePrevImg={this.changePrevImg}
        />
        <Description text={text} description={description} href="#" />
      </article>
    );
  }
}

export default Carousel;
