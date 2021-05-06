import { Component } from "react";
import { Container, Col, ListGroup, Form, Button } from "react-bootstrap";

class Registration extends Component {
  state = {
    fields: {
      name: "",
      surname: "",
      email: "",
      password: "",
      year: "",
      streetAddress: "",
      city: "",
      postalCode: "",
      creditCard: "",
    },
    errors: {},
  };

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name

    if (fields.name.length > 2) {
      formIsValid = false;
      errors.name = "not less than 2 characters";
    }
    //Surname

    if (fields.surname.length > 3) {
      formIsValid = false;
      errors.surname = "not less than 3 characters";
    }

    //Email
    if (fields.postalCode.length === 5) {
      formIsValid = false;
      errors.postalCode = "invalid postal code";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  formSubmit(e) {
    e.preventDefault();
    console.log("form to be submitted");

    if (this.handleValidation()) {
      alert("You have registered successfully");
      this.setState({
        fields: {
          name: "",
          surname: "",
          email: "",
          password: "",
          year: "",
          streetAddress: "",
          city: "",
          postalCode: "",
          creditCard: "",
        },
      });
    } else {
      alert("Form has errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  //   componentDidMount = async () => {};

  render() {
    return (
      <>
        <Container className="px-5 pt-5">
          <Form onSubmit={this.formSubmit}>
            <Form.Group hasValidation controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  this.setState({
                    fields: {
                      ...this.state.fields,
                      name: e.target.value,
                    },
                  })
                }
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>
            <Form.Group hasValidation controlId="formBasicSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control required type="text" placeholder="Enter Surname" />
            </Form.Group>

            <Form.Group hasValidation controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Row>
              <Form.Group hasValidation as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" />
                <Form.Text id="passwordHelpBlock" muted>
                  Your password must contain at least 8 characters, a digit, a
                  letter.
                </Form.Text>
              </Form.Group>
              <Form.Group hasValidation as={Col} controlId="formGridYear">
                <Form.Label>Year</Form.Label>
                <Form.Control required type="text" placeholder="2001" />
              </Form.Group>
            </Form.Row>

            <Form.Group hasValidation controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control required type="text" placeholder="1234 Main St" />
            </Form.Group>

            <Form.Row>
              <Form.Group hasValidation as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control required type="text" />
              </Form.Group>

              <Form.Group hasValidation as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control required type="text" />
              </Form.Group>
            </Form.Row>

            <Form.Group hasValidation id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default Registration;
