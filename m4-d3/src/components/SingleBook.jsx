import { Card, Container, Row, Col } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.singlebook.img} />
        <Card.Body>
          <Card.Title>{props.singlebook.title}</Card.Title>
        </Card.Body>
      </Card>
    
  );
};

export default SingleBook;
