import React from "react";
import styles from "./IconButton.module.css";
import PropTypes from "prop-types";

const IconButton = ({ children, onClick, ...allyProps }) => (
  <button
    type="button"
    className={styles.IconButton}
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default IconButton;
