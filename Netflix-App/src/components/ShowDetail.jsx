import { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";

class ShowDetail extends Component {
  state = {
    MovieToShow: null,
  };

  componentDidMount = async (props) => {
    let id = this.props.match.params.movieId;

    this.setState({
      isLoading: true,
    });

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=9dd1231b&i=` + id
      );
      //   console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log("why arent you console logging");
        console.log(data);
        this.setState({
          MovieToShow: data,
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
    console.log("Not AGAIN");
    console.log(this.props.title);

    console.log(this.state.MovieToShow);
    return (
      <>
        <h1 className="py-4"> {this.props.title} </h1>
        {this.state.MovieToShow && (
          <Container>
            <ListGroup>
              <ListGroup.Item>
                <h5> {this.state.MovieToShow.Title}</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <img src={this.state.MovieToShow.Poster} alt="a movie" />
              </ListGroup.Item>
              <ListGroup.Item>
                <p>{this.state.MovieToShow.Plot}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>{this.state.MovieToShow.Actors}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>{this.state.MovieToShow.Genre}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>{this.state.MovieToShow.Released}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>{this.state.MovieToShow.Language}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>{this.state.MovieToShow.imdbRating}</p>
              </ListGroup.Item>
            </ListGroup>
          </Container>
        )}
      </>
    );
  }
}

export default ShowDetail;
