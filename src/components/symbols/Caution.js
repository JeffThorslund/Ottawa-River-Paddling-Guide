import React from "react";

const Caution = (props) => {
  return (
    <g
      id={props.symbols.type}
      className="symbol"
      onClick={() => {
        props.displayData(props.symbols.type, props.symbols.desc);
      }}
      transform={
        "translate(" + props.symbols.left + "," + props.symbols.top + ")"
      }
    >
      <path
        d="M65.4755 19.4898L104.203 100.316C107.383 106.954 102.545 114.637 95.1845 114.637H17.73C10.3696 114.637 5.53132 106.954 8.7118 100.316L47.4391 19.4898C51.0671 11.9179 61.8475 11.9179 65.4755 19.4898Z"
        fill="#FFF500"
        stroke="black"
        stroke-width="7"
      />
      <path
        d="M56.504 85.7011C55.384 85.7011 54.4274 85.3277 53.634 84.5811C52.8407 83.7877 52.4207 82.8311 52.374 81.7111L51.324 53.9911C51.2774 52.9177 51.6274 51.9844 52.374 51.1911C53.1207 50.3977 54.0307 50.0011 55.104 50.0011H58.884C59.9574 50.0011 60.8674 50.3977 61.614 51.1911C62.3607 51.9844 62.7107 52.9177 62.664 53.9911L61.614 81.7111C61.5674 82.8311 61.1474 83.7877 60.354 84.5811C59.5607 85.3277 58.604 85.7011 57.484 85.7011H56.504ZM58.184 91.3011C59.2574 91.3011 60.1674 91.6977 60.914 92.4911C61.7074 93.2844 62.104 94.2177 62.104 95.2911V97.1111C62.104 98.1844 61.7074 99.1177 60.914 99.9111C60.1674 100.704 59.2574 101.101 58.184 101.101H55.804C54.7307 101.101 53.7974 100.704 53.004 99.9111C52.2574 99.1177 51.884 98.1844 51.884 97.1111V95.2911C51.884 94.2177 52.2574 93.2844 53.004 92.4911C53.7974 91.6977 54.7307 91.3011 55.804 91.3011H58.184Z"
        fill="black"
      />
    </g>
  );
};

export default Caution;