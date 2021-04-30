import { ListGroup, FormControl, Button, Card, Form } from "react-bootstrap";
import React from "react";
import books from "../data/history.json";

class AddComments extends React.Component {
  state = {
    commentsAdded: {
      comment: "",
      rate: "",
    },
  };

  commentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify({
            ...this.state.commentsAdded,
            elementId: this.props.asin,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMjEyYmIxZjBmYjAwMTVkOTE3OTkiLCJpYXQiOjE2MTkwMDk4MzUsImV4cCI6MTYyMDIxOTQzNX0.sjaCwExKLRwOY8S2I_evvMJ0RFmAb_2kU2aqNqyAakc",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        alert("comment added successfully");
        this.setState({
          commentsAdded: {
            comment: "",
            rate: "",
          },
        });
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
      this.setState({ isError: true, isLoading: false });
    }
  };

  render() {
    return (
      // props.item is the whole object
      <Form onSubmit={this.commentSubmit}>
        <Form.Group>
          <Form.Label>Add a comment</Form.Label>
          <Form.Control
            id="comment"
            value={this.state.commentsAdded.comment}
            onChange={(e) =>
              this.setState({
                commentsAdded: {
                  ...this.state.commentsAdded,
                  comment: e.target.value,
                },
              })
            }
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Rate the book</Form.Label>
          <FormControl
            id="rate"
            as="select"
            value={this.state.commentsAdded.rate}
            placeholder="rating"
            onChange={(e) =>
              this.setState({
                commentsAdded: {
                  ...this.state.commentsAdded,
                  rate: e.target.value,
                },
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </FormControl>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComments;
