import React from "react";
import "./LoadMovies.css";
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

const MovieList = () => {
  return (
    <div>
      <Row className="mt-5  ">
        <LoadMovies genre="romance" />
      </Row>
      <Row className="mt-5  ">
        <LoadMovies genre="drama" />
      </Row>
      <Row className="mt-5  ">
        <LoadMovies genre="action" />
      </Row>
    </div>
  );
};

export default MovieList;
