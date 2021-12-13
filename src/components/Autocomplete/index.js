import React, { useState } from "react";
import PropTypes from "prop-types";

const Autocomplete = ({ options }) => {
  const initialState = {
    userInput: "",
    filteredOptions: [],
    activeOption: 0,
    showOptions: false,
  };

  const [state, setState] = useState(initialState);

  const onChange = (e) => {
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setState((prevState) => {
      return {
        ...prevState,
        activeOption: 0,
        filteredOptions,
        showOptions: true,
        userInput,
      };
    });
  };

  const onClick = (e) => {
    setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
    });
  };

  const onKeyDown = (e) => {
    const { activeOption, filteredOptions } = state;

    if (e.keyCode === 13) {
      setState((prevState) => {
        return {
          ...prevState,
          activeOption: 0,
          showOptions: false,
          userInput: filteredOptions[activeOption],
        };
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      setState((prevState) => {
        return {
          ...prevState,
          activeOption: activeOption - 1,
        };
      });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        return;
      }
      setState((prevState) => {
        return {
          activeOption: activeOption + 1,
        };
      });
    }
  };

  const { activeOption, filteredOptions, showOptions, userInput } = state;
  let optionList;

  if (showOptions && userInput) {
    if (filteredOptions.length) {
      optionList = (
        <ul className="options">
          {filteredOptions.map((optionName, index) => {
            let className;
            if (index === activeOption) {
              className = "option-active";
            }
            return (
              <li className={className} key={optionName} onClick={onClick}>
                {optionName}
              </li>
            );
          })}
        </ul>
      );
    } else {
      optionList = (
        <div className="no-options">
          <em>No Option!</em>
        </div>
      );
    }
  }
  return (
    <>
      <div className="search">
        <input
          type="text"
          className="search-box"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        <input type="submit" value="" className="search-btn" />
      </div>
      {optionList}
    </>
  );
};

Autocomplete.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
};

export default Autocomplete;
