import { useState } from "react";
import { StreamingApi } from "../../api/StreamingApi";

export const Streaming = ({ onSelectionChange }) => {
  const { data } = StreamingApi();
  const [seleccionado, setSeleccionado] = useState([]);

  const handleClick = (id) => {
   
    const newSelected = seleccionado.includes(id)

    if (seleccionado.includes(id)) {
      setSeleccionado(seleccionado.filter((item) => item !== id));
    } else {
      setSeleccionado([...seleccionado, id]);
    }

    console.log(newSelected)

    onSelectionChange(newSelected);
  };

  return (
    <>
      <h2>Filtra por plataforma</h2>
      <div className="streaming">
        {data.map((streaming) => (
          <div className="streaming__logo" key={streaming.provider_id}>
            <img
              onClick={() => handleClick(streaming.provider_id)}
              className={
                seleccionado.includes(streaming.provider_id)
                  ? "seleccionado"
                  : ""
              }
              src={`https://image.tmdb.org/t/p/original${streaming.logo_path}`}
              alt={streaming.provider_name}
            />
          </div>
        ))}
      </div>
    </>
  );
};
