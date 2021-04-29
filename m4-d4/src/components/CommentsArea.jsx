import { ListGroup } from "react-bootstrap";

const CommentsArea = (props) => (
  // props.item is the whole object
  <div>
    <h2>Comments for {props.item.title}</h2>
    <ListGroup>
      {props.item.map((item) => (
        <ListGroup key={props.item.asin}>
          <ListGroup.Item>
            <img src={props.item.img} />
          </ListGroup.Item>
          <ListGroup.Item>{props.item.rate}</ListGroup.Item>
        </ListGroup>
      ))}
    </ListGroup>
  </div>
);

export default CommentsArea;
