import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchData } from "./api";
import Autocomplete from "./components/Autocomplete";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listOfCountries: [] };
  }

  async componentDidMount() {
    this.setState({
      listOfCountries: await fetchData(
        "https://mocki.io/v1/cf3a3331-ea3f-4a82-88f8-db66ddb780b4"
      ),
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <content>
          <Autocomplete options={this.state.listOfCountries} />
        </content>
      </div>
    );
  }
}

export default App;
