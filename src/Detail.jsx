import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Detail = () => {

  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchPeliculaDetalle = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES`
        );
        const data = await response.json();
        setPelicula(data);
      } catch (error) {
        console.error("Error al obtener detalles de la película", error);
      }
    };

    fetchPeliculaDetalle();
  }, [id, API_KEY]);

  return (
    <div className="detail-container">
      {pelicula ? (
        <>
          <h2 className="detailh2">{pelicula.title}</h2>
          <p className="detailP">{pelicula.overview}</p>
          <Link className="buttonSinopsis2" to="/buscadorpeliculas">Volver</Link>
        </>
      ) : (
        <p>Cargando detalles de la película...</p>
      )}
    </div>
  );
};
