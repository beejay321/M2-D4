import React from "react";
// import "./LoadMovies.css";
import LoadMovies from "./LoadMovies";
import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
  Spinner,
} from "react-bootstrap";

const MovieList = (props) => {
  console.log(props.passingProps);

  return (
    <div>
      <Row className="mt-5  ">
        <LoadMovies passingProps={props.passingProps} genre="romance" />
      </Row>
      <Row className="mt-5  ">
        <LoadMovies passingProps={props.passingProps} genre="drama" />
      </Row>
      <Row className="mt-5  ">
        <LoadMovies passingProps={props.passingProps} genre="action" />
      </Row>
    </div>
  );
};

export default MovieList;
