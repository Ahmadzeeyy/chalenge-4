/* eslint-disable react/prop-types */
import MovieItem from "./MovieItem";

// Import Swiper module
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "react-bootstrap";

function SwiperTest({ data }) {
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
    <Container className="my-5 swiper-container">
      <h2 className="fw-bold mb-4">Popular Movie</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dislayed.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieItem
              title={item.title}
              overview={item.overview}
              imageURL={import.meta.env.VITE_API_IMAGE_URL + item.poster_path}
              id={item.id}
            ></MovieItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
export default SwiperTest;
