import React from "react";
import LanguageChoice from "./Components/LanguageChoice";
import Error404 from "./Components/Error404";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Reading from "./Components/Reading";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  chooseLanguage = (language) => {
    this.setState({ language });
    console.log("lang set:", language);
    document.location = "/reading";
  };

  onRead = () => {};

  render() {
    const text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <LanguageChoice onLanguageChosen={this.chooseLanguage} />
            )}
          />
          <Route
            path="/reading"
            component={() => <Reading text={text} onRead={this.onRead} />}
          />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
