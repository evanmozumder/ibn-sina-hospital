import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

const SignUp = () => {
  const history = useHistory();
  const { allContext } = useAuth();
  const {
    getEmail,
    getPassword,
    registerNewUser,
    getName,
    setError,
    setUserName,
    error,
  } = allContext;
  const signUpWithEmail = (e) => {
    e.preventDefault();
    registerNewUser()
      .then((result) => {
        setUserName();
        history.push("/login");
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="text-center my-4">
      <h2 className="text-success">Please Sign Up</h2>

      <p className="text-danger text-center">{error}</p>
      <div className="w-25 mx-auto">
        <Form onSubmit={signUpWithEmail}>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="name" visuallyHidden>
                Your Name
              </Form.Label>
              <InputGroup className="mb-2">
                <FormControl
                  onBlur={getName}
                  type="text"
                  autoComplete="current-text"
                  id="name"
                  placeholder="Enter your name"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Email Address
              </Form.Label>
              <InputGroup className="mb-2">
                <FormControl
                  onBlur={getEmail}
                  type="email"
                  autoComplete="current-email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col className="text-start">
              <Form.Label htmlFor="password" visuallyHidden>
                Your Password
              </Form.Label>
              <InputGroup className="mb-2">
                <FormControl
                  onBlur={getPassword}
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter your password"
                />
              </InputGroup>
            </Col>
          </Row>

          <Button type="submit" className="w-100 mt-3">
            Sign UP
          </Button>
        </Form>
      </div>
      <p className="mt-2">
        <NavLink className="text-decoration-none" to="/login">
          Already have an account? Please login!
        </NavLink>
      </p>
    </div>
  );
};

export default SignUp;
