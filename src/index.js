import React from "react";
import ReactDOM from "react-dom";

import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  rootElement
);
