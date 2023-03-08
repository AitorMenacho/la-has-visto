import { PeliculaApi } from "../../api/PeliculaApi";
import "../styles/pelicula.css";

export const DetallesPelicula = () => {
  const id = window.location.href.split("/")[4];

  const { data } = PeliculaApi(id);

  if (data.length === 0) return <h1>Cargando...</h1>;

  console.log(data);

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
        </div>
      </div>
    </>
  );
};
