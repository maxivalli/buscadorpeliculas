import { useState } from "react";
import { Link } from 'react-router-dom';
import imagenGenerica from './assets/imagen.png'

export const BuscadorPeliculas = ({ peliculas, updatePeliculas }) => {
  const urlBase = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [busqueda, setBusqueda] = useState("");

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPeliculas();
  };

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(
        `${urlBase}?query=${busqueda}&api_key=${API_KEY}&language=es-ES`
      );
      const data = await response.json();

      if (data.results.length > 0) {
        const peliculasOrdenadasPorFecha = data.results.sort((a, b) =>
          a.release_date.localeCompare(b.release_date)
        );
        updatePeliculas(peliculasOrdenadasPorFecha);
      } else {
        updatePeliculas([]);
        alert("No se encontraron películas.");
      }
    } catch (error) {
      alert("Ha ocurrido un error");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese una película"
          value={busqueda}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>
      <div className="movie-list">
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="movie-card">
            <img
        src={
          pelicula.poster_path
            ? `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`
            : imagenGenerica
        }
        alt={pelicula.title}
      />
            <h2>{pelicula.title}</h2>
            <h3>Estreno: {pelicula.release_date}</h3>
            <Link className='buttonSinopsis' to={`/detail/${pelicula.id}`}>ver sinopsis</Link>
          </div>
        ))}
      </div>
      <div className="footer">
        <footer>
          <p>Maxi Valli. Derechos reservados ©</p>
        </footer>
      </div>
    </div>
  );
};
