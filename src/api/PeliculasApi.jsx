import { useEffect, useState } from "react";

export const PeliculasApi = (pag, pelicula, streaming) => {
  var titulo = pelicula.replace(" ", "%20");

  var url;

  var plataforma = streaming.join("|");

  if (titulo.length === 0) {
    url = `https://api.themoviedb.org/3/discover/movie?page=${pag}&api_key=b9ec2cca0d74725e96124ea337e06c73&with_watch_providers=${plataforma}&watch_region=ES&language=es-ES&region=ES`;
  } else {
    url = `https://api.themoviedb.org/3/search/movie?page=${pag}&api_key=b9ec2cca0d74725e96124ea337e06c73&query=${titulo}&with_watch_providers=${plataforma}&language=es-ES&region=ES`;
  }
  const [data, setData] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setCantidad(data.total_pages);
      });
  }, [url]);

  return {
    data,
    cantidad,
  };
};
