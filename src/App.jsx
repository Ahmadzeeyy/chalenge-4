import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarMovie from "./componens/NavbarMovie";
import DetailMovie from "./pages/DetailMovie";
import SearchMovie from "./pages/SearchMovie";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
function App() {
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
  return (
    <BrowserRouter>
      <NavbarMovie />
      <Routes>
        <Route path="/" element={<Home popularMovie={popularMovie} />}></Route>
        <Route
          path="/details/:movieId"
          element={<DetailMovie data={popularMovie} />}
        ></Route>
        <Route
          path="/search"
          element={<SearchMovie data={popularMovie} />}
        ></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
