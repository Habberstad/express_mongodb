import React from "react";
import ReactDOM from "react-dom";
import { ListMovies } from "../ListMovies";
import { act } from "react-dom/test-utils";

describe("ListMovies component", function () {
  it("shows loading screen", function () {
    const domElement = document.createElement("div");
    ReactDOM.render(<ListMovies />, domElement);

    expect(domElement.innerHTML).toMatchSnapshot();
  });

  it("shows movies", async function () {
    const movies = [{ title: "movie 1" }, { title: "movie 2" }];
    const domElement = document.createElement("div");

    await act(async () => {
      ReactDOM.render(<ListMovies listMovies={() => movies} />, domElement);
    });

    expect(
      Array.from(domElement.querySelectorAll("h3")).map((e) => e.innerHTML)
    ).toEqual(["movie 1", "movie 2"]);
    expect(domElement.innerHTML).toMatchSnapshot();
  });

  it("shows error message", async function () {
    const domElement = document.createElement("div");
    await act(async () => {
      ReactDOM.render(
        <ListMovies
          listMovies={() => {
            throw new Error("something went wrong");
          }}
        />,
        domElement
      );
    });

    expect(domElement.querySelector("#error-text").innerHTML).toEqual(
      "Error: something went wrong"
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
