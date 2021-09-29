import { Component } from "react";
import styles from "./Slide.module.scss";
import imageBtn from "./../../Play.png";
import imageStop from "./../../Stop.png";
import prev from "./../../prev.png";
import next from "./../../next.png";
import fullScreen from "./../../fullscreen.png";

class Slide extends Component {
  render() {
    const { src, alt, changePrevImg, changeNextImg, start, stop, fullscreen } =
      this.props;
    return (
      <>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={src} alt={alt} />
          <button
            className={`${styles.btnPrev} ${styles.btn} ${styles.btnPosition}`}
            type="image"
            onClick={changePrevImg}
          >
            <img src={prev} alt="Preview" />
          </button>
          <button
            className={`${styles.btnNext} ${styles.btn} ${styles.btnPosition}`}
            type="image"
            onClick={changeNextImg}
          >
            <img src={next} alt="Next" />
          </button>
          <div className={`${styles.btnWrapper} ${styles.btnPosition} `}>
            <button
              className={`${styles.btnPlay} ${styles.btn} `}
              type="image"
              onClick={start}
            >
              <img className={styles.imgPlay} src={imageBtn} alt="Play" />
            </button>
            <button
              className={`${styles.btnStop} ${styles.btn} `}
              type="image"
              onClick={stop}
            >
              <img className={styles.imgStop} src={imageStop} alt="Stop" />
            </button>
          </div>
          <button
            className={`${styles.btnFullScreen} ${styles.btn} ${styles.btnPosition}`}
            type="image"
            onClick={fullscreen}
          >
            <img src={fullScreen} alt="Fullscreen" />
          </button>
        </div>
      </>
    );
  }
}

export default Slide;
