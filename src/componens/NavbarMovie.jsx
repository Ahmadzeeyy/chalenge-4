import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavbarMovie() {
  return (
    <div className="position-relative d-flex justify-content-center">
      <Navbar
        key="sm"
        expand="sm"
        className="bg-body-transparent mb-3 position-absolute z-1 d-flex w-100"
      >
        <Container fluid>
          <Navbar.Brand href="#" className="fs-1 fw-bolder text-danger ms-3">
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
            <Offcanvas.Body className="d-flex justify-content-around ms-5">
              <Form className="d-flex w-50 ms-5">
                <Form.Control
                  type="search"
                  placeholder="What do you want to watch ?"
                  className="ms-5 px-4 rounded-pill bg-transparent"
                  aria-label="Search"
                  style={{ "::placeholder": { color: "white" } }}
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
