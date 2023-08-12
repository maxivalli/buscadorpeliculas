import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { BuscadorPeliculas } from "./BuscadorPeliculas";
import { Detail } from "../modules/Detail";
import { Navbar } from "../modules/Navbar";
import { About } from "../views/About"
import { Contacto } from "../views/Contacto"
import logo from "../assets/logo.gif"

export const App = () => {
  const [peliculas, setPeliculas] = useState([]);

  const updatePeliculas = (nuevasPeliculas) => {
    setPeliculas(nuevasPeliculas);
  };

  return (
    <>
      <Navbar/>
      <h1>Buscador de películas</h1>
      <img src={logo} alt="logo" className="logo"/>
      <Routes>
        <Route path="/buscadorpeliculas" element={<BuscadorPeliculas peliculas={peliculas} updatePeliculas={updatePeliculas} />}></Route>
        <Route path="/detail/:id" element={<Detail peliculas={peliculas} />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contacto' element={<Contacto />}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
};

