/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import ModalYoutube from "../componens/Modal";
import axios from "axios";

function DetailMovie({ data }) {
  const [show, setShow] = useState(false);
  const [dataDetail, setDataDetail] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    const getDetailData = async (id) => {
      const results = data.filter((item) => item.id == id);
      setDataDetail(...results);
    };
    getDetailData(movieId);
  }, [movieId, data]);
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
  useEffect(() => {
    const getKey = () => {
      const getTheKey = trailerMovie.filter((item) =>
        item.type.includes("Trailer")
      );
      const slices = getTheKey.slice(0, 1);
      const arraytkey = slices.map((item) => item.key);
      const keyresult = arraytkey[0];
      setKeyTrailer(keyresult);
    };
    setSlideItem(data.slice(11, 14));
    if (trailerMovie) {
      getKey();
    }
  }, [data, trailerMovie, keyTrailer]);
  return (
    <>
      <Card className="rounded-0 border-0 text-white ">
        <Card.Img
          src={import.meta.env.VITE_API_IMAGE_URL + dataDetail.backdrop_path}
          alt="Card image"
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center w-50 ms-5">
          <Card.Title className="slidetr-title fw-bold fs-1">
            {dataDetail.title}
          </Card.Title>
          <Card.Text className="slider-desc w-75">
            {dataDetail.overview}
          </Card.Text>
          <Card.Text className="slider-desc">
            {dataDetail.vote_average} / 10
          </Card.Text>
          <Button
            variant="danger"
            className=" ps-4  py-3 rounded-pill position-relative position-relative"
            style={{ maxWidth: "10rem" }}
            onClick={() => getTrailerMovie(movieId)}
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
        </Card.ImgOverlay>
      </Card>
      <ModalYoutube
        show={show}
        setShow={setShow}
        keyTube={keyTrailer}
      ></ModalYoutube>
    </>
  );
}

export default DetailMovie;
