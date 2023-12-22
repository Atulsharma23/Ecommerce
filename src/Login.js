import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/productlist");
    }
  }, [navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signin() {
    let result = await fetch("http://localhost:3001/users");
    result = await result.json();

    // Check if the user with the provided email and password exists
    const user = result.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("user-info", JSON.stringify(user));
      navigate("/productlist");
    } else {
      // Handle incorrect login credentials
      alert("Invalid login credentials");
    }
  }

  return (
    <>
      <Header />

      <div className="col-sm-6 offset-sm-3">
        <h1>User Log In</h1>

        <input
          placeholder="Email Address"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
        <br />
        <Button onClick={signin}>Log In</Button>
      </div>
    </>
  );
}

export default Login;
