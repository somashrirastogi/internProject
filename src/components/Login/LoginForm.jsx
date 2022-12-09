import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink, Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate } from 'react-router-dom';
const LoginForm = ({
  isAuthenticated,
  loginUser,
  loading
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const NavigateTo = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({ userName: username, password: password });
  };

  useEffect(() => {
    if (isAuthenticated) {
      NavigateTo("/Gif");
    }
  }, [isAuthenticated]);

  return (
    <div className="col-md-6 col-sm-12 m-5 mt-1">
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3">
          <Label className="mt-5">
            <h3>Login</h3>
          </Label>
        </FormGroup>
        <div className="text-left">
          <FormGroup className="mb-3">
            <Label for="loginUser">User name</Label>
            <Input
              tabIndex={1}
              type="text"
              id="loginUser"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="text-left">
            <Label for="loginPassword">Password</Label>
            <Input
              tabIndex={2}
              type="password"
              id="loginPassword"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>

          
          <FormGroup className="text-center col-12 d-flex flex flex-column align-items-center">
            <Button
              tabIndex={3}
              color="primary"
              className="col-md-6 col-sm-12 mt-3"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Authenticating..." : "Login"}
            </Button>
            <NavLink>
              <Link to="/Register" className="font-weight-bold">Sign Up</Link>
            </NavLink>
          </FormGroup>
        </div>
      </Form>
    </div>
  );
};

// Login.propTypes = {
//   loginUser: PorpTypes.func.isRequired,
//   removeMessage: PorpTypes.func.isRequired
// };

export default LoginForm;
