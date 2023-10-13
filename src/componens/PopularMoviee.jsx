/* eslint-disable react/prop-types */
import MovieItem from "./MovieItem";
import "swiper/css";
import "swiper/css/pagination";
import { Col, Container, Row } from "react-bootstrap";

function PopularMoviee({ data }) {
  // eslint-disable-next-line no-unused-vars
  const dislayed = data.slice(0, 20);
  // eslint-disable-next-line no-unused-vars
  const breakpoints = {
    // Ukuran layar kurang dari 576px
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // Ukuran layar kurang dari 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // Ukuran layar lebih besar dari 768px
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <Container className="my-5 ">
      <h2>Popular Movie</h2>
      <Row className=" align-items-center h-100">
        {dislayed.map((item) => (
          <Col
            key={item.id}
            className="d-flex justify-content-center mt-4 w-100"
          >
            <MovieItem
              title={item.title}
              overview={item.overview}
              imageURL={import.meta.env.VITE_API_POSTER_URL + item.poster_path}
              id={item.id}
            ></MovieItem>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default PopularMoviee;
