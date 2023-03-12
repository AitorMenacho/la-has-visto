import { TrailerApi } from "../../api/TrailerApi";

export const TrailerProductor = ({ id, productor }) => {
  const { data } = TrailerApi(id);

  return (
    <div className="datosInformativos">
      <div className="trailer">
        <h2>Trailer</h2>
        {data.length === 0 ? (
          <p>No hay trailer disponible</p>
        ) : (
          data.results
            .filter(
              (trailer) =>
                trailer.type === "Trailer" &&
                trailer.name.indexOf("VOSE") === -1
            )
            .slice(0, 1)
            .map((trailer) => (
              <iframe
                key={trailer.id}
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title={trailer.name}
                allowFullScreen
              ></iframe>
            ))
        )}
      </div>
      <div className="productoras">
        <h2>Productoras</h2>
        <div className="productora">
          {productor &&
            productor.map((productora) => (
              <div className="productor">
                <img
                  key={productora.id}
                  src={`https://image.tmdb.org/t/p/original${productora.logo_path}`}
                  alt={productora.name}
                  width="70px"
                />
                <p>{productora.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
