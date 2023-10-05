import { Image } from "react-bootstrap";

const ExampleCarouselImage = () => {
  return (
    <Image
      src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
      alt=""
      className="object-fit-cover w-100 img-top"
      fluid
      style={{
        height: "98vh",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
      }}
    />
  );
};

export default ExampleCarouselImage;
