import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
  Spinner,
} from "react-bootstrap";
import React from "react";
import "./LoadMovies.css";
import LoadMovies from "./LoadMovies";

class SearchQuery extends React.Component {
  state = {
    value: "",
    query: "",
    movies: [],
    category: "",
    isLoading: false,
    isError: false,
  };

  componentDidMount = async (props) => {
    this.setState({
      isLoading: true,
    });

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=9dd1231b&s=${this.props.genre}`
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data.Search);
        this.setState({
          movies: data.Search,
          isError: false,
          isLoading: false,
        });
      } else {
        console.log("we got an error");
        this.setState({ isError: true, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isError: true, isLoading: false });
    }
  };

  render() {
    return (
      <Container className="mb-5  ">
        <InputGroup className="mb-1">
          <FormControl
            onChange={(e) => this.setState({ query: e.target.value })}
            placeholder="Search"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        {this.state.isLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}

        <Row className="mt-5  " >
          <LoadMovies genre="comedy" />

          {/* {this.state.movies
            .filter((movie) =>
              movie.Title.toLowerCase().includes(this.state.query)
            )
            .map((movie) => (
              <Col>
                <Card className="h-100 text-center ">
                  <Card.Img variant="cover" src={movie.Poster} rounded />
                </Card>
              </Col>
            ))} */}
        </Row>
        <Row className="mt-5  ">
          <LoadMovies genre="romance" />
        </Row>
        <Row className="mt-5  " >
          <LoadMovies genre="drama" />
        </Row>
        <Row className="mt-5  " >
          <LoadMovies genre="action" />
        </Row>
      </Container>
    );
  }
}
export default SearchQuery;
