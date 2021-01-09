import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Orders from "./components/Orders";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
