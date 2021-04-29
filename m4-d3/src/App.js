import "bootstrap/dist/css/bootstrap.min.css";
import MyBadge from "./components/MyBadge";
import WarningSign from "./components/WarningSign";
import Books from "./data/fantasy.json";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign text=" BE CAREFUL!!!" />
        <MyBadge text="Fantasy Books" variant="success" />
        <SingleBook singlebook={Books[0]} />
        <BookList books = {Books} />
      </header>
    </div>
  );
}

export default App;
