import { Container, Row, Col, Figure } from "react-bootstrap";
import books from "../data/history.json";
import React from "react";
import AddComments from "./AddComments";
import RetrieveComments from "./RetrieveComments";

class LatestRelease extends React.Component {
  state = {
    selectedBook: books[0],
  };
  render() {
    return (
      <Container>
        <h3>Latest Releases</h3>
        <br />
        <Row>
          <Col xs={8} md={10}>
            <Row>
              {books.map((book) => (
                <Col xs={12} md={4} lg={2}>
                  <Figure
                    key={book.asin}
                    onClick={() => this.setState({ selectedBook: book })}
                  >
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
          </Col>
          <Col xs={4} md={2}>
            <RetrieveComments
              item={this.state.selectedBook}
              asin={this.state.selectedBook.asin}
            />
            <AddComments asin={this.state.selectedBook.asin} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default LatestRelease;
