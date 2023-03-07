import { useEffect, useState } from "react";

export const PeliculaApi = (id) => {
  const [data, setData] = useState([]);
  var url = `https://api.themoviedb.org/3/movie/${id}?api_key=b9ec2cca0d74725e96124ea337e06c73`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return { data };
};
