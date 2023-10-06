import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper styles
import { Button, Card } from "react-bootstrap";

const SwiperTest = () => {
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
    <section className="mt-5">
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
        <SwiperSlide>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default SwiperTest;
