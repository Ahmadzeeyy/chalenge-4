/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import MovieItem from "../componens/MovieItem";

/* eslint-disable react/prop-types */
function SearchMovie({ data }) {
  const [searchResult, setSearchResult] = useState([]);
  const [getMovie, setGetMovie] = useState(data);
  const [searchParaams] = useSearchParams();
  const query = searchParaams.get("query");

  useEffect(() => {
    function handlesearch() {
      let searchItem = query.toLowerCase();
      setSearchResult(
        getMovie.filter((item) => item.title.toLowerCase().includes(searchItem))
      );
    }
    handlesearch();
  }, [query]);

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
