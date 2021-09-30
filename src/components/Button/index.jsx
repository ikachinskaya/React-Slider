import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

class Button extends Component {
  render() {
    const { src, alt, onClick, className } = this.props;

    return (
      <button
        className={`${styles.btn} ${className}`}
        type="image"
        onClick={onClick}
        alt={alt}
      >
        <img src={src} alt={alt} />
      </button>
    );
  }
}

Button.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
