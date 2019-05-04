/*
 * ENTRY
 * ---
 * The entry point at which we direct webpack into our codebase.
 * Look at Main.jsx to see how we layout the routes and views.
 *
 * We have to include styles before the app starts so we can keep order
 */

import React from "react";
import { render } from "react-dom";
import Main from "./Main.js";

import "../styles/reset.css";

render(
  <React.Fragment>
    <Main />
  </React.Fragment>,
  document.querySelector("#app")
);
