import { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
  Spinner,
  ListGroup,
} from "react-bootstrap";

class TVShows extends Component {
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
        `http://www.omdbapi.com/?apikey=9dd1231b&s=${this.props.type}`
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
    console.log(this.state.movies);
    console.log(this.props.passingProps);

    return (
      <Container>
        {this.state.isLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <h3 className="py-5">{this.props.type.toUpperCase()} </h3>

        <Row id="movieRow" className="flex-row flex-nowrap scroll-container">
          {this.state.movies.map((movie) => (
            <Col>
              <Card
                key={movie.imdbID}
                className="h-100 text-center "
                onClick={() =>
                  this.props.history.push("/details/" + movie.imdbID)
                }
              >
                <Card.Img variant="cover" src={movie.Poster} rounded />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default TVShows;
