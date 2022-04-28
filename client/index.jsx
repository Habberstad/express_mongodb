import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link,Routes, Route} from "react-router-dom";

function Frontpage() {
    return <div>
        <h1>Movie database</h1>
        <ul>
            <li><Link to={"/movies"} >List movies</Link></li>
            <li><Link to={"/movies/new"} >Add new movie</Link></li>
        </ul>
    </div>
}

function ListMovies() {
    return null;
}

function AddNewMovie() {
    return null;
}

function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Frontpage />} />
                <Route path={"/movies"} element={<ListMovies />} />
                <Route path={"/movies/new"} element={<AddNewMovie />} />
            </Routes>
        </BrowserRouter>)
}

ReactDOM.render(<Application />, document.getElementById("app"));
