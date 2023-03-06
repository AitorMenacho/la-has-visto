import { useEffect, useState } from "react";

export const StreamingApi = () => {

    const [data, setData] = useState([]);

    var url = `https://api.themoviedb.org/3/watch/providers/movie?api_key=b9ec2cca0d74725e96124ea337e06c73&watch_region=ES`

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data.results);
            });
    }, [url]);
    
    return{
        data
    }

}
