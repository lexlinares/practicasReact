import React from "react";
import ReactDom from "react-dom";

const name = "Alex Linares";

const currentDay = new Date();

const year = currentDay.getFullYear();

ReactDom.render(
  <div>
    <h1>Mi name is: {name}</h1>

    <p>copyright {year} </p>
  </div>,

  document.getElementById("root")
);
