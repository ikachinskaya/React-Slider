import { Component } from "react";
import Button from "./../Button";
import PropTypes from "prop-types";
import styles from "./Slide.module.scss";
import imageBtn from "./../../Play.png";
import imageStop from "./../../Stop.png";
import prev from "./../../prev.png";
import next from "./../../next.png";
import fullScreen from "./../../fullscreen.png";
import smallScreen from "./../../smallScreen.png";
import stylesBtn from "./../Button/Button.module.scss";

class Slide extends Component {
  render() {
    const {
      src,
      alt,
      changePrevImg,
      changeNextImg,
      start,
      stop,
      fullscreen,
      isFullScreen,
    } = this.props;
    return (
      <>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={src} alt={alt} />
          <Button
            className={`${stylesBtn.btnPrev} ${stylesBtn.btnPosition}`}
            onClick={changePrevImg}
            src={prev}
            alt="Preview"
          />
          <Button
            className={`${stylesBtn.btnNext} ${stylesBtn.btnPosition}`}
            onClick={changeNextImg}
            src={next}
            alt="Next"
          />
          <div className={`${stylesBtn.btnWrapper} ${stylesBtn.btnPosition} `}>
            <Button onClick={start} src={imageBtn} alt="Play" />
            <Button onClick={stop} src={imageStop} alt="Stop" />
          </div>
          <Button
            className={`${stylesBtn.btnFullScreen} ${stylesBtn.btnPosition}`}
            onClick={fullscreen}
            src={isFullScreen ? smallScreen : fullScreen}
          />
        </div>
      </>
    );
  }
}

Slide.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  changePrevImg: PropTypes.func,
  changeNextImg: PropTypes.func,
  start: PropTypes.func,
  stop: PropTypes.func,
  fullscreen: PropTypes.func,
};

export default Slide;
