import { PeliculasApi } from "../../api/PeliculasApi";

export const Peliculas = ({ pagina, letra }) => {

    const { data } = PeliculasApi(pagina, letra);

  const mostrarMas = () => {
    window.location.href = "/pelicula";
  };

  return (
    <>
      {data.map((pelicula) => (
        <div className="pelicula" key={pelicula.id}>
          <div className="puntuacion">
            <p
              className={
                pelicula.vote_average < 5
                  ? "mala"
                  : pelicula.vote_average >= 5 && pelicula.vote_average <= 7
                  ? "buena"
                  : "buenisima"
              }
            >
              {pelicula.vote_average}
            </p>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
            alt={pelicula.title}
          />
          <button onClick={mostrarMas} className="boton">
            Ver más
          </button>
        </div>
      ))}
    </>
  );
};
