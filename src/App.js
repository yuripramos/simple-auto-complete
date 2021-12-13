import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchData } from "./api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    this.setState({
      data: await fetchData(
        "https://mocki.io/v1/ddf70420-e3ce-4ba3-a50d-4aea44401c07"
      ),
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>CODE GOES HERssssE</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
