import {
  Container,
  InputGroup,
  FormControl,
  Spinner,
} from "react-bootstrap";
import React from "react";
// import "./LoadMovies.css";
// import LoadMovies from "./LoadMovies";
import MovieList from "./MovieList";

class SearchQuery extends React.Component {
  state = {
    value: "",
    query: "",
    movies: [],
    isLoading: false,
    isError: false,
  };

  componentDidMount = async () => {
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
    console.log(this.props);
    return (
      <Container className="mb-5  ">
        <InputGroup className="my-4">
          <FormControl
            onChange={(e) => this.setState({ query: e.target.value })}
            placeholder="Search"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <h1> {this.props.title} </h1>

        {this.state.isLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}

        {/* <Row id="movieRow" className="flex-row flex-nowrap scroll-container">
          {this.state.movies
            .filter((movie) =>
              movie.Title.toLowerCase().includes(this.state.query)
            )
            .map((movie) => (
              <Col>
                <Card className="h-100 text-center ">
                  <Card.Img variant="cover" src={movie.Poster} rounded />
                </Card>
              </Col>
            ))}
        </Row> */}

        <MovieList passingProps={this.props} />
      </Container>
    );
  }
}
export default SearchQuery;
