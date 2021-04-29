import { Badge, Container } from "react-bootstrap";

const MyBadge = (props) => {
  return (
    <Container>
      <Badge variant={props.variant}>{props.text}</Badge>
    </Container>
  );
};
export default MyBadge;
