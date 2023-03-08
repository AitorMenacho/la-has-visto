import { useEffect, useState } from "react";

export const PeliculaApi = (id) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b9ec2cca0d74725e96124ea337e06c73&language=es-ES&region=ES`
      );
      const json = await response.json();
      setData(json);
    };

    fetchData();

  }, [id]);

  return { data };
};
