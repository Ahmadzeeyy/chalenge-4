/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import MovieItem from "../componens/MovieItem";

/* eslint-disable react/prop-types */
function SearchMovie() {
  const [searchResult, setSearchResult] = useState([]);
  const [getMovie, setGetMovie] = useState([]);
  const [searchParaams] = useSearchParams();
  const query = searchParaams.get("query");
  const page = searchParaams.get("page");
  const language = searchParaams.get("language");
  useEffect(() => {
    const getMovies = async (page) => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}3/discover/movie`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );
        // if (page < 6) {
        //   getMovies(page + 1);
        // }
        const { data } = response;
        setGetMovie(data?.results);
      } catch (error) {
        console.error(error)
      }
    };
    function handlesearch() {
      let searchItem = query.toLowerCase();
      setSearchResult(
        getMovie.filter((item) => item.title.toLowerCase().includes(searchItem))
      );
    }
    getMovies(1);

    handlesearch();
    console.log(getMovie);
  }, [getMovie, query]);

  console.log(getMovie);
  return (
    <>
      <Container className="container-search">
        <h1> result from {'"' + query + '"'}</h1>
        <Row>
          {searchResult.map((item) => (
            <Col key={item.id}>
              <MovieItem
                id={item.id}
                imageURL={import.meta.env.VITE_API_IMAGE_URL + item.poster_path}
              />
              {/* {console.log(item.id)} */}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default SearchMovie;
