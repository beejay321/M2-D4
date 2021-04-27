import { Container, Row, Col, Card, Button, Figure } from "react-bootstrap";
import items from "../data/fantasy.json";

const LatestRelease = function () {
  return (
    <Container>
      <Row xs={2} md={4} lg={6}>
        <Col xs={6}>
          {items.map((item) => (
            <Figure key={item.asin}>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={item.img}
              />
              <Figure.Caption>{item.title}</Figure.Caption>
            </Figure>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default LatestRelease;
