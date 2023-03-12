import { CreditosApi } from "../../api/CreditosApi";

export const Actores = ({ id }) => {
  const { data } = CreditosApi(id);

  console.log(data);

  return (
    <div className="actores">
      <h2>Reparto</h2>
      <a href="#">Ver todo</a>
      <div className="actores-lista">
        {data.cast &&
          data.cast.slice(0, 10).map((actor) => (
            <div className="actor" key={actor.id}>
              {actor.profile_path === null ? (
                <img
                  src="https://via.placeholder.com/500x750"
                  alt={actor.name}
                />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
              <strong>{actor.character}</strong>
              <p> {actor.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
