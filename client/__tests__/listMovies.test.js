import React from "react";
import ReactDOM from "react-dom";
import { ListMovies } from "../ListMovies";

describe("ListMovies component", function () {
  it("shows loading screen", function () {
    const domElement = document.createElement("div");
    ReactDOM.render(<ListMovies />, domElement);

    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
