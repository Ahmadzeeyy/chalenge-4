/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieItem from "../componens/MovieItem";
import { Button, Modal } from "react-bootstrap";
function DetailMovie({ popularMovie }) {
  const [dataDetail, setDataDetail] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    function getDetailData(id) {
      setDataDetail(popularMovie.filter((item) => item.id == id));
    }
    getDetailData(movieId);
  }, []);
  {
    console.log(dataDetail);
  }
  return (
    <>
      <div>{movieId}</div>
      {dataDetail.map((item) => (
        <MovieItem
          key={item.id}
          title={item.title}
          overview={item.overview}
          imageURL={import.meta.env.VITE_API_IMAGE_URL + item.poster_path}
          id={item.id}
        ></MovieItem>
      ))}
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
}

export default DetailMovie;
