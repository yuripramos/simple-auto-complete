/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchData } from "./api";
import Autocomplete from "./components/Autocomplete";

const App = () => {
  const [listOfCountries, setListOfCountries] = useState([]);

  useEffect(async () => {
    const result = await fetchData(
      "https://mocki.io/v1/cf3a3331-ea3f-4a82-88f8-db66ddb780b4"
    );

    setListOfCountries(result);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <content>
        <Autocomplete options={listOfCountries} />
      </content>
    </div>
  );
};

export default App;
