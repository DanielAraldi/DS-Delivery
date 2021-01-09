import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Orders from "./pages/Orders";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
