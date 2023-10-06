/* eslint-disable react/prop-types */
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieItem({ id, overview, title, imageURL }) {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={imageURL}
          style={{

            objectFit: "cover",
          }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-truncate">{overview}</Card.Text>
          <Button as={Link} to={`/details/${id}`} variant="primary">
            Detail
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default MovieItem;
