import React from "react";
import "./Hydraulic.css";
import PropTypes from "prop-types";

const Hydraulic = (props) => {
  const { name, desc, x, y, width, height, rotation } = props.hydraulic;

  return (
    <g
      id={name}
      className="hydraulic"
      onClick={() => {
        props.displayData(name, desc);
      }}
    >
      <rect
        width={width}
        height={height}
        x={x}
        y={y}
        rx="8"
        fill="white"
        transform={"rotate(" + rotation + " " + x + " " + y + ")"}
      />
    </g>
  );
};

export default Hydraulic;

Hydraulic.propTypes = {
  hydraulics: PropTypes.exact({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    rotation: PropTypes.number.isRequired,
    range: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  displayData: PropTypes.func.isRequired,
};
