import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { BuscadorPeliculas } from "./BuscadorPeliculas";
import { Detail } from "./Detail";

export const App = () => {
  const [peliculas, setPeliculas] = useState([]);

  const updatePeliculas = (nuevasPeliculas) => {
    setPeliculas(nuevasPeliculas);
  };

  return (
    <>
      <h1>Buscador de películas</h1>
      <Routes>
        <Route
          path="/buscadorpeliculas"
          element={<BuscadorPeliculas peliculas={peliculas} updatePeliculas={updatePeliculas} />}
        ></Route>
        <Route path="/detail/:id" element={<Detail peliculas={peliculas} />}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
};

