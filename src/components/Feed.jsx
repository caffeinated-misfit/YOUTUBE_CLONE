import { useState, useEffect } from "react";
import fetchFromApi from "../utils/fetch-from-api";

const Feed = () => {
  const [category, setCategory] = useState("new");
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `search?part=snippet&q=${category}`;

    const fetchFeedData = async () => {
      try {
        const response = await fetchFromApi(url);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFeedData();
  }, [category]);

  return (
    <>{data.items && data.items.map((item) => <h1>{item.id.videoId}</h1>)}</>
  );
};

export default Feed;