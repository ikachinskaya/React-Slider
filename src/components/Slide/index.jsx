import { Component } from "react";
import styles from "./Slide.module.scss";
import imageBtn from "./../../Play.png";
import imageStop from "./../../Stop.png"

class Slide extends Component {
  render() {
    const { src, alt, changePrevImg, changeNextImg, start, stop } = this.props;
    return (
      <>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={src} alt={alt} />
          <button className={styles.btnPrev} onClick={changePrevImg}>
            &lt;
          </button>
          <button className={styles.btnNext} onClick={changeNextImg}>
            &gt;
          </button>
          <button className={styles.btnPlay} type="image" onClick={start}>
            <img className={styles.imgPlay} src={imageBtn} alt="" />
          </button>
          <button className={styles.btnStop} type="image" onClick={stop}>
            <img className={styles.imgStop} src={imageStop} alt="" />
          </button>
        </div>
      </>
    );
  }
}

export default Slide;
