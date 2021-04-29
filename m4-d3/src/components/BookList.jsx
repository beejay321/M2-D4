import { Card, Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  return (
    <Container>
      <Row>
        {props.books.map((book) => (
          <Col xs={12} md={6} lg={4}>
            <SingleBook singlebook={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
