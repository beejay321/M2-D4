import { Button, Navbar,  Nav } from "react-bootstrap";

const MyFooter = function () {
  return (
    <Navbar fixed="bottom" bg="light" expand="lg">
      <footer class="text-muted">
        <div class="container">
          <p class="float-right">
            <a href="#">Back to top</a>
          </p>
          
        </div>
      </footer>
    </Navbar>
  );
};
export default MyFooter;
