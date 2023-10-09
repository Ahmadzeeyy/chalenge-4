/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import MovieItem from "../componens/MovieItem";

function searchMovie({ data }) {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParaams] = useSearchParams();
  const query = searchParaams.get("query");

  useEffect(() => {
    function handlesearch() {
      let searchItem = query.toLowerCase();
      setSearchResult(
        data.filter((item) => item.title.toLowerCase().includes(searchItem))
      );
    }
    handlesearch();
  }, [data, query]);

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
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default searchMovie;
