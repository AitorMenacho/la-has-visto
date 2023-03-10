export const Peliculas = ({ data }) => {

  const mostrarMas = ( id ) => {
    window.location.href = `pelicula/${id}`;
  };

  if( data.length === 0 ) return (<h1>No existe ninguna película con ese titulo.</h1>)

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
          {pelicula.poster_path != null ? (
            <img
              className="verMas"
              onClick={() => mostrarMas(pelicula.id)}
              src={
                pelicula.poster_path === null
                  ? ""
                  : `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`
              }
              alt={pelicula.title}
            />
          ) : (
            <div onClick={mostrarMas} className="sinPortada verMas">
              <p>{pelicula.title}</p>
              <box-icon name="camera-off" color="#ffdb58"></box-icon>
            </div>
          )}
        </div>
      ))}
    </>
  );
};
