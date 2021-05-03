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

class LoadMovies extends React.Component {
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
      <Container >
        {this.state.isLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <h3>{this.props.genre.toUpperCase()} </h3>

        <Row id="movieRow" className="flex-row flex-nowrap scroll-container">
          {this.state.movies.map((movie) => (
            <Col>
              <Card className="h-100 text-center ">
                <Card.Img variant="cover" src={movie.Poster} rounded />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default LoadMovies;
