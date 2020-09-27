import React, { useState } from "react";
import PropTypes from "prop-types";
import CreateAndEditFields from "../components/CreateAndEditFields";
import Form from "react-bootstrap/Form";

const EditRiver = ({ config, values, path }) => {
  const [sectionIndex, setSectionIndex] = useState(values.length-1);
  const [next, setNext] = useState(false);

  return (
    <>
      {!next ? (
        <CreateAndEditFields
          values={values}
          config={config}
          topic="Section"
          index={sectionIndex}
          setIndex={setSectionIndex}
          setNext={setNext}
          path={`${path}[${sectionIndex}].`}
        />
      ) : (
        "Next"
      )}
    </>
  );
};

EditRiver.propTypes = {};

export default EditRiver;