import React from "react";
import Home from "./Page/Home/Home";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import About from "./Page/About/About";
import Member from "./Page/Member/Member";
import RoadTrip from "./Page/Trips/RoadTrips";
import LA from "./Page/Trips/LA";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/member" component={Member} />
        <Route exact path="/RoadTrip" component={RoadTrip} />
        <Route exact path="/LA" component={LA} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
