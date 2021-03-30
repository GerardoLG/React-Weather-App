import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCity = ({ setCity }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue !== undefined && inputValue.length > 0) {
      setCity((city) => [inputValue, ...city]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        type="text"
        placeholder="Boston"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCity.propTypes = {
  setCity: PropTypes.func.isRequired,
};

export default AddCity;
