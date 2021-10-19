import React from "react";
import { Button, Form, Nav } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { allContext } = useAuth();
  const {
    signInWithEmailPassword,
    signInWithGoogle,
    setUser,
    setError,
    getEmail,
    getPassword,
  } = allContext;
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const handleEmailPasswordLogin = (e) => {
    e.preventDefault();
    signInWithEmailPassword()
      .then((userCredentials) => {
        setUser(userCredentials.user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <div className="container mt-5 w-25">
      <Form onSubmit={handleEmailPasswordLogin}>
        <h2 className="text-primary">Please Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={getEmail}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={getPassword}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <Nav.Link as={Link} to="/signup">
        Sign Up
      </Nav.Link>
      <Button
        onClick={(e) => {
          e.preventDefault();
          signInWithGoogle()
            .then((result) => {
              const user = result.user;
              setUser(user);
              history.push(redirect_uri);
            })
            .catch((err) => {
              const errorMessage = err.message;
              setError(errorMessage);
            });
        }}
        variant="warning"
        type="submit"
      >
        Google Sign In
      </Button>
    </div>
  );
};

export default Login;
