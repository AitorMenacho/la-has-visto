import { useState } from "react";

export const PeliculaApi = (pelicula) => {
  pelicula = pelicula.replace(" ", "%20");

  var url = `https://api.themoviedb.org/3/search/movie?api_key=b9ec2cca0d74725e96124ea337e06c73&query=${pelicula}`;

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.results);
  };

  getData();

  return { data };
};
