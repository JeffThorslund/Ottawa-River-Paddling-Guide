import React, { Component } from "react";
import Container from "./Container";
import "./Form.css";

const axios = require("axios");

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      river: null,
      rapid: null,
      feature: null,
    };
  }

  //Sets selection of river and rapid.
  handleSelect = (type, element) => {
    this.state[type] === element
      ? this.setState({
          [type]: null,
        })
      : this.setState({
          [type]: element,
        });
  };

  //Sets selection of feature or other.
  handleFeatureSelect = (type, element) => {
    this.state.feature === element
      ? this.setState({
          feature: null,
        })
      : this.setState({
          feature: element,
        });
  };

  render() {
    //an array of rendered containers.
    let containerArr = [];

    //creates a container of all the rivers.
    const riverArray = this.props.dataArr;
    containerArr.push(
      <Container
        arr={riverArray}
        name="riverName" //name property in data.json
        type="river"
        handleSelect={this.handleSelect}
        selected={this.state.river}
        key="river_key"
      />
    );

    //if a river is selected, show an array of possible rapids
    if (this.state.river !== null) {
      const riverIndex = riverArray.findIndex((elem) => {
        return elem.riverName === this.state.river;
      });
      const rapidArray = riverArray[riverIndex].rapids;

      containerArr.push(
        <Container
          arr={rapidArray}
          name="name" //name property in data.json
          type="rapid"
          handleSelect={this.handleSelect}
          selected={this.state.rapid}
          key="rapid_key"
        />
      );
      //if a rapid is selected, show an array of possible features
      if (this.state.rapid !== null) {
        const features = ["hydraulics", "eddys", "lines", "arrows"];
        const rapidIndex = rapidArray.findIndex((elem) => {
          return elem.name === this.state.rapid;
        });

        //creates a container for each feature type
        const featureArray = features.map((elem, index) => {
          let arr = rapidArray[rapidIndex][elem];
          return (
            <Container
              arr={arr}
              name="name"
              type={elem}
              handleSelect={this.handleFeatureSelect}
              selected={this.state.feature}
              key={`feature_key_${index}`}
            />
          );
        });

        //add the feature containers to the container array.
        containerArr = containerArr.concat(featureArray);
      }
    }
    return (
      <div className="form">
        <h1>Welcome to the River Editor!</h1>
        <h2>State</h2>
        <div>river: {this.state.river}</div>
        <div>rapid: {this.state.rapid}</div>
        <div>feature: {this.state.feature}</div>

        {containerArr}
      </div>
    );
  }
}

export default Form;
