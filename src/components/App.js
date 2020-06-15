import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Evaluations from "../evaluations";
import Header from "./Header";
import Footer from "./Footer";
import MainView from "./MainView";
import StudentView from "./StudentView";
import Side from "./Side";

function App() {
  const [evaluations] = useState(Evaluations);
  const [filters, setFilters] = useState({
    fun: false,
    difficulty: false,
  });
  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        [name]: checked,
      };
    });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <div className="app">
          <Header />
          <Side
            handleFilterChange={handleFilterChange}
            filters={filters}
            evaluations={evaluations}
          />
          <Switch>
            <Route exact path="/">
              <MainView filters={filters} evaluations={evaluations} />
            </Route>
            <Route path="/students/:name">
              <StudentView filters={filters} evaluations={evaluations} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
