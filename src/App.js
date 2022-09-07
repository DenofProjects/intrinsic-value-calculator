import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import Intrinsic from "./views/intrinsic";

function App() {
  return (
    <Provider store={store}>
      <Intrinsic />
    </Provider>
  );
}

export default App;
