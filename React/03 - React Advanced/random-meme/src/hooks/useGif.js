import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    setLoading(true);

    const { data } = await axios.get(tag  ? `${url}&tag=${tag}` : url);  
    const imageSource = data?.data?.images?.downsized_large?.url;
    setGif(imageSource);
    console.log(imageSource);
    // const res = await fetch(tag ? `${url}&tag=${tag}` : url)
    // const output = await res.json();
    // const imageSource = output.data.images.downsized.url;
    // setGif(imageSource)
    setLoading(false);
  }

  useEffect(() => {
    fetchData("car");
  }, []);

  return (gif, loading, fetchData);
};

export default useGif;
