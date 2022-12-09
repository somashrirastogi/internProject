import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const RegisterForm = ({
  registerUser,
  loading,
  
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
      userName: userName,
      password: password
    });
  };

  return (
    <div className="col-md-6 col-sm-12 m-5 " >
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mt-2">
          <Label>
            <h3>Register here!</h3>
          </Label>
        </FormGroup>
        <div className="text-left">
          <FormGroup>
            <Label for="registerFirstName">First name</Label>
            <Input
              tabIndex={1}
              type="text"
              name="firstName"
              id="registerFirstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="registerLastName">Last Name</Label>
            <Input
              tabIndex={2}
              type="text"
              name="lastName"
              id="registerLastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="registerEmail">Email</Label>
            <Input
              tabIndex={4}
              type="email"
              name="email"
              id="registerEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="registerUserNmae">Username</Label>
            <Input
              tabIndex={4}
              type="text"
              name="userName"
              id="registerUserName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="registerPassword">Password</Label>
            <Input
              tabIndex={5}
              type="password"
              name="password"
              id="registerPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
        
          <FormGroup className="text-center col-12 d-flex flex flex-column align-items-center">
            <Button
              tabIndex={6}
              color="primary"
              className="col-md-6 col-sm-12 mt-3"
              onClick={handleSubmit}
              disabled={loading}
            >
              <i class="bi bi-binoculars"></i>
              {loading ? "Registering..." : "Register Now!"}
            </Button>
            <NavLink>
              <Link to="/Login" className="font-weight-bold">Login</Link>
            </NavLink>
          </FormGroup>
        </div>
      </Form>
    </div>
  );
};

// Register.propTypes = {
//   registerUser: PropTypes.func.isRequired,
//   removeMessage: PropTypes.func.isRequired
// };

export default RegisterForm;
