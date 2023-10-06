import { useEffect, useState } from "react";
import SwiperTest from "../componens/Swipertest";
import axios from "axios";

function Home() {
  const [popularMovie, setPopularMovie] = useState([]);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });
  useEffect(() => {
    const getPopularMovie = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/3/movie/popular?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );
        const { data } = response;
        setPopularMovie(data?.results);
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
    getPopularMovie();
  }, []);
  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  if (popularMovie.length === 0) {
    return <h1></h1>;
  }

  return <SwiperTest />;
}

export default Home;
