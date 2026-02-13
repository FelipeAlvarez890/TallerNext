'use client'
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { register } from "../api/api.js";
import { login } from "../api/api.js";

export default function Home() {

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    const [message, setMessage] = useState("");
    const [messageLogin, setMessageLogin] = useState("");


const handleSubmit = async (e) => {
  e.preventDefault();

  const data = await register(name, username, password);

  if (data.error) {
    setMessage(data.error);
  } else {
    setMessage("Usuario registrado correctamente ✅");
    window.location.href= "https://www.google.com";
  }
};


    const handleSubmitLogin = async (e) => {
      e.preventDefault();
      const data = await login(username, password);

    if (data.error) {
      setMessageLogin(data.error);
    } else {
       setMessageLogin("Usuario Logueado correctamente ✅");
       window.location.href= "https://www.google.com";
     }
    }

  return (
    <Form>
    <Form.Label htmlFor="name">Name</Form.Label>
      <Form.Control
        type="text"
        id="name"
        value={name}       
        onChange={(e) => setName(e.target.value)}
      />

      <Form.Label htmlFor="username">Username</Form.Label>
      <Form.Control
        type="text"
        id="username"       
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />

      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Control
        type="password"
        id="password"   
        value={password}     
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Register
      </Button>

      {message && <p>{message}</p>}

      {/* Login */}
      <Form.Label htmlFor="username">Username</Form.Label>
      <Form.Control
        type="text"
        id="username"       
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />

      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Control
        type="password"
        id="password"   
        value={password}     
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button variant="primary" type="submit" onClick={handleSubmitLogin}>
        Login
      </Button>

      {messageLogin && <p>{messageLogin}</p>}
    </Form>  
  );
}
