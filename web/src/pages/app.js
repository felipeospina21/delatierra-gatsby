import React from "react";
import { Router } from "@reach/router";
import PrivateRoute from "../components/privateRoute";
import Login from "../components/login";
import Inventario from "../components/Inventory/InventoryContainer";

const App = () => (
  <Router>
    <PrivateRoute path="/app/inventario" component={Inventario} />
    <Login path="/app/login" />
  </Router>
);
export default App;
