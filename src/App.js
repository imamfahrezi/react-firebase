import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import "./styles/app.css";
import Dashboard from "./pages/home/Dashboard";
import {Provider} from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Router>
    </Provider>
  );
}
