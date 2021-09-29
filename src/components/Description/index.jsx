import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Description.module.scss";

class Description extends Component {
  render() {
    const { text, description, href } = this.props;
    return (
      <>
        <div className={styles.wrapperDescription}>
          <h1 className={styles.titleDescription}>
            {text}
          </h1>
          <p className={styles.textDescription}>{description}</p>
          <a className={styles.linkDescription} href={href}>
            Lean More
          </a>
        </div>
      </>
    );
  }
}

Description.propTypes = { 
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Description;
