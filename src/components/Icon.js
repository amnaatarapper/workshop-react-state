import React from "react";
import PropTypes from "prop-types";

const Icon = (props) => {
  return (
    <svg
      viewBox="0 0 44 35"
      className={props.isHighScore ? "is-high-score" : null}
    >
      <path
        d="M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z"
        transform="translate(0 0.301727)"
      />
      <rect
        width="30.4986"
        height="3.07759"
        transform="translate(6.56987 31.5603)"
      />
    </svg>
  );
};

Icon.propTypes = {
  isHighScore: PropTypes.bool,
};

export default Icon;
