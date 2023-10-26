import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import "./Signup1.css";
function Signup1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
        const result = await axiosClient.post("/auth/signup", {
            name,
            email,
            password,
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className='body'>
      <div class="card">
  <div class="card_header">
    Sign Up
  </div>
  <form class="form" onSubmit={handleSubmit}>
    <div class="input-wrapper">
      <label for="name">Name</label>
      <input type="text" name="name" id="name"  onChange={(e) => setName(e.target.value)}/>
    </div>
    <div class="input-wrapper">
      <label for="email">Username</label>
      <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div class="input-wrapper">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <button type="submit" onSubmit={handleSubmit}>Sign Up</button>
  </form>
  <p className="subheading">
                    Already have an account? <Link to="/login">Log In</Link>
                </p>
</div>
    </div>
  )
}

export default Signup1