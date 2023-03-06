import { useEffect, useState } from "react";

export const PeliculasApi = (pag, pelicula) => {
  pelicula = pelicula.replace(" ", "%20");

  var url;

  if (pelicula === "") {
    url = `https://api.themoviedb.org/3/discover/movie?page=${pag}&api_key=b9ec2cca0d74725e96124ea337e06c73`;
  } else {
    url = `https://api.themoviedb.org/3/search/movie?&api_key=b9ec2cca0d74725e96124ea337e06c73&query=${pelicula}&page=${pag}`;
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
