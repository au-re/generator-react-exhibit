import { DemoComponent } from "../lib";
import React from "react";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<DemoComponent />, div);
  ReactDOM.render(<DemoComponent label="OK" />, div);
});
