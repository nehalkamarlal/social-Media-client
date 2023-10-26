import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login1.css";
import 'boxicons';
import {axiosClient} from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStorageManager";

function Login1() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axiosClient.post('/auth/login', {
                email,
                password
            });

            setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
            navigate('/');

        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="mainn">
    <div class="wrapper">
    <span class="bg-animate"></span>
    <div class="form-box login">
      <h2>Login</h2>
       <form onSubmit={handleSubmit}>
         <div class="input-box">
           <input type="email" name="email" id="email"  onChange={(e) => setEmail(e.target.value)} required/>
           <label htmlFor="email">UserName</label>
           <box-icon type='solid' class='bxs-user' name='user'></box-icon>
         </div>
         <div class="input-box">
           <input type="password" id="password" name="password"  onChange={(e) => setPassword(e.target.value)} required/>
           <label htmlFor="password">Password</label>
           <box-icon type='solid' name='lock-alt'></box-icon>
         </div>
         <button type="submit" onSubmit={handleSubmit} class="btn">Login</button>
         <div class="logreg-link">
           <p>Don't have an Account ?<Link to="/signup">Sign Up</Link></p>
           
         </div>
       </form>
    </div>
    <div class="info-text login">
      <h2>WelCome Back</h2>
      <p> Social Media Application for Learning purpose-:<span>Nehal</span> </p>
    </div>
  </div>
  </div>
  )
}

export default Login1