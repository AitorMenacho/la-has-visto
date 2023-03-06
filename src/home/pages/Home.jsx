import { PeliculasApi } from "../../api/PeliculasApi";
import "../styles/home.css";

export const Home = () => {

  const { data } = PeliculasApi();

  

  return (
    <>
      <div className="introduccion">
        <h1>La has visto</h1>
        <p>Nunca te pierdas una película</p>
      </div>
      <div className="contenedor">
        <div className="contenedor_filtros">
          <div className="contenedor_filtros__filtro">
            <input
              type="text"
              name=""
              id="nombre"
              placeholder="¿Que película quieres encontrar?"
            />
          </div>
        </div>
        <h2 className="subtitulo">Peliculas</h2>
        <div className="contenedor_peliculas">
          {data.map((pelicula) => (
          <div className="pelicula" key={pelicula.id}>
            <img src={`https://image.tmdb.org/t/p/w185${pelicula.poster_path}`} alt={pelicula.title} />
            <div className="titulo">Titulo de mi película</div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
};
