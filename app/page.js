'use client'
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { register } from "../api/api.js";

export default function Home() {

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handelSubmit = async (e) => {
      e.preventDefault();
      await register(name, username, password);
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

      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Register
      </Button>
    </Form>
  );
}
