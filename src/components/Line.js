import React from "react";
import PropTypes from "prop-types";
import "./Line.css";

const Line = (props) => (
  <g
    onClick={() => {
      props.displayData(props.lines.name, props.lines.desc);
    }}
    className="line-hover"
  >
    {props.lines.vector}
    <circle cx="150" cy="455" r="10" fill="black" stroke="black" />
  </g>
);

export default Line;

Line.propTypes = {
  lines: PropTypes.object.isRequired,
  displayData: PropTypes.func.isRequired,
};
