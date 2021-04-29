import { Container, Row, Col, Figure, Card, ListGroup } from "react-bootstrap";
import books from "../data/history.json";
import items from "./LatestRelease";
import React from "react";
import CommentsArea from "./CommentsArea";

class LatestRelease extends React.Component {
  state = {
    selectedBook: items[0],
  };
  render() {
    return (
      <Container>
        <h3>Latest Releases</h3>
        <br />
        <Row>
          {books.map((book) => (
            <Col xs={12} md={4} lg={2}>
              <Figure
                key={book.asin}
                //   onClick={() => this.setState({ selectedBook: item })}
              >
                <Figure.Image
                  width={150}
                  alt={book.title}
                  src={book.img}
                  rounded
                />
              </Figure>
              <CommentsArea />
              <Card style={{ width: "10rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default LatestRelease;
