import React from 'react';
import LanguageChoice from "./Components/LanguageChoice"
import { BrowserRouter, Route } from "react-router-dom"
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  choseLanguage = language => {
    this.setState({ language })
    console.log("lang set:", language)
    document.location = "/data"
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={() => <LanguageChoice onLanguageChosen={this.choseLanguage} />} />
      </BrowserRouter>
    )
  }
}

export default App;
