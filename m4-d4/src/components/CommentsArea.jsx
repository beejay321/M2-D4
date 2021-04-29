import { ListGroup, FormControl, Button } from "react-bootstrap";
import items from "./LatestRelease";

const CommentsArea = (props) => (
  // props.item is the whole object
  <div>
    <h6>Comments </h6>
    <ListGroup>
      {
        <ListGroup key={props.item.asin}>
          <ListGroup.Item>
            <img width={120} src={props.item.img} />
          </ListGroup.Item>
          <FormControl
            placeholder="Add Comment"
            aria-describedby="basic-addon1"
          />
          <Button variant="primary">Comment</Button>{" "}
        </ListGroup>
      }
    </ListGroup>
  </div>
);

export default CommentsArea;
