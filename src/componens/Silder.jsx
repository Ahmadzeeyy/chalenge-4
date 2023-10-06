/* eslint-disable react/prop-types */
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function Slider({ data }) {
  const [slideItem, setSlideItem] = useState([]);
  useEffect(() => {
    setSlideItem(data.slice(11, 14));
  }, []);
  return (
    <Carousel className="mb-5" controls={false}>
      {slideItem.map((item) => (
        <Carousel.Item key={item.id} interval={1500}>
          <Image
            src={import.meta.env.VITE_API_IMAGE_URL + item.backdrop_path}
            text="First slide"
            className="object-fit-cover w-100"
            style={{
              height: "98vh",
            }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
