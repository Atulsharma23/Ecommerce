import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";
import Header from "./Header";

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/addProduct");
    }
  }, [navigate]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signup() {
    let item = { name, email, password };
    let result = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });

    result = await result.json();
    console.log("result", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/addProduct");
  }

  return (
    <>
      <Header />

      <div className="col-sm-6 offset-sm-3">
        <h1>User Signup</h1>

        <input
          placeholder="User Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
        <br />
        <input
          placeholder="Email Address"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
        <br />
        <input
          placeholder="Password"
          type="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
        <br />
        <Button onClick={signup}>Signup</Button>
      </div>
    </>
  );
}

export default Register;
