// core import
import React, { Component } from "react";
import ReactDOM from "react-dom";

// component
import App from "./App";

// RHL
import "react-hot-loader/patch";
import { AppContainer } from "react-hot-loader";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";

const rootEl = document.getElementById("root");
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

render(App);

if (module.hot) module.hot.accept();
 