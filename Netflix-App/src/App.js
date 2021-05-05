import "./App.css";
// import MyCarousel from "./components/carousel/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchQuery from "./components/Search/SearchQuery";
import MyNav from "./components/Navbar/MyNav.jsx";
import { BrowseRouter as Router, Route } from "react-router-dom";
import ShowDetail from "./components/ShowDetail";

// import MyFooter from "./components/Footer/MyFooter";

const App = () => {
  return (
    <div className="App">
      <MyNav />
      <SearchQuery genre="action" />
      <Route component={ShowDetail} path="/details/:movieId" />
      {/* <MyFooter /> */}
    </div>
  );
};

export default App;
