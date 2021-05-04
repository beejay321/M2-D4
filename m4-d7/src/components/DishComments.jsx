import React from "react";
import { ListGroup } from "react-bootstrap";

class DishComments extends React.Component {
  render() {
    return (
      // props.dish is the whole object
      <div className={`mt-${this.props.marginTop}`}>
        <h2>Comments for {this.props.dish.name}</h2>
        <ListGroup>
          {this.props.dish.comments.map((c) => (
            <ListGroup.Item key={c.id}>
              "{c.comment}" from {c.author}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default DishComments;
