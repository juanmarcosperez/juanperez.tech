import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Contact from "../pages/Contact.js";
import Portfolio from "../pages/Portfolio.js";

library.add(fab, fas);

class App extends Component {
  render() {
    return (
      <div className="parent">
        <BrowserRouter>
          <div>
            <SideBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Portfolio" component={Portfolio} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
