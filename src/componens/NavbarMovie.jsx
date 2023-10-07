import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
function NavbarMovie() {
  const [inputItem, setInputItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    let inputresult = `/search?query=${inputItem}&language=en-US&page=1`;
    window.location.href = inputresult;
  }
  return (
    <div className="position-relative d-flex justify-content-center">
      <Navbar
        key="sm"
        expand="sm"
        className="bg-body-transparent mb-3 position-absolute z-1 d-flex w-100"
      >
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to={"/"}
            href="#"
            className="fs-1 fw-bolder text-danger ms-3"
          >
            Movielist
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="justify-content-around">
              <Form
                className="w-50 position-relative  ms-5"
                onSubmit={handleSubmit}
              >
                <button className="position-absolute icons-search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>

                <Form.Control
                  type="search"
                  placeholder="What do you want to watch ?"
                  className="placeholder px-4 rounded-pill bg-transparent"
                  aria-label="Search"
                  onChange={(e) => setInputItem(e.target.value)}
                />
              </Form>
              <Form className="d-flex gap-3">
                <Button variant="outline-danger rounded-pill px-4 py-2">
                  Login
                </Button>
                <Button variant="outline-danger bg-danger text-light rounded-pill px-3 py-2">
                  Register
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMovie;
