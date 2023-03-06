import { useEffect, useState } from "react";

export const PeliculasApi = () => {
  var url = `https://api.themoviedb.org/3/discover/movie?api_key=b9ec2cca0d74725e96124ea337e06c73`;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [url]);

  return {
    data
  }
};
