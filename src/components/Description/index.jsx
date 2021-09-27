import { Component } from "react";
import styles from "./Description.module.css";

class Description extends Component {
  render() {
    const { title, text, description, href } = this.props;
    return (
      <>
        <h1 className={styles.titleDescription} title={title}>
          {text}
        </h1>
        <p className={styles.textDescription}>{description}</p>
        <a className={styles.linkDescription} href={href}>
          Lean More
        </a>
      </>
    );
  }
}

export default Description;
