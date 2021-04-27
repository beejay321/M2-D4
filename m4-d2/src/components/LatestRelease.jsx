import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Figure,
  Image,
} from "react-bootstrap";
import items from "../data/history.json";

const LatestRelease = function () {
  return (
    <Container>
      <Row>
        {items.map((item) => (
          <Col xs={12} md={4} lg={3}>
            <Figure key={item.asin}>
              <Figure.Image
                width={180}
                alt={item.title}
                src={item.img}
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
