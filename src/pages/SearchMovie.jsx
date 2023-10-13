/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import MovieItem from "../componens/MovieItem";
import axios from "axios";
function searchMovie() {
  const [searchData, setSearchData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchParaams] = useSearchParams();
  const query = searchParaams.get("query");
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    const getSearchMovie = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/3/search/movie?query=${query}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );
        const { data } = response;
        setSearchData(data?.results);
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
    getSearchMovie();
    function handlesearch() {
      let searchItem = query.toLowerCase();
      setSearchResult(
        searchData.filter((item) =>
          item.title.toLowerCase().includes(searchItem)
        )
      );
    }
    handlesearch();
  }, [query, searchData]);
  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  if (searchData.length === 0) {
    return <h1>Movie Not Found</h1>;
  }

  return (
    <>
      <Container className="my-5 mt-5">
        <h1> result from {'"' + query + '"'}</h1>
        <Row className=" align-items-center h-100">
          {searchResult.map((item) => (
            <Col
              key={item.id}
              className="d-flex justify-content-center mt-4 w-100"
            >
              <MovieItem
                title={item.title}
                overview={item.overview}
                imageURL={
                  import.meta.env.VITE_API_POSTER_URL + item.poster_path
                }
                id={item.id}
              ></MovieItem>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default searchMovie;
