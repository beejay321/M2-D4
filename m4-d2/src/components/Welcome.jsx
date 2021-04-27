import {Jumbotron, Button } from "react-bootstrap";

const Welcome = function() {
    return (
        <Jumbotron>
  <h1>World of Books</h1>
  <p>
  <em >An online bookstore that financially supports local independent bookstores and gives back to the book community.</em>
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
    );
  }
  export default Welcome;