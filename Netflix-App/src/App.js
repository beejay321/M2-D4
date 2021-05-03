import "./App.css";
// import MyCarousel from "./components/carousel/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchQuery from "./components/Search/SearchQuery";
import MyNav from "./components/Navbar/MyNav.jsx";

// import MyFooter from "./components/Footer/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNav />
      <SearchQuery />
      {/* <MyFooter /> */}
    </div>
  );
}

export default App;
