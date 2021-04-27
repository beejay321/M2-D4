import { Container, Row, Col, Figure } from "react-bootstrap";
import books from "../data/history.json";

const LatestRelease = function () {
  return (
    <Container>
      <h3>Latest Releases</h3>
      <br />
      <Row>
        {books.map((book) => (
          <Col xs={12} md={4} lg={2}>
            <Figure key={book.asin}>
              <Figure.Image
                width={150}
                alt={book.title}
                src={book.img}
                rounded
              />
            </Figure>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default LatestRelease;
