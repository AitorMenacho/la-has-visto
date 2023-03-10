import { PeliculaApi } from "../../api/PeliculaApi";
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
            <img
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt={data.title}
            />
          </div>
          <div className="datos">
            <h1>{data.title}</h1>
            <p>{data.overview}</p>
            <p>
              <strong>Fecha de estreno:</strong> {data.release_date}
            </p>
            <p>
              <strong>Popularidad:</strong> {data.popularity}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
