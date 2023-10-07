import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={3}>
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus blandit tortor, nec fermentum arcu faucibus et.
            </p>
          </Col>
          <Col md={3}>
            <h4>Quick Links</h4>
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="me-3 text-white">
                <FaFacebook size={30} />
              </a>
              <a href="#" className="me-3 text-white">
                <FaTwitter size={30} />
              </a>
              <a href="#" className="text-white">
                <FaInstagram size={30} />
              </a>
            </div>
          </Col>
          <Col md={3}>
            <h4>Contact Us</h4>
            <address>
              <p>123 Street Name</p>
              <p>City, Country</p>
              <p>Email: info@example.com</p>
              <p>Phone: +123 456 789</p>
            </address>
          </Col>
        </Row>
      </Container>
      <div className="bg-secondary text-center py-3">
        <Container>
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
