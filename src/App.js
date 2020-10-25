import React from "react";
import LanguageChoice, {
  POLISH,
  ENGLISH,
  SPANISH,
} from "./Components/LanguageChoice";
import Error404 from "./Components/Error404";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Reading from "./Components/Reading";
import Instruction from "./Components/Instruction";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: ENGLISH, redirect: false };
  }

  chooseLanguage = (language) => {
    this.setState({ language, redirect: true });
  };

  onReadText = () => {};
  onReadInstruction = () => {};

  render() {
    const text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    const instruction = {};
    instruction[POLISH] = ["Zrób coś", "Zrób coś innego"];
    instruction[ENGLISH] = ["Do something", "Do something different"];
    instruction[SPANISH] = ["Hacer algo", "Hacer algo más"];

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <LanguageChoice
                onLanguageChosen={this.chooseLanguage}
                nextPagePath="/instruction"
                onRedirect={() => this.setState({ redirect: false })}
                redirect={this.state.redirect}
              />
            )}
          />
          <Route
            path="/instruction"
            component={() => (
              <Instruction
                points={instruction[this.state.language]}
                onRead={this.onReadInstruction}
              />
            )}
          />
          <Route
            path="/reading"
            component={() => <Reading text={text} onRead={this.onReadText} />}
          />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
