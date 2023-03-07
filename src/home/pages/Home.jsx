import { useState } from "react";
import { PeliculasApi } from "../../api/PeliculasApi";
import { Peliculas } from "../components/Peliculas";
import { Streaming } from "../components/Streaming";
import "../styles/home.css";

export const Home = () => {
  const [pagina, setPagina] = useState(1);
  const [letra, setLetra] = useState("");
  const [streaming, setStreaming] = useState([]);

  const handleSelectionChange = (newSelected) => {
    setStreaming(newSelected);
  };

  const { cantidad, data } = PeliculasApi(pagina, letra, streaming);

  const siguientePagina = () => {
    if (pagina === cantidad) {
      return;
    }

    setPagina(pagina + 1);
  };

  const anteriorPagina = () => {
    if (pagina === 1) {
      return;
    }

    setPagina(pagina - 1);
  };

  const buscaPelicula = (e) => {
    if (e.target.value === "") {
      setLetra("");
      setPagina(1);
    } else {
      setLetra(e.target.value);
    }
  };

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
              onKeyUp={buscaPelicula}
            />
          </div>
        </div>
        <div className="streaming">
          <Streaming onSelectionChange={handleSelectionChange} />
        </div>
        <h2 className="subtitulo">Peliculas</h2>
        <div className="contenedor_subtitulo">
          <button className="boton_info" onClick={anteriorPagina}>
            Anterior
          </button>
          <button className="boton_info" onClick={siguientePagina}>
            Siguiente
          </button>
        </div>
        <div className="contenedor_peliculas">
          <Peliculas data={data} />
        </div>
        <div className="contenedor_subtitulo">
          <button className="boton_info" onClick={anteriorPagina}>
            Anterior
          </button>
          <button className="boton_info" onClick={siguientePagina}>
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};
