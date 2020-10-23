import React from 'react';
import LanguageChoice from "./Components/LanguageChoice";
import Error404 from "./Components/Error404";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  chooseLanguage = language => {
    this.setState({ language });
    console.log("lang set:", language);
    document.location = "/data";
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <LanguageChoice onLanguageChosen={this.chooseLanguage} />} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;