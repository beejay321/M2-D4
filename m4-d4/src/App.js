import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div>
      <MyNavBar />
      <Welcome />
      <LatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
