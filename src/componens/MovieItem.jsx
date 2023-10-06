/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieItem({ id, imageURL }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Link to={`/details/${id}`} className="dispaly-flex ">
          <Card.Img
            variant="top"
            src={imageURL}
            style={{
              objectFit: "cover",
            }}
          />
        </Link>
      </Card>
    </>
  );
}

export default MovieItem;
