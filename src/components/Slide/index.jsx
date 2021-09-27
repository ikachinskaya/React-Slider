import { Component } from "react";
import styles from "./Slide.module.css";

class Slide extends Component {
  render() {
    const { src, alt, changePrevImg, changeNextImg } = this.props;
    return (
      <>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={src} alt={alt} />
          <button className={styles.btnPrev} onClick={changePrevImg}>
            {" "}
            &lt;
          </button>
          <button className={styles.btnNext} onClick={changeNextImg}>
            {" "}
            &gt;
          </button>
        </div>
      </>
    );
  }
}

export default Slide;
