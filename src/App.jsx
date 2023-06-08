import "./styles/styles.scss";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";

import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
