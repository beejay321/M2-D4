import React from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";

class CommentsArea extends React.Component {
  state = {
    items: [],
    isLoading: false,
    isError: false,
  };

  componentDidMount = async () => {
    this.setState({
      isLoading: true,
    });
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMjEyYmIxZjBmYjAwMTVkOTE3OTkiLCJpYXQiOjE2MTkwMDk4MzUsImV4cCI6MTYyMDIxOTQzNX0.sjaCwExKLRwOY8S2I_evvMJ0RFmAb_2kU2aqNqyAakc",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({ items: data, isError: false, isLoading: false });
      } else {
        console.log("houston we got an error");
        this.setState({ isError: true, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isError: true, isLoading: false });
    }
  };

  render() {
    return (
      <Container>
        {this.state.items.map((item) => (
          <Card style={{ width: "10rem" }}>
            <ListGroup key={item.elementId}>
              <ListGroup.Item>{item.comment}</ListGroup.Item>
              <ListGroup.Item>{item.rate}</ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
      </Container>
    );
  }
}
export default CommentsArea;
