/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Slider from "../componens/Silder";
import SwiperTest from "../componens/Swipertest";
import axios from "axios";

function Home({ popularMovie }) {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });
  useEffect(() => {
    const getNowPlayingMovie = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/3/movie/now_playing?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );
        const { data } = response;
        setNowPlayingMovie(data?.results);
        setErrors({ ...errors, isError: false });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setErrors({
            ...errors,
            isError: true,
            message: error?.response?.data?.statuse_message || error?.message,
          });
          return;
        }
        alert(error?.message);
        setErrors({
          ...error,
          isError: true,
          message: error?.message,
        });
      }
    };
    getNowPlayingMovie();
  }, []);

  return (
    <>
      <Slider data={nowPlayingMovie} />
      <SwiperTest data={popularMovie} />
    </>
  );
}

export default Home;
