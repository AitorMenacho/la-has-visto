import { PeliculaApi } from "../../api/PeliculaApi";
import { Actores } from "../components/Actores";
import { TrailerProductor } from "../components/TrailerProductor";
import "../styles/pelicula.css";

export const DetallesPelicula = () => {
  const id = window.location.href.split("/")[4];

  const { data } = PeliculaApi(id);

  if (data.length === 0) return <h1>Cargando...</h1>;

  return (
    <>
      <div
        className="portada"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
        }}
      >
        <div className="backdrop">
          <div className="poster">
            <div className="valoracion">
              <p
                className={
                  data.vote_average < 5
                    ? "baja"
                    : data.vote_average >= 5 && data.vote_average <= 7
                    ? "media"
                    : "alta"
                }
              >
                {data.vote_average.toFixed(2)}
              </p>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt={data.title}
            />
          </div>
          <div className="datos">
            <h1>{data.title}</h1>
            <p className="descripcion">{data.overview}</p>
            <p>
              <strong>Fecha de estreno:</strong> {data.release_date}
            </p>
            <div className="generos">
              {data.genres.map((genero) => (
                <span className="genero" key={genero.id}>
                  {genero.name}{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Actores id={id} />
      <TrailerProductor id={id} productor={ data.production_companies } />
    </>
  );
};
