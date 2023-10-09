/* eslint-disable react/prop-types */
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import { Image, Button } from "react-bootstrap";
import axios from "axios";
import ModalYoutube from "./Modal";
// import Modal from "react-bootstrap/Modal";

// eslint-disable-next-line react/prop-types
function Slider({ data }) {
  const [show, setShow] = useState(false);
  const [slideItem, setSlideItem] = useState([]);
  //modal
  const [keyTrailer, setKeyTrailer] = useState("");
  //get id movie
  const [trailerMovie, setTrailerMovie] = useState([]);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });
  const getTrailerMovie = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/3/movie/${id}/videos`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
          },
        }
      );
      const { data } = response;
      setTrailerMovie(data?.results);
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
    setShow(true);
  };
  const getKey = () => {
    const getTheKey = trailerMovie.filter((item) =>
      item.type.includes("Trailer")
    );
    const slices = getTheKey.slice(0, 1);
    const arraytkey = slices.map((item) => item.key);
    const keyresult = arraytkey[0];
    setKeyTrailer(keyresult);
  };
  useEffect(() => {
    setSlideItem(data.slice(11, 14));
    if (trailerMovie) {
      getKey();
    }
  }, [data, trailerMovie, keyTrailer]);

  return (
    <div>
      <Carousel className="mb-5" controls={false}>
        {slideItem.map((item) => (
          <Carousel.Item
            key={item.id}
            interval={1500}
            className="postion-relative"
          >
            <div className="position-absolute w-50 ms-5 h-100 d-flex flex-column justify-content-center text-white">
              <h1 className="fw-bold fs-1">{item.title}</h1>
              <p className="w-75">{item.overview}</p>
              <p>{item.vote_average} / 10</p>
              <Button
                variant="danger"
                className=" ps-4 pe-2  py-3 rounded-pill position-relative position-relative"
                style={{ maxWidth: "10rem" }}
                onClick={() => getTrailerMovie(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="icons-watch position-absolute"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
                Watch Trailer
              </Button>
            </div>
            <Image
              src={import.meta.env.VITE_API_IMAGE_URL + item.backdrop_path}
              text="First slide"
              className="object-fit-cover w-100"
              style={{
                height: "98vh",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <ModalYoutube show={show} setShow={setShow} keyTube={keyTrailer}></ModalYoutube>
    </div>
  );
}

export default Slider;
