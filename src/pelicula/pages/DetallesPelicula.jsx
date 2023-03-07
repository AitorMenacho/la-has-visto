import { PeliculaApi } from "../../api/PeliculaApi";

export const DetallesPelicula = () => {
  const id = window.location.href.split("/")[4];

  const { data } = PeliculaApi(id);


  return (
    <>
      {data.map((pelicula) => (
        <h1>{ pelicula.title }</h1>
      ))}
    </>
  )
};
